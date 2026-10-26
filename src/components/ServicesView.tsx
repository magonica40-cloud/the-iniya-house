import React, { useState } from 'react';
import { Shield, ArrowRight, MessageSquare, CheckCircle2, Volume2, Monitor, Box, Sliders } from 'lucide-react';
import { CORPORATE_SERVICES, EQUIPMENT_RENTALS, LEISURES_OFFERINGS } from '../data/content';

interface ServicesViewProps {
  onNavigate: (tab: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate }) => {
  // Estimator Reactive State
  const [selectedVertical, setSelectedVertical] = useState<'events' | 'leisure' | 'branding' | 'gifting'>('events');
  const [capacity, setCapacity] = useState<number>(500);
  const [selectedTier, setSelectedTier] = useState<'standard' | 'flagship' | 'monumental'>('flagship');

  const verticalMultipliers: Record<string, { mult: number; name: string; title: string }> = {
    events: { mult: 1.0, name: 'Pillar 01', title: 'Corporate Events & Summits' },
    leisure: { mult: 1.4, name: 'Pillar 02', title: 'MICE & Luxury Offsites' },
    branding: { mult: 0.8, name: 'Pillar 03', title: 'Brand Activations & Video' },
    gifting: { mult: 0.6, name: 'Pillar 04', title: 'Curated Corporate Gifting' },
  };

  const tierMultipliers: Record<string, { mult: number; name: string; title: string; desc: string }> = {
    standard: { mult: 1.0, name: 'Essential Stage', title: 'Professional Core', desc: 'Crisp audio-visuals, presentation staging, lighting, on-site director.' },
    flagship: { mult: 1.6, name: 'Flagship Summit', title: 'Executive Production', desc: 'Ultra-wide 4K curved LED, intelligent moving beams, spatial sound, VIP decor.' },
    monumental: { mult: 2.4, name: 'Monumental Arena', title: 'Signature Spectacle', desc: 'Concert line arrays, multi-tier staging, cold pyrotechnics, live streaming, broadcast grade.' },
  };

  // Real-time calculation
  const baseCostPerHead = 2800;
  const rawTotal = Math.round(capacity * baseCostPerHead * verticalMultipliers[selectedVertical].mult * tierMultipliers[selectedTier].mult);
  
  // Format as Indian Currency (Lakhs / Crores)
  const formattedINR = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(rawTotal);

  const usdEquivalent = (rawTotal / 86.5).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

  const breakdownAV = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(rawTotal * 0.40);
  const breakdownStaging = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(rawTotal * 0.30);
  const breakdownHosp = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(rawTotal * 0.20);
  const breakdownMgmt = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(rawTotal * 0.10);

  return (
    <div style={{ paddingTop: '80px', width: '100%', overflow: 'hidden' }}>
      {/* Header Banner */}
      <section style={{ backgroundColor: 'var(--bg-surface-lowest)', padding: '5rem 0 3.5rem', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <div className="badge-gold" style={{ marginBottom: '1.25rem' }}>
            <span>THE INIYA HOUSE · FULL SPECTRUM SERVICES</span>
          </div>
          <h1
            className="font-headline"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', textTransform: 'uppercase', lineHeight: 1.15, marginBottom: '1.5rem' }}
          >
            Turnkey Event Production & <br />
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--gold-primary)' }}>
              Experiential Architecture.
            </span>
          </h1>
          <p className="font-body" style={{ color: 'var(--text-secondary)', fontSize: '17px', lineHeight: 1.7, maxWidth: '750px', margin: '0 auto 3rem' }}>
            From high-level corporate summits and scientific medical congresses to destination leadership retreats,
            storytelling brand campaigns, and bespoke corporate gifting.
          </p>

          {/* 4 Scope Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            {[
              { val: '100+ Projects', lbl: 'Executed Turnkey', sub: 'Across diverse formats & industries' },
              { val: '4 Divisions', lbl: 'Unified Capabilities', sub: 'Events · Leisures · Branding · Gifting' },
              { val: '10+ Titans', lbl: 'Enterprise Trust', sub: 'Dell, IBM, Narayana, RKFI, Decathlon' },
              { val: '100%', lbl: 'Zero-Defect Protocol', sub: 'Flawless technical staging & delivery' },
            ].map((metric, i) => (
              <div key={i} className="royal-card" style={{ padding: '1.5rem', textAlign: 'left', borderRadius: '2px', backgroundColor: 'var(--bg-surface-low)' }}>
                <div className="font-headline" style={{ fontSize: '1.8rem', color: 'var(--gold-primary)', fontWeight: 700 }}>
                  {metric.val}
                </div>
                <div className="font-headline" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                  {metric.lbl}
                </div>
                <div className="font-body" style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                  {metric.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Events Spectrum (From PDF Page 4 & 5) */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
            <span className="font-meta" style={{ fontSize: '11px', color: 'var(--gold-secondary)', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>
              DIVISION 01 // EVENTS
            </span>
            <h2 className="font-headline" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', textTransform: 'uppercase' }}>
              Corporate & Special Event Formats
            </h2>
            <p className="font-body" style={{ color: 'var(--text-secondary)', fontSize: '15px', marginTop: '0.5rem' }}>
              We curate immersive, thoughtfully designed experiences that leave a lasting impression on your employees, partners, and attendees.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {CORPORATE_SERVICES.map((srv, idx) => (
              <div
                key={idx}
                className="royal-card"
                style={{
                  padding: '2rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '4px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <CheckCircle2 size={18} color="var(--gold-primary)" />
                    <h3 className="font-headline" style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                      {srv.title}
                    </h3>
                  </div>
                  <p className="font-body" style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {srv.desc}
                  </p>
                </div>

                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-hairline)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="font-meta" style={{ fontSize: '10.5px', color: 'var(--gold-secondary)' }}>Turnkey Execution</span>
                  <button onClick={() => onNavigate('contact')} style={{ background: 'none', border: 'none', color: 'var(--gold-primary)', fontWeight: 600, fontSize: '11px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '3px' }}>
                    <span>Plan Format</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Division 02: Leisures & MICE Stays (From PDF Page 6) */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-surface-low)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <div className="badge-gold" style={{ marginBottom: '1rem' }}>
                <span>DIVISION 02 // LEISURES & MICE</span>
              </div>
              <h2 className="font-headline" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                MICE & Curated Destination Offsites
              </h2>
              <p className="font-body" style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.7, marginBottom: '2rem' }}>
                Leisure curates seamless MICE and offsite experiences by bringing together the right destinations, stays, and activities.
                From venue discovery and logistics to transport and engaging leisure programs, we simplify the entire process to deliver smooth, well-managed journeys.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {LEISURES_OFFERINGS.map((l, i) => (
                  <div key={i} style={{ padding: '1rem', backgroundColor: '#FFFFFF', borderRadius: '4px', border: '1px solid var(--border-hairline)' }}>
                    <strong style={{ fontSize: '14px', color: 'var(--text-primary)', display: 'block', marginBottom: '4px' }}>{l.type}</strong>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>{l.desc}</p>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={() => onNavigate('contact')} className="btn-royal-gold">
                  <span>Plan Corporate Offsite</span>
                  <ArrowRight size={14} />
                </button>
                <a
                  href="https://wa.me/917411392703?text=Hi%20The%20Iniya%20House,%20I%20would%20like%20to%20plan%20a%20corporate%20MICE%20offsite."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-royal-outline"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
                >
                  <MessageSquare size={14} color="var(--gold-primary)" />
                  <span>WhatsApp Travel Desk</span>
                </a>
              </div>
            </div>

            {/* Visual Offsite Collage */}
            <div className="royal-card" style={{ padding: '1.5rem', backgroundColor: '#FFFFFF', borderRadius: '4px' }}>
              <div style={{ height: '360px', borderRadius: '2px', overflow: 'hidden', position: 'relative', marginBottom: '1.5rem' }}>
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
                  alt="Luxury Destination Resort"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', bottom: 0, insetInline: 0, padding: '1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 80%)', color: '#FFFFFF' }}>
                  <span className="font-headline" style={{ fontSize: '18px', fontWeight: 600 }}>Heritage Forts, Palaces & Nature Sanctuaries</span>
                  <p style={{ fontSize: '12px', color: '#C0CBD0', marginTop: '4px' }}>Supporting large corporate groups with transport, luxury accommodation & curated day-outs.</p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', textAlign: 'center' }}>
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-surface-low)', borderRadius: '2px' }}>
                  <span className="font-meta" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>Coorg & Kabini</span>
                  <span style={{ fontSize: '10px', color: 'var(--text-muted)', display: 'block' }}>Nature Camps</span>
                </div>
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-surface-low)', borderRadius: '2px' }}>
                  <span className="font-meta" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>Rajasthan</span>
                  <span style={{ fontSize: '10px', color: 'var(--text-muted)', display: 'block' }}>Heritage Palaces</span>
                </div>
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-surface-low)', borderRadius: '2px' }}>
                  <span className="font-meta" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>Goa & Coast</span>
                  <span style={{ fontSize: '10px', color: 'var(--text-muted)', display: 'block' }}>Luxury Resorts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Equipment Rental Section */}
      <section style={{ padding: '5.5rem 0', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
            <span className="font-meta" style={{ fontSize: '11px', color: 'var(--gold-secondary)', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>
              HARDWARE INVENTORY
            </span>
            <h2 className="font-headline" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', textTransform: 'uppercase' }}>
              Standalone Audio-Visual Equipment Rental
            </h2>
            <p className="font-body" style={{ color: 'var(--text-secondary)', fontSize: '15px', marginTop: '0.5rem' }}>
              We also help you in renting out standalone equipment for your self-managed event — from a single projector with PA system to comprehensive concert sound and heavy lighting rigs.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {EQUIPMENT_RENTALS.map((eq, idx) => (
              <div key={idx} className="royal-card" style={{ padding: '2rem', backgroundColor: '#FFFFFF', borderRadius: '4px', border: '1px solid var(--border-hairline)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  {idx === 0 && <Volume2 size={24} color="var(--gold-primary)" />}
                  {idx === 1 && <Monitor size={24} color="var(--gold-primary)" />}
                  {idx === 2 && <Sliders size={24} color="var(--gold-primary)" />}
                  {idx === 3 && <Box size={24} color="var(--gold-primary)" />}
                  <h3 className="font-headline" style={{ fontSize: '1.25rem' }}>{eq.category}</h3>
                </div>
                <p className="font-body" style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{eq.items}</p>
                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-hairline)' }}>
                  <a
                    href={`https://wa.me/917411392703?text=Hi%20The%20Iniya%20House,%20I%20would%20like%20to%20rent%20${encodeURIComponent(eq.category)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-meta"
                    style={{ color: 'var(--gold-primary)', fontSize: '11px', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    <span>Check Availability</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Capital & Scope Estimator */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-surface-low)' }}>
        <div className="container">
          <div className="royal-card" style={{ padding: 'clamp(2rem, 4vw, 3.5rem)', backgroundColor: '#FFFFFF', borderRadius: '4px' }}>
            <div style={{ maxWidth: '750px', marginBottom: '3rem' }}>
              <div className="badge-gold" style={{ marginBottom: '1rem' }}>
                <span>INTERACTIVE BUDGET CALCULATOR</span>
              </div>
              <h2 className="font-headline" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', textTransform: 'uppercase' }}>
                Event Scope & Capital Estimator
              </h2>
              <p className="font-body" style={{ color: 'var(--text-secondary)', fontSize: '15px', marginTop: '0.5rem' }}>
                Adjust parameters to calculate preliminary investment benchmarks for your upcoming production.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem' }}>
              {/* Configuration Controls */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                {/* Step 1: Vertical Selector */}
                <div>
                  <label className="font-meta" style={{ fontSize: '11px', color: 'var(--gold-secondary)', fontWeight: 700, display: 'block', marginBottom: '1rem' }}>
                    01 // SELECT CORE VERTICAL
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                    {(['events', 'leisure', 'branding', 'gifting'] as const).map((vKey) => {
                      const v = verticalMultipliers[vKey];
                      const isSelected = selectedVertical === vKey;
                      return (
                        <button
                          key={vKey}
                          onClick={() => setSelectedVertical(vKey)}
                          style={{
                            padding: '1rem',
                            textAlign: 'left',
                            borderRadius: '2px',
                            cursor: 'pointer',
                            border: isSelected ? '1px solid var(--gold-primary)' : '1px solid var(--border-hairline)',
                            backgroundColor: isSelected ? 'var(--obsidian-surface)' : 'var(--bg-surface-low)',
                            color: isSelected ? '#FFFFFF' : 'var(--text-primary)',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          <span className="font-meta" style={{ fontSize: '10px', color: isSelected ? 'var(--gold-primary)' : 'var(--gold-secondary)', display: 'block' }}>
                            {v.name}
                          </span>
                          <strong className="font-headline" style={{ fontSize: '14px', display: 'block', marginTop: '4px' }}>
                            {v.title}
                          </strong>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Audience Capacity Slider */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <label className="font-meta" style={{ fontSize: '11px', color: 'var(--gold-secondary)', fontWeight: 700 }}>
                      02 // ESTIMATED ATTENDEES / PAX SCALE
                    </label>
                    <span
                      className="font-meta"
                      style={{ padding: '4px 10px', backgroundColor: 'var(--obsidian-surface)', color: 'var(--gold-primary)', borderRadius: '2px', fontSize: '12px', fontWeight: 700 }}
                    >
                      {capacity.toLocaleString()} Attendees
                    </span>
                  </div>

                  <input
                    type="range"
                    min="50"
                    max="5000"
                    step="50"
                    value={capacity}
                    onChange={(e) => setCapacity(Number(e.target.value))}
                    className="gold-slider"
                  />

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: '0.5rem' }}>
                    <span>50 Intimate</span>
                    <span>500 Conclave</span>
                    <span>2,000 Summit</span>
                    <span>5,000+ Arena</span>
                  </div>
                </div>

                {/* Step 3: Production Intensity Tier */}
                <div>
                  <label className="font-meta" style={{ fontSize: '11px', color: 'var(--gold-secondary)', fontWeight: 700, display: 'block', marginBottom: '1rem' }}>
                    03 // PRODUCTION & TECH RIG INTENSITY
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem' }}>
                    {(['standard', 'flagship', 'monumental'] as const).map((tierKey) => {
                      const tier = tierMultipliers[tierKey];
                      const isSelected = selectedTier === tierKey;
                      return (
                        <button
                          key={tierKey}
                          onClick={() => setSelectedTier(tierKey)}
                          style={{
                            padding: '1rem',
                            textAlign: 'left',
                            borderRadius: '2px',
                            cursor: 'pointer',
                            border: isSelected ? '1px solid var(--gold-primary)' : '1px solid var(--border-hairline)',
                            backgroundColor: isSelected ? 'var(--obsidian-surface)' : 'var(--bg-surface-low)',
                            color: isSelected ? '#FFFFFF' : 'var(--text-primary)',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          <span className="font-meta" style={{ fontSize: '9px', color: isSelected ? 'var(--gold-primary)' : 'var(--gold-secondary)', display: 'block' }}>
                            {tier.name}
                          </span>
                          <strong className="font-headline" style={{ fontSize: '13px', display: 'block', marginTop: '2px', marginBottom: '4px' }}>
                            {tier.title}
                          </strong>
                          <span style={{ fontSize: '11px', color: isSelected ? '#C0CBD0' : 'var(--text-muted)', display: 'block', lineHeight: 1.4 }}>
                            {tier.desc}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Readout Result Card */}
              <div
                style={{
                  backgroundColor: 'var(--bg-surface-low)',
                  border: '1px solid var(--border-gold)',
                  padding: '2.5rem',
                  borderRadius: '4px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span className="font-meta" style={{ fontSize: '11px', color: 'var(--gold-secondary)', fontWeight: 700 }}>
                      INDICATIVE BUDGET VALUATION
                    </span>
                    <Shield size={18} color="var(--gold-primary)" />
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <span className="font-meta" style={{ fontSize: '10px', color: 'var(--text-muted)' }}>
                      ESTIMATED PRODUCTION ENVELOPE (EXCL. TAXES)
                    </span>
                    <div
                      className="font-headline"
                      style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 700, color: 'var(--gold-primary)', marginTop: '0.25rem', lineHeight: 1.1 }}
                    >
                      {formattedINR}
                    </div>
                    <span className="font-body" style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'block', marginTop: '0.4rem' }}>
                      Indicative INR Budget · Approx. {usdEquivalent}
                    </span>
                  </div>

                  {/* Parametric Breakdown */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', borderTop: '1px solid var(--border-hairline)', paddingTop: '1.25rem', fontSize: '13px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Audio-Visual & 4K LED Walls (40%):</span>
                      <strong style={{ fontFamily: 'var(--font-mono)' }}>{breakdownAV}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Staging, Trussing & Lighting (30%):</span>
                      <strong style={{ fontFamily: 'var(--font-mono)' }}>{breakdownStaging}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Hospitality & Guest Flow (20%):</span>
                      <strong style={{ fontFamily: 'var(--font-mono)' }}>{breakdownHosp}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Turnkey Direction & Safety (10%):</span>
                      <strong style={{ fontFamily: 'var(--font-mono)' }}>{breakdownMgmt}</strong>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '2.5rem' }}>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="btn-royal-gold"
                    style={{ width: '100%', padding: '1rem', fontSize: '12px' }}
                  >
                    <span>Request Official Quotation & Rider</span>
                    <ArrowRight size={16} />
                  </button>
                  <p className="font-meta" style={{ textAlign: 'center', fontSize: '10px', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
                    Indicative preliminary estimate only. Subject to technical site inspection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
