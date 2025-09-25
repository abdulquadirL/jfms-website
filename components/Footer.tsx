import { MapPin, Phone, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      "Agricultural Machinery",
      "Equipment Maintenance", 
      "Equipment Rental",
      "Training Programs",
      "Custom Solutions"
    ],
    company: [
      "About Us",
      "Our Story",
      "Leadership Team",
      "Careers",
      "News & Updates"
    ],
    media: [
      "Media Gallery",
      "Videos",
      "Photo Gallery",
      "Press Releases",
      "News & Updates"
    ],
    support: [
      "Customer Support",
      "Technical Documentation",
      "Parts & Service",
      "Warranty Information",
      "Emergency Service"
    ]
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Jigawa Farm <span className="text-agricultural-gold">Mechanization Services</span>
            </h3>
            <p className="text-primary-foreground/80 text-sm">
              Leading provider of agricultural mechanization solutions, 
              helping farmers increase productivity and profitability through 
              modern technology and expert support.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>1234 -------</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>080------</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>info@.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    href="/#services" 
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href="/#about"
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Media */}
          <div>
            <h4 className="font-semibold mb-4">Media</h4>
            <ul className="space-y-2">
              {footerLinks.media.map((link, index) => (
                <li key={index}>
                  <Link 
                    href="/news"
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link 
                    href="/#contact" 
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div>Powered by <span className="font-semibold">Everyfarmer</span></div>
          <div className="text-sm text-primary-foreground/80">
            © {currentYear} Jigawa Farm Mechanization Services. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm">
            
            <Link 
              href="#" 
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="#" 
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link 
              href="#" 
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;