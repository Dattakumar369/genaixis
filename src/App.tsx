import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import { CookiePolicy, PrivacyPolicy, TermsAndConditions } from './pages/LegalPages';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function TrailingSlashNormalizer() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { pathname, search, hash } = location;
    if (pathname.length > 1 && !pathname.endsWith('/')) {
      navigate(`${pathname}/${search}${hash}`, { replace: true });
    }
  }, [location, navigate]);

  return null;
}

function AppContent() {
  return (
    <div className="theme-digital-clean min-h-screen bg-genaixis-canvas text-slate-100">
      <ScrollToTop />
      <TrailingSlashNormalizer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
        <Route path="/products/" element={<Products />} />
        <Route path="/services/" element={<Services />} />
        <Route path="/careers/" element={<Careers />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions/" element={<TermsAndConditions />} />
        <Route path="/cookie-policy/" element={<CookiePolicy />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
