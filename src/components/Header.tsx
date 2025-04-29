
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full py-5 border-b border-border/40 backdrop-blur-md bg-background/80 fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <span className="text-2xl font-medium text-foreground">Strata<span className="text-primary">XM</span></span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#advantage" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Our Advantage
          </Link>
          <Link href="#integrations" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Integrations
          </Link>
          <Link href="#case-study" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Case Study
          </Link>
        </nav>
        <div>
          <Button asChild variant="default" size="sm">
            <Link href="#contact">Start the Conversation</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
