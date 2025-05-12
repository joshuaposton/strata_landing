import Head from "next/head";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CaseStudy } from "@/components/CaseStudy";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ServicesSection } from '@/components/ServicesSection';
import { CXExplainedSection } from '@/components/CXExplainedSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>StrataXM | Where Customer Experience Meets Code</title>
        <meta name="description" content="StrataXM builds the connective tissue between your CRMs, surveys, and dashboards, turning customer experience into a system, not a guess." />
        <link rel="icon" href="/favicon.ico" />
        {/* Replace the Inter font with JetBrains Mono and Space Grotesk */}
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </Head>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Hero />
          <ServicesSection />
          <CXExplainedSection />
          <CaseStudy />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}