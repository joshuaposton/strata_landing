
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Zap, BarChart3 } from "lucide-react";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 subtle-grid-bg"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="section-title text-center">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mt-4">
            We build systems that capture, route, and analyze customer feedback so you can make better business decisions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="grid-item">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-foreground">Customer Feedback Collection</h3>
            <p className="text-muted-foreground">
              Gather meaningful insights from your customers through surveys, reviews, and forms that people actually want to complete.
            </p>
          </div>
          
          <div className="grid-item">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-foreground">Smart Feedback Routing</h3>
            <p className="text-muted-foreground">
              Automatically send customer feedback to the right team member, ensuring quick responses and no missed opportunities.
            </p>
          </div>
          
          <div className="grid-item">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-foreground">Real-time CX Dashboards</h3>
            <p className="text-muted-foreground">
              Track customer experience trends and identify churn risks before they become problems with easy-to-understand visual reports.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
