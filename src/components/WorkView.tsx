import React, { useState } from 'react';
import { CASE_DOSSIERS } from '../data/content';
import { ArrowRight } from 'lucide-react';

interface WorkViewProps {
  onNavigate: (tab: string) => void;
}

export const WorkView: React.FC<WorkViewProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<string>('all');
  const interactiveRaytrace = 1.06;

  const filteredCases = CASE_DOSSIERS.filter(
    (c) => filter === 'all' || c.category === filter
  );

  return (
    <div style={{ paddingTop: '80px', width: '100%', overflow: 'hidden' }}>
      {/* Header & Live Scenographic Telemetry Conduit */}
      <section style={{ backgroundColor: 'var(--bg-surface-lowest)', padding: '5rem 0 3rem', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <span className="font-meta" style={{ fontSize: '11px', color: 'var(--gold-secondary)', fontWeight: 700 }}>
              CHRONOLOGICAL ARCHIVE 2023–2025 // MONUMENTAL REGISTER · BANGALORE HEADQUARTERS
            </span>
            <div className="badge-gold">
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--gold-primary)' }} />
              <span>ACTIVE SOVEREIGN FOLIO · DOC. REF: IH-5820D-8802</span>
            </div>
          </div>

          <div style={{ maxWidth: '900px', marginBottom: '3.5rem' }}>
            <h1
              className="font-headline"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', textTransform: 'uppercase', lineHeight: 1.15, marginBottom: '1.25rem' }}
            >
              Architectural Spatial Rigor & <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--gold-primary)' }}>
                Royal Productions.
              </span>
            </h1>
            <p className="font-body" style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.7 }}>
              From monolithic 60-meter curves to buoyant palace pontoons on Lake Pichola: our masterworks balance sovereign majesty with aerospace-grade structural precision.
            </p>
          </div>

          {/* Live Scenographic Telemetry Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem',
              backgroundColor: 'var(--bg-surface-low)',
              padding: '1.5rem',
              borderRadius: '2px',
              border: '1px solid var(--border-gold)',
            }}
          >
            <div>
              <span className="font-meta" style={{ fontSize: '10px', color: 'var(--gold-secondary)', display: 'block' }}>DANTE MESH LATENCY</span>
              <strong className="font-headline" style={{ fontSize: '20px', color: 'var(--text-primary)' }}>&lt; 1.18 ms</strong>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block' }}>96kHz Ultra-Sync</span>
            </div>
            <div>
              <span className="font-meta" style={{ fontSize: '10px', color: 'var(--gold-secondary)', display: 'block' }}>CERTIFIED RIGGING</span>
              <strong className="font-headline" style={{ fontSize: '20px', color: 'var(--text-primary)' }}>142.4 M.T.</strong>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block' }}>Gross Load Capacity</span>
            </div>
            <div>
              <span className="font-meta" style={{ fontSize: '10px', color: 'var(--gold-secondary)', display: 'block' }}>ACTIVE PIXEL CANVAS</span>
              <strong className="font-headline" style={{ fontSize: '20px', color: 'var(--text-primary)' }}>84.8M</strong>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block' }}>Discrete Diodes Calibrated</span>
            </div>
            <div>
              <span className="font-meta" style={{ fontSize: '10px', color: 'var(--gold-secondary)', display: 'block' }}>SCENOGRAPHIC REDUNDANCY</span>
              <strong className="font-headline" style={{ fontSize: '20px', color: 'var(--gold-primary)' }}>99.999%</strong>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block' }}>Zero-Dropout Dual Rail</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filterable Case Files */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            {[
              { id: 'all', label: 'All Productions (04)' },
              { id: 'corporate', label: 'Corporate Summits (02)' },
              { id: 'palace', label: 'Royal Celebrations (01)' },
              { id: 'arena', label: 'Galas & Banquets (01)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className="font-meta"
                style={{
                  padding: '10px 20px',
                  fontSize: '11px',
                  fontWeight: 600,
                  borderRadius: '2px',
                  cursor: 'pointer',
                  border: filter === tab.id ? '1px solid var(--gold-primary)' : '1px solid var(--border-hairline)',
                  backgroundColor: filter === tab.id ? 'var(--obsidian-surface)' : 'var(--bg-surface-lowest)',
                  color: filter === tab.id ? 'var(--gold-primary)' : 'var(--text-secondary)',
                  transition: 'all 0.2s ease',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dossiers List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {filteredCases.map((caseItem, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={caseItem.id}
                  className="royal-card"
                  style={{ padding: 'clamp(1.5rem, 3vw, 2.75rem)', backgroundColor: '#FFFFFF', borderRadius: '2px' }}
                >
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                      gap: '3rem',
                      alignItems: 'center',
                    }}
                  >
                    {/* Visual Column */}
                    <div style={{ position: 'relative', height: '360px', borderRadius: '2px', overflow: 'hidden', order: isEven ? 1 : 2 }}>
                      <img
                        src={caseItem.image}
                        alt={caseItem.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          top: '15px',
                          left: '15px',
                          padding: '6px 12px',
                          backgroundColor: 'rgba(17, 18, 22, 0.88)',
                          color: 'var(--gold-primary)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11px',
                          fontWeight: 700,
                        }}
                      >
                        CASE NO. {caseItem.id}
                      </div>
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '15px',
                          right: '15px',
                          padding: '6px 12px',
                          backgroundColor: 'rgba(255, 255, 255, 0.94)',
                          color: 'var(--text-primary)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11px',
                          fontWeight: 600,
                        }}
                      >
                        {caseItem.location}
                      </div>
                    </div>

                    {/* Editorial Details Column */}
                    <div style={{ order: isEven ? 2 : 1 }}>
                      <span className="font-meta" style={{ fontSize: '11px', color: 'var(--gold-secondary)', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>
                        {caseItem.subtitle} · {caseItem.year}
                      </span>
                      <h2 className="font-headline" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', lineHeight: 1.2, textTransform: 'uppercase', marginBottom: '1rem' }}>
                        {caseItem.title}
                      </h2>
                      <p className="font-body" style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.7, marginBottom: '2rem' }}>
                        {caseItem.desc}
                      </p>

                      {/* Technical Telemetry Matrix */}
                      {caseItem.specs && (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', padding: '1rem', backgroundColor: 'var(--bg-surface-low)', borderRadius: '2px', marginBottom: '2rem' }}>
                          {Object.entries(caseItem.specs).map(([k, v]) => (
                            <div key={k}>
                              <span className="font-meta" style={{ fontSize: '10px', color: 'var(--text-muted)', display: 'block' }}>{k}</span>
                              <strong style={{ fontSize: '13px', color: 'var(--text-primary)' }}>{v}</strong>
                            </div>
                          ))}
                        </div>
                      )}

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border-hairline)' }}>
                        <span className="font-meta" style={{ fontSize: '11px', color: 'var(--gold-primary)', fontWeight: 700 }}>
                          {caseItem.telemetry}
                        </span>
                        <button
                          onClick={() => onNavigate('contact')}
                          className="btn-royal-primary"
                          style={{ padding: '0.65rem 1.25rem', fontSize: '11px' }}
                        >
                          <span>Request Dossier</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          INTERACTIVE ENGINEERING TOLERANCE SCHEMATICS (INLINE SVGS)
          ========================================================= */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-surface-low)', borderTop: '1px solid var(--border-hairline)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem' }}>
            <div className="badge-gold" style={{ marginBottom: '1rem' }}>
              <span>ENGINEERING PEER-REVIEW ARCHIVE</span>
            </div>
            <h2 className="font-headline" style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Structural Tolerances & Acoustic Physics
            </h2>
            <p className="font-body" style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>
              Every spatial commission is governed by finite element analysis (FEA) and impulse raytracing to guarantee imperial acoustic clarity and life-safety fail-safes.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '2.5rem' }}>
            {/* Schematic 1: RT60 Decay Frequency Raytrace */}
            <div className="royal-card" style={{ padding: '2rem', backgroundColor: '#FFFFFF', borderRadius: '2px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid var(--border-hairline)', paddingBottom: '0.75rem' }}>
                <span className="font-meta" style={{ fontSize: '11px', color: 'var(--gold-secondary)', fontWeight: 700 }}>
                  SCHEMATIC REF: AC-RT60-BIEC
                </span>
                <span className="font-meta" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>SABINE FORMULA V3</span>
              </div>

              <h3 className="font-headline" style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>
                RT60 Decay Frequency Raytrace (Octave Band)
              </h3>
              <p className="font-body" style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Measured reverberation dissipation across active performance chambers under fully loaded air conditioning and seated crowd density.
              </p>

              {/* Inline SVG Chart */}
              <div style={{ backgroundColor: 'var(--bg-surface-low)', padding: '1.5rem', borderRadius: '2px', border: '1px solid var(--border-hairline)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--gold-primary)', fontWeight: 700 }}>Target: 1.12s ± 0.05s</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Optimized: {interactiveRaytrace.toFixed(2)}s @ 1kHz</span>
                </div>

                <svg viewBox="0 0 500 180" style={{ width: '100%', height: 'auto', display: 'block' }}>
                  {/* Grid Lines */}
                  <line x1="50" y1="30" x2="480" y2="30" stroke="#E2D9CC" strokeDasharray="3 3" />
                  <line x1="50" y1="70" x2="480" y2="70" stroke="#E2D9CC" strokeDasharray="3 3" />
                  <line x1="50" y1="110" x2="480" y2="110" stroke="#E2D9CC" strokeDasharray="3 3" />
                  <line x1="50" y1="150" x2="480" y2="150" stroke="#111216" strokeWidth="1.5" />
                  
                  {/* Y Axis Labels */}
                  <text x="35" y="35" fontSize="10" fill="#7E786E" textAnchor="end">2.0s</text>
                  <text x="35" y="75" fontSize="10" fill="#7E786E" textAnchor="end">1.5s</text>
                  <text x="35" y="115" fontSize="10" fill="#7E786E" textAnchor="end">1.0s</text>
                  <text x="35" y="155" fontSize="10" fill="#7E786E" textAnchor="end">0.5s</text>

                  {/* X Axis Labels */}
                  <text x="90" y="170" fontSize="10" fill="#7E786E" textAnchor="middle">125Hz</text>
                  <text x="180" y="170" fontSize="10" fill="#7E786E" textAnchor="middle">250Hz</text>
                  <text x="270" y="170" fontSize="10" fill="#7E786E" textAnchor="middle">500Hz</text>
                  <text x="360" y="170" fontSize="10" fill="#7E786E" textAnchor="middle">1kHz</text>
                  <text x="450" y="170" fontSize="10" fill="#7E786E" textAnchor="middle">2kHz</text>

                  {/* Untreated Shell (High echo curve) */}
                  <path d="M 90 40 Q 200 65 270 90 T 450 115" fill="none" stroke="#ba1a1a" strokeWidth="2" strokeDasharray="4 4" />
                  
                  {/* The Iniya Calibrated Target Curve */}
                  <path d="M 90 100 Q 200 108 270 112 T 450 120" fill="none" stroke="#C59B27" strokeWidth="3" />
                  
                  {/* Data points */}
                  <circle cx="90" cy="100" r="4" fill="#C59B27" />
                  <circle cx="180" cy="106" r="4" fill="#C59B27" />
                  <circle cx="270" cy="112" r="4" fill="#C59B27" />
                  <circle cx="360" cy="115" r="4" fill="#C59B27" />
                  <circle cx="450" cy="120" r="4" fill="#C59B27" />
                </svg>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '12px', height: '3px', backgroundColor: '#C59B27' }} />
                    <span>The Iniya Calibrated Target</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '12px', height: '2px', backgroundColor: '#ba1a1a', borderTop: '1px dashed #ba1a1a' }} />
                    <span>Untreated Concrete Shell</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Schematic 2: Cantilever Deflection & Bending Equilibrium */}
            <div className="royal-card" style={{ padding: '2rem', backgroundColor: '#FFFFFF', borderRadius: '2px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid var(--border-hairline)', paddingBottom: '0.75rem' }}>
                <span className="font-meta" style={{ fontSize: '11px', color: 'var(--gold-secondary)', fontWeight: 700 }}>
                  SCHEMATIC REF: ST-FEA-54M
                </span>
                <span className="font-meta" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>TÜV RHEINLAND #8921-A</span>
              </div>

              <h3 className="font-headline" style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>
                Cantilever Deflection & Bending Equilibrium
              </h3>
              <p className="font-body" style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Stress gradient and bending moment distribution during peak dynamic hoisted movement of the 54m gilded arched truss.
              </p>

              {/* Inline SVG Diagram */}
              <div style={{ backgroundColor: 'var(--bg-surface-low)', padding: '1.5rem', borderRadius: '2px', border: '1px solid var(--border-hairline)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--gold-secondary)' }}>Max Allowable Deflection: L/300 (180mm)</span>
                  <span style={{ color: 'var(--gold-primary)', fontWeight: 700 }}>Simulated Peak: 34.2mm (Safe)</span>
                </div>

                <svg viewBox="0 0 500 180" style={{ width: '100%', height: 'auto', display: 'block' }}>
                  {/* Ground Line */}
                  <line x1="40" y1="160" x2="460" y2="160" stroke="#111216" strokeWidth="2" />
                  
                  {/* Left Column Anchor */}
                  <rect x="70" y="70" width="20" height="90" fill="#111216" />
                  <polygon points="65,160 95,160 80,145" fill="#C59B27" />

                  {/* Right Column Anchor */}
                  <rect x="410" y="70" width="20" height="90" fill="#111216" />
                  <polygon points="405,160 435,160 420,145" fill="#C59B27" />

                  {/* Arched Truss Profile */}
                  <path d="M 80 70 Q 250 25 420 70" fill="none" stroke="#C59B27" strokeWidth="5" />
                  <path d="M 80 85 Q 250 40 420 85" fill="none" stroke="#8C6D23" strokeWidth="2" />

                  {/* Internal Webbing */}
                  <line x1="130" y1="62" x2="130" y2="77" stroke="#8C6D23" strokeWidth="1.5" />
                  <line x1="190" y1="46" x2="190" y2="61" stroke="#8C6D23" strokeWidth="1.5" />
                  <line x1="250" y1="37" x2="250" y2="52" stroke="#C59B27" strokeWidth="2" />
                  <line x1="310" y1="46" x2="310" y2="61" stroke="#8C6D23" strokeWidth="1.5" />
                  <line x1="370" y1="62" x2="370" y2="77" stroke="#8C6D23" strokeWidth="1.5" />

                  {/* Dynamic Load Force Arrows */}
                  <line x1="250" y1="55" x2="250" y2="105" stroke="#ba1a1a" strokeWidth="2" markerEnd="url(#arrow)" />
                  <text x="250" y="125" fontSize="11" fill="#ba1a1a" textAnchor="middle" fontWeight="bold">18.5 M.T.</text>

                  <line x1="190" y1="64" x2="190" y2="95" stroke="#ba1a1a" strokeWidth="1.5" />
                  <text x="190" y="112" fontSize="9" fill="#ba1a1a" textAnchor="middle">12.0 M.T.</text>

                  <line x1="310" y1="64" x2="310" y2="95" stroke="#ba1a1a" strokeWidth="1.5" />
                  <text x="310" y="112" fontSize="9" fill="#ba1a1a" textAnchor="middle">12.0 M.T.</text>
                </svg>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>
                  <span style={{ color: 'var(--gold-secondary)' }}>Factor of Safety: 3.4 : 1 (Exceeds Eurocode 9)</span>
                  <span className="badge-gold" style={{ fontSize: '9px' }}>TÜV RIGGING CERTIFICATE 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
