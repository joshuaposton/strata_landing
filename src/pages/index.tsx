
import Head from "next/head";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>StrataXM | Experience Management Consulting</title>
        <meta name="description" content="StrataXM helps small and medium businesses transform customer experiences into business growth through expert system integration and analytics." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main>
          <Hero />
          <ProblemSection />
          <ServicesSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
