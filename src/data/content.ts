export interface Discipline {
  id: string;
  tag: string;
  category: string;
  title: string;
  desc: string;
  metric: string;
  image: string;
}

export interface CaseDossier {
  id: string;
  category: 'corporate' | 'palace' | 'arena' | 'activations';
  location: string;
  pax: string;
  title: string;
  subtitle: string;
  desc: string;
  telemetry: string;
  image: string;
  year: string;
  specs?: { [key: string]: string };
}

export interface Patron {
  name: string;
  type: string;
  logo: string;
}

export interface GiftingProduct {
  id: string;
  category: string;
  name: string;
  desc: string;
  image: string;
  tag: string;
}

export const BRAND_TAGLINE = 'ARTS | EVENTS | ENTERTAINMENT';

export const METRICS = [
  { value: '100+', label: 'Projects Successfully Executed', code: 'PROVEN · TRACK', pct: '96%' },
  { value: '4 Pillars', label: 'Events · Leisures · Branding · Gifting', code: 'CORE · DIVISIONS', pct: '100%' },
  { value: '10+ Giants', label: 'Dell, IBM, Narayana, RKFI & Decathlon', code: 'CLIENT · TRUST', pct: '94%' },
  { value: '100%', label: 'Turnkey Protocol & Zero-Defect Staging', code: 'QUALITY · STANDARD', pct: '100%' },
];

export const DISCIPLINES: Discipline[] = [
  {
    id: '01',
    tag: '01 / EVENTS',
    category: 'Stadium & Summit Calibre',
    title: 'Events & Arena Stagecraft',
    desc: 'From high-stakes corporate town halls, medical conclaves, and product launches to luxury wedding galas, sports meets, and live concert DJ setups.',
    metric: '100+ Productions Delivered',
    image: '/assets/events/corporate_engagements.jpeg',
  },
  {
    id: '02',
    tag: '02 / LEISURES',
    category: 'MICE & Offsite Stays',
    title: 'Leisures & Destination Offsites',
    desc: 'Seamless MICE journeys, venue discovery, logistics, transport, luxury resort buyouts, heritage fort retreats, nature camps, and curated day-out programs.',
    metric: 'Pan-India Destinations',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '03',
    tag: '03 / BRANDING',
    category: 'Creative Strategy & Media',
    title: 'Branding & Visual Storytelling',
    desc: 'Storytelling-driven brand experiences, cinematic business explainer videos, experiential activations, and multi-channel campaign launches.',
    metric: 'Strategic Storytelling',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '04',
    tag: '04 / GIFTING',
    category: 'Curated Corporate Collections',
    title: 'Corporate Gifting & Objets d\'Art',
    desc: 'Bespoke employee welcome kits, client appreciation hampers, electronic gadgets, leather organizers, sports drinkware, and custom crystal trophies.',
    metric: '14+ Curated Collections',
    image: '/assets/gifting/employee_festive_kit.jpeg',
  },
];

export const CASE_DOSSIERS: CaseDossier[] = [
  {
    id: 'IH-EXP-01',
    category: 'corporate',
    location: 'BENGALURU CORRIDOR',
    pax: '1,200+ DELEGATES',
    title: 'Oncology Collegium South India',
    subtitle: 'MEDICAL SCIENTIFIC CONCLAVE · 2024',
    desc: 'Turnkey medical conference stagecraft featuring high-definition curved LED projection, synchronized audio zoning, speaker podium telemetry, and seamless scientific paper delivery.',
    telemetry: 'Zero Audio Latency · 100% On-Time Protocol',
    image: '/assets/events/conferences_exhibitions.jpeg',
    year: '2024',
    specs: { 'Format': 'Medical Conclave', 'Visuals': 'Multi-Screen LED', 'Audio': 'Sub-millimeter Rig' },
  },
  {
    id: 'IH-EXP-02',
    category: 'corporate',
    location: 'PALACE GROUNDS · BENGALURU',
    pax: '2,500+ EMPLOYEES',
    title: 'Enterprise Annual Assembly & Cultural Gala',
    subtitle: 'CORPORATE ENGAGEMENTS & HONORS',
    desc: 'Monumental enterprise annual day celebrating milestone achievements. Immersive stage lighting, custom acoustic trussing, live band integration, and multi-cuisine hospitality.',
    telemetry: 'Multi-camera Live Broadcast · 48 M.T. Rig Load',
    image: '/assets/events/corporate_engagements.jpeg',
    year: '2024',
    specs: { 'Span': '36m Clean Truss', 'PAX': '2,500 Delegates', 'Staging': 'Multi-Tier Kinetic' },
  },
  {
    id: 'IH-EXP-03',
    category: 'palace',
    location: 'HERITAGE RESORT · KARNATAKA',
    pax: '650 VIP GUESTS',
    title: 'Grand Regal Wedding & Sangeet',
    subtitle: 'PRIVATE CELEBRATION & ROYAL DECOR',
    desc: 'Lavish outdoor royal wedding pavilion with custom floral architecture, synchronized cold pyrotechnic fountains, ambient architectural floodlighting, and bespoke guest hospitality.',
    telemetry: 'Heritage Preservation Protocol · Cold Pyro Synced',
    image: '/assets/events/private_celebrations.jpeg',
    year: '2024',
    specs: { 'Décor': 'Bespoke Floral Mandap', 'Lighting': 'Warm Gold Architectural', 'Pyro': 'Cold Spark Matrix' },
  },
  {
    id: 'IH-EXP-04',
    category: 'arena',
    location: 'GRAND LUXURY BALLROOM · BENGALURU',
    pax: '800 DISTINGUISHED PATRONS',
    title: 'Illuminated Grand Ballroom Gala',
    subtitle: 'GALA EVENINGS & ANNUAL AWARDS',
    desc: 'Curated high-society banquet featuring cascading warm-crystal chandeliers, ceiling drapery architecture, intelligent robotic moving-head fixtures, and fine-dining coordination.',
    telemetry: 'Atmospheric Lighting Grid · DMX Synchronized',
    image: '/assets/events/gala_evenings.jpeg',
    year: '2024',
    specs: { 'Ambiance': 'Crystal Chandelier Array', 'Audio': 'Concert Vocal Rig', 'Rigging': 'Concealed Cable Runs' },
  },
];

