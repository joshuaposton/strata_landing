
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart2, Zap, RefreshCw, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden gradient-section-1">
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Full-Service Experience Management Consulting</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight tech-heading">
            <span className="gradient-text">Transform Customer & Employee</span> Experiences
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            StrataXM is a full-service experience management firm that helps organizations design, implement, and optimize customer and employee experience programs that <strong>drive measurable business outcomes</strong>.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-border/30">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <BarChart2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-medium mb-2">Increase Customer Retention</h3>
              <p className="text-sm text-muted-foreground">Strategic experience programs that identify and address customer needs</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-border/30">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-medium mb-2">Boost Employee Engagement</h3>
              <p className="text-sm text-muted-foreground">Create meaningful employee journeys that improve productivity and retention</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-border/30">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <RefreshCw className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-medium mb-2">Maximize XM Platform ROI</h3>
              <p className="text-sm text-muted-foreground">Expert Qualtrics implementation and optimization for your business needs</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button asChild size="lg" className="px-8">
              <Link href="#contact">Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8">
              <Link href="#services">Explore Our Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          
          <div className="relative mt-8 rounded-xl overflow-hidden border border-border/50 shadow-lg">
            <Image 
              src="/images/dashboard-preview.svg" 
              alt="StrataXM Experience Management Dashboard" 
              width={800} 
              height={450}
              className="w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end justify-center pb-4">
              <span className="text-sm font-medium px-4 py-2 bg-background/80 rounded-full">
                Strategic XM Implementation & Consulting
              </span>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-border/20">
              <h3 className="text-base font-medium mb-3 text-red-400">Without Strategic XM:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-red-400 mt-1">✕</span>
                  <span>Fragmented customer and employee insights</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-red-400 mt-1">✕</span>
                  <span>Underutilized experience management platforms</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-red-400 mt-1">✕</span>
                  <span>Missed opportunities for business growth</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-border/20">
              <h3 className="text-base font-medium mb-3 text-green-400">With StrataXM:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Holistic view of customer and employee experiences</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Maximized ROI from your XM technology investments</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Data-driven strategies that deliver measurable results</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
