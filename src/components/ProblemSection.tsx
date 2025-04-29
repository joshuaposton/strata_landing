
import { Card, CardContent } from "@/components/ui/card";
import { Code, BarChart3, Workflow } from "lucide-react";

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
            StrataXM isn't just a consultancy — we build the connective tissue between your CRMs, surveys, and operational systems to create measurable CX infrastructure.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="grid-item">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-foreground tech-font">API Orchestration</h3>
            <p className="text-muted-foreground">
              We create seamless connections between your business systems, ensuring customer data flows exactly where it needs to go without manual intervention.
            </p>
          </div>
          
          <div className="grid-item">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
                <path d="M2 9h18v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9Z"></path>
                <path d="M2 14h18"></path>
                <path d="M2 19h18"></path>
                <path d="M4 3h16a2 2 0 0 1 2 2v4H2V5a2 2 0 0 1 2-2Z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-3 text-foreground tech-font">Data Architecture</h3>
            <p className="text-muted-foreground">
              Build robust data pipelines that transform scattered feedback into structured insights, making customer experience measurable and actionable.
            </p>
          </div>
          
          <div className="grid-item">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-foreground tech-font">Automated Workflows</h3>
            <p className="text-muted-foreground">
              Create closed-loop systems that trigger the right actions at the right time, turning passive feedback into proactive customer retention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
