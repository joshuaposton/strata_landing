
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  whatItIs: string;
  valueToBusinessPoints: string[];
  moneyInPocket: string;
  accentColor?: string;
}

export function ServiceCard({ 
  title, 
  icon: Icon, 
  whatItIs, 
  valueToBusinessPoints, 
  moneyInPocket,
  accentColor = "primary"
}: ServiceCardProps) {
  const [activeTab, setActiveTab] = useState<"what" | "value" | "money">("what");
  
  return (
    <Card className="overflow-hidden border border-border/50 h-full">
      <div className={`bg-${accentColor}/10 p-4 flex items-center gap-3`}>
        <div className={`w-10 h-10 rounded-full bg-${accentColor}/20 flex items-center justify-center`}>
          <Icon className={`w-5 h-5 text-${accentColor}`} />
        </div>
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
      
      <div className="grid grid-cols-3 border-b border-border/20">
        {[
          { id: "what", label: "What it is" },
          { id: "value", label: "Value to Business" },
          { id: "money", label: "Money in Pocket" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as "what" | "value" | "money")}
            className={`py-3 px-2 text-sm font-medium relative transition-colors ${
              activeTab === tab.id 
                ? `text-${accentColor} border-b-2 border-${accentColor}` 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId={`tab-indicator-${title}`}
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-${accentColor}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </button>
        ))}
      </div>
      
      <CardContent className="p-5">
        {activeTab === "what" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="min-h-[200px]"
          >
            <p className="text-muted-foreground">{whatItIs}</p>
          </motion.div>
        )}
        
        {activeTab === "value" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-3 min-h-[200px]"
          >
            {valueToBusinessPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className={`w-6 h-6 rounded-full bg-${accentColor}/20 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                  <span className={`text-xs font-bold text-${accentColor}`}>{index + 1}</span>
                </div>
                <p className="text-sm text-muted-foreground">{point}</p>
              </div>
            ))}
          </motion.div>
        )}
        
        {activeTab === "money" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="min-h-[200px]"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-border/20">
              <div className={`w-12 h-12 rounded-full bg-${accentColor}/20 flex items-center justify-center mx-auto mb-4`}>
                <svg className={`w-6 h-6 text-${accentColor}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/>
                  <path d="M12 18V6"/>
                </svg>
              </div>
              <p className="text-center text-muted-foreground">{moneyInPocket}</p>
            </div>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}
