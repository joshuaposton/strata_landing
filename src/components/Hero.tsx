
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart2, Zap, RefreshCw } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden gradient-section-1">
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight tech-heading">
            <span className="gradient-text">Boost Revenue 30%</span> With Connected Customer Experience Systems
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We integrate your disconnected CX tools into a unified system that drives measurable business growth through automated workflows and actionable insights.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <BarChart2 className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm font-medium">Increase Customer Retention</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm font-medium">Accelerate Decision Making</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm font-medium">Automate CX Workflows</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button asChild size="lg" className="px-8">
              <Link href="#contact">Get Your CX Assessment <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8">
              <Link href="#services">View Solutions <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          
          <div className="relative mt-8 rounded-xl overflow-hidden border border-border/50 shadow-lg">
            <Image 
              src="/images/dashboard-preview.svg" 
              alt="StrataXM Dashboard Preview" 
              width={800} 
              height={450}
              className="w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end justify-center pb-4">
              <span className="text-sm font-medium px-4 py-2 bg-background/80 rounded-full">
                Unified CX Dashboard
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
