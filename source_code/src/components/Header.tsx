import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, UtensilsCrossed, Clock } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [statusText, setStatusText] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if bakery is currently open
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 6 = Saturday
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hours * 60 + minutes;

      // Sunday (0) - Closed
      if (day === 0) {
        setIsOpen(false);
        setStatusText('Closed Today');
        return;
      }

      // Monday-Thursday (1-4): 7:30am - 2:00pm = 450-840 minutes
      // Friday-Saturday (5-6): 7:00am - 2:00pm = 420-840 minutes
      const openTime = (day >= 1 && day <= 4) ? 450 : 420; // 7:30am or 7:00am
      const closeTime = 840; // 2:00pm

      if (currentTime >= openTime && currentTime < closeTime) {
        setIsOpen(true);
        const closingIn = Math.floor((closeTime - currentTime) / 60);
        if (closingIn <= 1) {
          setStatusText('Closing Soon');
        } else {
          setStatusText('Open Now');
        }
      } else {
        setIsOpen(false);
        if (currentTime < openTime) {
          const openingIn = Math.floor((openTime - currentTime) / 60);
          setStatusText(`Opens at ${day >= 1 && day <= 4 ? '7:30am' : '7:00am'}`);
        } else {
          setStatusText('Closed');
        }
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Buffets', path: '/buffets' },
    { name: 'Menu', path: '/menu' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled
          ? 'bg-dark-900/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-b border-gold-300/10'
          : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-4 transition-all duration-500 hover:scale-105">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-300 to-gold-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative w-14 h-14 bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 rounded-2xl flex items-center justify-center shadow-xl">
                <UtensilsCrossed className="text-dark-900" size={26} strokeWidth={2.5} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-display font-bold tracking-tight text-cream group-hover:text-gold-300 transition-colors duration-300">
                Village
              </span>
              <span className="text-[10px] font-body tracking-[0.25em] text-gold-300 uppercase font-semibold">
                Bakery & Cafe
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative font-body text-sm font-medium tracking-wide transition-all duration-300 group ${location.pathname === link.path ? 'text-gold-300' : 'text-cream/80 hover:text-cream'
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-gold-300 to-gold-600 transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
              </Link>
            ))}

            {/* Opening Hours Badge */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark-800/60 backdrop-blur-sm border border-gold-300/20">
              <Clock size={14} className={isOpen ? 'text-green-400' : 'text-gold-300/60'} />
              <span className={`text-xs font-body font-medium ${isOpen ? 'text-green-400' : 'text-gold-300/60'}`}>
                {statusText}
              </span>
            </div>

            <a
              href="tel:07840803555"
              className="btn btn-primary ml-4 text-sm font-body"
            >
              <Phone size={18} />
              <span className="relative z-10">Order Now</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cream hover:text-gold-300 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-dark-800/95 backdrop-blur-2xl border-b border-gold-300/10 shadow-2xl">
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {/* Opening Hours Badge - Mobile */}
              <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-dark-900/60 border border-gold-300/20">
                <Clock size={16} className={isOpen ? 'text-green-400' : 'text-gold-300/60'} />
                <span className={`text-sm font-body font-medium ${isOpen ? 'text-green-400' : 'text-gold-300/60'}`}>
                  {statusText}
                </span>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-lg font-body font-medium py-3 transition-colors duration-300 ${location.pathname === link.path ? 'text-gold-300' : 'text-cream/80'
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:07840803555"
                className="btn btn-primary mt-4 justify-center text-base"
              >
                <Phone size={20} />
                <span className="relative z-10">Call to Order</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
