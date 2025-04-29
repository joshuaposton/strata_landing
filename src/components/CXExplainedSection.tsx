import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, TrendingUp, Users, BarChart3, Heart, ShieldCheck } from "lucide-react";

export function CXExplainedSection() {
  return (
    <section id='cx-explained' className='py-20 relative gradient-section-3'>
      {/* Remove the subtle grid background div */}
      
      <div className='container relative z-10'>
        <div className='max-w-3xl mx-auto mb-16'>
          <h2 className='section-title text-center'>
            <span className='gradient-text'>Understanding Customer Experience</span>
          </h2>
          <p className='text-lg text-muted-foreground text-center mt-4'>
            Customer Experience (CX) is more than just satisfaction—it's a strategic approach that drives business growth and customer loyalty.
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto border border-border/50 bg-secondary/50 mb-12">
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
              
              <div className='grid md:grid-cols-2 gap-6 mb-6'>
                <div className='bg-background/30 p-5 rounded-lg'>
                  <div className='flex items-center gap-3 mb-3'>
                    <BarChart3 className='text-primary h-5 w-5' />
                    <h4 className='font-medium'>Financial Performance</h4>
                  </div>
                  <p className='text-sm text-muted-foreground'>
                    Companies that excel in customer experience see 1.6x higher customer satisfaction rates, 1.9x higher average order value, and 2.4x higher customer lifetime value. These metrics directly translate to improved business performance and growth.
                  </p>
                </div>
                
                <div className="bg-background/30 p-5 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <ShieldCheck className="text-primary h-5 w-5" />
                    <h4 className="font-medium">Competitive Resilience</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    When customers have exceptional experiences, they become less price-sensitive and more loyal. This creates a buffer against competitors and market fluctuations, allowing businesses to maintain premium pricing and weather economic downturns.
                  </p>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-4 tech-font">How Customers Are Driven By Experience</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Today's customers don't just buy products or services—they invest in experiences. Research shows that 73% of consumers point to experience as an important factor in purchasing decisions, and 86% are willing to pay more for a better experience. This fundamental shift in consumer behavior means:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-background/30 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="text-primary h-4 w-4" />
                    <h4 className="font-medium text-sm">Emotional Connection</h4>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Customers make decisions based on how brands make them feel. Positive emotional connections lead to 306% higher lifetime value and 71% higher recommendation rates.
                  </p>
                </div>
                
                <div className="bg-background/30 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="text-primary h-4 w-4" />
                    <h4 className="font-medium text-sm">Word-of-Mouth Impact</h4>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    92% of consumers trust recommendations from friends and family over advertising. One exceptional experience can create multiple new customers through organic advocacy.
                  </p>
                </div>
                
                <div className="bg-background/30 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="text-primary h-4 w-4" />
                    <h4 className="font-medium text-sm">Expectation Escalation</h4>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Customer expectations continuously rise as they experience excellence elsewhere. Today's baseline expectations are yesterday's exceptional experiences.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="grid-item">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-foreground tech-font">Business Impact</h3>
            <p className="text-muted-foreground">
              Companies that lead in CX outperform competitors by nearly 80% in customer retention, resulting in 5.7x more revenue and 60% higher profitability. CX is not a cost center—it's a growth engine.
            </p>
          </div>
          
          <div className="grid-item">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-foreground tech-font">Customer Loyalty</h3>
            <p className="text-muted-foreground">
              86% of buyers will pay more for a better experience. When customers feel valued across their journey, they become advocates who drive referrals and require less marketing investment to retain.
            </p>
          </div>
          
          <div className="grid-item">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-foreground tech-font">The CX Challenge</h3>
            <p className="text-muted-foreground">
              Most businesses collect customer data but struggle to connect systems and act on insights. The gap between feedback and action is where opportunities are lost and competitive advantage is surrendered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}