export const PATRONS: Patron[] = [
  { name: 'Narayana Health', type: 'Healthcare & Medical Summits', logo: '/assets/clients/narayana_health.jpeg' },
  { name: 'Kauvery Hospital', type: 'Medical Conclaves & Conferences', logo: '/assets/clients/kauvery_hospital.jpeg' },
  { name: 'KIMS Bengaluru', type: 'Hospital Assemblies & Summits', logo: '/assets/clients/kims_bengaluru.jpeg' },
  { name: 'Dell Technologies', type: 'Enterprise Tech Keynotes', logo: '/assets/clients/dell.jpeg' },
  { name: 'IBM Enterprise', type: 'Global Leadership Townhalls', logo: '/assets/clients/ibm.jpeg' },
  { name: 'RKFI Films', type: 'Raajkamal Films International', logo: '/assets/clients/rkfi_films.jpeg' },
  { name: 'Booking Holdings', type: 'Global Executive Offsites', logo: '/assets/clients/booking_holdings.jpeg' },
  { name: 'Decathlon India', type: 'Corporate Sports & Expos', logo: '/assets/clients/decathlon.jpeg' },
  { name: 'Temenos Banking', type: 'Financial Summits & Galas', logo: '/assets/clients/temenos.jpeg' },
  { name: 'GO EC Electric', type: 'EV Mobility Product Launches', logo: '/assets/clients/go_ec.jpeg' },
];

export const CORPORATE_SERVICES = [
  { title: 'Product Launches', desc: 'Dramatic unveils with kinetic lighting, synchronized reveal mechanics, and press-ready media environments.' },
  { title: 'Town Halls & Annual Days', desc: 'Seamless company-wide summits with ultra-reliable audio-visual rigs, employee engagement, and live streaming.' },
  { title: 'Conferences & Exhibitions', desc: 'Turnkey medical, academic, and tech congresses with scientific breakout rooms and sponsor exhibition booths.' },
  { title: 'Corporate Client Visits & Sales Meets', desc: 'High-touch executive hospitality, custom presentation environments, and boardroom polish.' },
  { title: 'Sports Meets & Family Days', desc: 'Action-packed corporate athletic tournaments, carnival games, kids engagement zones, and outdoor arenas.' },
  { title: 'Award Shows & Galas', desc: 'Red-carpet arrivals, bespoke physical trophies, theatrical award stings, and celebratory banqueting.' },
  { title: 'Festive & Themed Events', desc: 'Diwali, New Year, and custom festive installations with traditional craftsmanship and contemporary flair.' },
  { title: 'DJ Nights & Entertainment', desc: 'Celebrity artist curation, professional sound line arrays, intelligent laser mapping, and karaoke lounges.' },
  { title: 'Team Building & Success Meets', desc: 'Facilitated experiential challenges, outdoor leadership workshops, and celebratory milestones.' },
];

export const EQUIPMENT_RENTALS = [
  { category: 'Audio Systems', items: 'JBL / L-Acoustics Line Arrays, Digital Mixing Consoles, Shure Wireless Mics, Stage Monitors' },
  { category: 'Visual & Projection', items: 'High-Lumen Laser Projectors, P2.6 / P3.9 Indoor & Outdoor 4K Curved LED Screens, Seamless Switchers' },
  { category: 'Intelligent Lighting', items: 'Sharpy Beam Moving Heads, LED Wash Pars, Warm Profile Spots, DMX Light Consoles, Hazers' },
  { category: 'Staging & Trussing', items: 'Heavy-Duty Aluminum Box Trusses, Goalpost Rigs, Height-Adjustable Carpeted Stages, Podium Risers' },
];

