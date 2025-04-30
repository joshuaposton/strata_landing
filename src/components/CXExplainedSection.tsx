
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, ArrowRight, Database, Workflow, LineChart, Zap, ShieldCheck, BarChart3, Lightbulb, Layers, PieChart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CXExplainedSection() {
  return (
    <section id="cx-explained" className="py-20 relative gradient-section-3">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="section-title text-center">
            <span className="gradient-text">Our Strategic Approach to XM</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mt-4">
            We design and implement comprehensive experience management programs that connect strategy with technology to deliver measurable business outcomes.
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
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-foreground tech-font">Strategy</h3>
              <p className="text-muted-foreground mb-4">
                We develop comprehensive XM strategies aligned with your business goals, identifying key metrics and designing programs that drive meaningful outcomes.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Program Design</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Journey Mapping</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">ROI Planning</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-border/50 bg-secondary/30">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-foreground tech-font">Implementation</h3>
              <p className="text-muted-foreground mb-4">
                We build and integrate the technical components of your XM program, connecting systems and automating workflows to create seamless experiences.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Platform Setup</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Integrations</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Automation</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-border/50 bg-secondary/30">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <PieChart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-foreground tech-font">Optimization</h3>
              <p className="text-muted-foreground mb-4">
                We continuously analyze program performance, refine your approach, and help you extract actionable insights that drive ongoing business improvement.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Analytics</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Reporting</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Continuous Improvement</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-border/20">
          <h3 className="text-2xl font-medium mb-6 text-center tech-font">Real Results Across Industries</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">32%</span>
              </div>
              <h4 className="font-medium mb-2">Higher Customer Retention</h4>
              <p className="text-sm text-muted-foreground">
                Financial services firm
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">41%</span>
              </div>
              <h4 className="font-medium mb-2">Reduced Employee Turnover</h4>
              <p className="text-sm text-muted-foreground">
                Healthcare organization
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3.5x</span>
              </div>
              <h4 className="font-medium mb-2">ROI on XM Investment</h4>
              <p className="text-sm text-muted-foreground">
                Retail chain with 200+ locations
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-16">
          <Button asChild size="lg">
            <Link href="#contact">Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
        
        <div className="max-w-3xl mx-auto mb-8">
          <h3 className="text-2xl font-medium mb-4 text-center tech-font">Why Strategic XM Matters</h3>
          <p className="text-muted-foreground text-center mb-8">
            In today's competitive landscape, organizations that strategically manage experiences outperform those with fragmented or tactical approaches.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="grid-item">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-foreground tech-font">Business Growth</h3>
            <p className="text-muted-foreground">
              Organizations with mature XM programs grow 5.7x faster and are 60% more profitable than competitors with fragmented approaches.
            </p>
          </div>
          
          <div className="grid-item">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-foreground tech-font">Stakeholder Loyalty</h3>
            <p className="text-muted-foreground">
              Strategic XM programs build stronger connections with customers and employees, increasing loyalty and reducing costly turnover.
            </p>
          </div>
          
          <div className="grid-item">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-foreground tech-font">Operational Excellence</h3>
            <p className="text-muted-foreground">
              Integrated XM systems improve operational efficiency by 30% while enabling your team to focus on strategic initiatives rather than manual processes.
            </p>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border/30">
          <details className="max-w-4xl mx-auto">
            <summary className="text-xl font-medium mb-4 cursor-pointer tech-font">Learn More About Experience Management</summary>
            <Card className="border border-border/50 bg-secondary/50 mb-12">
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Experience Management (XM) combines customer experience (CX) and employee experience (EX) into a comprehensive approach that helps organizations 
                  continuously learn, act, and improve based on stakeholder feedback and operational data.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-background/30 p-5 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <BarChart3 className="text-primary h-5 w-5" />
                      <h4 className="font-medium">Financial Impact</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Organizations with mature XM programs see 1.6x higher customer satisfaction, 1.9x higher employee engagement, and 2.4x higher revenue growth.
                    </p>
                  </div>
                  
                  <div className="bg-background/30 p-5 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <ShieldCheck className="text-primary h-5 w-5" />
                      <h4 className="font-medium">Competitive Advantage</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Strategic XM creates sustainable competitive advantages through deeper stakeholder insights and more agile response to changing market conditions.
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
