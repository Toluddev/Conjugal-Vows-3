import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-foreground/5 px-6 md:px-12 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="mb-4 inline-block">
              <img src={logo} alt="Conjugal Vows" className="h-14 w-auto" />
            </Link>
            <p className="body-text text-sm">
              Crafting cinematic wedding stories that capture emotion, beauty, and timeless moments.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-sans font-bold tracking-[0.1em] uppercase text-foreground mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Portfolio', path: '/portfolio' },
                { label: 'About', path: '/about' },
                { label: 'Testimonials', path: '/testimonials' },
                { label: 'Contact', path: '/contact' },
              ].map((l) => (
                <li key={l.label}><Link to={l.path} className="body-text text-sm hover:text-foreground transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-sans font-bold tracking-[0.1em] uppercase text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {['Wedding Films', 'Engagement Shoots', 'Event Cinematography', 'Creative Direction'].map((s) => (
                <li key={s}><span className="body-text text-sm">{s}</span></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-sans font-bold tracking-[0.1em] uppercase text-foreground mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="body-text text-sm">info@conjugalvows.com</li>
              <li className="body-text text-sm">+234 703 522 4845</li>
              <li className="body-text text-sm">Delta State, Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-foreground/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="body-text text-sm">© 2025 Conjugal Vows. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {[Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-lg border border-foreground/10 flex items-center justify-center text-foreground/50 hover:text-foreground transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
            <a href="#" className="w-10 h-10 rounded-lg border border-foreground/10 flex items-center justify-center text-foreground/50 hover:text-foreground transition-colors text-xs font-sans font-bold">YT</a>
            <a href="#" className="w-10 h-10 rounded-lg border border-foreground/10 flex items-center justify-center text-foreground/50 hover:text-foreground transition-colors text-xs font-sans font-bold">V</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