export const LEISURES_OFFERINGS = [
  { type: 'Luxury Resorts & Boutique Stays', desc: 'Exclusive buyouts across Coorg, Chikmagalur, Kabini, and Goa for high-level leadership retreats.' },
  { type: 'Heritage Palaces & Historic Forts', desc: 'Majestic destination settings across Rajasthan and Karnataka for royal gala evenings and celebrations.' },
  { type: 'Nature Camps & Adventure Getaways', desc: 'High-energy outdoor team offsites with trekking, rafting, and wilderness luxury glamping.' },
  { type: 'Curated Day-Out Programs', desc: 'One-day refreshing corporate retreats with team bonding, water sports, and gourmet banqueting near Bangalore.' },
];

export const GIFTING_PRODUCTS: GiftingProduct[] = [
  { id: 'G1', category: 'Electronic Gadgets', name: 'Smart EarPods & Wearable Tech', desc: 'Premium noise-canceling earbuds, wireless power banks, and smart tracking watches customized with corporate branding.', image: '/assets/gifting/smart_earpods.jpeg', tag: 'High-Tech' },
  { id: 'G2', category: 'Office & Desktops', name: 'Executive Vegan Leather Planner', desc: 'Handcrafted customized organizational planners, debossed corporate diaries, metal rollerball pens, and new-joiner welcome kits.', image: '/assets/gifting/executive_planner.jpeg', tag: 'Onboarding' },
  { id: 'G3', category: 'Drinkware', name: 'Matte Stainless Steel Sipper', desc: 'Double-wall vacuum-insulated temperature-retaining bottles, sports flasks, and self-stirring travel mugs with laser engraving.', image: '/assets/gifting/matte_sipper_bottles.jpeg', tag: 'Everyday Luxury' },
  { id: 'G4', category: 'Bags & Sleeves', name: 'Premium Felt & Leather Laptop Sleeve', desc: 'Sleek shockproof laptop carriers, duffles, gym bags, eco-friendly cloth totes, and bespoke paper gift bags.', image: '/assets/gifting/laptop_sleeve.jpeg', tag: 'Executive Style' },
  { id: 'G5', category: 'Mementos & Trophies', name: 'Faceted Acrylic & Crystal Awards', desc: 'Architectural K9 optical crystal mementos, cast brass medallions, commemorative shields, and personalized gold-foil certificates.', image: '/assets/gifting/acrylic_crystal_trophies.jpeg', tag: 'Recognition' },
  { id: 'G6', category: 'Apparels', name: 'Custom Performance Corporate Jerseys', desc: 'High-breathability dry-fit sports jerseys, embroidered polo t-shirts, premium fleece hoodies, jackets, and caps.', image: '/assets/gifting/sports_jersey.jpeg', tag: 'Apparel' },
  { id: 'G7', category: 'Festive Hampers', name: 'Artisanal Dry Fruit & Confectionery Box', desc: 'Handcrafted rigid magnetic boxes featuring California almonds, Afghan raisins, artisanal sweets, and organic brass diyas.', image: '/assets/gifting/dry_fruit_hampers.jpeg', tag: 'Festive' },
  { id: 'G8', category: 'Executive Suite', name: 'Master Chamberlain Corporate Hamper', desc: 'Complete bespoke gift chest comprising a vacuum flask, vegan leather diary, signature pen, and premium gourmet selection.', image: '/assets/gifting/employee_festive_kit.jpeg', tag: 'All-In-One' },
];

export const METHODOLOGY = [
  {
    phase: '01',
    title: 'Consultation & Strategy',
    subtitle: 'PHASE ONE',
    desc: 'In-depth brief dissection. We analyze attendee demographics, brand narrative, venue acoustic physics, and budget parameters to formulate the master plan.',
    tag: 'Strategic Blueprint',
  },
  {
    phase: '02',
    title: 'Aesthetic & Spatial 3D Design',
    subtitle: 'PHASE TWO',
    desc: 'Photorealistic 3D stage renders, material palette curation, seating ergonomics, and technical rider specification with complete transparency.',
    tag: '3D Previz Simulation',
  },
  {
    phase: '03',
    title: 'Turnkey Execution & Production',
    subtitle: 'PHASE THREE',
    desc: 'Clockwork on-site coordination. Certified riggers, sound engineers, floral artists, and event directors executing every cue with zero-defect protocol.',
    tag: 'Flawless Live Cues',
  },
  {
    phase: '04',
    title: 'Post-Event Debrief & Archival',
    subtitle: 'PHASE FOUR',
    desc: 'Rapid and pristine venue handover, comprehensive post-event attendance metrics, high-resolution media delivery, and future-ready planning notes.',
    tag: 'Pristine Handover',
  },
];
