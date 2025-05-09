
import { useState } from "react";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Layers, 
  Briefcase, 
  BarChart3, 
  Workflow, 
  Code, 
  Shield, 
  GraduationCap, 
  Sparkles 
} from "lucide-react";
import { motion } from "framer-motion";

// Service data
const services = [
  {
    id: 1,
    title: "End-to-End Experience Program Design",
    icon: Layers,
    whatItIs: "A comprehensive approach to designing customer and employee experience programs that align with business goals and deliver measurable outcomes.",
    valueToBusinessPoints: [
      "Customer journey mapping helps identify drop-off points — fixing them increases conversion rates.",
      "Employee journey mapping helps reduce turnover, which saves on rehiring and training costs.",
      "Strategic survey design yields actionable feedback, not noise — enabling targeted fixes that retain more customers.",
      "Aligning with business outcomes ensures you're not \\"collecting feedback for fun\\" — you're solving problems tied to revenue (e.g., poor service, lost sales)."
    ],
    moneyInPocket: "Higher customer retention, better online reviews (leading to more customers), and fewer costly employee exits."
  },
  {
    id: 2,
    title: "Qualtrics Implementation & Configuration",
    icon: Briefcase,
    whatItIs: "Expert setup and configuration of Qualtrics XM platform tailored to your specific business needs and integrated with your existing systems.",
    valueToBusinessPoints: [
      "Dashboards + flows = faster insights — decisions made faster save opportunities from slipping.",
      "Automated workflows mean fewer manual tasks — freeing up staff to serve more customers.",
      "APIs to external systems avoid redundant data entry — fewer mistakes, more streamlined ops.",
      "Clean data migration brings order to chaos — good data = good decisions."
    ],
    moneyInPocket: "Better insights → smarter marketing, quicker pivots → increased revenue and reduced waste."
  },
  {
    id: 3,
    title: "Real-Time Dashboard & Insight Development",
    icon: BarChart3,
    whatItIs: "Custom-built dashboards and analytics that transform raw data into actionable insights for executives and frontline teams.",
    valueToBusinessPoints: [
      "Exec-level dashboards enable faster and more confident decisions.",
      "Trend spotting prevents small issues (like slow service or negative reviews) from becoming major losses.",
      "AI tagging finds what's hidden in open-text — unlocking why customers leave.",
      "Role-based analytics empower frontline teams to act now — not wait for corporate."
    ],
    moneyInPocket: "Catching problems early avoids revenue loss, and quick action improves sales and service consistency."
  },
  {
    id: 4,
    title: "Closed-Loop Feedback & Action Automation",
    icon: Workflow,
    whatItIs: "Automated systems that detect customer issues and trigger immediate responses, ensuring no negative experience goes unaddressed.",
    valueToBusinessPoints: [
      "Auto-triggered alerts let them jump on bad experiences before they hit Yelp.",
      "Integrated workflows reduce manual effort — less staffing overhead.",
      "Automated case handling improves customer recovery rates — winning back lost customers.",
      "Track recovery outcomes = proof of effectiveness and ROI on service interventions."
    ],
    moneyInPocket: "Every \\"saved\\" customer = future revenue. Automated resolution = lower customer service costs."
  },
  {
    id: 5,
    title: "Technical Integration & API Engineering",
    icon: Code,
    whatItIs: "Seamless connections between your experience management platform and other business systems, creating a unified data ecosystem.",
    valueToBusinessPoints: [
      "Data syncs with CRMs/POS close the loop between experience and sales — so issues get fixed faster.",
      "Custom connectors eliminate double work — staff stop copying data from one tool to another.",
      "Real-time pipelines = real-time action — delay costs money.",
      "Webhooks/event triggers create proactive operations (e.g., instant follow-up when feedback is negative)."
    ],
    moneyInPocket: "Less time wasted, fewer errors, faster response = more sales and happier customers."
  },
  {
    id: 6,
    title: "Governance & Program Scalability",
    icon: Shield,
    whatItIs: "Frameworks and processes that ensure your experience program remains consistent, secure, and scalable as your organization grows.",
    valueToBusinessPoints: [
      "Reusable templates save hours per project or campaign.",
      "Defined roles and access prevent security mishaps or miscommunication.",
      "Brand and tone standards improve professionalism — key for reputation and customer trust.",
      "Health monitoring ensures surveys stay live, relevant, and effective — no wasted effort."
    ],
    moneyInPocket: "Reduces overhead, protects brand equity, and ensures long-term consistency with minimal rework."
  },
  {
    id: 7,
    title: "XM Training & Enablement",
    icon: GraduationCap,
    whatItIs: "Comprehensive training programs that empower your team to independently manage and optimize your experience management platform.",
    valueToBusinessPoints: [
      "Training frontline teams = faster adoption and more consistent customer experiences.",
      "Upskilled admins mean less reliance on external help — more in-house control, lower costs.",
      "Templated content and playbooks reduce learning curve for new hires.",
      "Center of Excellence empowers them to scale XM without hiring more staff."
    ],
    moneyInPocket: "Lowers future support costs, speeds up resolution time, and increases team performance."
  },
  {
    id: 8,
    title: "Ongoing Managed Services & Innovation",
    icon: Sparkles,
    whatItIs: "Continuous support and innovation services that keep your experience program at the cutting edge and consistently delivering value.",
    valueToBusinessPoints: [
      "Fractional XM team means no need to hire a full-time analyst or developer.",
      "Regular performance reviews catch slipping metrics before they impact revenue.",
      "Pilot programs (like AI or voice) unlock first-mover advantage.",
      "Innovation reviews help them stay ahead of competitors and identify new profit levers."
    ],
    moneyInPocket: "Higher lifetime value of customers, reduced churn, smarter innovations = faster growth."
  }
];

export function ServicesSection() {
  const [visibleServices, setVisibleServices] = useState(services.slice(0, 6));
  const [showAll, setShowAll] = useState(false);
  
  const toggleShowAll = () => {
    if (showAll) {
      setVisibleServices(services.slice(0, 6));
    } else {
      setVisibleServices(services);
    }
    setShowAll(!showAll);
  };
  
  return (
    <section id="services" className="py-20 relative gradient-section-2">
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 max-w-[2000px]">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-center sm:text-5xl md:text-6xl">
            <span className="gradient-text">Our Core Services</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mt-6">
            StrataXM is a full-service experience management consulting firm that designs, implements, and optimizes programs that deliver measurable business outcomes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ServiceCard
                title={service.title}
                icon={service.icon}
                whatItIs={service.whatItIs}
                valueToBusinessPoints={service.valueToBusinessPoints}
                moneyInPocket={service.moneyInPocket}
                // Example of using a different accent color for specific cards if needed
                // accentColor={index % 2 === 0 ? "primary" : "secondary"} 
              />
            </motion.div>
          ))}
        </div>
        
        {services.length > 6 && (
          <div className="text-center mt-10">
            <Button 
              onClick={toggleShowAll} 
              variant="outline" 
              size="lg"
              className="group"
            >
              <span>{showAll ? "Show Less" : "Show All Services"}</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className={`ml-2 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </Button>
          </div>
        )}
        
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="#contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
