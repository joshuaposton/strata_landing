
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full py-4 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <span className="text-2xl font-bold text-blue-900">StrataXM</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#services" className="text-gray-700 hover:text-blue-900 font-medium">
            Services
          </Link>
          <Link href="#about" className="text-gray-700 hover:text-blue-900 font-medium">
            About
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-blue-900 font-medium">
            Contact
          </Link>
        </nav>
        <div>
          <Button asChild className="bg-blue-900 hover:bg-blue-800">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
