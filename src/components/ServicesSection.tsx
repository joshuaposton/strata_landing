import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, GitMerge, BarChart3, Zap } from "lucide-react";

export function ServicesSection() {
  return (
    <section id='services' className='py-20 relative gradient-section-2'>
      {/* Remove the subtle grid background div */}
      
      <div className='container relative z-10'>
        <div className='max-w-3xl mx-auto mb-16'>
          <h2 className='section-title text-center'>
            <span className='gradient-text'>Our Expertise</span>
          </h2>
          <p className='text-lg text-muted-foreground text-center mt-4'>
            We wire together smart solutions from existing tools, creating systems that make customer experience measurable and actionable.
          </p>
        </div>
        
        <div className='grid md:grid-cols-3 gap-6'>
          <div className='grid-item'>
            <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4'>
              <MessageSquare className='w-6 h-6 text-primary' />
            </div>
            <h3 className='text-xl font-medium mb-3 text-foreground tech-font'>Feedback Capture</h3>
            <p className='text-muted-foreground'>
              Stop losing critical customer signals. We build systems that collect feedback when and where it matters, increasing response rates by 40-60%.
            </p>
          </div>
          
          <div className='grid-item'>
            <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4'>
              <GitMerge className='w-6 h-6 text-primary' />
            </div>
            <h3 className='text-xl font-medium mb-3 text-foreground tech-font'>System Integration</h3>
            <p className='text-muted-foreground'>
              End the data silos. We connect your CRMs, ticketing systems, and spreadsheets so information flows exactly where it needs to go, automatically.
            </p>
          </div>
          
          <div className='grid-item'>
            <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4'>
              <BarChart3 className='w-6 h-6 text-primary' />
            </div>
            <h3 className='text-xl font-medium mb-3 text-foreground tech-font'>Risk Dashboards</h3>
            <p className='text-muted-foreground'>
              See problems before they cost you customers. Our dashboards highlight churn risks and experience trends, turning feedback into preventative action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}