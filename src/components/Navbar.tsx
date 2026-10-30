import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigateSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'work', label: 'Work' },
    { id: 'brands', label: 'Verticals' },
    { id: 'services', label: 'Services' },
    { id: 'rentals', label: 'Rentals' },
    { id: 'leisures', label: 'Leisures' },
    { id: 'gifting', label: 'Gifting' },
    { id: 'clientele', label: 'Clientele' },
    { id: 'about', label: 'About' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileOpen(false);
    onNavigateSection(id);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        transition: 'background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
      }}
    >
      <div
        className="container"
        style={{
          height: '84px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
        }}
      >
        {/* Brand Logo - DNA Networks Inspired Clean Minimalist Typography */}
        <div
          onClick={() => handleLinkClick('hero')}
          style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer', userSelect: 'none' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-dna)',
                fontSize: '22px',
                fontWeight: 900,
                letterSpacing: '0.04em',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                lineHeight: 1,
              }}
            >
              The Iniya House
            </span>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-cyan)',
                display: 'inline-block',
              }}
            />
          </div>
          <span
            style={{
              fontFamily: 'var(--font-dna)',
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.18em',
              color: 'var(--text-gray-400)',
              textTransform: 'uppercase',
              marginTop: '4px',
            }}
          >
            Arts | Events | Entertainment
          </span>
        </div>

        {/* Center Desktop Navigation */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.2rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: isActive ? '#FFFFFF' : 'var(--text-gray-400)',
                  fontSize: '13px',
                  fontWeight: 700,
                  fontFamily: 'var(--font-dna)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  padding: '0.5rem 0',
                  position: 'relative',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text-gray-400)';
                }}
              >
                {item.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: '#FFFFFF',
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA with Signature DNA Networks Extended Arrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <button
            onClick={() => handleLinkClick('contact')}
            className="btn-dna desktop-connect"
            style={{ fontSize: '13px' }}
          >
            <span>Connect</span>
            <svg
              className="btn__arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="10"
              viewBox="0 0 59 10"
              fill="none"
            >
              <path d="M0 5H57.5" stroke="currentColor" />
              <path d="M53.5 1L57.5 5L53.5 9" stroke="currentColor" />
            </svg>
          </button>

          {/* DNA Networks Circular White Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: mobileOpen ? '#000000' : '#FFFFFF',
              border: mobileOpen ? '1px solid rgba(255, 255, 255, 0.4)' : 'none',
              color: mobileOpen ? '#FFFFFF' : '#000000',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)',
              transition: 'all 0.25s ease',
              flexShrink: 0,
            }}
            title="Menu Drawer"
            aria-label="Toggle navigation drawer"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Full-Screen Cinematic Menu Drawer (DNA Networks Signature) */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: 'rgba(0, 0, 0, 0.97)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '6rem 3rem 3rem',
            overflowY: 'auto',
          }}
        >
          <div className="container" style={{ width: '100%', maxWidth: '1300px', margin: '0 auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '3.5rem',
                alignItems: 'start',
              }}
            >
              {/* Left Column: Numbered Navigation Links */}
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-dna)',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    color: 'var(--text-gray-500)',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '1.5rem',
                  }}
                >
                  NAVIGATION DIRECTORY
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {navLinks.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => handleLinkClick(item.id)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: activeSection === item.id ? 'var(--accent-cyan)' : '#FFFFFF',
                        fontFamily: 'var(--font-dna)',
                        fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)',
                        fontWeight: 800,
                        textAlign: 'left',
                        textTransform: 'uppercase',
                        letterSpacing: '-0.01em',
                        cursor: 'pointer',
                        padding: '0.25rem 0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.25rem',
                        transition: 'color 0.2s ease, transform 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateX(10px)';
                        e.currentTarget.style.color = 'var(--accent-cyan)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateX(0)';
                        if (activeSection !== item.id) e.currentTarget.style.color = '#FFFFFF';
                      }}
                    >
                      <span style={{ fontSize: '13px', color: 'var(--text-gray-500)', fontWeight: 600 }}>
                        0{idx + 1}.
                      </span>
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Bangalore Liaison Info & Direct Connect */}
              <div
                style={{
                  borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                  paddingLeft: '3rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2.5rem',
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-dna)',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      color: 'var(--text-gray-500)',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '0.75rem',
                    }}
                  >
                    BENGALURU HEADQUARTERS
                  </span>
                  <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                    THE INIYA HOUSE
                  </h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-gray-400)', lineHeight: 1.6 }}>
                    GKW Layout, Vijayanagar / Magadi Road,
                    <br />
                    Bengaluru, Karnataka 560023
                  </p>
                </div>

                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-dna)',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      color: 'var(--text-gray-500)',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '0.75rem',
                    }}
                  >
                    DIRECT CONCIERGE LIAISON
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <a
                      href="tel:+917411392703"
                      style={{
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        fontSize: '16px',
                        fontWeight: 700,
                        fontFamily: 'var(--font-dna)',
                      }}
                    >
                      +91 74113 92703
                    </a>
                    <a
                      href="mailto:info.iniyahouse@gmail.com"
                      style={{
                        color: 'var(--text-gray-400)',
                        textDecoration: 'none',
                        fontSize: '14px',
                      }}
                    >
                      info.iniyahouse@gmail.com
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => handleLinkClick('contact')}
                    className="btn-dna-solid"
                    style={{ padding: '1rem 2rem' }}
                  >
                    <span>Connect With Us</span>
                    <svg
                      className="btn__arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      width="38"
                      height="10"
                      viewBox="0 0 59 10"
                      fill="none"
                    >
                      <path d="M0 5H57.5" stroke="currentColor" />
                      <path d="M53.5 1L57.5 5L53.5 9" stroke="currentColor" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Responsive Inline CSS */}
      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-connect {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
