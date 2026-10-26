import React, { useState } from 'react';
import { Send, UploadCloud, CheckCircle2, Lock, MapPin, MessageSquare } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    designation: '',
    enterprise: '',
    phone: '',
    email: '',
    vertical: 'corporate_summits',
    dateWindow: '',
    venue: 'Bengaluru // Palace Grounds Heritage Pavilion',
    scale: '75-250',
    budget: '120L-350L',
    brief: '',
    ndaAccepted: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [fileUploaded, setFileUploaded] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: '80px', width: '100%', overflow: 'hidden' }}>
      {/* Top Dossier Meta Ribbon */}
      <section style={{ backgroundColor: 'var(--bg-surface-low)', padding: '0.85rem 0', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--gold-primary)' }} />
            <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>FORMAL PROTOCOL // DOSSIER 04–2025</span>
          </div>
          <div style={{ color: 'var(--gold-secondary)' }}>VIP CONDUIT · RESTRICTED CURATORIAL DIPLOMACY</div>
          <div style={{ color: 'var(--text-muted)' }}>CURATORIAL OCCUPANCY: 02 / 03 SLOTS ALLOCATED</div>
        </div>
      </section>

      {/* Main Header */}
      <section style={{ backgroundColor: 'var(--bg-surface-lowest)', padding: '4rem 0 3rem', borderBottom: '1px solid var(--border-hairline)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
          <div className="badge-gold" style={{ marginBottom: '1.25rem' }}>
            <span>THE INIYA HOUSE PRIVATE OFFICE & STATE ASSEMBLY GUILD</span>
          </div>
          <h1
            className="font-headline"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', textTransform: 'uppercase', lineHeight: 1.15, marginBottom: '1.25rem' }}
          >
            Initiate Commission & <br />
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--gold-primary)' }}>
              Royal Event Architecture
            </span>
          </h1>
          <p className="font-body" style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.7 }}>
            Orchestrating seminal assemblies, sovereign palace gatherings, and high-culture executive summits across Bangalore and pan-regional destinations.
          </p>
        </div>
      </section>

      {/* Main 12-Column Dossier Form Layout */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3.5rem', alignItems: 'start' }}>
            {/* LEFT COLUMN: The Interactive Commission Dossier Form */}
            <div className="royal-card" style={{ padding: 'clamp(2rem, 4vw, 3.5rem)', backgroundColor: '#FFFFFF', borderRadius: '2px', border: '1px solid var(--border-gold)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1.25rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-hairline)' }}>
                <div>
                  <span className="font-meta" style={{ fontSize: '10px', color: 'var(--gold-secondary)', display: 'block' }}>PROTOCOL FILE // REF-2025-INYA</span>
                  <h2 className="font-headline" style={{ fontSize: '1.75rem', marginTop: '2px' }}>The Patron & Scenography Specification</h2>
                </div>
                <div className="badge-gold" style={{ fontSize: '10px' }}>
                  <Lock size={12} />
                  <span>256-Bit Patron Confidentiality</span>
                </div>
              </div>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
                  <CheckCircle2 size={64} color="var(--gold-primary)" style={{ margin: '0 auto 1.5rem' }} />
                  <h2 className="font-headline" style={{ fontSize: '2.4rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
                    Event Specification Dispatched
                  </h2>
                  <p className="font-body" style={{ color: 'var(--text-secondary)', fontSize: '16px', maxWidth: '520px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
                    Your parameters have been successfully received by The Iniya House. Our event coordination team will review the specifications and reach out within 4 hours.
                  </p>
                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a
                      href={`https://wa.me/917411392703?text=Hi%20The%20Iniya%20House,%20I%20have%20submitted%20an%20event%20dossier%20for%20${encodeURIComponent(formData.enterprise || formData.fullName)}%20(${encodeURIComponent(formData.scale)}%20PAX).`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-royal-gold"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', padding: '12px 20px', fontSize: '12px' }}
                    >
                      <MessageSquare size={16} />
                      <span>Connect Immediately on WhatsApp</span>
                    </a>
                    <button onClick={() => setSubmitted(false)} className="btn-royal-outline">
                      <span>Submit Another Inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                  {/* 01 // PRINCIPAL & INSTITUTIONAL CREDENTIALS */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                      <span style={{ width: '28px', height: '28px', backgroundColor: 'var(--obsidian-surface)', color: 'var(--gold-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, borderRadius: '2px' }}>01</span>
                      <h3 className="font-headline" style={{ fontSize: '1.25rem', textTransform: 'uppercase' }}>Principal & Institutional Credentials</h3>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                      <div>
                        <label className="font-meta" style={{ fontSize: '10px', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>PRINCIPAL FULL NAME *</label>
                        <input
                          type="text"
                          required
                          placeholder="Lord Alistair Vane / Dr. Kavita Rao"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-hairline)', borderRadius: '2px', backgroundColor: 'var(--bg-surface-low)', outline: 'none' }}
                        />
                      </div>
                      <div>
                        <label className="font-meta" style={{ fontSize: '10px', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>EXECUTIVE DESIGNATION</label>
                        <input
                          type="text"
                          placeholder="Managing Trustee / Group Chairman"
                          value={formData.designation}
                          onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                          style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-hairline)', borderRadius: '2px', backgroundColor: 'var(--bg-surface-low)', outline: 'none' }}
                        />
                      </div>
                      <div>
                        <label className="font-meta" style={{ fontSize: '10px', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>ENTERPRISE / SOVEREIGN HOUSE *</label>
                        <input
                          type="text"
                          required
                          placeholder="Apex Global Holdings / Rao Dynasty Trust"
                          value={formData.enterprise}
                          onChange={(e) => setFormData({ ...formData, enterprise: e.target.value })}
                          style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-hairline)', borderRadius: '2px', backgroundColor: 'var(--bg-surface-low)', outline: 'none' }}
                        />
                      </div>
                      <div>
                        <label className="font-meta" style={{ fontSize: '10px', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>DIRECT VIP LINE / WHATSAPP *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98450 00000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-hairline)', borderRadius: '2px', backgroundColor: 'var(--bg-surface-low)', outline: 'none' }}
                        />
                      </div>
                      <div style={{ gridColumn: '1 / -1' }}>
                        <label className="font-meta" style={{ fontSize: '10px', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>INSTITUTIONAL EMAIL CONDUIT *</label>
                        <input
                          type="email"
                          required
                          placeholder="principal.office@dynasty-group.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-hairline)', borderRadius: '2px', backgroundColor: 'var(--bg-surface-low)', outline: 'none' }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* 02 // PRIMARY VERTICAL SCENOGRAPHY */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                      <span style={{ width: '28px', height: '28px', backgroundColor: 'var(--obsidian-surface)', color: 'var(--gold-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, borderRadius: '2px' }}>02</span>
                      <h3 className="font-headline" style={{ fontSize: '1.25rem', textTransform: 'uppercase' }}>Primary Scenographic Vertical</h3>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                      {[
                        { id: 'corporate_events', title: 'Corporate Events & Summits', desc: 'Town halls, medical conclaves, product launches, annual days & gala celebrations.' },
                        { id: 'leisure_mice', title: 'Leisures & MICE Offsites', desc: 'Corporate offsites, luxury resort buyouts, heritage fort retreats & curated day-out experiences.' },
                        { id: 'branding_activations', title: 'Branding & Creative Activations', desc: 'Storytelling-driven brand campaigns, business explainer videos & product unveilings.' },
                        { id: 'corporate_gifting', title: 'Corporate Gifting & Equipment Rental', desc: 'Employee onboarding kits, festive gift hampers, crystal trophies & AV equipment rentals.' },
                      ].map((v) => {
                        const isSelected = formData.vertical === v.id;
                        return (
                          <div
                            key={v.id}
                            onClick={() => setFormData({ ...formData, vertical: v.id })}
                            style={{
                              padding: '1.25rem',
                              border: isSelected ? '1px solid var(--gold-primary)' : '1px solid var(--border-hairline)',
                              backgroundColor: isSelected ? 'var(--bg-surface-low)' : '#FFFFFF',
                              borderRadius: '2px',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                            }}
                          >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                              <strong className="font-headline" style={{ fontSize: '15px' }}>{v.title}</strong>
                              <span style={{ width: '16px', height: '16px', borderRadius: '50%', border: isSelected ? '5px solid var(--gold-primary)' : '1px solid var(--border-hairline)' }} />
                            </div>
                            <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>{v.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* 03 // HORIZON, DESTINATION & SCALE */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                      <span style={{ width: '28px', height: '28px', backgroundColor: 'var(--obsidian-surface)', color: 'var(--gold-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, borderRadius: '2px' }}>03</span>
                      <h3 className="font-headline" style={{ fontSize: '1.25rem', textTransform: 'uppercase' }}>Horizon, Destination & Scale Metrics</h3>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                      <div>
                        <label className="font-meta" style={{ fontSize: '10px', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>TARGET ASSEMBLY WINDOW *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. October 18–20, 2025"
                          value={formData.dateWindow}
                          onChange={(e) => setFormData({ ...formData, dateWindow: e.target.value })}
                          style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-hairline)', borderRadius: '2px', backgroundColor: 'var(--bg-surface-low)', outline: 'none' }}
                        />
                      </div>
                      <div>
                        <label className="font-meta" style={{ fontSize: '10px', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>TARGET SANCTUARY / VENUE *</label>
                        <select
                          value={formData.venue}
                          onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                          style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-hairline)', borderRadius: '2px', backgroundColor: 'var(--bg-surface-low)', outline: 'none' }}
                        >
                          <option>Bengaluru // Palace Grounds Heritage Pavilion</option>
                          <option>Bengaluru // Vijayanagar Private Atelier Grounds</option>
                          <option>Mysuru // Royal Heritage Courts & Lalitha Mahal</option>
                          <option>Bengaluru // Diplomatic Enclave & Leela Palace</option>
                          <option>Pan-India Sovereign Estate (Custom Greenfield)</option>
                          <option>International Destination (Doha, Muscat, London)</option>
                        </select>
                      </div>
                    </div>

                    {/* Delegation Scale Pills */}
                    <label className="font-meta" style={{ fontSize: '10px', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>CURATED DELEGATION SCALE (PAX) *</label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem' }}>
                      {[
                        { id: '25-75', label: '25 – 75 PAX', type: 'Intimate Salon' },
                        { id: '75-250', label: '75 – 250 PAX', type: 'Imperial Summit' },
                        { id: '250-750', label: '250 – 750 PAX', type: 'State Assembly' },
                        { id: '1000+', label: '1,000+ PAX', type: 'Monumental Arena' },
                      ].map((s) => {
                        const isSelected = formData.scale === s.id;
                        return (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, scale: s.id })}
                            style={{
                              padding: '10px',
                              textAlign: 'center',
                              borderRadius: '2px',
                              cursor: 'pointer',
                              border: isSelected ? '1px solid var(--gold-primary)' : '1px solid var(--border-hairline)',
                              backgroundColor: isSelected ? 'var(--obsidian-surface)' : 'var(--bg-surface-low)',
                              color: isSelected ? '#FFFFFF' : 'var(--text-primary)',
                            }}
                          >
                            <strong style={{ fontSize: '13px', display: 'block' }}>{s.label}</strong>
                            <span className="font-meta" style={{ fontSize: '9px', color: isSelected ? 'var(--gold-primary)' : 'var(--text-muted)' }}>{s.type}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 04 // CAPITAL ALLOCATION ENVELOPE */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                      <span style={{ width: '28px', height: '28px', backgroundColor: 'var(--obsidian-surface)', color: 'var(--gold-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, borderRadius: '2px' }}>04</span>
                      <h3 className="font-headline" style={{ fontSize: '1.25rem', textTransform: 'uppercase' }}>Capital Allocation Envelope (INR)</h3>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                      {[
                        { id: '35L-120L', tier: 'TIER I', label: '₹35L – ₹120L', desc: 'Curated Atelier: Private dinners & sovereign art showcases.' },
                        { id: '120L-350L', tier: 'TIER II (PREFERRED)', label: '₹120L – ₹350L', desc: 'State & Corporate Grandeur: Full multi-stage transformation & protocol.' },
                        { id: '350L+', tier: 'TIER III', label: '₹350L+ Sovereign', desc: 'Imperial Monumental: Bespoke pavilion construction & orchestral master.' },
                      ].map((b) => {
                        const isSelected = formData.budget === b.id;
                        return (
                          <div
                            key={b.id}
                            onClick={() => setFormData({ ...formData, budget: b.id })}
                            style={{
                              padding: '1.25rem',
                              border: isSelected ? '1px solid var(--gold-primary)' : '1px solid var(--border-hairline)',
                              backgroundColor: isSelected ? 'var(--bg-surface-low)' : '#FFFFFF',
                              borderRadius: '2px',
                              cursor: 'pointer',
                            }}
                          >
                            <span className="font-meta" style={{ fontSize: '9px', color: 'var(--gold-secondary)', display: 'block' }}>{b.tier}</span>
                            <div className="font-headline" style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', margin: '4px 0' }}>{b.label}</div>
                            <p style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.4 }}>{b.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* 05 // CONCEPT & ENCRYPTED BLUEPRINT CONDUIT */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                      <span style={{ width: '28px', height: '28px', backgroundColor: 'var(--obsidian-surface)', color: 'var(--gold-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, borderRadius: '2px' }}>05</span>
                      <h3 className="font-headline" style={{ fontSize: '1.25rem', textTransform: 'uppercase' }}>Spatial Concept & Architectural Brief</h3>
                    </div>

                    <textarea
                      rows={4}
                      placeholder="Detail your assembly objectives, desired sensory tone, lighting moods (e.g. Amber & Gold Renaissance, Minimalist Obsidian), architectural references, or specific dignitary protocols..."
                      value={formData.brief}
                      onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                      style={{ width: '100%', padding: '12px 14px', border: '1px solid var(--border-hairline)', borderRadius: '2px', backgroundColor: 'var(--bg-surface-low)', outline: 'none', resize: 'vertical', fontSize: '14px', marginBottom: '1.25rem' }}
                    />

                    {/* File Dropzone Simulator */}
                    <div
                      onClick={() => setFileUploaded('Blueprint_Charter_2025.pdf')}
                      style={{
                        padding: '1.5rem',
                        border: '1px dashed var(--gold-primary)',
                        backgroundColor: 'var(--bg-surface-low)',
                        borderRadius: '2px',
                        textAlign: 'center',
                        cursor: 'pointer',
                        marginBottom: '1.25rem',
                      }}
                    >
                      <UploadCloud size={24} color="var(--gold-primary)" style={{ margin: '0 auto 6px' }} />
                      <strong style={{ fontSize: '13px', display: 'block' }}>
                        {fileUploaded ? `Deposited: ${fileUploaded} (Encrypted)` : 'Deposit Floor Plans, CAD Blueprints, or Event Charters'}
                      </strong>
                      <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>PDF, DWG, AI, ZIP archives up to 100MB · Encrypted at Ingress</span>
                    </div>

                    {/* Bilateral NDA Accord */}
                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer', fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      <input
                        type="checkbox"
                        checked={formData.ndaAccepted}
                        onChange={(e) => setFormData({ ...formData, ndaAccepted: e.target.checked })}
                        style={{ marginTop: '2px', accentColor: 'var(--gold-primary)' }}
                      />
                      <span>
                        <strong>Bilateral Non-Disclosure Agreement Protocol:</strong> By dispatching this specification, The Iniya House and the Principal enter an immediate bilateral fiduciary confidentiality covenant. No imagery, dignitary roster, or spatial schematics are ever disclosed outside the private atelier chamber.
                      </span>
                    </label>
                  </div>

                  {/* Dispatch Button */}
                  <button type="submit" className="btn-royal-gold" style={{ padding: '1.25rem', fontSize: '13px' }}>
                    <Send size={16} />
                    <span>Dispatch Event Specification Under Seal</span>
                  </button>
                </form>
              )}
            </div>

            {/* RIGHT COLUMN: Curatorial Accreditations & Timelines */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* 3-Stage Horizon Card */}
              <div className="royal-card" style={{ padding: '2rem', backgroundColor: '#FFFFFF', borderRadius: '2px' }}>
                <span className="font-meta" style={{ fontSize: '10px', color: 'var(--gold-secondary)', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>
                  COMMISSION HORIZON
                </span>
                <h3 className="font-headline" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                  The 3-Phase Sovereign Timeline
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '13px' }}>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <span className="font-meta" style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold-primary)' }}>01</span>
                    <div>
                      <strong>Confidential Appraisal (T+48h):</strong>
                      <p style={{ color: 'var(--text-muted)', fontSize: '12px', marginTop: '2px' }}>Patron liaison call, feasibility audit, and structural destination reconnaissance.</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <span className="font-meta" style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold-primary)' }}>02</span>
                    <div>
                      <strong>Spatial Blueprinting (Weeks 1–3):</strong>
                      <p style={{ color: 'var(--text-muted)', fontSize: '12px', marginTop: '2px' }}>3D photorealistic render renders, acoustic simulations, and regal material procurement.</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <span className="font-meta" style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold-primary)' }}>03</span>
                    <div>
                      <strong>Zero-Hour Assembly Execution:</strong>
                      <p style={{ color: 'var(--text-muted)', fontSize: '12px', marginTop: '2px' }}>Turnkey scenographic deployment, sound-light orchestrations, and dignitary welcoming guild.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* State Banquet Photo Highlight Card */}
              <div className="royal-card" style={{ padding: '1rem', backgroundColor: '#FFFFFF', borderRadius: '2px' }}>
                <div style={{ height: '200px', borderRadius: '2px', overflow: 'hidden', marginBottom: '1rem' }}>
                  <img
                    src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80"
                    alt="Bangalore Palace Grounds State Banquet"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '0 0.5rem 0.5rem' }}>
                  <span className="font-meta" style={{ fontSize: '10px', color: 'var(--gold-secondary)' }}>ARCHIVE HIGHLIGHT // BLR-PAL-09</span>
                  <h4 className="font-headline" style={{ fontSize: '17px', margin: '4px 0' }}>State Banquet Scenography</h4>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Bangalore Palace Grounds Enclave · Curated for 450 global delegates with bespoke imperial conservatory framework.</p>
                </div>
              </div>

              {/* Physical Atelier HQ Card */}
              <div className="royal-card" style={{ padding: '1.75rem', backgroundColor: '#FFFFFF', borderRadius: '2px', border: '1px solid var(--border-gold)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <MapPin size={18} color="var(--gold-primary)" />
                  <span className="font-meta" style={{ fontSize: '11px', color: 'var(--gold-secondary)', fontWeight: 700 }}>VIJAYANAGAR ATELIER HQ</span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                  GKW Layout, Vijayanagar / Magadi Main Rd, Bangalore 560023
                </p>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  <div>VIP Line: <strong>+91 74113 92703</strong></div>
                  <div>Direct: <strong>info.iniyahouse@gmail.com</strong></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
