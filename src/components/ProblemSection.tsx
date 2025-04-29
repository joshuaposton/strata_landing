
import { Card, CardContent } from "@/components/ui/card";

export function ProblemSection() {
  return (
    <section id="advantage" className="py-20 relative">
      <div className="absolute inset-0 subtle-grid-bg"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="section-title text-center">
            <span className="gradient-text">Our Advantage</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mt-4">
            StrataXM isn't just a consultancy — we build the connective tissue between your CRMs, surveys, POS systems, and dashboards.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="grid-item">
            <h3 className="text-xl font-medium mb-3 text-foreground">API Integrations</h3>
            <p className="text-muted-foreground">
              We create seamless connections between your business systems, ensuring data flows exactly where it needs to go.
            </p>
          </div>
          
          <div className="grid-item">
            <h3 className="text-xl font-medium mb-3 text-foreground">Analytics Infrastructure</h3>
            <p className="text-muted-foreground">
              Build robust data pipelines that transform raw feedback into actionable business intelligence.
            </p>
          </div>
          
          <div className="grid-item">
            <h3 className="text-xl font-medium mb-3 text-foreground">Qualtrics/CRM Automation</h3>
            <p className="text-muted-foreground">
              Automate the flow between customer feedback and your CRM, creating closed-loop systems that drive action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
