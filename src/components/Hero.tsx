
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      <div className="absolute inset-0 subtle-grid-bg"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 tracking-tight">
            Turn Customer Experience Into a <span className="gradient-text">System</span>, Not a Guess
          </h1>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            We build the connective tissue between your systems, automating workflows and providing clarity through data that drives decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="px-8">
              <Link href="#contact">Start the Conversation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8">
              <Link href="#advantage">See Our Advantage</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
