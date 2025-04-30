
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { ArrowRight, CheckCircle, MessageSquare, FileText, Zap, Users, Briefcase } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    business: "",
    interests: [] as string[],
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleInterestToggle = (interest: string) => {
    setFormData(prev => {
      const newInterests = prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests: newInterests };
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", role: "", business: "", interests: [], message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 relative gradient-section-1">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">
            <span className="gradient-text">Schedule a Consultation</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 mb-8">
            Discover how our strategic approach to experience management can help your organization achieve measurable business outcomes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-border/30">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Customer Experience</h3>
              <p className="text-sm text-muted-foreground">
                Strategic programs that improve retention and satisfaction
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-border/30">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Employee Experience</h3>
              <p className="text-sm text-muted-foreground">
                Personalized journeys that boost engagement and retention
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-border/30">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Qualtrics Implementation</h3>
              <p className="text-sm text-muted-foreground">
                Maximize the ROI of your XM technology investment
              </p>
            </div>
          </div>
        </div>
        
        <Card className="max-w-2xl mx-auto border border-border bg-white/80">
          <CardContent className="p-8">
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-medium mb-2">Your Consultation Request Is Confirmed</h3>
                <p className="text-muted-foreground mb-4">Our team will contact you within 24 hours to schedule your consultation.</p>
                <div className="flex justify-center">
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                  >
                    Submit Another Request
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-left mb-6">
                  <h3 className="text-xl font-medium mb-2">Request Your Consultation</h3>
                  <p className="text-sm text-muted-foreground">Complete the form below and we'll contact you within 24 hours to schedule your consultation.</p>
                </div>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Business Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium mb-2">
                      Your Role
                    </label>
                    <Input
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full bg-white"
                      placeholder="e.g. CXO, HR Director, Operations Lead"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="business" className="block text-sm font-medium mb-2">
                      Organization
                    </label>
                    <Input
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      required
                      className="w-full bg-white"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Areas of Interest (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <div 
                      className={`cursor-pointer p-3 rounded-md border ${formData.interests.includes('cx') ? 'bg-primary/10 border-primary' : 'bg-white border-border'}`}
                      onClick={() => handleInterestToggle('cx')}
                    >
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        <span className="text-sm">Customer Experience</span>
                      </div>
                    </div>
                    <div 
                      className={`cursor-pointer p-3 rounded-md border ${formData.interests.includes('ex') ? 'bg-primary/10 border-primary' : 'bg-white border-border'}`}
                      onClick={() => handleInterestToggle('ex')}
                    >
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">Employee Experience</span>
                      </div>
                    </div>
                    <div 
                      className={`cursor-pointer p-3 rounded-md border ${formData.interests.includes('qualtrics') ? 'bg-primary/10 border-primary' : 'bg-white border-border'}`}
                      onClick={() => handleInterestToggle('qualtrics')}
                    >
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        <span className="text-sm">Qualtrics Implementation</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    What experience management challenges are you facing?
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[120px] bg-white"
                    placeholder="Tell us about your current challenges and goals..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Schedule Your Consultation'} {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
                
                <p className="text-xs text-center text-muted-foreground mt-4">
                  By submitting this form, you'll receive your consultation with no obligation. We respect your privacy and will never share your information.
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
