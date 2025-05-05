
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

// Log the API key presence (not the actual key) for debugging
const apiKeyPresent = !!process.env.RESEND_API_KEY;
console.log("Resend API Key present:", apiKeyPresent);

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Log request method for debugging
  console.log("Contact API called with method:", req.method);
  
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Extract form data
    const { name, email, role, business, interests, message } = req.body;
    
    // Log form data for debugging (excluding sensitive info)
    console.log("Form submission received from:", name, email);
    
    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    // Handle interests properly (could be array, string, or undefined)
    const interestsFormatted = Array.isArray(interests) 
      ? interests.join(", ") 
      : interests || "None specified";

    // Send email
    const emailResult = await resend.emails.send({
      from: "StrataXM Website <josh@strataxm.com>",
      to: "josh@strataxm.com",
      subject: `New Consultation Request from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Role:</strong> ${role || "Not specified"}</p>
        <p><strong>Business:</strong> ${business || "Not specified"}</p>
        <p><strong>Interests:</strong> ${interestsFormatted}</p>
        <p><strong>Message:</strong><br>${message || "No message provided"}</p>
      `,
    });

    // Log success
    console.log("Email sent successfully:", emailResult.id);
    res.status(200).json({ success: true, id: emailResult.id });
  } catch (err) {
    // Enhanced error logging
    console.error("Email send failed:", err);
    
    // Check if it's a Resend API error
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    const errorStack = err instanceof Error ? err.stack : "";
    
    console.error("Error details:", errorMessage);
    console.error("Error stack:", errorStack);
    
    res.status(500).json({ 
      error: "Failed to send email", 
      details: errorMessage,
      apiKeyConfigured: apiKeyPresent
    });
  }
}
