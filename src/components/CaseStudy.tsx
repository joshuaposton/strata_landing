import { Card, CardContent } from "@/components/ui/card";

export function CaseStudy() {
  return (
    <section id='case-study' className='py-20 relative gradient-section-4'>
      <div className='absolute inset-0 subtle-grid-bg'></div>
      
      <div className='container relative z-10'>
        <div className='max-w-3xl mx-auto mb-16'>
          <h2 className='section-title text-center'>
            <span className='gradient-text'>Recent Success</span>
          </h2>
        </div>
        
        <Card className='max-w-4xl mx-auto border border-border bg-white/80'>
          <CardContent className='p-8'>
            <div className='flex flex-col gap-6'>
              <div>
                <h3 className='text-2xl font-medium mb-2'>Regional Retailer CX Transformation</h3>
                <p className='text-sm text-muted-foreground'>30-Day Implementation</p>
              </div>
              
              <p className='text-muted-foreground leading-relaxed'>
                A regional retail chain with 24 locations was struggling with disconnected customer feedback and sales data. 
                Their NPS surveys lived in one system, while customer purchase history and support tickets were siloed in separate platforms.
              </p>
              
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-2'>
                <div className='bg-secondary p-4 rounded-lg'>
                  <h4 className='text-primary font-medium mb-2'>Challenge</h4>
                  <p className='text-sm text-muted-foreground'>
                    Fragmented data across Qualtrics surveys, Shopify POS, and Zendesk support tickets.
                  </p>
                </div>
                
                <div className='bg-secondary p-4 rounded-lg'>
                  <h4 className='text-primary font-medium mb-2'>Solution</h4>
                  <p className='text-sm text-muted-foreground'>
                    Custom API connectors and automated workflows to unify customer data in real-time.
                  </p>
                </div>
                
                <div className='bg-secondary p-4 rounded-lg'>
                  <h4 className='text-primary font-medium mb-2'>Result</h4>
                  <p className='text-sm text-muted-foreground'>
                    42% increase in response rate to service recovery and 18% boost in repeat purchases.
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