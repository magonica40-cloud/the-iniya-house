import React from 'react';
import { BRAND_INFO } from '../data/content';
import { Phone, Mail } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection }) => {
  return (
    <footer
      style={{
        backgroundColor: '#000000',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '5rem 0 2.5rem',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3.5rem',
            marginBottom: '4.5rem',
          }}
        >
          {/* Col 1: Headquarters (DNA Networks layout) */}
          <div>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--text-gray-400)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              Headquarters
            </div>
            <p
              style={{
                fontSize: '14px',
                color: 'var(--text-gray-300)',
                lineHeight: 1.6,
                marginBottom: '1.5rem',
              }}
            >
              The Iniya House Private Limited<br />
              {BRAND_INFO.locationDetail}
            </p>
            <button
              onClick={() => onNavigateSection('contact')}
              className="btn-dna"
              style={{ fontSize: '11px' }}
            >
              <span>Locate On Map</span>
              <svg
                className="btn__arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="10"
                viewBox="0 0 59 10"
                fill="none"
              >
                <path d="M0 5H57.5" stroke="currentColor" />
                <path d="M53.5 1L57.5 5L53.5 9" stroke="currentColor" />
              </svg>
            </button>
          </div>

          {/* Col 2: Quick Connect (DNA Networks layout) */}
          <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.08)', paddingLeft: '2rem' }}>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--text-gray-400)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              Quick Connect
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <a
                  href={`tel:${BRAND_INFO.phoneClean}`}
                  style={{
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                  }}
                >
                  <Phone size={14} color="var(--accent-cyan)" />
                  <span>{BRAND_INFO.phone}</span>
                </a>
              </div>

              <div>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  style={{
                    color: 'var(--text-gray-300)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                  }}
                >
                  <Mail size={14} color="var(--accent-cyan)" />
                  <span>{BRAND_INFO.email}</span>
                </a>
              </div>

              <div>
                <a
                  href={BRAND_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#25D366',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                  }}
                >
                  <span>WhatsApp: {BRAND_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Links (DNA Networks layout) */}
          <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.08)', paddingLeft: '2rem' }}>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--text-gray-400)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              Quick Links
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '13px' }}>
              <span
                onClick={() => onNavigateSection('work')}
                style={{ color: 'var(--text-gray-300)', cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-gray-300)')}
              >
                Featured Events
              </span>
              <span
                onClick={() => onNavigateSection('brands')}
                style={{ color: 'var(--text-gray-300)', cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-gray-300)')}
              >
                Core Verticals
              </span>
              <span
                onClick={() => onNavigateSection('rentals')}
                style={{ color: 'var(--text-gray-300)', cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-gray-300)')}
              >
                Equipment Rental Desk
              </span>
              <span
                onClick={() => onNavigateSection('leisures')}
                style={{ color: 'var(--text-gray-300)', cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-gray-300)')}
              >
                Leisures & MICE Stays
              </span>
              <span
                onClick={() => onNavigateSection('gifting')}
                style={{ color: 'var(--text-gray-300)', cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-gray-300)')}
              >
                Corporate Gifting Catalog
              </span>
              <span
                onClick={() => onNavigateSection('clientele')}
                style={{ color: 'var(--text-gray-300)', cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-gray-300)')}
              >
                Our Clientele
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '11px',
            color: 'var(--text-gray-500)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          <div>
            ALL RIGHTS RESERVED TO THE INIYA HOUSE {new Date().getFullYear()}
          </div>
          <div>
            ARTS | EVENTS | ENTERTAINMENT · BENGALURU
          </div>
        </div>
      </div>
    </footer>
  );
};
