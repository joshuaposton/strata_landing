import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", role: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id='contact' className='py-20 relative gradient-section-1'>
      {/* Remove the subtle grid background div */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-30'></div>
      
      <div className='container relative z-10'>
        <div className='max-w-3xl mx-auto text-center mb-12'>
          <h2 className='section-title'>
            <span className='gradient-text'>Start the Conversation</span>
          </h2>
          <p className='text-lg text-muted-foreground mt-4'>
            Ready to transform your customer experience infrastructure? Let's discuss how we can help your systems work together.
          </p>
        </div>
        
        <Card className='max-w-2xl mx-auto border border-border bg-white/80'>
          <CardContent className='p-8'>
            {isSubmitted ? (
              <div className='text-center py-8'>
                <h3 className='text-xl font-medium mb-2'>Message Received</h3>
                <p className='text-muted-foreground'>We'll be in touch shortly to discuss your project.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label htmlFor='name' className='block text-sm font-medium mb-2'>
                    Name
                  </label>
                  <Input
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full bg-white'
                  />
                </div>
                
                <div>
                  <label htmlFor='email' className='block text-sm font-medium mb-2'>
                    Email
                  </label>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full bg-white'
                  />
                </div>
                
                <div>
                  <label htmlFor='role' className='block text-sm font-medium mb-2'>
                    Role
                  </label>
                  <Input
                    id='role'
                    name='role'
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className='w-full bg-white'
                    placeholder='e.g. CTO, Head of Operations, Founder'
                  />
                </div>
                
                <div>
                  <label htmlFor='message' className='block text-sm font-medium mb-2'>
                    Message
                  </label>
                  <Textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className='w-full min-h-[120px] bg-white'
                  />
                </div>
                
                <Button 
                  type='submit' 
                  className='w-full'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Start the Conversation'}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}