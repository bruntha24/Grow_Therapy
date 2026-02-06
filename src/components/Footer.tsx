import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-sage-dark text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-2xl mb-4">Dr. Maya Reynolds</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Licensed Clinical Psychologist dedicated to helping you find peace, 
              clarity, and personal growth through compassionate therapy.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/my-office" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  My Office
                </Link>
              </li>
              <li>
                <Link to="/bookings" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Bookings
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>123 Serenity Lane, Suite 200</li>
              <li>Mindful City, MC 12345</li>
              <li className="pt-2">
                <a href="tel:+1234567890" className="hover:text-primary-foreground transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li>
                <a href="mailto:hello@drmayareynolds.com" className="hover:text-primary-foreground transition-colors">
                  hello@drmayareynolds.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Dr. Maya Reynolds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
