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
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#03040b]">
      <div className="logo-ribbon -left-40 top-12" />
      <div className="logo-ribbon -right-48 bottom-10 rotate-12" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="brand-logo-card mb-5 inline-flex h-[48px] w-[206px] items-center justify-center rounded-xl border border-white/10 bg-white shadow-lg shadow-brand-950/20">
              <img src="/genaixis.png?v=20260601-logo-png" alt="GENAIXIS" className="brand-logo-png h-full w-full" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Building intelligent digital products for the AI era through AI, automation, SaaS platforms, and scalable software engineering.
            </p>

            <div className="flex flex-col gap-3">
              <a href="mailto:contact@genaixis.com" className="group flex items-center gap-2.5 text-sm text-slate-400 transition-colors hover:text-brand-200">
                <Mail className="h-4 w-4 text-brand-400/70 transition-colors group-hover:text-violet-300" />
                contact@genaixis.com
              </a>
              <a href="mailto:careers@genaixis.com" className="group flex items-center gap-2.5 text-sm text-slate-400 transition-colors hover:text-brand-200">
                <Mail className="h-4 w-4 text-brand-400/70 transition-colors group-hover:text-violet-300" />
                careers@genaixis.com
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex max-w-sm items-start gap-2.5 text-sm text-slate-400 transition-colors hover:text-brand-200"
              >
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400/70 transition-colors group-hover:text-violet-300" />
                <span className="leading-relaxed">{companyAddress}</span>
              </a>
            </div>

            <div className="flex items-center gap-3 mt-6">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-200 hover:border-brand-300/35 hover:bg-brand-500/10 hover:text-brand-100"
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
                      className="group flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-brand-200"
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
