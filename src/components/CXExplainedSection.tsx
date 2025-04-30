
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, TrendingUp, Users, BarChart3, Heart, ShieldCheck, ArrowRight, Database, Workflow, LineChart, Zap, RefreshCw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CXExplainedSection() {
  return (
    <section id="cx-explained" className="py-20 relative gradient-section-3">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="section-title text-center">
            <span className="gradient-text">How We Transform Your CX Systems</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mt-4">
            We build the connective tissue between your existing tools to create a unified customer experience ecosystem.
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
                We integrate your CRM, survey tools, and analytics platforms to create a unified data ecosystem that eliminates silos.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Salesforce</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Qualtrics</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Tableau</span>
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
                We build automated workflows that trigger actions across systems based on customer behavior, feedback, and operational events.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Feedback Loops</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Alert Systems</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Escalations</span>
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
                We create intuitive dashboards that surface actionable insights from your customer data, enabling faster, more informed decisions.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Real-time Metrics</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Trend Analysis</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Predictive Models</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mb-16">
          <Button asChild size="lg">
            <Link href="#contact">Schedule a System Assessment <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
        
        <div className="max-w-3xl mx-auto mb-8">
          <h3 className="text-2xl font-medium mb-4 text-center tech-font">Why CX Systems Matter</h3>
          <p className="text-muted-foreground text-center mb-8">
            In today's competitive landscape, connected CX systems create the difference between market leaders and followers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="grid-item">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-foreground tech-font">Business Impact</h3>
            <p className="text-muted-foreground">
              Companies with connected CX systems outperform competitors by nearly 80% in customer retention, resulting in 5.7x more revenue and 60% higher profitability.
            </p>
          </div>
          
          <div className="grid-item">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-foreground tech-font">Customer Loyalty</h3>
            <p className="text-muted-foreground">
              86% of buyers will pay more for a better experience. Connected systems ensure consistent experiences that build loyalty and drive advocacy.
            </p>
          </div>
          
          <div className="grid-item">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-foreground tech-font">Operational Efficiency</h3>
            <p className="text-muted-foreground">
              Integrated CX systems reduce response times by 74% and operational costs by 30% while increasing team productivity and customer satisfaction.
            </p>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border/30">
          <details className="max-w-4xl mx-auto">
            <summary className="text-xl font-medium mb-4 cursor-pointer tech-font">Learn More About Customer Experience</summary>
            <Card className="border border-border/50 bg-secondary/50 mb-12">
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Customer Experience (CX) encompasses every interaction between a customer and your business throughout the entire relationship. 
                  From discovering your brand to purchasing, using your product or service, and seeking support—each touchpoint shapes their perception.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Unlike traditional customer service that focuses on specific support interactions, CX is holistic—it's about creating a cohesive journey 
                  that meets customer expectations at every stage. When done right, it builds loyalty, reduces churn, and drives sustainable growth.
                </p>
                
                <div className="border-t border-border/40 pt-6 mt-6">
                  <h3 className="text-xl font-medium mb-4 tech-font">Why CX Matters to Your Business</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    In today's competitive landscape, products and services are increasingly similar. What truly differentiates businesses is the experience they provide. 
                    Companies that prioritize CX gain a significant competitive advantage—they don't just sell products; they create meaningful relationships that drive 
                    long-term value.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-background/30 p-5 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <BarChart3 className="text-primary h-5 w-5" />
                        <h4 className="font-medium">Financial Performance</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Companies that excel in customer experience see 1.6x higher customer satisfaction rates, 1.9x higher average order value, and 2.4x higher customer lifetime value.
                      </p>
                    </div>
                    
                    <div className="bg-background/30 p-5 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <ShieldCheck className="text-primary h-5 w-5" />
                        <h4 className="font-medium">Competitive Resilience</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        When customers have exceptional experiences, they become less price-sensitive and more loyal, creating a buffer against competitors and market fluctuations.
                      </p>
                    </div>
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
