
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Code, Database, Webhook } from "lucide-react";
import { useState } from "react";

interface TechItem {
  name: string;
  description: string;
  icon: string;
}

export function TechGrid() {
  const [showTechDetails, setShowTechDetails] = useState(false);
  
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
        
        <div className="mt-12 flex justify-center">
          <Button 
            variant="outline" 
            onClick={() => setShowTechDetails(!showTechDetails)}
            className="flex items-center gap-2"
          >
            {showTechDetails ? (
              <>
                <span>Hide Technical Details</span>
                <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                <span>For Technical Teams</span>
                <ChevronDown className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
        
        {showTechDetails && (
          <div className="mt-8 bg-secondary/70 border border-border/50 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-medium mb-4">Integration Capabilities</h3>
            <p className="text-muted-foreground mb-6">
              For CTOs, systems administrators, and product operations teams, StrataXM offers robust integration capabilities that connect your existing tech stack.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background/30 p-5 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Code className="text-primary h-5 w-5" />
                  <h4 className="font-medium">API Integrations</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  We build custom API connectors for Qualtrics, Typeform, Supabase, Airtable, and major CRMs. Our RESTful and GraphQL integrations support both polling and webhook-based data synchronization.
                </p>
              </div>
              
              <div className="bg-background/30 p-5 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Webhook className="text-primary h-5 w-5" />
                  <h4 className="font-medium">Workflow Automation</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Our event-driven architecture enables real-time data flows between systems. We implement webhook listeners, scheduled jobs, and custom triggers to automate complex workflows across your tech ecosystem.
                </p>
              </div>
              
              <div className="bg-background/30 p-5 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="text-primary h-5 w-5" />
                  <h4 className="font-medium">Data Synchronization</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  We implement bidirectional data sync between your systems with conflict resolution strategies. Our ETL pipelines transform data formats between systems while maintaining referential integrity.
                </p>
              </div>
            </div>
            
            <div className="mt-6 text-sm text-muted-foreground">
              <p>
                Our integration layer is built on modern, serverless architecture that scales with your needs. We prioritize security with OAuth 2.0 authentication, API key rotation, and audit logging for all data transfers.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
