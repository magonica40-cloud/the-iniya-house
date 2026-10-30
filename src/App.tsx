import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { BRAND_INFO } from './data/content';
import { MessageSquare, ArrowUpRight } from 'lucide-react';
import './index.css';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [showFloatingButton, setShowFloatingButton] = useState<boolean>(false);

  // Monitor scroll for active section & floating button
  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingButton(window.scrollY > 450);

      const sections = ['hero', 'metrics-banner', 'work', 'brands', 'services', 'rentals', 'leisures', 'gifting', 'clientele', 'about', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-canvas)' }}>
      {/* DNA Networks Interactive Custom Mouse Cursor */}
      <CustomCursor />

      {/* Sticky High-Contrast Navbar */}
      <Navbar activeSection={activeSection} onNavigateSection={handleNavigateSection} />

      {/* Main Unified Content Experience */}
      <main style={{ flex: 1 }}>
        <HomeView onNavigateSection={handleNavigateSection} />
      </main>

      {/* Persistent Floating WhatsApp Concierge Button */}
      <a
        href={BRAND_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          left: '2rem',
          bottom: '2rem',
          zIndex: 95,
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.45), 0 4px 12px rgba(0, 0, 0, 0.6)',
          textDecoration: 'none',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
        className="pulse-hover"
        title="Chat with The Iniya House on WhatsApp (+91 74113 92703)"
      >
        <MessageSquare size={22} color="#FFFFFF" />
      </a>

      {/* Sticky Floating Action Button to Plan An Event */}
      {showFloatingButton && activeSection !== 'contact' && (
        <button
          onClick={() => handleNavigateSection('contact')}
          style={{
            position: 'fixed',
            right: '2rem',
            bottom: '2rem',
            zIndex: 90,
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.85rem 1.35rem',
            backgroundColor: 'var(--bg-card)',
            color: '#FFFFFF',
            border: '1px solid var(--border-cyan)',
            borderRadius: '99px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 194, 203, 0.25)',
            cursor: 'pointer',
            fontFamily: 'var(--font-sans)',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--cyan-primary)';
            e.currentTarget.style.color = '#040812';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--bg-card)';
            e.currentTarget.style.color = '#FFFFFF';
          }}
        >
          <span style={{ color: 'var(--cyan-primary)' }}>✦</span>
          <span>Plan An Event</span>
          <ArrowUpRight size={14} />
        </button>
      )}

      {/* Executive Footer */}
      <Footer onNavigateSection={handleNavigateSection} />
    </div>
  );
}

export default App;
