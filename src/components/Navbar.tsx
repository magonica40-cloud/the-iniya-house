import React, { useState, useEffect } from 'react';
import { Phone, Edit3, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Our Work' },
    { id: 'gifting', label: 'Curated Gifting' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(250, 248, 245, 0.94)' : 'rgba(250, 248, 245, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-hairline)',
        boxShadow: scrolled ? '0 4px 20px rgba(197, 155, 39, 0.08)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        className="container"
        style={{
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
        }}
      >
        {/* Brand Token & Name */}
        <div
          onClick={() => { setCurrentTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', cursor: 'pointer' }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '2px',
              backgroundColor: 'var(--obsidian-surface)',
              border: '1px solid var(--gold-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--gold-primary)',
              boxShadow: '0 2px 10px rgba(197, 155, 39, 0.15)',
            }}
          >
            <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 'bold', fontSize: '18px' }}>IH</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              className="font-headline"
              style={{
                fontSize: '18px',
                fontWeight: 700,
                letterSpacing: '0.04em',
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                lineHeight: 1.1,
              }}
            >
              The Iniya House
            </span>
            <span
              className="font-meta"
              style={{
                fontSize: '10px',
                color: 'var(--gold-secondary)',
                letterSpacing: '0.18em',
                fontWeight: 600,
              }}
            >
              Arts · Events · Entertainment
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  setCurrentTab(link.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="font-meta"
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '12px',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--gold-secondary)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  padding: '6px 0',
                  position: 'relative',
                  borderBottom: isActive ? '2px solid var(--gold-primary)' : '2px solid transparent',
                  transition: 'all 0.2s ease',
                }}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Header Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '6px 14px',
              backgroundColor: 'var(--bg-surface-lowest)',
              border: '1px solid var(--border-hairline)',
              borderRadius: '2px',
              boxShadow: 'var(--shadow-sm)',
            }}
            className="phone-badge"
          >
            <Phone size={14} color="var(--gold-primary)" />
            <span
              className="font-meta"
              style={{ fontSize: '11px', color: 'var(--text-secondary)', letterSpacing: '0.05em' }}
            >
              +91 74113 92703
            </span>
          </div>

          <button
            onClick={() => {
              setCurrentTab('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-royal-primary"
            style={{ padding: '0.65rem 1.25rem', fontSize: '11px' }}
          >
            <Edit3 size={14} />
            <span>Initiate Commission</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              display: 'none',
            }}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: 'var(--bg-surface-lowest)',
            borderTop: '1px solid var(--border-hairline)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setCurrentTab(link.id);
                setMobileOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-meta"
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                fontSize: '13px',
                color: currentTab === link.id ? 'var(--gold-primary)' : 'var(--text-primary)',
                fontWeight: currentTab === link.id ? 700 : 500,
                padding: '0.5rem 0',
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 960px) {
          .desktop-nav { gap: 1.1rem !important; }
          .phone-badge { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};
