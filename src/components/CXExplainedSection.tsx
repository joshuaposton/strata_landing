
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, ArrowRight, Database, Workflow, LineChart, Zap, ShieldCheck, BarChart3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CXExplainedSection() {
  return (
    <section id="cx-explained" className="py-20 relative gradient-section-3">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="section-title text-center">
            <span className="gradient-text">How We Connect Your Customer Systems</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mt-4">
            We build the connective tissue between your existing tools to create a unified customer experience that drives real business results.
          </p>
        </div>
        
        <div className="mb-16">
          <div className="relative rounded-xl overflow-hidden border border-border/50 shadow-lg max-w-4xl mx-auto mb-12">
            <Image 
              src="/images/integration-diagram.svg" 
              alt="StrataXM Integration Diagram" 
              width={800} 
              height={400}
              className="w-full"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border border-border/50 bg-secondary/30">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-foreground tech-font">Connect</h3>
              <p className="text-muted-foreground mb-4">
                We link your CRM, survey tools, and service systems to create a complete view of each customer across all locations.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Salesforce</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">DealerSocket</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">ServiceTitan</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">+20 more</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-border/50 bg-secondary/30">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Workflow className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-foreground tech-font">Automate</h3>
              <p className="text-muted-foreground mb-4">
                We build smart workflows that trigger follow-ups, alerts, and recovery actions based on customer behavior and feedback.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Follow-ups</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Alerts</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Recovery</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-border/50 bg-secondary/30">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <LineChart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-foreground tech-font">Visualize</h3>
              <p className="text-muted-foreground mb-4">
                We create simple dashboards that show you exactly what's happening with your customers and what actions to take next.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Location Metrics</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Trends</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Predictions</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-border/20">
          <h3 className="text-2xl font-medium mb-6 text-center tech-font">Real Results for Service Businesses</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">32%</span>
              </div>
              <h4 className="font-medium mb-2">More Service Appointments</h4>
              <p className="text-sm text-muted-foreground">
                Multi-location auto dealership group
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">47%</span>
              </div>
              <h4 className="font-medium mb-2">Fewer Customer Complaints</h4>
              <p className="text-sm text-muted-foreground">
                Regional home service provider
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4.7★</span>
              </div>
              <h4 className="font-medium mb-2">Average Review Rating</h4>
              <p className="text-sm text-muted-foreground">
                From 3.2★ to 4.7★ in 90 days
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-16">
          <Button asChild size="lg">
            <Link href="#contact">Get Your Free CX System Audit <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
        
        <div className="max-w-3xl mx-auto mb-8">
          <h3 className="text-2xl font-medium mb-4 text-center tech-font">Why Connected CX Systems Matter</h3>
          <p className="text-muted-foreground text-center mb-8">
            In today's competitive landscape, connected customer systems create the difference between growing businesses and those that get left behind.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="grid-item">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-foreground tech-font">Business Growth</h3>
            <p className="text-muted-foreground">
              Service businesses with connected CX systems grow 5.7x faster and are 60% more profitable than competitors with fragmented systems.
            </p>
          </div>
          
          <div className="grid-item">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-foreground tech-font">Customer Loyalty</h3>
            <p className="text-muted-foreground">
              86% of customers will pay more for better service. Connected systems ensure consistent experiences that keep customers coming back.
            </p>
          </div>
          
          <div className="grid-item">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-foreground tech-font">Operational Efficiency</h3>
            <p className="text-muted-foreground">
              Integrated systems reduce response times by 74% and cut operational costs by 30% while your team focuses on serving customers.
            </p>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border/30">
          <details className="max-w-4xl mx-auto">
            <summary className="text-xl font-medium mb-4 cursor-pointer tech-font">Learn More About Customer Experience</summary>
            <Card className="border border-border/50 bg-secondary/50 mb-12">
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Customer Experience (CX) is every interaction between a customer and your business. For service businesses with multiple locations, 
                  delivering a consistent experience is especially challenging but critical to success.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-background/30 p-5 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <BarChart3 className="text-primary h-5 w-5" />
                      <h4 className="font-medium">Financial Impact</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Service businesses that excel in customer experience see 1.6x higher customer satisfaction, 1.9x higher average ticket value, and 2.4x higher customer lifetime value.
                    </p>
                  </div>
                  
                  <div className="bg-background/30 p-5 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <ShieldCheck className="text-primary h-5 w-5" />
                      <h4 className="font-medium">Competitive Advantage</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      When customers have great experiences, they become less price-sensitive and more loyal, creating a buffer against competitors and market fluctuations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </details>
        </div>
      </div>
    </section>
  );
}
