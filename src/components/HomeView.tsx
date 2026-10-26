import React, { useState } from 'react';
import { METRICS, DISCIPLINES, CASE_DOSSIERS, PATRONS, METHODOLOGY, EQUIPMENT_RENTALS } from '../data/content';
import { ArrowRight, ShieldCheck, Sparkles, Send, CheckCircle2, Sliders, Volume2, Monitor, Box, MessageSquare } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (tab: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const [dossierFilter, setDossierFilter] = useState<'all' | 'corporate' | 'palace' | 'arena'>('all');
  const [quickFormSubmitted, setQuickFormSubmitted] = useState(false);
  const [quickForm, setQuickForm] = useState({ entity: '', scale: '500 - 1,500 PAX', vertical: 'Corporate Events & Summits', contact: '' });

  const filteredDossiers = CASE_DOSSIERS.filter(
    (item) => dossierFilter === 'all' || item.category === dossierFilter
  );

  return (
    <div style={{ paddingTop: '80px', width: '100%', overflow: 'hidden' }}>
      {/* =========================================================
          HERO SECTION
          ========================================================= */}
      <section
        id="hero"
        style={{
          position: 'relative',
          padding: '6rem 0 5rem',
          backgroundColor: 'var(--bg-surface)',
          overflow: 'hidden',
        }}
      >
        {/* Ambient Golden Radial Orbs */}
        <div
          className="gilded-orb"
          style={{
            top: '-10%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '450px',
            background: 'radial-gradient(circle, rgba(197, 155, 39, 0.22) 0%, rgba(253, 213, 128, 0.08) 50%, transparent 70%)',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          {/* Overline Badge */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <div className="badge-gold" style={{ padding: '0.4rem 1.25rem', borderRadius: '99px' }}>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--gold-primary)',
                  display: 'inline-block',
                }}
              />
              <span>THE INIYA HOUSE · ARTS | EVENTS | ENTERTAINMENT</span>
              <Sparkles size={14} color="var(--gold-primary)" />
            </div>
          </div>

          {/* Monumental Title */}
          <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
            <h1
              className="font-headline"
              style={{
                fontSize: 'clamp(2.8rem, 6.5vw, 4.8rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              Where Creative Vision <br />
              <span
                style={{
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: 'var(--gold-primary)',
                  textTransform: 'none',
                }}
              >
                becomes unforgettable reality.
              </span>
            </h1>

            <p
              className="font-body"
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '820px',
                margin: '0 auto 2.5rem',
              }}
            >
              The Iniya House is built on stories — transforming ambitious ideas into powerful, emotionally resonant
              experiences. Having successfully executed <strong>100+ projects</strong> across corporate summits,
              destination offsites, brand activations, and bespoke gifting across South India and beyond.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                gap: '1.25rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: '4.5rem',
              }}
            >
              <button
                onClick={() => onNavigate('services')}
                className="btn-royal-gold"
                style={{ minWidth: '240px' }}
              >
                <span>Explore The Verticals</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="btn-royal-outline"
                style={{ minWidth: '240px' }}
              >
                <ShieldCheck size={16} color="var(--gold-primary)" />
                <span>Plan Your Event</span>
              </button>
            </div>
          </div>

          {/* Imperial 4 Metrics Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {METRICS.map((metric, idx) => (
              <div
                key={idx}
                className="royal-card"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '2px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span className="font-meta" style={{ fontSize: '11px', color: 'var(--gold-secondary)' }}>
                    {metric.code}
                  </span>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--gold-primary)' }} />
                </div>
                <div>
                  <div
                    className="font-headline"
                    style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.1 }}
                  >
                    {metric.value}
                  </div>
                  <div
                    className="font-body"
                    style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}
                  >
                    {metric.label}
                  </div>
                </div>
                {/* Visual Accent Progress Bar */}
                <div style={{ width: '100%', height: '3px', backgroundColor: 'var(--bg-surface-high)', marginTop: '1.5rem', borderRadius: '99px', overflow: 'hidden' }}>
                  <div style={{ width: metric.pct, height: '100%', backgroundColor: 'var(--gold-primary)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          THE ABOUT US MANIFESTO & REAL SHOWCASE
          ========================================================= */}
      <section id="about" style={{ backgroundColor: 'var(--bg-surface-low)', padding: '6rem 0', borderTop: '1px solid var(--border-hairline)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            {/* Left Column Manifesto */}
            <div>
              <div className="badge-gold" style={{ marginBottom: '1rem' }}>
                <span>ABOUT THE INIYA HOUSE</span>
              </div>
              <h2
                className="font-headline"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', lineHeight: 1.15, textTransform: 'uppercase', marginBottom: '1.75rem' }}
              >
                United by Creativity, Driven by Purpose
              </h2>
              <div
                className="royal-card"
                style={{ padding: '2rem', borderRadius: '2px', marginBottom: '1.5rem', backgroundColor: '#FFFFFF' }}
              >
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <span
                    className="font-headline"
                    style={{ fontSize: '4rem', lineHeight: 0.8, color: 'var(--gold-primary)', fontWeight: 700, userSelect: 'none' }}
                  >
                    U
                  </span>
                  <p className="font-body" style={{ color: 'var(--text-secondary)', fontSize: '15.5px', lineHeight: 1.75 }}>
                    nited by creativity and purpose, our team operates as a single force. Every individual adds depth,
                    precision, and perspective, transforming ideas into powerful stories and experiences. We specialize in producing
                    innovative, sophisticated, and cutting-edge events, guided by our core belief that storytelling drives creativity.
                    The result is more than an event — it is an experience that inspires, connects, and stays remembered.
                  </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-hairline)' }}>
                  <span className="font-meta" style={{ fontSize: '11px', color: 'var(--gold-secondary)' }}>100+ Executed Projects Across Formats</span>
                  <span className="font-meta" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Bangalore · Pan-India Reach</span>
                </div>
              </div>

              {/* Telemetry Micro Badges */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', textAlign: 'center' }}>
                <div style={{ padding: '0.85rem', backgroundColor: 'var(--bg-surface-lowest)', border: '1px solid var(--border-hairline)' }}>
                  <span className="font-meta" style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', display: 'block' }}>100+</span>
                  <span className="font-meta" style={{ fontSize: '9px', color: 'var(--text-muted)' }}>Projects Delivered</span>
                </div>
                <div style={{ padding: '0.85rem', backgroundColor: 'var(--bg-surface-lowest)', border: '1px solid var(--border-hairline)' }}>
                  <span className="font-meta" style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', display: 'block' }}>4 Pillars</span>
                  <span className="font-meta" style={{ fontSize: '9px', color: 'var(--text-muted)' }}>Integrated Verticals</span>
                </div>
                <div style={{ padding: '0.85rem', backgroundColor: 'var(--bg-surface-lowest)', border: '1px solid var(--border-hairline)' }}>
                  <span className="font-meta" style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', display: 'block' }}>Zero-Defect</span>
                  <span className="font-meta" style={{ fontSize: '9px', color: 'var(--text-muted)' }}>Technical Staging</span>
                </div>
              </div>
            </div>

            {/* Right Column Real Event Stage Showcase */}
            <div className="royal-card" style={{ padding: '2rem', backgroundColor: '#FFFFFF', borderRadius: '2px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-hairline)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--gold-primary)' }} />
                  <span className="font-meta" style={{ fontSize: '11px', color: 'var(--gold-primary)', fontWeight: 700 }}>FEATURED MEDICAL SUMMIT</span>
                </div>
                <span className="font-meta" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>BENGALURU CORRIDOR</span>
              </div>

              <div style={{ position: 'relative', height: '230px', borderRadius: '2px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                <img
                  src="/assets/events/conferences_exhibitions.jpeg"
                  alt="Oncology Collegium South India Stage"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(17,18,22,0.85) 0%, transparent 60%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '1rem',
                  }}
                >
                  <span className="font-headline" style={{ fontSize: '17px', color: '#FFFFFF', fontWeight: 600 }}>
                    ONCOLOGY COLLEGIUM SOUTH INDIA
                  </span>
                </div>
              </div>

              {/* Specs List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '13px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', backgroundColor: 'var(--bg-surface-low)', borderRadius: '2px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Event Profile:</span>
                  <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>1,200+ Medical Delegates</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', backgroundColor: 'var(--bg-surface-low)', borderRadius: '2px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Audio-Visual Rig:</span>
                  <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Multi-Screen Ultra-Wide LED</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', backgroundColor: 'var(--bg-surface-low)', borderRadius: '2px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Acoustic Zoning:</span>
                  <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Zero-Latency Vocal Tuning</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', backgroundColor: 'var(--bg-surface-low)', borderRadius: '2px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Execution Calibre:</span>
                  <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>100% On-Time Protocol Delivery</span>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-hairline)' }}>
                <span className="font-meta" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Explore Our Event Case Ledger</span>
                <button
                  onClick={() => onNavigate('work')}
                  className="font-meta"
                  style={{ background: 'none', border: 'none', color: 'var(--gold-secondary)', fontSize: '11px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  <span>Inspect Portfolio</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          THE FOUR CORE VERTICALS
          ========================================================= */}
      <section id="verticals" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem' }}>
            <div className="badge-gold" style={{ marginBottom: '1rem' }}>
              <span>INTEGRATED CAPABILITIES</span>
            </div>
            <h2 className="font-headline" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', textTransform: 'uppercase', marginBottom: '1rem' }}>
              The Four Core Verticals
            </h2>
            <p className="font-body" style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>
              From colossal corporate summit staging and offsite destination curation to strategic branding and luxury gifting,
              we deliver end-to-end excellence.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
            {DISCIPLINES.map((item) => (
              <div
                key={item.id}
                className="royal-card"
                style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '2px', cursor: 'pointer' }}
                onClick={() => onNavigate(item.id === '04' ? 'gifting' : 'services')}
              >
                <div>
                  <div style={{ position: 'relative', height: '200px', borderRadius: '2px', overflow: 'hidden', marginBottom: '1.25rem' }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    />
                    <span
                      className="font-meta"
                      style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        padding: '4px 8px',
                        backgroundColor: 'var(--obsidian-surface)',
                        color: '#FFFFFF',
                        fontSize: '9px',
                        fontWeight: 600,
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <div className="font-meta" style={{ fontSize: '11px', color: 'var(--gold-secondary)', marginBottom: '0.4rem', fontWeight: 600 }}>
                    {item.category}
                  </div>

                  <h3 className="font-headline" style={{ fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '0.75rem', lineHeight: 1.2 }}>
                    {item.title}
                  </h3>

                  <p className="font-body" style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border-hairline)' }}>
                  <span className="font-meta" style={{ fontSize: '11px', color: 'var(--gold-primary)', fontWeight: 600 }}>
                    {item.metric}
                  </span>
                  <ArrowRight size={16} color="var(--gold-primary)" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          EXECUTED CASE DOSSIERS
          ========================================================= */}
      <section id="portfolio" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-surface-low)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <div className="badge-gold" style={{ marginBottom: '0.75rem' }}>
                <span>PROVEN EXCELLENCE</span>
              </div>
              <h2 className="font-headline" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', textTransform: 'uppercase' }}>
                Executed Case Dossiers
              </h2>
            </div>

            {/* Filter Tabs */}
            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
                backgroundColor: 'var(--bg-surface-lowest)',
                padding: '4px',
                borderRadius: '2px',
                border: '1px solid var(--border-hairline)',
              }}
            >
              {(['all', 'corporate', 'palace', 'arena'] as const).map((filterKey) => (
                <button
                  key={filterKey}
                  onClick={() => setDossierFilter(filterKey)}
                  className="font-meta"
                  style={{
                    padding: '8px 16px',
                    fontSize: '11px',
                    fontWeight: 600,
                    border: 'none',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    backgroundColor: dossierFilter === filterKey ? 'var(--obsidian-surface)' : 'transparent',
                    color: dossierFilter === filterKey ? 'var(--gold-primary)' : 'var(--text-muted)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {filterKey === 'all' ? 'All Dossiers' : filterKey.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Dossiers Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
            {filteredDossiers.map((caseItem) => (
              <div
                key={caseItem.id}
                className="royal-card"
                style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF', borderRadius: '2px' }}
              >
                <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      padding: '4px 10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.92)',
                      backdropFilter: 'blur(8px)',
                      color: 'var(--gold-secondary)',
                      fontSize: '11px',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      borderRadius: '2px',
                    }}
                  >
                    {caseItem.location}
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      padding: '4px 10px',
                      backgroundColor: 'rgba(17, 18, 22, 0.85)',
                      color: '#FFFFFF',
                      fontSize: '10px',
                      fontFamily: 'var(--font-mono)',
                      borderRadius: '2px',
                    }}
                  >
                    {caseItem.pax}
                  </div>
                </div>

                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                  <div>
                    <span className="font-meta" style={{ fontSize: '10px', color: 'var(--gold-secondary)', display: 'block', marginBottom: '0.4rem' }}>
                      {caseItem.subtitle}
                    </span>
                    <h3 className="font-headline" style={{ fontSize: '1.45rem', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                      {caseItem.title}
                    </h3>
                    <p className="font-body" style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      {caseItem.desc}
                    </p>
                  </div>

                  <div style={{ padding: '10px 14px', backgroundColor: 'var(--bg-surface-low)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '2px' }}>
                    <span className="font-meta" style={{ fontSize: '11px', color: 'var(--text-primary)', fontWeight: 600 }}>
                      {caseItem.telemetry}
                    </span>
                    <span className="font-meta" style={{ fontSize: '10px', color: 'var(--gold-secondary)', fontWeight: 700 }}>
                      VERIFIED PRODUCTION
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PRODUCTION EQUIPMENT RENTAL INVENTORY (FROM OFFICIAL PDF)
          ========================================================= */}
      <section id="equipment-rental" style={{ padding: '5rem 0', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="royal-card" style={{ padding: '3rem', backgroundColor: '#FFFFFF', borderRadius: '4px', border: '1px solid var(--border-gold)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              <div>
                <div className="badge-gold" style={{ marginBottom: '1rem' }}>
                  <span>STANDALONE & EXTENSIVE SUPPLY</span>
                </div>
                <h2 className="font-headline" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                  Event Equipment Rental Inventory
                </h2>
                <p className="font-body" style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Need equipment for your self-managed event? We support you with everything from a single projector and PA system
                  to extensive concert sound line-arrays, intelligent moving heads, and heavy staging.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button onClick={() => onNavigate('contact')} className="btn-royal-gold" style={{ fontSize: '12px' }}>
                    <span>Request Rental Catalog</span>
                    <ArrowRight size={14} />
                  </button>
                  <a
                    href="https://wa.me/917411392703?text=Hi%20The%20Iniya%20House,%20I%20would%20like%20to%20rent%20event%20equipment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-royal-outline"
                    style={{ fontSize: '12px', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
                  >
                    <MessageSquare size={14} color="var(--gold-primary)" />
                    <span>WhatsApp AV Tech Desk</span>
                  </a>
                </div>
              </div>

              {/* Equipment Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                {EQUIPMENT_RENTALS.map((eq, idx) => (
                  <div key={idx} style={{ padding: '1.25rem', backgroundColor: 'var(--bg-surface-low)', borderRadius: '2px', border: '1px solid var(--border-hairline)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      {idx === 0 && <Volume2 size={16} color="var(--gold-primary)" />}
                      {idx === 1 && <Monitor size={16} color="var(--gold-primary)" />}
                      {idx === 2 && <Sliders size={16} color="var(--gold-primary)" />}
                      {idx === 3 && <Box size={16} color="var(--gold-primary)" />}
                      <span className="font-headline" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>{eq.category}</span>
                    </div>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>{eq.items}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          THE CADENCE OF CREATION (METHODOLOGY)
          ========================================================= */}
      <section id="methodology" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-surface-low)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
            <div className="badge-gold" style={{ marginBottom: '1rem' }}>
              <span>PROCESS INTEGRITY</span>
            </div>
            <h2 className="font-headline" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              The Cadence of Creation
            </h2>
            <p className="font-body" style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>
              A four-tier operational framework guaranteeing that no variable remains uncalculated.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {METHODOLOGY.map((step) => (
              <div
                key={step.phase}
                className="royal-card"
                style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '2px', backgroundColor: '#FFFFFF' }}
              >
                <div>
                  <div className="font-headline" style={{ fontSize: '2.5rem', color: 'var(--gold-primary)', fontWeight: 700, marginBottom: '0.75rem' }}>
                    {step.phase}
                  </div>
                  <div className="font-meta" style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                    {step.subtitle}
                  </div>
                  <h3 className="font-headline" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                    {step.title}
                  </h3>
                  <p className="font-body" style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {step.desc}
                  </p>
                </div>
                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-hairline)', textAlign: 'center' }}>
                  <span className="font-meta" style={{ fontSize: '10.5px', color: 'var(--gold-secondary)', fontWeight: 600 }}>
                    {step.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          REAL CLIENTELE MARQUEE (10 VERIFIED LOGOS FROM OFFICIAL PDF)
          ========================================================= */}
      <section id="client-partners" style={{ padding: '5.5rem 0', backgroundColor: 'var(--bg-surface)', overflow: 'hidden' }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="font-meta" style={{ fontSize: '11px', color: 'var(--gold-secondary)', display: 'block', marginBottom: '0.5rem' }}>
            OFFICIAL CLIENTELE & ENTERPRISE PARTNERS
          </span>
          <h2 className="font-headline" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', textTransform: 'uppercase' }}>
            Trusted by Industry Titans & Medical Conclaves
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.25rem', maxWidth: '1440px', margin: '0 auto', padding: '0 2rem' }}>
          {PATRONS.map((patron, i) => (
            <div
              key={i}
              className="royal-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '0.85rem',
                backgroundColor: '#FFFFFF',
                borderRadius: '4px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
            >
              <div style={{ height: '60px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={patron.logo}
                  alt={patron.name}
                  style={{ maxHeight: '52px', maxWidth: '160px', objectFit: 'contain' }}
                />
              </div>
              <div style={{ width: '100%', borderTop: '1px solid var(--border-hairline)', paddingTop: '0.75rem' }}>
                <span className="font-headline" style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', display: 'block' }}>
                  {patron.name}
                </span>
                <span className="font-meta" style={{ fontSize: '10px', color: 'var(--gold-secondary)', display: 'block', marginTop: '2px' }}>
                  {patron.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          CLOSING CALL TO ACTION & DIRECT BRIEFING DISPATCH
          ========================================================= */}
      <section id="inquiry" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-surface-low)' }}>
        <div className="container">
          <div className="obsidian-card" style={{ padding: 'clamp(2.5rem, 5vw, 4.5rem)', borderRadius: '2px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
              {/* Left Column */}
              <div>
                <div className="badge-obsidian" style={{ marginBottom: '1.25rem' }}>
                  <span>DIRECT EVENT LIAISON</span>
                </div>
                <h2 className="font-headline" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: '#FFFFFF', textTransform: 'uppercase', marginBottom: '1.25rem', lineHeight: 1.15 }}>
                  Plan Your Event with The Iniya House
                </h2>
                <p className="font-body" style={{ color: '#C0CBD0', fontSize: '16px', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '520px' }}>
                  Whether organizing a medical conclave, corporate town hall, luxury destination offsite, or branded employee gifting kits,
                  our specialized team brings complete strategy, energy, and flawless execution.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '14px', color: '#FFFFFF' }}>
                  <div>Direct Phone / VIP Line: <strong style={{ color: 'var(--gold-tertiary)' }}>+91 74113 92703</strong></div>
                  <div>Official Correspondence: <strong style={{ color: 'var(--gold-tertiary)' }}>info.iniyahouse@gmail.com</strong></div>
                  <div>Atelier Location: <strong style={{ color: 'var(--gold-tertiary)' }}>GKW Layout, Vijayanagar / Magadi Rd, Bangalore 560023</strong></div>
                </div>
              </div>

              {/* Right Column: Instant Briefing Requisition */}
              <div style={{ backgroundColor: 'var(--bg-surface-lowest)', color: 'var(--text-primary)', padding: '2rem', borderRadius: '2px', border: '1px solid var(--border-gold)' }}>
                {quickFormSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                    <CheckCircle2 size={48} color="var(--gold-primary)" style={{ margin: '0 auto 1rem' }} />
                    <h3 className="font-headline" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Requisition Registered</h3>
                    <p className="font-body" style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '1.5rem' }}>
                      Our event coordination team has received your parameters. We will contact you within 4 hours.
                    </p>
                    <a
                      href={`https://wa.me/917411392703?text=Hi%20Iniya%20House,%20I%20just%20submitted%20an%20inquiry%20for%20${encodeURIComponent(quickForm.entity)}%20(${encodeURIComponent(quickForm.scale)}).`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-royal-gold"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', padding: '10px 18px', fontSize: '12px' }}
                    >
                      <MessageSquare size={16} />
                      <span>Chat Immediately on WhatsApp</span>
                    </a>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setQuickFormSubmitted(true);
                    }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                  >
                    <div>
                      <span className="font-meta" style={{ fontSize: '11px', color: 'var(--gold-secondary)', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                        QUICK EVENT PARAMETERS
                      </span>
                      <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Submit immediate specifications for prompt consultation.</p>
                    </div>

                    <input
                      type="text"
                      required
                      placeholder="Organization / Company / Family Name"
                      value={quickForm.entity}
                      onChange={(e) => setQuickForm({ ...quickForm, entity: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-hairline)', borderRadius: '2px', fontSize: '14px', outline: 'none' }}
                    />

                    <select
                      value={quickForm.vertical}
                      onChange={(e) => setQuickForm({ ...quickForm, vertical: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-hairline)', borderRadius: '2px', fontSize: '14px', outline: 'none', background: '#FFFFFF' }}
                    >
                      <option>Corporate Events & Summits</option>
                      <option>Leisures & Corporate Offsites (MICE)</option>
                      <option>Branding & Creative Activations</option>
                      <option>Corporate Gifting & Hampers</option>
                      <option>Audio-Visual Equipment Rental</option>
                      <option>Private Wedding / Celebration</option>
                    </select>

                    <select
                      value={quickForm.scale}
                      onChange={(e) => setQuickForm({ ...quickForm, scale: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-hairline)', borderRadius: '2px', fontSize: '14px', outline: 'none', background: '#FFFFFF' }}
                    >
                      <option>Intimate Group (25 - 75 PAX)</option>
                      <option>Medium Assembly (75 - 250 PAX)</option>
                      <option>Large Summit (250 - 1,000 PAX)</option>
                      <option>Monumental Arena (1,000 - 10,000+ PAX)</option>
                    </select>

                    <input
                      type="text"
                      required
                      placeholder="Contact Phone / WhatsApp Line"
                      value={quickForm.contact}
                      onChange={(e) => setQuickForm({ ...quickForm, contact: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-hairline)', borderRadius: '2px', fontSize: '14px', outline: 'none' }}
                    />

                    <button type="submit" className="btn-royal-gold" style={{ width: '100%', marginTop: '0.5rem' }}>
                      <Send size={14} />
                      <span>Submit Event Requisition</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
