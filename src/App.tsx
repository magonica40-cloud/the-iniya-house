import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { ServicesView } from './components/ServicesView';
import { WorkView } from './components/WorkView';
import { GiftingView } from './components/GiftingView';
import { ContactView } from './components/ContactView';
import { Footer } from './components/Footer';
import { ArrowUpRight, MessageSquare } from 'lucide-react';
import './index.css';

export function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [showFloatingButton, setShowFloatingButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingButton(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic SEO Updates Per Tab
  useEffect(() => {
    const seoMap: Record<string, { title: string; desc: string }> = {
      home: {
        title: 'The Iniya House — Luxury Event Management & Corporate Summits | Bangalore',
        desc: 'The Iniya House is a premier luxury event management company in Bangalore. Specializing in corporate summits, MICE offsites, AV equipment rental, and corporate gifting with 100+ executed projects.',
      },
      services: {
        title: 'Turnkey Event Production, MICE Offsites & AV Equipment Rental | The Iniya House',
        desc: 'Explore our full spectrum of corporate events, MICE destination offsites, standalone audio-visual equipment rental, and live interactive scope estimator.',
      },
      work: {
        title: 'Executed Case Dossiers & Scenographic Portfolio | The Iniya House Bangalore',
        desc: 'Inspect our portfolio of delivered medical conclaves, enterprise assemblies, royal palace galas, and concert stage engineering across South India.',
      },
      gifting: {
        title: 'Curated Corporate Gifting & Executive Hampers | The Iniya House',
        desc: 'Thoughtfully curated business gifting across 7 categories: electronic gadgets, vegan leather planners, premium drinkware, custom jerseys, trophies, and festive hampers.',
      },
      contact: {
        title: 'Plan Your Event & Commission Inquiries | The Iniya House Atelier Bangalore',
        desc: 'Direct liaison conduit for initiating corporate summits, MICE offsites, or corporate gifting commissions. Fast 4-hour review and WhatsApp integration.',
      },
    };

    const currentSeo = seoMap[currentTab] || seoMap.home;
    document.title = currentSeo.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', currentSeo.desc);
    }
  }, [currentTab]);

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-surface)' }}>
      {/* Top Navbar */}
      <Navbar currentTab={currentTab} setCurrentTab={handleNavigate} />

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        {currentTab === 'home' && <HomeView onNavigate={handleNavigate} />}
        {currentTab === 'services' && <ServicesView onNavigate={handleNavigate} />}
        {currentTab === 'work' && <WorkView onNavigate={handleNavigate} />}
        {currentTab === 'gifting' && <GiftingView onNavigate={handleNavigate} />}
        {currentTab === 'contact' && <ContactView />}
      </main>

      {/* Floating WhatsApp Concierge Button */}
      <a
        href="https://wa.me/917411392703?text=Hello%20The%20Iniya%20House,%20I%20would%20like%20to%20inquire%20about%20curating%20an%20event."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          left: '2rem',
          bottom: '2rem',
          zIndex: 95,
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem',
          padding: '0.75rem 1.25rem',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          borderRadius: '99px',
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4), 0 2px 10px rgba(0, 0, 0, 0.2)',
          textDecoration: 'none',
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.08em',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
        className="floating-whatsapp"
        title="Chat with The Iniya House on WhatsApp"
      >
        <MessageSquare size={16} color="#FFFFFF" />
        <span>WhatsApp Concierge</span>
      </a>

      {/* Sticky Floating Action Button */}
      {showFloatingButton && currentTab !== 'contact' && (
        <button
          onClick={() => handleNavigate('contact')}
          style={{
            position: 'fixed',
            right: '2rem',
            bottom: '2rem',
            zIndex: 90,
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            padding: '0.85rem 1.4rem',
            backgroundColor: 'var(--obsidian-surface)',
            color: '#FFFFFF',
            border: '1px solid var(--gold-primary)',
            borderRadius: '99px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3), 0 2px 10px rgba(197, 155, 39, 0.25)',
            cursor: 'pointer',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            transition: 'all 0.3s ease',
          }}
          className="floating-commission"
        >
          <span style={{ color: 'var(--gold-primary)' }}>✦</span>
          <span>Plan An Event</span>
          <ArrowUpRight size={15} color="var(--gold-primary)" />
        </button>
      )}

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
