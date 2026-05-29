import { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Griot from './pages/Griot';
import Archive from './pages/Archive';
import Footer from './components/Footer';
import ImaniScene from './components/ImaniScene';
import './App.css';

function App() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <ImaniScene />
      
      <nav className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => setIsMenuOpen(false)}>She Is African</Link>
        
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links font-space ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>The Gathering</Link></li>
          <li><Link to="/griot" className={location.pathname === '/griot' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>The Griot</Link></li>
          <li><Link to="/archive" className={location.pathname === '/archive' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>The Archive</Link></li>
        </ul>
      </nav>

      <main style={{ minHeight: '80vh', position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/griot" element={<Griot />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </main>
      
      <Footer />
    </>
  );
}

export default App;
