import { Link } from 'react-router-dom';
import { Mail, MapPin, Twitter, Linkedin, Github, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Technology', path: '/services' },
    { label: 'Careers', path: '/careers' },
  ],
  Technology: [
    { label: 'AI Engine', path: '/services' },
    { label: 'Platform Core', path: '/services' },
    { label: 'Cloud Layer', path: '/services' },
    { label: 'Automation OS', path: '/services' },
  ],
  Products: [
    { label: 'LearnStackHub', path: '/products' },
    { label: 'AI Mock Interviews', path: '/products' },
    { label: 'SaaS Platforms', path: '/products' },
    { label: 'Automation Systems', path: '/products' },
  ],
};

const companyAddress =
  'Ground Floor, Krishe Emerald, Kondapur, Laxmi Cyber City, Whitefields, HITEC City, Hyderabad, Telangana 500081';

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyAddress)}`;

export default function Footer() {
  return (
    <footer className="relative bg-[#03050e] border-t border-white/5 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="mb-5 flex items-center">
              <img src="/genaixis-wordmark.svg" alt="GENAIXIS" className="brand-logo-motion h-10 w-[178px] object-contain sm:h-12 sm:w-[214px]" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Building intelligent digital products for the AI era through AI, automation, SaaS platforms, and scalable software engineering.
            </p>

            <div className="flex flex-col gap-3">
              <a href="mailto:contact@genaixis.com" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors group">
                <Mail className="w-4 h-4 text-cyan-500/60 group-hover:text-cyan-400 transition-colors" />
                contact@genaixis.com
              </a>
              <a href="mailto:careers@genaixis.com" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors group">
                <Mail className="w-4 h-4 text-cyan-500/60 group-hover:text-cyan-400 transition-colors" />
                careers@genaixis.com
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors group max-w-sm"
              >
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-500/60 group-hover:text-cyan-400 transition-colors" />
                <span className="leading-relaxed">{companyAddress}</span>
              </a>
            </div>

            <div className="flex items-center gap-3 mt-6">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-slate-200 mb-4 tracking-wide">{title}</h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-slate-400 hover:text-cyan-400 transition-colors group flex items-center gap-1"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} GENAIXIS LABS PRIVATE LIMITED. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/privacy-policy" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Terms and Conditions</Link>
            <Link to="/cookie-policy" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
