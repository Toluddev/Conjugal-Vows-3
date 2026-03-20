import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About', path: '/about' },
  ];

  const rightLinks = [
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Contact', path: '/contact' },
  ];

  const allLinks = [...navLinks, ...rightLinks];
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 h-20 flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-background-transparent backdrop-blur-sm'}`}>
        {/* Desktop left links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${isActive(link.path) ? 'nav-link-active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground z-50"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Center logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2 z-50">
          <img src={logo} alt="Conjugal Vows" className="h-14 w-auto" />
        </Link>

        {/* Desktop right links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {rightLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${isActive(link.path) ? 'nav-link-active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Empty spacer for mobile right side */}
        <div className="md:hidden w-6" />
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden">
          {allLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`text-[13px] tracking-[0.25em] uppercase text-foreground/80 transition-colors duration-300 hover:text-foreground ${isActive(link.path) ? 'text-foreground border-b border-foreground pb-1' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
