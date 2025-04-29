
import { Card, CardContent } from "@/components/ui/card";

export function CaseStudy() {
  return (
    <section id="case-study" className="py-20 relative gradient-section-4">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="section-title text-center">
            <span className="gradient-text">Recent Success</span>
          </h2>
        </div>
        
        <Card className="max-w-4xl mx-auto border border-border bg-white/80">
          <CardContent className="p-8">
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-2xl font-medium mb-2">Truck Upfitting Company CX Integration</h3>
                <p className="text-sm text-muted-foreground">Seamless Implementation</p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                I was hired by a local truck upfitting company to integrate a customer experience feedback loop into their existing system. 
                The goal was to capture customer sentiment and use it to improve their services and online presence.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                <div className="bg-secondary p-4 rounded-lg">
                  <h4 className="text-primary font-medium mb-2">Challenge</h4>
                  <p className="text-sm text-muted-foreground">
                    The company had no systematic way to collect, analyze, or respond to customer feedback across their service touchpoints.
                  </p>
                </div>
                
                <div className="bg-secondary p-4 rounded-lg">
                  <h4 className="text-primary font-medium mb-2">Solution</h4>
                  <p className="text-sm text-muted-foreground">
                    Implemented an integrated CX feedback system that connected with their existing operational tools and automated review requests.
                  </p>
                </div>
                
                <div className="bg-secondary p-4 rounded-lg">
                  <h4 className="text-primary font-medium mb-2">Results</h4>
                  <p className="text-sm text-muted-foreground">
                    Customer satisfaction scores increased, Google reviews improved, search engine rankings climbed, and customer acquisition grew.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
