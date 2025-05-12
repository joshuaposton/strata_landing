
import Head from "next/head";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Sitemap() {
  return (
    <>
      <Head>
        <title>Sitemap | StrataXM</title>
        <meta name="description" content="Navigate all pages and sections of the StrataXM website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container mx-auto py-24 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 tech-font">Sitemap</h1>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">Main Pages</h2>
                <ul className="space-y-2 list-disc pl-5">
                  <li>
                    <Link href="/" className="text-primary hover:underline">
                      Home Page
                    </Link>
                  </li>
                  <li>
                    <Link href="/sitemap" className="text-primary hover:underline">
                      Sitemap (Current Page)
                    </Link>
                  </li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-4">Home Page Sections</h2>
                <ul className="space-y-2 list-disc pl-5">
                  <li>
                    <Link href="/#services" className="text-primary hover:underline">
                      Our Expertise
                    </Link>
                    <p className="text-sm text-muted-foreground mt-1">
                      Learn about our services and how we can help your business.
                    </p>
                  </li>
                  <li>
                    <Link href="/#case-study" className="text-primary hover:underline">
                      Case Study
                    </Link>
                    <p className="text-sm text-muted-foreground mt-1">
                      View our successful project implementations.
                    </p>
                  </li>
                  <li>
                    <Link href="/#contact" className="text-primary hover:underline">
                      Contact
                    </Link>
                    <p className="text-sm text-muted-foreground mt-1">
                      Get in touch with our team.
                    </p>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
