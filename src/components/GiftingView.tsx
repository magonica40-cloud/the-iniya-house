import React, { useState } from 'react';
import { GIFTING_PRODUCTS } from '../data/content';
import { MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

interface GiftingViewProps {
  onNavigate: (tab: string) => void;
}

export const GiftingView: React.FC<GiftingViewProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedItemName, setSelectedItemName] = useState('');

  const categories = ['All', 'Electronic Gadgets', 'Office & Desktops', 'Drinkware', 'Bags & Sleeves', 'Mementos & Trophies', 'Apparels', 'Festive Hampers'];

  const filteredProducts = GIFTING_PRODUCTS.filter(
    (p) => selectedCategory === 'All' || p.category === selectedCategory
  );

  const giftingSegments = [
    {
      title: 'Employee Gifting',
      subtitle: 'ONBOARDING & CELEBRATION',
      desc: 'Build deep organizational pride from day one. Curated welcome onboarding kits, work anniversaries, birthday gestures, promotions, and milestone recognitions.',
      highlights: ['Festive & holiday hampers', 'Welcome kits & onboarding essentials', 'Promotions & tenure recognition'],
      image: '/assets/gifting/employee_festive_kit.jpeg',
    },
    {
      title: 'Business & Partner Gifting',
      subtitle: 'EXECUTIVE TRUST & PRESTIGE',
      desc: 'Deepen partnerships and celebrate high-stakes collaborations. Thoughtfully designed client appreciation tokens, deal closure mementos, and marketing outreach.',
      highlights: ['Client appreciation gift boxes', 'Deal closures & project milestones', 'Brand outreach & corporate announcements'],
      image: '/assets/gifting/artisan_tea_box.jpeg',
    },
    {
      title: 'Event & Engagement Gifting',
      subtitle: 'SUMMITS & ACTIVATIONS',
      desc: 'High-impact physical touchpoints for attendees, VIP keynote speakers, and conference delegates that keep your brand remembered for years.',
      highlights: ['Speaker & VIP guest honorarium kits', 'Conference delegate bags & tech gifts', 'Team-building & sports mementos'],
      image: '/assets/gifting/acrylic_crystal_trophies.jpeg',
    },
  ];

  return (
    <div style={{ paddingTop: '80px', width: '100%', overflow: 'hidden' }}>
      {/* Header Banner */}
      <section style={{ backgroundColor: 'var(--bg-surface-lowest)', padding: '5rem 0 3.5rem', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
          <div className="badge-gold" style={{ marginBottom: '1.25rem' }}>
            <span>THE INIYA HOUSE · CURATED CORPORATE GIFTING</span>
          </div>
          <h1
            className="font-headline"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', textTransform: 'uppercase', lineHeight: 1.15, marginBottom: '1.25rem' }}
          >
            Thoughtfully Rated <br />
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--gold-primary)' }}>
              Business Gifting & Objets d'Art.
            </span>
          </h1>
          <p className="font-body" style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.7, marginBottom: '2rem' }}>
            Whether it's an ambitious onboarding kit, high-tech gadgets, festive artisanal hampers, or bespoke crystal trophies —
            our creative team delivers complete strategy, personalization, and execution to leave your clients and employees truly inspired.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/917411392703?text=Hi%20The%20Iniya%20House,%20I%20would%20like%20to%20request%20your%20Corporate%20Gifting%20Catalog."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-royal-gold"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
            >
              <MessageSquare size={16} />
              <span>Request Gifting Catalog on WhatsApp</span>
            </a>
            <button onClick={() => onNavigate('contact')} className="btn-royal-outline">
              <span>Commission Custom Gift Kits</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* The 3 Core Corporate Gifting Pillars (From PDF Page 7) */}
      <section style={{ padding: '5.5rem 0', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem' }}>
            <span className="font-meta" style={{ fontSize: '11px', color: 'var(--gold-secondary)', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>
              RECIPIENT SPECTRUM
            </span>
            <h2 className="font-headline" style={{ fontSize: '2.4rem', textTransform: 'uppercase' }}>
              Tailored Across 3 Business Pillars
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {giftingSegments.map((segment, idx) => (
              <div
                key={idx}
                className="royal-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                }}
              >
                <div>
                  <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                    <img
                      src={segment.image}
                      alt={segment.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        padding: '4px 10px',
                        backgroundColor: 'rgba(17, 18, 22, 0.85)',
                        color: 'var(--gold-primary)',
                        fontSize: '10px',
                        fontFamily: 'var(--font-mono)',
                        borderRadius: '2px',
                        fontWeight: 700,
                      }}
                    >
                      {segment.subtitle}
                    </div>
                  </div>

                  <div style={{ padding: '2rem 1.75rem 1rem' }}>
                    <h3 className="font-headline" style={{ fontSize: '1.45rem', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                      {segment.title}
                    </h3>
                    <p className="font-body" style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      {segment.desc}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', borderTop: '1px solid var(--border-hairline)', paddingTop: '1.25rem' }}>
                      {segment.highlights.map((h, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '13px', color: 'var(--text-secondary)' }}>
                          <CheckCircle2 size={15} color="var(--gold-primary)" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ padding: '1.25rem 1.75rem', borderTop: '1px solid var(--border-hairline)', backgroundColor: 'var(--bg-surface-low)' }}>
                  <button
                    onClick={() => {
                      setSelectedItemName(segment.title);
                      setInquiryModalOpen(true);
                    }}
                    className="font-meta"
                    style={{ background: 'none', border: 'none', color: 'var(--gold-secondary)', fontSize: '11px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    <span>Inquire for {segment.title}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Range Gallery (From PDF Page 8) */}
      <section style={{ padding: '5.5rem 0', backgroundColor: 'var(--bg-surface-low)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <span className="font-meta" style={{ fontSize: '11px', color: 'var(--gold-secondary)', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>
                EXPLORE BY CATEGORY
              </span>
              <h2 className="font-headline" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', textTransform: 'uppercase' }}>
                Our Range of Corporate Products
              </h2>
            </div>

            {/* Category Pills */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className="font-meta"
                  style={{
                    padding: '8px 16px',
                    fontSize: '11px',
                    fontWeight: 600,
                    borderRadius: '2px',
                    cursor: 'pointer',
                    border: selectedCategory === cat ? '1px solid var(--gold-primary)' : '1px solid var(--border-hairline)',
                    backgroundColor: selectedCategory === cat ? 'var(--obsidian-surface)' : '#FFFFFF',
                    color: selectedCategory === cat ? 'var(--gold-primary)' : 'var(--text-secondary)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="royal-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                }}
              >
                <div>
                  <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                    <img
                      src={prod.image}
                      alt={prod.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        padding: '4px 10px',
                        backgroundColor: 'var(--obsidian-surface)',
                        color: 'var(--gold-primary)',
                        fontSize: '10px',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600,
                        borderRadius: '2px',
                      }}
                    >
                      {prod.tag}
                    </span>
                  </div>

                  <div style={{ padding: '1.5rem' }}>
                    <span className="font-meta" style={{ fontSize: '10px', color: 'var(--gold-secondary)', display: 'block', marginBottom: '0.3rem' }}>
                      {prod.category}
                    </span>
                    <h3 className="font-headline" style={{ fontSize: '1.25rem', marginBottom: '0.65rem', lineHeight: 1.3 }}>
                      {prod.name}
                    </h3>
                    <p className="font-body" style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                      {prod.desc}
                    </p>
                  </div>
                </div>

                <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid var(--border-hairline)', backgroundColor: 'var(--bg-surface-low)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="font-meta" style={{ fontSize: '10px', color: 'var(--text-muted)' }}>
                    Custom Branding Available
                  </span>
                  <a
                    href={`https://wa.me/917411392703?text=Hi%20The%20Iniya%20House,%20I%20would%20like%20pricing%20for%20${encodeURIComponent(prod.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-meta"
                    style={{ color: 'var(--gold-primary)', fontWeight: 700, fontSize: '11px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    <span>Inquire Price</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Inquire Modal / Drawer */}
      {inquiryModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 200,
            padding: '1.5rem',
          }}
          onClick={() => setInquiryModalOpen(false)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '4px',
              padding: '2.5rem',
              maxWidth: '500px',
              width: '100%',
              border: '1px solid var(--border-gold)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="badge-gold" style={{ marginBottom: '1rem' }}>
              <span>CORPORATE GIFTING INQUIRY</span>
            </div>
            <h3 className="font-headline" style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>
              Inquire for {selectedItemName}
            </h3>
            <p className="font-body" style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Connect directly with our corporate merchandising lead to discuss custom unit quantities, sample physical mockups, and bulk pricing.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={`https://wa.me/917411392703?text=Hi%20The%20Iniya%20House,%20I%20am%20interested%20in%20customizing%20${encodeURIComponent(selectedItemName)}%20for%20our%20company.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-royal-gold"
                style={{ textAlign: 'center', textDecoration: 'none', padding: '12px', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
              >
                <MessageSquare size={16} />
                <span>Chat on WhatsApp Directly</span>
              </a>
              <button
                onClick={() => {
                  setInquiryModalOpen(false);
                  onNavigate('contact');
                }}
                className="btn-royal-outline"
                style={{ textAlign: 'center', padding: '12px', fontSize: '12px' }}
              >
                <span>Fill Formal Request Form</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
