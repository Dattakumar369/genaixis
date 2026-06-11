import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about/' },
  { label: 'Products', path: '/products/' },
  { label: 'Technology', path: '/services/' },
  { label: 'Careers', path: '/careers/' },
  { label: 'Contact', path: '/contact/' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/92 backdrop-blur-xl border-b border-slate-200/80 shadow-xl shadow-slate-950/5'
          : 'bg-white/[0.86] backdrop-blur-xl border-b border-slate-200/60 shadow-lg shadow-slate-950/5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link to="/" className="brand-logo-link flex h-12 w-[220px] items-center sm:h-14 sm:w-[250px]">
            <img src="/genaixis.png" alt="GENAIXIS" className="brand-logo-png h-full w-full" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || location.pathname === link.path.replace(/\/$/, '');
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${
                    isActive
                      ? 'text-slate-950'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className={`absolute inset-0 rounded-lg border ${
                        scrolled
                          ? 'border-brand-500/20 bg-brand-500/8'
                          : 'border-brand-500/15 bg-white/70'
                      }`}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact/"
              className="premium-button rounded-lg bg-gradient-to-r from-brand-500 via-brand-600 to-violet-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition-all duration-200 hover:from-brand-400 hover:to-violet-400 hover:shadow-violet-500/30"
            >
              Build With Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-colors lg:hidden ${
              scrolled
                ? 'border-slate-200 bg-white text-slate-700 hover:text-slate-950'
                : 'border-slate-200 bg-white text-slate-700 hover:text-slate-950'
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-b border-white/10 bg-[#060713]/96 backdrop-blur-xl lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path || location.pathname === link.path.replace(/\/$/, '');
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                        isActive
                          ? 'border border-brand-300/25 bg-brand-500/12 text-white'
                          : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <Link
                to="/contact/"
                className="premium-button mt-2 rounded-lg bg-gradient-to-r from-brand-500 via-brand-600 to-violet-500 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Build With Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
