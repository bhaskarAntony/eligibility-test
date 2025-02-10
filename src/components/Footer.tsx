
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg mb-4">About Us</h3>
            <p className="text-sm">
            Since its establishment in 2012, Be Practical Tech Solutions is training predominantly in IT courses. It has pioneered as a diversified entrepreneurship tapping into the necessities of the internet market in India, with its in-depth understanding of customers and companies
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@be-practicle.com" className="text-sm hover:text-white">
                info@be-practicle.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+919242079119" className="text-sm hover:text-white">
                +919242079119
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest updates and opportunities.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-primary"
              />
              <Button className="w-full bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; 2024 Eligibility Test Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const socialLinks = [
  {
    icon: <Facebook className="w-5 h-5" />,
    link: "https://www.facebook.com/BangaloreBepractical/"
  },
  {
    icon: <Twitter className="w-5 h-5" />,
    link: "https://twitter.com/bepractical_com"
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    link: "https://www.linkedin.com/company/13338555/admin/"
  },
  {
    icon: <Instagram className="w-5 h-5" />,
    link: "https://www.instagram.com/bepracticaltraining/"
  }
];

const quickLinks = [
  { label: "About Test", href: "#about" },
  { label: "Test Details", href: "#details" },
  { label: "Timeline", href: "#timeline" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "FAQs", href: "#faqs" },
];

export default Footer;
