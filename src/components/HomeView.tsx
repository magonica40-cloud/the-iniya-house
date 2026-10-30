import React, { useState, useRef, useEffect } from 'react';
import {
  BRAND_INFO,
  ABOUT_COPY,
  BRANDS,
  SERVICES_IN_BRIEF,
  EQUIPMENT_RENTAL_INFO,
  LEISURES_INFO,
  GIFTING_CATEGORIES,
  GIFTING_PRODUCT_RANGES,
  GIFTING_PRODUCTS,
  CLIENTELLE,
} from '../data/content';
import {
  CheckCircle2,
  X,
  Volume2,
  Tv,
  Lightbulb,
  Layers,
  ArrowRight,
} from 'lucide-react';

interface HomeViewProps {
  onNavigateSection: (sectionId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigateSection }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Ensure HTML5 video autoplays reliably across all browser policies
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  // Gifting Product Filter
  const [selectedGiftingRange, setSelectedGiftingRange] = useState<string>('all');

  // Modal Popup for Featured Event Details
  const [selectedEventModal, setSelectedEventModal] = useState<any | null>(null);

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    phone: '',
    email: '',
    vertical: 'Events & Summits',
    scale: '500 - 1,500 Attendees',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Filtered Gifting Products
  const filteredGiftingProducts =
    selectedGiftingRange === 'all'
      ? GIFTING_PRODUCTS
      : GIFTING_PRODUCTS.filter((item) => item.rangeId === selectedGiftingRange);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    const waText = encodeURIComponent(
      `Hello The Iniya House, I am ${formData.name} from ${formData.organization || 'Individual'}. I would like to discuss ${formData.vertical} (${formData.scale}). Message: ${formData.message}`
    );
    window.open(`https://wa.me/917411392703?text=${waText}`, '_blank');
  };

  // Featured Events Data (DNA Networks Style)
  const featuredEvents = [
    {
      id: 'fe-01',
      title: 'CORPORATE ENGAGEMENTS',
      category: 'ENTERPRISE SUMMITS & ASSEMBLIES',
      image: '/assets/events/corporate_engagements.jpeg',
      description:
        'Monumental corporate annual days, leadership assemblies, and high-impact town halls executed with precision staging, customized line array acoustics, and flawless live video broadcast.',
      highlights: ['Town Halls & All-Hands', 'Sales Meets & Conventions', 'VIP Client Delegations', 'Annual Enterprise Galas'],
    },
    {
      id: 'fe-02',
      title: 'CONFERENCES & EXHIBITIONS',
      category: 'MEDICAL & SCIENTIFIC CONCLAVES',
      image: '/assets/events/conferences_exhibitions.jpeg',
      description:
        'Turnkey scientific and academic summits featuring multi-screen curved 4K LED projection, synchronized audio zoning, speaker telemetry, and sponsor exhibition stalls.',
      highlights: ['Medical & Scientific Conclaves', 'Technical Symposiums', 'Trade Expo Booths', 'Breakout Session Rooms'],
    },
    {
      id: 'fe-03',
      title: 'GALA EVENINGS',
      category: 'AWARDS & BANQUET STAGECRAFT',
      image: '/assets/events/gala_evenings.jpeg',
      description:
        'Curated high-society banquets featuring cascading chandeliers, ambient ceiling drapery architecture, intelligent DMX robotic moving-heads, and fine-dining coordination.',
      highlights: ['Red-Carpet Award Shows', 'Presidential Banquets', 'Architectural Lighting Rigs', 'Live Band & Artist Curation'],
    },
    {
      id: 'fe-04',
      title: 'PRIVATE CELEBRATIONS',
      category: 'REGAL WEDDINGS & SANGEETS',
      image: '/assets/events/private_celebrations.jpeg',
      description:
        'Lavish royal wedding pavilions with bespoke floral craftsmanship, synchronized cold pyrotechnic fountains, ambient floodlighting, and royal hospitality.',
      highlights: ['Heritage Mandap Architecture', 'Themed Sangeet Stages', 'Cold Pyro Sequences', 'Bespoke Guest Experiences'],
    },
    {
      id: 'fe-05',
      title: 'MICE & OFFSITES',
      category: 'DESTINATION RETREATS & CAMPS',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      description:
        'End-to-end MICE management across premier resorts, heritage fort retreats, and nature camps. Logistics, chartered transport, luxury stays, and curated team bonding programs.',
      highlights: ['Resorts in Coorg & Goa', 'Heritage Palace Retreats', 'Wilderness Nature Camps', 'Curated Day-Out Programs'],
    },
    {
      id: 'fe-06',
      title: 'CORPORATE GIFTING',
      category: 'CURATED KITS & HAMPERS',
      image: '/assets/gifting/employee_festive_kit.jpeg',
      description:
        'Thoughtfully rated business gifting solutions across 7 product ranges. Strengthening professional bonds through employee welcome kits, milestone mementos, and luxury festive hampers.',
      highlights: ['Executive Welcome Kits', 'Gadgets & Smart Wearables', 'Crystal Trophies & Awards', 'Artisanal Festive Hampers'],
    },
  ];

  return (
    <div style={{ width: '100%', overflow: 'hidden', backgroundColor: 'var(--bg-black)' }}>
      {/* =========================================================
          1. HERO SECTION (DNA Networks Style)
          Full 100vh, Video/Concert Background, Bottom-Anchored Monumental Title
          ========================================================= */}
      {/* =========================================================
          1. HERO SECTION (DNA Networks Style)
          Full 100vh, Live Cinematic Video Reel Background,
          Sound Toggle, Central Pulse Ring, Monumental Bottom-Anchored Title
          ========================================================= */}
      <section
        id="hero"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingBottom: '5.5rem',
          backgroundColor: '#000000',
          overflow: 'hidden',
        }}
      >
        {/* Background Poster Fallback so hero is immediately rich even before video buffers */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: "url('/assets/videos/scenes/scene1.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'contrast(1.12) brightness(0.72)',
            zIndex: 0,
          }}
        />

        {/* Custom Iniya House Brand Film Video Background */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/videos/scenes/scene1.jpg"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1,
            filter: 'contrast(1.12) brightness(0.72)',
          }}
        >
          <source src="/assets/videos/iniya_house_reel_silent.mp4" type="video/mp4" />
        </video>

        {/* Central Video Atmosphere Ring */}
        <div className="hero-center-ring">
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            }}
          />
        </div>

        {/* Ambient Dark Gradient Scrim - Exactly like DNA Networks */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            background:
              'linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.35) 45%, rgba(0, 0, 0, 0.7) 100%)',
          }}
        />

        {/* Hero Bottom Content */}
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '1250px' }}>
            {/* Monumental Headline */}
            <h1
              className="heading-monumental"
              style={{
                color: '#FFFFFF',
                marginBottom: '1.25rem',
              }}
            >
              EXPERIENCES THAT INSPIRE, <br />
              CONNECT & STAY REMEMBERED
            </h1>

            {/* Sub-Tagline & Arrow Action */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                paddingTop: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-dna)',
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    color: 'var(--text-gray-300)',
                    textTransform: 'uppercase',
                  }}
                >
                  THE INIYA HOUSE · ARTS | EVENTS | ENTERTAINMENT
                </span>
              </div>

              <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <button
                  onClick={() => onNavigateSection('work')}
                  className="btn-dna"
                  style={{ fontSize: '13px' }}
                >
                  <span>Explore Featured Events</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. METRICS BANNER (DNA Networks Crisp White Section + 4 Photo Cards)
          ========================================================= */}
      <section
        id="metrics-banner"
        className="section-light"
        style={{
          padding: '6rem 0 0',
          borderBottom: '1px solid #E5E7EB',
        }}
      >
        <div className="container" style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: 'var(--font-dna)',
              fontSize: 'clamp(1.4rem, 2.4vw, 2.1rem)',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              color: '#000000',
              maxWidth: '960px',
              margin: '0 auto',
              lineHeight: 1.35,
            }}
          >
            UNITED BY CREATIVITY & PURPOSE — TRANSFORMING IDEAS INTO POWERFUL STORIES AND EXPERIENCES.
          </h2>
        </div>

        {/* 4 Photo-Backed Stats Cards Side-by-Side (DNA Networks exact layout) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            borderTop: '1px solid #E5E7EB',
            borderBottom: '1px solid #E5E7EB',
          }}
          className="stats-strip"
        >
          {/* Card 1: 100+ Projects */}
          <div className="stats-card">
            <div
              className="stats-card-bg"
              style={{ backgroundImage: "url('/assets/events/corporate_engagements.jpeg')" }}
            />
            <div className="stats-card-content">
              <div className="stats-card-number">100+</div>
              <div className="stats-card-label">PROJECTS EXECUTED</div>
            </div>
          </div>

          {/* Card 2: 4 Pillars */}
          <div className="stats-card">
            <div
              className="stats-card-bg"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80')",
              }}
            />
            <div className="stats-card-content">
              <div className="stats-card-number">4</div>
              <div className="stats-card-label">CORE VERTICALS</div>
            </div>
          </div>

          {/* Card 3: 10+ Giants */}
          <div className="stats-card">
            <div
              className="stats-card-bg"
              style={{ backgroundImage: "url('/assets/events/conferences_exhibitions.jpeg')" }}
            />
            <div className="stats-card-content">
              <div className="stats-card-number">10+</div>
              <div className="stats-card-label">CLIENT GIANTS</div>
            </div>
          </div>

          {/* Card 4: 100% Turnkey */}
          <div className="stats-card">
            <div
              className="stats-card-bg"
              style={{ backgroundImage: "url('/assets/events/gala_evenings.jpeg')" }}
            />
            <div className="stats-card-content">
              <div className="stats-card-number">100%</div>
              <div className="stats-card-label">TURNKEY DELIVERY</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. FEATURED EVENTS (DNA Networks White Canvas 6-Tile Grid)
          ========================================================= */}
      <section
        id="work"
        className="section-light"
        style={{
          padding: '6.5rem 0 7rem',
          borderBottom: '1px solid #E5E7EB',
        }}
      >
        <div className="container">
          {/* Section Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: '3.5rem',
              borderBottom: '2px solid #000000',
              paddingBottom: '1.5rem',
            }}
          >
            <div>
              <h2 className="heading-section" style={{ color: '#000000', margin: 0 }}>
                FEATURED EVENTS
              </h2>
            </div>

            <button
              onClick={() => onNavigateSection('contact')}
              className="btn-dna btn-dna-dark"
              style={{ fontSize: '13px' }}
            >
              <span>Plan An Event</span>
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
          </div>

          {/* 6 Grid Cards (Exact DNA Networks Layout) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
            }}
            className="featured-grid"
          >
            {featuredEvents.map((evt) => (
              <div
                key={evt.id}
                className="event-grid-card"
                onClick={() => setSelectedEventModal(evt)}
              >
                <img src={evt.image} alt={evt.title} className="event-grid-img" />
                <div className="event-grid-overlay" />
                <div className="event-grid-content">
                  <div className="event-grid-meta" style={{ marginBottom: '0.4rem' }}>
                    {evt.category}
                  </div>
                  <h3 className="event-grid-title">{evt.title}</h3>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '11px',
                      color: 'var(--text-gray-300)',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    <span>View Event Scope</span>
                    <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          4. OUR VERTICALS (DNA Networks Style)
          ========================================================= */}
      <section
        id="brands"
        style={{
          padding: '6.5rem 0',
          backgroundColor: '#0A0A0A',
          borderTop: '1px solid var(--border-dark)',
          borderBottom: '1px solid var(--border-dark)',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
            <span className="label-micro" style={{ color: 'var(--text-gray-400)', display: 'block', marginBottom: '0.75rem' }}>
              OUR FOUR CORE VERTICALS
            </span>
            <h2 className="heading-section" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
              TURNKEY CREATIVE POWERHOUSE
            </h2>
            <p className="body-large">
              Iniya house understands the unique requirements of every client and ensures that each idea
              is brought to life down to the finest detail. No vision is too big or too small. Our
              creative team delivers complete strategy, passion and execution to make it happen —
              leaving our guests and clients truly inspired.
            </p>
          </div>

          {/* 4 Verticals Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {BRANDS.map((brand) => (
              <div
                key={brand.id}
                style={{
                  backgroundColor: '#121212',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={brand.image}
                    alt={brand.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, #121212 0%, rgba(18, 18, 18, 0.2) 60%, transparent 100%)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: 'rgba(0, 0, 0, 0.8)',
                      padding: '0.35rem 0.75rem',
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#FFFFFF',
                    }}
                  >
                    {brand.tag}
                  </div>
                </div>

                <div
                  style={{
                    padding: '2rem',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-dna)',
                        fontSize: '24px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: '#FFFFFF',
                        marginBottom: '0.75rem',
                      }}
                    >
                      {brand.name}
                    </h3>
                    <p className="body-regular" style={{ marginBottom: '1.5rem' }}>
                      {brand.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      if (brand.id === 'events') onNavigateSection('work');
                      else if (brand.id === 'leisures') onNavigateSection('leisures');
                      else if (brand.id === 'gifting') onNavigateSection('gifting');
                      else onNavigateSection('contact');
                    }}
                    className="btn-dna"
                    style={{ padding: '0.5rem 0' }}
                  >
                    <span>View {brand.name}</span>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          5. SERVICES IN BRIEF & EQUIPMENT RENTAL (PDF Page 5)
          ========================================================= */}
      <section
        id="services"
        style={{
          padding: '6.5rem 0',
          backgroundColor: '#000000',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.25fr',
              gap: '4rem',
              alignItems: 'start',
            }}
            className="services-split-grid"
          >
            {/* Left Column: Services in Brief List */}
            <div>
              <span className="label-micro" style={{ color: 'var(--text-gray-400)', display: 'block', marginBottom: '0.75rem' }}>
                SERVICES IN BRIEF
              </span>
              <h2 className="heading-section" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
                EVENT PRODUCTION CAPABILITIES
              </h2>
              <p className="body-regular" style={{ marginBottom: '2rem' }}>
                From product unveils and executive summits to sports meets and carnival celebrations.
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.85rem',
                }}
              >
                {SERVICES_IN_BRIEF.map((srv, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '0.85rem 1rem',
                      background: '#0E0E0E',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span style={{ color: 'var(--accent-cyan)' }}>•</span>
                    <span>{srv.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Equipment Rental Division (PDF Page 5 Callout) */}
            <div
              id="rentals"
              style={{
                backgroundColor: '#0E0E0E',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                padding: '3rem',
                position: 'relative',
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  background: '#FFFFFF',
                  color: '#000000',
                  padding: '0.3rem 0.85rem',
                  fontSize: '10px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: '1.25rem',
                }}
              >
                RENTAL DIVISION
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-dna)',
                  fontSize: '26px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                }}
              >
                {EQUIPMENT_RENTAL_INFO.title}
              </h3>

              <p className="body-regular" style={{ marginBottom: '2.5rem' }}>
                {EQUIPMENT_RENTAL_INFO.desc}
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1.5rem',
                  marginBottom: '2.5rem',
                }}
              >
                <div style={{ borderLeft: '2px solid rgba(255, 255, 255, 0.3)', paddingLeft: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <Volume2 size={16} color="#FFFFFF" />
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase' }}>
                      Audio Systems
                    </h4>
                  </div>
                  <p style={{ fontSize: '12px', color: 'var(--text-gray-400)', lineHeight: 1.5 }}>
                    Line arrays, mixing consoles, Shure mics, stage monitors.
                  </p>
                </div>

                <div style={{ borderLeft: '2px solid rgba(255, 255, 255, 0.3)', paddingLeft: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <Tv size={16} color="#FFFFFF" />
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase' }}>
                      Visual & Projection
                    </h4>
                  </div>
                  <p style={{ fontSize: '12px', color: 'var(--text-gray-400)', lineHeight: 1.5 }}>
                    Laser projectors, 4K curved LED walls, seamless switchers.
                  </p>
                </div>

                <div style={{ borderLeft: '2px solid rgba(255, 255, 255, 0.3)', paddingLeft: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <Lightbulb size={16} color="#FFFFFF" />
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase' }}>
                      Stage Lighting
                    </h4>
                  </div>
                  <p style={{ fontSize: '12px', color: 'var(--text-gray-400)', lineHeight: 1.5 }}>
                    Sharpy beam moving heads, LED wash pars, profile spots, DMX.
                  </p>
                </div>

                <div style={{ borderLeft: '2px solid rgba(255, 255, 255, 0.3)', paddingLeft: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <Layers size={16} color="#FFFFFF" />
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase' }}>
                      Staging & Trussing
                    </h4>
                  </div>
                  <p style={{ fontSize: '12px', color: 'var(--text-gray-400)', lineHeight: 1.5 }}>
                    Aluminum box trusses, goalpost rigs, stages, acrylic lecterns.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, vertical: 'Equipment Rental' }));
                    onNavigateSection('contact');
                  }}
                  className="btn-dna-solid"
                >
                  <span>Rent Equipment</span>
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

                <a
                  href="https://wa.me/917411392703?text=Hello%20The%20Iniya%20House,%20I%20would%20like%20to%20rent%20AV%20equipment%20(Projector/PA%20System/LED%20Screen)%20for%20my%20event."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-dna"
                >
                  <span>WhatsApp Rental Desk</span>
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          6. LEISURES & MICE OFFSITES (PDF Page 6)
          ========================================================= */}
      <section
        id="leisures"
        style={{
          padding: '6.5rem 0',
          backgroundColor: '#0A0A0A',
          borderTop: '1px solid var(--border-dark)',
          borderBottom: '1px solid var(--border-dark)',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '880px', marginBottom: '3.5rem' }}>
            <span className="label-micro" style={{ color: 'var(--text-gray-400)', display: 'block', marginBottom: '0.75rem' }}>
              MICE & DESTINATION STAYS
            </span>
            <h2 className="heading-section" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
              LEISURES DIVISION
            </h2>
            <p className="body-large" style={{ marginBottom: '1rem' }}>
              {LEISURES_INFO.overview}
            </p>
            <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '15px' }}>
              {LEISURES_INFO.subtext}
            </p>
          </div>

          {/* 8 Accommodation Types Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
              marginBottom: '3rem',
            }}
          >
            {LEISURES_INFO.accommodations.map((acc, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#141414',
                  padding: '2rem 1.75rem',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'border-color 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--text-gray-400)',
                    letterSpacing: '0.12em',
                    marginBottom: '0.75rem',
                  }}
                >
                  0{index + 1} / ACCOMMODATION
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-dna)',
                    fontSize: '18px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                    marginBottom: '0.5rem',
                  }}
                >
                  {acc.name}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-gray-400)', lineHeight: 1.6 }}>
                  {acc.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'right' }}>
            <button
              onClick={() => {
                setFormData((prev) => ({ ...prev, vertical: 'Leisures & MICE Offsites' }));
                onNavigateSection('contact');
              }}
              className="btn-dna"
            >
              <span>Plan A Destination Offsite</span>
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
          </div>
        </div>
      </section>

      {/* =========================================================
          7. CORPORATE GIFTING (PDF Page 7 & 8)
          ========================================================= */}
      <section
        id="gifting"
        style={{
          padding: '6.5rem 0',
          backgroundColor: '#000000',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '840px', marginBottom: '3.5rem' }}>
            <span className="label-micro" style={{ color: 'var(--text-gray-400)', display: 'block', marginBottom: '0.75rem' }}>
              CURATED MERCHANDISE & HAMPERS
            </span>
            <h2 className="heading-section" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
              CORPORATE GIFTING
            </h2>
            <p className="body-large">
              Thoughtfully rated business gifting kits and custom collections designed to celebrate
              milestones, welcome new talent, and commemorate enterprise partnerships.
            </p>
          </div>

          {/* 3 Categories from PDF Page 7 */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
              marginBottom: '5rem',
            }}
            className="gifting-cat-grid"
          >
            {GIFTING_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#0E0E0E',
                  padding: '2.5rem 2rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--text-gray-400)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      marginBottom: '0.75rem',
                    }}
                  >
                    SEGMENT 0{idx + 1}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-dna)',
                      fontSize: '22px',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      textTransform: 'uppercase',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {cat.title}
                  </h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {cat.items.map((it, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: '13px',
                          color: 'var(--text-gray-300)',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.65rem',
                          lineHeight: 1.5,
                        }}
                      >
                        <span style={{ color: 'var(--accent-cyan)' }}>•</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ paddingTop: '2rem' }}>
                  <button
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, vertical: `Corporate Gifting - ${cat.title}` }));
                      onNavigateSection('contact');
                    }}
                    className="btn-dna"
                    style={{ fontSize: '11px' }}
                  >
                    <span>Request Proposal</span>
                    <svg
                      className="btn__arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
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
            ))}
          </div>

          {/* Product Range Gallery from PDF Page 8 */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1.5rem',
                marginBottom: '2rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                paddingBottom: '1.5rem',
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-dna)',
                    fontSize: '26px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                  }}
                >
                  Our Range of Products
                </h3>
              </div>

              {/* Range Filters */}
              <div
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  overflowX: 'auto',
                  paddingBottom: '0.5rem',
                  maxWidth: '100%',
                }}
              >
                {GIFTING_PRODUCT_RANGES.map((r) => (
                  <button
                    key={r.id}
                    className={`dna-pill ${selectedGiftingRange === r.id ? 'active' : ''}`}
                    onClick={() => setSelectedGiftingRange(r.id)}
                  >
                    {r.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {filteredGiftingProducts.map((prod) => (
                <div
                  key={prod.id}
                  style={{
                    backgroundColor: '#0E0E0E',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={prod.image}
                      alt={prod.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '0.75rem',
                        left: '0.75rem',
                        background: 'rgba(0, 0, 0, 0.85)',
                        padding: '0.25rem 0.65rem',
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        color: '#FFFFFF',
                        textTransform: 'uppercase',
                      }}
                    >
                      {prod.badge}
                    </div>
                  </div>

                  <div
                    style={{
                      padding: '1.5rem',
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <h4
                        style={{
                          fontSize: '15px',
                          fontWeight: 700,
                          color: '#FFFFFF',
                          marginBottom: '0.4rem',
                        }}
                      >
                        {prod.name}
                      </h4>
                      <p style={{ fontSize: '12px', color: 'var(--text-gray-400)', lineHeight: 1.5 }}>
                        {prod.items}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          vertical: `Corporate Gifting - ${prod.name}`,
                        }));
                        onNavigateSection('contact');
                      }}
                      className="btn-dna"
                      style={{ fontSize: '11px', marginTop: '1.25rem' }}
                    >
                      <span>Inquire Sample</span>
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          8. WHO WE WORK WITH (DNA Networks Exact Split Layout)
          Light Section Background (#F6F6F8), Left Title, Right Logo Grid
          ========================================================= */}
      <section
        id="clientele"
        style={{
          padding: '6.5rem 0',
          backgroundColor: '#F6F6F8',
          color: '#000000',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '4rem',
              alignItems: 'start',
            }}
            className="clientele-split-grid"
          >
            {/* Left Column (DNA Networks exact layout) */}
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-dna)',
                  fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: '#000000',
                  lineHeight: 1.1,
                  marginBottom: '1.25rem',
                }}
              >
                Who We Work With
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: '#4B5563',
                  lineHeight: 1.7,
                  marginBottom: '2.5rem',
                }}
              >
                We have been entrusted by renowned and prosperous enterprises, healthcare networks, and
                emerging disruptors across India.
              </p>

              <button
                onClick={() => onNavigateSection('contact')}
                className="btn-dna btn-dna-dark"
                style={{ fontSize: '13px' }}
              >
                <span>View More Clientele</span>
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
            </div>

            {/* Right Column: 10 Logos Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem',
              }}
            >
              {CLIENTELLE.map((client, idx) => (
                <div key={idx} className="client-logo-box">
                  <img src={client.logo} alt={client.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          9. STORY & PHILOSOPHY (DNA Networks Signature Orange Banner)
          #D95900 Background, Portrait Photo + Script Signature, Monumental Quote
          ========================================================= */}
      <section
        id="about"
        className="dna-orange-banner"
        style={{
          padding: '7rem 0',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.25fr',
              gap: '4.5rem',
              alignItems: 'center',
            }}
            className="about-split-grid"
          >
            {/* Left Column: Stage Production Photo with Handwritten Signature */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  width: '100%',
                  aspectRatio: '1210 / 805',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.45)',
                  position: 'relative',
                  backgroundColor: '#0a0a0a',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                }}
              >
                <img
                  src="/assets/events/oncology_collegium_stage.jpg?v=2"
                  alt="Oncology Collegium South India — Production & Stage Management by The Iniya House"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 40%, transparent 70%)',
                    pointerEvents: 'none',
                  }}
                />
                {/* Handwritten Script Signature Overlaid (DNA Networks Exact Style) */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1.25rem',
                    right: '1.5rem',
                    textAlign: 'right',
                    pointerEvents: 'none',
                  }}
                >
                  <div className="font-signature" style={{ color: '#FFFFFF', textShadow: '0 2px 10px rgba(0,0,0,0.7)', fontSize: '2.2rem', lineHeight: 1 }}>
                    Iniya House
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-dna)',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'rgba(255, 255, 255, 0.95)',
                      marginTop: '0.25rem',
                      textShadow: '0 1px 4px rgba(0,0,0,0.8)',
                    }}
                  >
                    Arts · Events · Entertainment
                  </div>
                </div>
              </div>

              {/* Event Telemetry Strip below photo */}
              <div
                style={{
                  marginTop: '1.25rem',
                  padding: '1.25rem 1.5rem',
                  backgroundColor: 'rgba(0, 0, 0, 0.25)',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem',
                  textAlign: 'center',
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-dna)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>Production</div>
                  <div style={{ fontFamily: 'var(--font-dna)', fontSize: '13px', fontWeight: 800, color: '#FFFFFF', marginTop: '0.25rem' }}>Medical Conclave</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-dna)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>Delivery</div>
                  <div style={{ fontFamily: 'var(--font-dna)', fontSize: '13px', fontWeight: 800, color: '#FFFFFF', marginTop: '0.25rem' }}>Stagecraft & AV Rig</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-dna)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>Live Experience</div>
                  <div style={{ fontFamily: 'var(--font-dna)', fontSize: '13px', fontWeight: 800, color: '#FFFFFF', marginTop: '0.25rem' }}>100% Turnkey</div>
                </div>
              </div>
            </div>

            {/* Right Column: Monumental Quote & Narrative */}
            <div>
              <div style={{ marginBottom: '2.5rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-dna)',
                    fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    lineHeight: 1.2,
                    marginBottom: '1.5rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  “The result is more than just an event or a project — it’s an experience that
                  inspires, connects, and stays remembered.”
                </h3>

                <div
                  style={{
                    fontFamily: 'var(--font-dna)',
                    fontSize: '15px',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '2rem',
                    borderLeft: '3px solid #FFFFFF',
                    paddingLeft: '1rem',
                  }}
                >
                  YES, WE ARE INIYA HOUSE.
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.15rem',
                    color: '#FFFFFF',
                    fontWeight: 500,
                    lineHeight: 1.6,
                  }}
                >
                  {ABOUT_COPY.lead}
                </p>
                {ABOUT_COPY.paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.85)',
                      lineHeight: 1.7,
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          10. "HAVE ANY QUESTIONS?" BANNER (DNA Networks Full-Width Photo Style)
          ========================================================= */}
      <section
        style={{
          position: 'relative',
          padding: '8rem 0',
          backgroundColor: '#000000',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: "url('/assets/events/gala_evenings.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3) saturate(1.2)',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <h2
            style={{
              fontFamily: 'var(--font-dna)',
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              fontWeight: 700,
              color: '#FFFFFF',
              textTransform: 'uppercase',
              marginBottom: '2rem',
              letterSpacing: '-0.01em',
            }}
          >
            Have any questions?
          </h2>

          <button
            onClick={() => onNavigateSection('contact')}
            className="btn-dna-solid"
            style={{ fontSize: '13px', padding: '1rem 2.25rem' }}
          >
            <span>Contact Us</span>
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
        </div>
      </section>

      {/* =========================================================
          11. CONTACT & INQUIRY FORM (PDF Page 10)
          ========================================================= */}
      <section
        id="contact"
        style={{
          padding: '6.5rem 0 7rem',
          backgroundColor: '#0A0A0A',
          borderTop: '1px solid var(--border-dark)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.25fr',
              gap: '4.5rem',
              alignItems: 'start',
            }}
            className="contact-split-grid"
          >
            {/* Left Column: Direct Address & Contact Details */}
            <div>
              <span className="label-micro" style={{ color: 'var(--text-gray-400)', display: 'block', marginBottom: '0.75rem' }}>
                DIRECT LIAISON
              </span>
              <h2 className="heading-section" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
                CONNECT WITH US
              </h2>
              <p className="body-regular" style={{ marginBottom: '3rem' }}>
                Whether it’s an ambitious event concept, a dream wedding, a business explainer video,
                or a custom business gifting kit — our team brings complete strategy, energy, and
                flawless execution to make it happen.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {/* Headquarters */}
                <div style={{ borderLeft: '2px solid rgba(255, 255, 255, 0.3)', paddingLeft: '1.25rem' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-gray-400)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    Headquarters
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.5 }}>
                    {BRAND_INFO.locationDetail}
                  </div>
                </div>

                {/* Direct Phone */}
                <div style={{ borderLeft: '2px solid rgba(255, 255, 255, 0.3)', paddingLeft: '1.25rem' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-gray-400)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    Direct Phone / Hotline
                  </div>
                  <a
                    href={`tel:${BRAND_INFO.phoneClean}`}
                    style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', textDecoration: 'none' }}
                  >
                    {BRAND_INFO.phone}
                  </a>
                </div>

                {/* Email */}
                <div style={{ borderLeft: '2px solid rgba(255, 255, 255, 0.3)', paddingLeft: '1.25rem' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-gray-400)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    Official Email
                  </div>
                  <a
                    href={`mailto:${BRAND_INFO.email}`}
                    style={{ fontSize: '16px', fontWeight: 600, color: '#FFFFFF', textDecoration: 'none' }}
                  >
                    {BRAND_INFO.email}
                  </a>
                </div>

                {/* Direct WhatsApp Action */}
                <div style={{ paddingTop: '0.5rem' }}>
                  <a
                    href={BRAND_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-dna-solid"
                    style={{ width: '100%', justifyContent: 'space-between' }}
                  >
                    <span>Instant WhatsApp Chat</span>
                    <svg
                      className="btn__arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="10"
                      viewBox="0 0 59 10"
                      fill="none"
                    >
                      <path d="M0 5H57.5" stroke="currentColor" />
                      <path d="M53.5 1L57.5 5L53.5 9" stroke="currentColor" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div
              style={{
                backgroundColor: '#121212',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                padding: '3rem',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-dna)',
                  fontSize: '22px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  marginBottom: '0.5rem',
                }}
              >
                Plan An Event / Inquire
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-gray-400)', marginBottom: '2rem' }}>
                Fill in the details below and our production heads will connect within 4 hours.
              </p>

              {formSubmitted ? (
                <div
                  style={{
                    padding: '3rem 2rem',
                    textAlign: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    backgroundColor: '#181818',
                  }}
                >
                  <CheckCircle2 size={48} color="#FFFFFF" style={{ margin: '0 auto 1.25rem' }} />
                  <h4 style={{ fontSize: '20px', fontWeight: 700, textTransform: 'uppercase', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                    Inquiry Dispatched
                  </h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-gray-300)', marginBottom: '1.75rem' }}>
                    Thank you, {formData.name}. We have received your brief and are preparing the
                    operational scope.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="btn-dna"
                    style={{ fontSize: '11px' }}
                  >
                    <span>Submit Another Inquiry</span>
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
              ) : (
                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-split">
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikram Sharma"
                        className="dna-input"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                        Company / Brand
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Dell / Decathlon"
                        className="dna-input"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-split">
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                        Phone (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="dna-input"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        className="dna-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-split">
                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                        Vertical Required *
                      </label>
                      <select
                        className="dna-input"
                        value={formData.vertical}
                        onChange={(e) => setFormData({ ...formData, vertical: e.target.value })}
                        style={{ cursor: 'pointer' }}
                      >
                        <option value="Events & Summits" style={{ background: '#121212', color: '#fff' }}>Events (Town Halls, Summits, Galas)</option>
                        <option value="Equipment Rental" style={{ background: '#121212', color: '#fff' }}>Equipment Rental (Audio, LED, Lighting)</option>
                        <option value="Leisures & MICE Offsites" style={{ background: '#121212', color: '#fff' }}>Leisures (MICE & Offsite Stays)</option>
                        <option value="Corporate Gifting" style={{ background: '#121212', color: '#fff' }}>Corporate Gifting (Kits & Hampers)</option>
                        <option value="Branding & Storytelling" style={{ background: '#121212', color: '#fff' }}>Branding & Video Storytelling</option>
                        <option value="Private Celebration / Wedding" style={{ background: '#121212', color: '#fff' }}>Private Celebration / Wedding</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                        Scale / Attendees
                      </label>
                      <select
                        className="dna-input"
                        value={formData.scale}
                        onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
                        style={{ cursor: 'pointer' }}
                      >
                        <option value="100 - 500 PAX" style={{ background: '#121212', color: '#fff' }}>100 - 500 Attendees</option>
                        <option value="500 - 1,500 PAX" style={{ background: '#121212', color: '#fff' }}>500 - 1,500 Attendees</option>
                        <option value="1,500 - 5,000+ PAX" style={{ background: '#121212', color: '#fff' }}>1,500 - 5,000+ Stadium / Arena</option>
                        <option value="Gifting: 50 - 250 Units" style={{ background: '#121212', color: '#fff' }}>Gifting: 50 - 250 Units</option>
                        <option value="Gifting: 250 - 1,000+ Units" style={{ background: '#121212', color: '#fff' }}>Gifting: 250 - 1,000+ Units</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                      Project Scope & Dates
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share estimated dates, venue preference, or technical requirements..."
                      className="dna-input"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-dna-solid"
                    style={{ width: '100%', justifyContent: 'center', padding: '1.15rem' }}
                  >
                    <span>Transmit Brief & Connect on WhatsApp</span>
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
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EVENT DETAILS MODAL POPUP
          ========================================================= */}
      {selectedEventModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
          onClick={() => setSelectedEventModal(null)}
        >
          <div
            style={{
              backgroundColor: '#121212',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              maxWidth: '750px',
              width: '100%',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEventModal(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                zIndex: 10,
                background: 'rgba(0, 0, 0, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>

            <div style={{ height: '320px', position: 'relative' }}>
              <img
                src={selectedEventModal.image}
                alt={selectedEventModal.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, #121212 0%, rgba(18, 18, 18, 0.3) 60%, transparent 100%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '2rem',
                  right: '2rem',
                }}
              >
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-gray-400)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  {selectedEventModal.category}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-dna)',
                    fontSize: '26px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                  }}
                >
                  {selectedEventModal.title}
                </h3>
              </div>
            </div>

            <div style={{ padding: '2rem' }}>
              <p className="body-large" style={{ marginBottom: '1.75rem', fontSize: '15px' }}>
                {selectedEventModal.description}
              </p>

              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  Execution Scope Includes:
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  {selectedEventModal.highlights.map((h: string, i: number) => (
                    <div
                      key={i}
                      style={{
                        padding: '0.65rem 0.85rem',
                        background: '#1A1A1A',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        fontSize: '12px',
                        color: 'var(--text-gray-300)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <CheckCircle2 size={13} color="var(--accent-cyan)" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                <button
                  onClick={() => {
                    setSelectedEventModal(null);
                    setFormData((prev) => ({ ...prev, vertical: selectedEventModal.title }));
                    onNavigateSection('contact');
                  }}
                  className="btn-dna-solid"
                >
                  <span>Inquire For This Event</span>
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
            </div>
          </div>
        </div>
      )}

      {/* Inline Responsive Styles */}
      <style>{`
        @media (max-width: 992px) {
          .stats-strip {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .featured-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .services-split-grid, .clientele-split-grid, .about-split-grid, .contact-split-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .gifting-cat-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .stats-strip {
            grid-template-columns: 1fr !important;
          }
          .featured-grid {
            grid-template-columns: 1fr !important;
          }
          .form-split {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
