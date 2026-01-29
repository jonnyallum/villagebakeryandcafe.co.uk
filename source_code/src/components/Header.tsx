import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, UtensilsCrossed } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'BUFFETS', path: '/buffets' },
    { name: 'MENU', path: '/menu' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-black">
            <UtensilsCrossed size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-heading font-bold tracking-wide text-white group-hover:text-accent transition-colors">
              Village
            </span>
            <span className="text-[10px] tracking-[0.2em] text-accent uppercase font-medium">
              Bakery & Cafe
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium tracking-wider hover:text-accent transition-colors ${
                location.pathname === link.path ? 'text-accent' : 'text-zinc-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="tel:07840803555" 
            className="btn btn-primary ml-4 py-2 px-6 text-sm"
          >
            <Phone size={16} />
            ORDER NOW
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-surface border-b border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-xl animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-medium py-2 ${
                  location.pathname === link.path ? 'text-accent' : 'text-zinc-300'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
             <a 
              href="tel:07840803555" 
              className="btn btn-primary mt-4 justify-center"
            >
              <Phone size={18} />
              CALL TO ORDER
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
