import Hero from "@/components/Hero";
import AboutTest from "@/components/AboutTest";
import TestDetails from "@/components/TestDetails";
import RegistrationForm from "@/components/RegistrationForm";
import Outcomes from "@/components/Outcomes";
import Timeline from "@/components/Timeline";
import Statistics from "@/components/Statistics";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Menu, X, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center">
              {/* Logo */}
              <a href="/" className="text-2xl font-bold text-primary">
               <img src="https://bepractical.s3.us-east-2.amazonaws.com/brand-logo.cc6e3cf088a8fd3005b1.jpg" alt="be Practical" style={{width:"150px"}} />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About Test</a>
              <a href="#timeline" className="text-gray-600 hover:text-primary transition-colors">Timeline</a>
              <a href="#outcomes" className="text-gray-600 hover:text-primary transition-colors">Outcomes</a>
              <a href="#faqs" className="text-gray-600 hover:text-primary transition-colors">FAQs</a>
              <a
               href="#home"
                className="bg-primary hover:bg-primary/90 text-white px-6 rounded-full py-2"
              >
                Register Now
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-primary"
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Offcanvas Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setMenuOpen(false)}>
          <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg p-6 flex flex-col">
            <button
              className="self-end text-gray-600 hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <nav className="flex flex-col mt-6 space-y-4">
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About Test</a>
              <a href="#timeline" className="text-gray-700 hover:text-primary transition-colors">Timeline</a>
              <a href="#timeline" className="text-gray-700 hover:text-primary transition-colors">Test Details</a>
              <a href="#outcomes" className="text-gray-700 hover:text-primary transition-colors">Outcomes</a>
              <a href="#faqs" className="text-gray-700 hover:text-primary transition-colors">FAQs</a>
              <a href="#home" className="mt-4 bg-primary text-white w-full">Register Now</a>
            </nav>
            <div className="flex mt-8 space-x-4 justify-center">
              <a href="https://www.facebook.com/BangaloreBepractical/" className="text-gray-600 hover:text-primary"><Facebook /></a>
              <a href="https://twitter.com/bepractical_com" className="text-gray-600 hover:text-primary"><Twitter /></a>
              <a href="https://www.linkedin.com/company/13338555/admin/" className="text-gray-600 hover:text-primary"><Linkedin /></a>
              <a href="https://www.instagram.com/bepracticaltraining/" className="text-gray-600 hover:text-primary"><Instagram /></a>
            </div>
          </div>
        </div>
      )}

      {/* Add top margin to compensate for fixed header */}
      <div className="pt-16 lg:pt-20">
        <Hero />
        <Statistics />
        <AboutTest />
        <Timeline />
        <TestDetails />
        <Outcomes />
        {/* <RegistrationForm /> */}
        <FAQs />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
