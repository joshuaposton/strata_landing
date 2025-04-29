
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface TechItem {
  name: string;
  description: string;
  icon: string;
}

export function TechGrid() {
  const techItems: TechItem[] = [
    {
      name: "Qualtrics",
      description: "Connects surveys to CRM for closed-loop feedback",
      icon: "Q"
    },
    {
      name: "Stripe",
      description: "Syncs payments to dashboards for revenue insights",
      icon: "S"
    },
    {
      name: "Supabase",
      description: "Powers real-time data storage and retrieval",
      icon: "SB"
    },
    {
      name: "Airtable",
      description: "Transforms spreadsheets into actionable databases",
      icon: "AT"
    },
    {
      name: "Salesforce",
      description: "Integrates customer data across touchpoints",
      icon: "SF"
    },
    {
      name: "Zapier",
      description: "Automates workflows between applications",
      icon: "Z"
    },
    {
      name: "HubSpot",
      description: "Unifies marketing and sales data for better CX",
      icon: "HS"
    },
    {
      name: "Custom APIs",
      description: "Builds tailored connections for unique systems",
      icon: "API"
    },
    {
      name: "Tableau",
      description: "Visualizes customer data for actionable insights",
      icon: "TB"
    }
  ];

  return (
    <section id="integrations" className="py-20 relative">
      <div className="absolute inset-0 subtle-grid-bg"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="section-title text-center">
            <span className="gradient-text">Systems We Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mt-4">
            We build the bridges between your critical business systems, creating a unified experience ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {techItems.map((item, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="tech-grid-item flex flex-col items-center justify-center py-8 cursor-help">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 text-primary font-medium">
                      {item.icon}
                    </div>
                    <span className="text-foreground font-medium">{item.name}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </section>
  );
}
