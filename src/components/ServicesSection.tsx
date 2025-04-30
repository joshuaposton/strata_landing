
import { Card, CardContent } from "@/components/ui/card";
import { Users, LineChart, Database, Workflow, MessageSquare, BarChart3, Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 relative gradient-section-2">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="section-title text-center">
            <span className="gradient-text">Our Core Services</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mt-4">
            StrataXM is a full-service experience management consulting firm that designs, implements, and optimizes programs that deliver measurable business outcomes.
          </p>
        </div>
        
        {/* Customer Experience Management */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Customer Experience Management</span>
              </div>
              <h3 className="text-2xl font-medium mb-4 tech-font">Transform Customer Journeys Into Business Growth</h3>
              <p className="text-muted-foreground mb-6">
                We help organizations collect, interpret, and act on customer feedback to improve retention and satisfaction. Our strategic approach goes beyond simple surveys to create comprehensive experience programs that drive loyalty and revenue.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-border/20">
                  <h4 className="font-medium mb-2">Voice of Customer Programs</h4>
                  <p className="text-sm text-muted-foreground">Strategic feedback collection across all touchpoints</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-border/20">
                  <h4 className="font-medium mb-2">Journey Mapping</h4>
                  <p className="text-sm text-muted-foreground">Identify critical moments that impact satisfaction</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-border/20">
                  <h4 className="font-medium mb-2">Closed-Loop Systems</h4>
                  <p className="text-sm text-muted-foreground">Automated response workflows for customer recovery</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-border/20">
                  <h4 className="font-medium mb-2">CX Metrics & ROI</h4>
                  <p className="text-sm text-muted-foreground">Connect experience data to business outcomes</p>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden border border-border/50 shadow-lg">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">32%</span>
                </div>
                <h4 className="text-center font-medium mb-2">Higher Customer Retention</h4>
                <p className="text-center text-sm text-muted-foreground mb-6">
                  Organizations with strategic CX programs see significantly higher customer loyalty and lifetime value.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Customer Satisfaction</span>
                      <span className="text-sm font-medium text-primary">+47%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "47%" }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Revenue Growth</span>
                      <span className="text-sm font-medium text-primary">+28%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "28%" }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Customer Lifetime Value</span>
                      <span className="text-sm font-medium text-primary">+53%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "53%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Employee Experience Management */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative rounded-xl overflow-hidden border border-border/50 shadow-lg">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">41%</span>
                </div>
                <h4 className="text-center font-medium mb-2">Reduced Employee Turnover</h4>
                <p className="text-center text-sm text-muted-foreground mb-6">
                  Strategic employee experience programs significantly improve retention and productivity.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Employee Engagement</span>
                      <span className="text-sm font-medium text-primary">+38%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "38%" }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Productivity</span>
                      <span className="text-sm font-medium text-primary">+24%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "24%" }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Talent Acquisition</span>
                      <span className="text-sm font-medium text-primary">+35%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "35%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Employee Experience Management</span>
              </div>
              <h3 className="text-2xl font-medium mb-4 tech-font">Design Personalized Employee Journeys</h3>
              <p className="text-muted-foreground mb-6">
                We help organizations create measurable employee experiences that improve morale, productivity, and retention. Our approach connects employee feedback to business outcomes through strategic program design and implementation.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-border/20">
                  <h4 className="font-medium mb-2">Engagement Programs</h4>
                  <p className="text-sm text-muted-foreground">Strategic measurement and action planning</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-border/20">
                  <h4 className="font-medium mb-2">Lifecycle Mapping</h4>
                  <p className="text-sm text-muted-foreground">From recruitment to exit and beyond</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-border/20">
                  <h4 className="font-medium mb-2">Manager Enablement</h4>
                  <p className="text-sm text-muted-foreground">Tools and insights for better leadership</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-border/20">
                  <h4 className="font-medium mb-2">EX-CX Connection</h4>
                  <p className="text-sm text-muted-foreground">Link employee and customer experiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Qualtrics Implementation */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Qualtrics Implementation</span>
              </div>
              <h3 className="text-2xl font-medium mb-4 tech-font">Maximize Your Qualtrics Investment</h3>
              <p className="text-muted-foreground mb-6">
                We help organizations integrate and customize Qualtrics to match their specific business needs. Our technical expertise ensures you get the most from your XM platform through advanced setup, dashboarding, and workflow automation.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-border/20">
                  <h4 className="font-medium mb-2">Platform Configuration</h4>
                  <p className="text-sm text-muted-foreground">Custom setup aligned to your business goals</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-border/20">
                  <h4 className="font-medium mb-2">Integration Services</h4>
                  <p className="text-sm text-muted-foreground">Connect Qualtrics with your existing systems</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-border/20">
                  <h4 className="font-medium mb-2">Dashboard Design</h4>
                  <p className="text-sm text-muted-foreground">Actionable visualizations for all stakeholders</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-border/20">
                  <h4 className="font-medium mb-2">Workflow Automation</h4>
                  <p className="text-sm text-muted-foreground">Streamline actions and follow-up processes</p>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden border border-border/50 shadow-lg">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3.5x</span>
                </div>
                <h4 className="text-center font-medium mb-2">ROI on Qualtrics Investment</h4>
                <p className="text-center text-sm text-muted-foreground mb-6">
                  Strategic implementation maximizes the value of your XM platform investment.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Implementation Speed</span>
                      <span className="text-sm font-medium text-primary">+65%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">User Adoption</span>
                      <span className="text-sm font-medium text-primary">+82%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "82%" }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Data Utilization</span>
                      <span className="text-sm font-medium text-primary">+74%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "74%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="#contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
