import React, { useState } from 'react';
import { Send } from 'lucide-react';

export const Footer: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer style={{ backgroundColor: 'var(--bg-surface-low)', borderTop: '1px solid var(--border-hairline)', padding: '5rem 0 2.5rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          {/* Col 1: Brand & Charter */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  backgroundColor: 'var(--obsidian-surface)',
                  border: '1px solid var(--gold-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-primary)',
                  fontWeight: 700,
                  fontFamily: 'var(--font-serif)',
                }}
              >
                IH
              </div>
              <span className="font-headline" style={{ fontSize: '18px', fontWeight: 700, textTransform: 'uppercase' }}>
                The Iniya House
              </span>
            </div>
            <p className="font-body" style={{ color: 'var(--text-muted)', fontSize: '13.5px', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Iniya House is built on stories — transforming ideas into unforgettable series of experiences. 100+ projects successfully executed across corporate summits, offsites, brand activations, and curated gifting.
            </p>
            <span className="font-meta" style={{ fontSize: '10px', color: 'var(--gold-secondary)', letterSpacing: '0.15em' }}>
              ARTS | EVENTS | ENTERTAINMENT · BENGALURU
            </span>
          </div>

          {/* Col 2: Atelier HQ & Concierge */}
          <div>
            <span className="font-meta" style={{ fontSize: '11px', color: 'var(--gold-secondary)', fontWeight: 700, display: 'block', marginBottom: '1rem' }}>
              ATELIER HQ & CONCIERGE
            </span>
            <div className="font-headline" style={{ fontSize: '15px', fontWeight: 600, marginBottom: '0.5rem' }}>
              Bangalore Sovereign Atelier
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
              GKW Layout, Vijayanagar / Magadi Road<br />
              Bangalore, Karnataka 560023<br />
              India
            </p>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              <div>VIP Wire: <strong>+91 74113 92703</strong></div>
              <div>Direct: <strong>info.iniyahouse@gmail.com</strong></div>
            </div>
          </div>

          {/* Col 3: Directories */}
          <div>
            <span className="font-meta" style={{ fontSize: '11px', color: 'var(--gold-secondary)', fontWeight: 700, display: 'block', marginBottom: '1rem' }}>
              DIRECTORIES
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '13px' }}>
              <span onClick={() => onNavigate('services')} style={{ color: 'var(--text-muted)', cursor: 'pointer', transition: 'color 0.2s' }}>Curatorial Services</span>
              <span onClick={() => onNavigate('work')} style={{ color: 'var(--text-muted)', cursor: 'pointer', transition: 'color 0.2s' }}>The Archive & Work</span>
              <span onClick={() => onNavigate('gifting')} style={{ color: 'var(--text-muted)', cursor: 'pointer', transition: 'color 0.2s' }}>Heirloom Objets d'Art</span>
              <span onClick={() => onNavigate('services')} style={{ color: 'var(--text-muted)', cursor: 'pointer', transition: 'color 0.2s' }}>Imperial Salons & Arenas</span>
              <span onClick={() => onNavigate('contact')} style={{ color: 'var(--text-muted)', cursor: 'pointer', transition: 'color 0.2s' }}>Commission Charter</span>
            </div>
          </div>

          {/* Col 4: Dispatch Conduit */}
          <div>
            <span className="font-meta" style={{ fontSize: '11px', color: 'var(--gold-secondary)', fontWeight: 700, display: 'block', marginBottom: '1rem' }}>
              DISPATCH CONDUIT
            </span>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
              Receive seasonal monographs, private concert invitations, and sovereign architecture retrospectives.
            </p>

            {subscribed ? (
              <div style={{ padding: '8px 12px', backgroundColor: 'var(--bg-surface-lowest)', border: '1px solid var(--gold-primary)', color: 'var(--gold-secondary)', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>
                ✓ Correspondence address registered under seal.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
                style={{ display: 'flex', gap: '4px' }}
              >
                <input
                  type="email"
                  required
                  placeholder="Atelier correspondence email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  style={{ flex: 1, padding: '8px 12px', border: '1px solid var(--border-hairline)', borderRadius: '2px', fontSize: '12px', outline: 'none' }}
                />
                <button type="submit" className="btn-royal-primary" style={{ padding: '8px 14px', fontSize: '11px' }}>
                  <Send size={12} />
                </button>
              </form>
            )}
            <p className="font-meta" style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              Dispatched under strict patron confidence.
            </p>
          </div>
        </div>

        {/* Bottom Rights Strip */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingTop: '2rem', borderTop: '1px solid var(--border-hairline)', fontSize: '12px', color: 'var(--text-muted)' }}>
          <div>© {new Date().getFullYear()} The Iniya House. All Sovereign Rights Reserved.</div>
          <div style={{ display: 'flex', gap: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>
            <span>Privacy Charter</span>
            <span>Patron Protocols</span>
            <span>Heritage Governance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
