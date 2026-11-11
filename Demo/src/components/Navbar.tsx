import { useState, useEffect } from 'react';
import { Menu, X, Calculator, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry: (projectName?: string) => void;
  onOpenCalculator: () => void;
}

export function Navbar({ onOpenEnquiry, onOpenCalculator }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Our Expertise', href: '#expertise' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#181B19]/95 backdrop-blur-md border-b border-[#B89B68]/20 py-3.5 shadow-xl'
          : 'bg-[#181B19]/80 backdrop-blur-sm border-b border-white/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          className="group flex items-center gap-2 whitespace-nowrap shrink-0 text-[#F6F3ED]"
        >
          <span className="font-brand text-lg sm:text-xl tracking-[0.2em] uppercase font-semibold text-[#F6F3ED] group-hover:text-[#D4BE92] transition-colors">
            AUREVIA <span className="text-[#B89B68] font-light">DEVELOPERS</span>
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#D4BE92] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#B89B68] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Tools */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCalculator}
            title="Luxury Mortgage & EMI Estimator"
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#F6F3ED] bg-white/5 hover:bg-white/10 border border-white/15 rounded transition-colors whitespace-nowrap shrink-0"
          >
            <Calculator className="w-3.5 h-3.5 text-[#B89B68]" />
            <span>EMI Tool</span>
          </button>

          <button
            onClick={() => onOpenEnquiry()}
            className="px-4 sm:px-5 py-2 text-xs font-semibold tracking-wider uppercase text-[#141715] bg-[#B89B68] hover:bg-[#D4BE92] transition-all duration-200 rounded shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            Enquire Now
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 text-neutral-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#181B19] border-b border-[#B89B68]/30 px-6 py-6 transition-all animate-fadeIn">
          <nav className="flex flex-col gap-4 text-sm uppercase tracking-widest font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-neutral-800/80 hover:text-[#D4BE92] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCalculator();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-medium text-[#F6F3ED] bg-white/5 border border-white/15 rounded"
              >
                <Calculator className="w-4 h-4 text-[#B89B68]" />
                <span>Luxury Mortgage Estimator</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3 text-xs font-semibold tracking-wider uppercase text-[#141715] bg-[#B89B68] hover:bg-[#D4BE92] rounded text-center"
              >
                Schedule Private Viewing
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
