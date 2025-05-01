import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='border-t border-border/40 py-12 bg-white'>
      <div className='container'>
        <div className='grid md:grid-cols-3 gap-8'>
          <div>
            <h3 className='text-xl font-medium mb-4 tech-font'>Strata<span className='text-primary'>XM</span></h3>
            <p className='text-muted-foreground mb-4'>
              Where Customer Experience Meets Code.
            </p>
          </div>
          
          <div>
            <h4 className='text-sm font-medium mb-4 uppercase tracking-wider text-muted-foreground'>Navigation</h4>
            <ul className='space-y-2'>
              <li>
                <Link href='#services' className='text-muted-foreground hover:text-foreground transition-colors'>
                  Our Expertise
                </Link>
              </li>
              <li>
                <Link href='#case-study' className='text-muted-foreground hover:text-foreground transition-colors'>
                  Case Study
                </Link>
              </li>
              <li>
                <Link href='#contact' className='text-muted-foreground hover:text-foreground transition-colors'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className='text-sm font-medium mb-4 uppercase tracking-wider text-muted-foreground'>Contact</h4>
            <p className='text-muted-foreground mb-2'>info@strataxm.com</p>
          </div>
        </div>
        
        <div className='border-t border-border/40 mt-8 pt-8 text-center'>
          <p className='text-sm text-muted-foreground'>&copy; {currentYear} StrataXM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
