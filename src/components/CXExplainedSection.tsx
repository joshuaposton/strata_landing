
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, TrendingUp, Users } from "lucide-react";

export function CXExplainedSection() {
  return (
    <section id="cx-explained" className="py-20 relative">
      <div className="absolute inset-0 subtle-grid-bg"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="section-title text-center">
            <span className="gradient-text">Understanding Customer Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mt-4">
            Customer Experience (CX) is more than just customer service—it's the entire journey a customer takes with your business.
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto border border-border/50 bg-secondary/50 mb-12">
          <CardContent className="p-8">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Customer Experience (CX) encompasses every interaction between a customer and your business throughout the entire relationship. 
              From discovering your brand to purchasing, using your product or service, and seeking support—each touchpoint shapes their perception.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Unlike traditional customer service that focuses on specific support interactions, CX is holistic—it's about creating a cohesive journey 
              that meets customer expectations at every stage. When done right, it builds loyalty, reduces churn, and drives sustainable growth.
            </p>
          </CardContent>
        </Card>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="grid-item">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-foreground tech-font">Business Impact</h3>
            <p className="text-muted-foreground">
              Companies that lead in CX outperform competitors by nearly 80% in customer retention, resulting in 5.7x more revenue and 60% higher profitability.
            </p>
          </div>
          
          <div className="grid-item">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-foreground tech-font">Customer Loyalty</h3>
            <p className="text-muted-foreground">
              86% of buyers will pay more for a better experience. When customers feel valued across their journey, they become advocates who drive referrals.
            </p>
          </div>
          
          <div className="grid-item">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-foreground tech-font">The CX Challenge</h3>
            <p className="text-muted-foreground">
              Most businesses collect customer data but struggle to connect systems and act on insights. The gap between feedback and action is where opportunities are lost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
