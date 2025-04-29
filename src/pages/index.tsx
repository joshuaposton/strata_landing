
import Head from "next/head";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { TechGrid } from "@/components/TechGrid";
import { CaseStudy } from "@/components/CaseStudy";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>StrataXM | Where Customer Experience Meets Code</title>
        <meta name="description" content="StrataXM builds the connective tissue between your CRMs, surveys, and dashboards, turning customer experience into a system, not a guess." />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Hero />
          <ProblemSection />
          <TechGrid />
          <CaseStudy />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
