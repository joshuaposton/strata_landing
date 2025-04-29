
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative bg-blue-900 text-white py-20 md:py-28 lg:py-32">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Transforming Customer Experiences Into Business Growth
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Expert integration of experience management systems that drive revenue and customer loyalty for growing businesses.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
