export interface BrandPillar {
  id: string;
  tag: string;
  name: string;
  headline: string;
  desc: string;
  image: string;
  highlights: string[];
}

export interface EventPillar {
  id: string;
  title: string;
  desc: string;
  image: string;
  tag: string;
}

export interface GiftingProductItem {
  id: string;
  rangeId: string;
  category: string;
  name: string;
  items: string;
  image: string;
  badge: string;
  tag?: string;
  desc?: string;
}

export interface ClientPartner {
  name: string;
  industry: string;
  logo: string;
}

export const BRAND_INFO = {
  name: 'The Iniya House',
  legalName: 'THE INIYA HOUSE',
  tagline: 'ARTS | EVENTS | ENTERTAINMENT',
  phone: '+91 74113 92703',
  phoneClean: '+917411392703',
  email: 'info.iniyahouse@gmail.com',
  location: 'GKW Layout, Bangalore',
  locationDetail: 'GKW Layout, Vijayanagar / Magadi Road, Bengaluru, Karnataka 560023',
  whatsappUrl: 'https://wa.me/917411392703?text=Hello%20The%20Iniya%20House,%20I%20would%20like%20to%20inquire%20about%20your%20services.',
};

export const METRICS = [
  { value: '100+', label: 'Projects Successfully Executed', note: 'Across Diverse Formats & Industries' },
  { value: '4 Pillars', label: 'Events · Leisures · Branding · Gifting', note: 'Comprehensive Turnkey Verticals' },
  { value: '10+ Giants', label: 'Dell, IBM, Narayana, RKFI & Decathlon', note: 'Trusted Enterprise Clientele' },
  { value: 'End-to-End', label: 'Concept to Flawless Execution', note: 'Strategy, Production & Rental' },
];

export const ABOUT_COPY = {
  tag: 'ABOUT THE INIYA HOUSE',
  title: 'United by creativity and purpose, our team operates as a single force.',
  lead: 'Every individual adds depth, precision, and perspective, transforming ideas into powerful stories and experiences. Together, we craft moments that connect emotionally, inspire conversations, and leave a lasting impact.',
  paragraphs: [
    'Iniya house is built on stories — stories that evolve into unforgettable series of experiences. Established recently, our team takes a thoughtful, artistic, and strategic approach to designing every project, ensuring each experience sparks emotions, meaningful conversations, and truly shareable moments.',
    'We specialize in producing innovative, sophisticated, and cutting-edge events, guided by our core belief that storytelling drives creativity. This belief has helped us stand strong today, having successfully executed 100+ projects across diverse formats and industries.',
    'As we have grown and matured, Iniya has expanded into multiple verticals, each led by expert and experienced teams who manage every process with precision and passion. We deeply understand our clients’ requirements and ensure that every idea is fully realized — down to the smallest detail. Whether it’s an ambitious event concept, a dream wedding, a business explainer video, or any creative vision, our team brings complete strategy, energy, and flawless execution to make it happen.',
  ],
  quote: 'The result is more than just an event or a project — it’s an experience that inspires, connects, and stays remembered.',
  affirmation: 'YES, WE ARE INIYA HOUSE.',
};

export const BRANDS: BrandPillar[] = [
  {
    id: 'events',
    tag: '01 / VERTICAL',
    name: 'EVENTS',
    headline: 'Immersive, Thoughtfully Designed Event Experiences',
    desc: 'The Events division of INIYA curates immersive, thoughtfully designed experiences that leave a lasting impression. From product unveils and leadership summits to gala evenings and private celebrations.',
    image: '/assets/events/corporate_engagements.jpeg',
    highlights: ['Corporate Engagements', 'Conferences & Exhibitions', 'Gala Evenings', 'Private Celebrations'],
  },
  {
    id: 'leisures',
    tag: '02 / VERTICAL',
    name: 'LEISURES',
    headline: 'Seamless MICE & Offsite Journeys',
    desc: 'Leisure curates seamless MICE and offsite experiences by bringing together the right destinations, stays, and activities. From venue discovery and logistics to transport and engaging leisure programs.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Venue Discovery & Logistics', 'Resorts & Heritage Palaces', 'Nature Camps & Offsites', 'Curated Day-Out Experiences'],
  },
  {
    id: 'branding',
    tag: '03 / VERTICAL',
    name: 'BRANDING',
    headline: 'Visual Storytelling & Creative Strategy',
    desc: 'Guided by our core belief that storytelling drives creativity. We produce business explainer videos, brand activations, visual identities, and multi-channel campaign executions that leave a memorable mark.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Brand Storytelling', 'Business Explainer Videos', 'Experiential Activations', 'Creative Campaign Design'],
  },
  {
    id: 'gifting',
    tag: '04 / VERTICAL',
    name: 'GIFTING',
    headline: 'Bespoke Corporate Gifting & Curated Hampers',
    desc: 'Thoughtfully curated business gifting solutions across 7 product ranges. Strengthening professional bonds through employee kits, partner appreciation, and event engagement packages.',
    image: '/assets/gifting/employee_festive_kit.jpeg',
    highlights: ['Employee Welcome Kits', 'Client Appreciation', 'Event & Speaker Gifts', 'Custom Products & Hampers'],
  },
];

export const EVENT_PILLARS: EventPillar[] = [
  {
    id: 'corp',
    title: 'CORPORATE ENGAGEMENTS',
    desc: 'High-stakes town halls, leadership summits, sales meets, and enterprise annual days delivered with flawless coordination and executive presence.',
    image: '/assets/events/corporate_engagements.jpeg',
    tag: 'Enterprise Summits',
  },
  {
    id: 'conf',
    title: 'CONFERENCES & EXHIBITIONS',
    desc: 'Medical conclaves, industry symposiums, and dynamic trade expos with specialized stagecraft, acoustic precision, and breakout zoning.',
    image: '/assets/events/conferences_exhibitions.jpeg',
    tag: 'Scientific & Expos',
  },
  {
    id: 'gala',
    title: 'GALA EVENINGS',
    desc: 'Theatrical award shows, black-tie banquets, and signature corporate evenings featuring architectural chandeliers and synchronized lighting.',
    image: '/assets/events/gala_evenings.jpeg',
    tag: 'Awards & Banquets',
  },
  {
    id: 'priv',
    title: 'PRIVATE CELEBRATIONS',
    desc: 'Dream weddings, royal sangeets, anniversary galas, and milestone gatherings curated with bespoke floral artistry and pyrotechnic elegance.',
    image: '/assets/events/private_celebrations.jpeg',
    tag: 'Weddings & Celebrations',
  },
];

export const SERVICES_IN_BRIEF = [
  { title: 'Product Launches', tag: 'Reveal Mechanics' },
  { title: 'Town Halls', tag: 'Executive All-Hands' },
  { title: 'Conferences', tag: 'Academic & Industry' },
  { title: 'Corporate Client Visits', tag: 'VIP Hospitality' },
  { title: 'Sales Meets', tag: 'Strategy & Motivation' },
  { title: 'Sports Meets', tag: 'Corporate Tournaments' },
  { title: 'Annual Events', tag: 'Milestone Celebrations' },
  { title: 'Family Day / Kids at Work', tag: 'Interactive Fun' },
  { title: 'Award Shows', tag: 'Red Carpet & Trophies' },
  { title: 'Festive Themed Events', tag: 'Diwali & Celebrations' },
  { title: 'DJ Nights & Karaoke Setups', tag: 'High-Energy Music' },
  { title: 'Team Building Activities', tag: 'Experiential Challenges' },
  { title: 'Success Meets', tag: 'Quarterly Honors' },
  { title: 'Exhibitions & Carnival Games', tag: 'Booth & Arena Play' },
];

export const EQUIPMENT_RENTAL_INFO = {
  title: 'Equipment Rental for Self-Made Events',
  desc: 'We can also help you in renting out equipment for your self-made event, starting from a single projector with PA system to extensive concert-level requirements.',
  highlights: [
    { name: 'Audio Systems', details: 'Line arrays, digital mixing consoles, Shure wireless microphones, stage monitors & zoning.' },
    { name: 'Visual & Projection', details: 'High-lumen laser projectors, P2.6 / P3.9 4K LED curved screens & video processors.' },
    { name: 'Intelligent Lighting', details: 'Sharpy moving heads, LED wash pars, profile spots, hazers & computerized DMX control.' },
    { name: 'Staging & Trussing', details: 'Heavy-duty aluminum box trussing, goalpost rigs, adjustable stages & acrylic podiums.' },
  ],
};

export const LEISURES_INFO = {
  tag: 'MICE & OFFSITES',
  title: 'LEISURES',
  overview: 'Leisure curates seamless MICE and offsite experiences by bringing together the right destinations, stays, and activities. From venue discovery and logistics to transport and engaging leisure programs, we simplify the entire process to deliver smooth, well-managed journeys.',
  subtext: 'We support large professional groups with all essential facilities, ensuring every movement, schedule, and experience runs effortlessly.',
  accommodations: [
    { name: 'Homestays', desc: 'Authentic local comfort and private spaces for team retreats.' },
    { name: 'Resorts', desc: 'Lush wellness and leisure properties across Coorg, Kabini, Chikmagalur & Goa.' },
    { name: 'Smart Budget Stays', desc: 'Cost-efficient, clean, modern accommodations for large group conferences.' },
    { name: 'Luxury Hotels', desc: '5-star metropolitan business properties with extensive banquet infrastructure.' },
    { name: 'Heritage Palaces', desc: 'Regal royal destinations for unforgettable celebrations and milestone galas.' },
    { name: 'Historic Forts', desc: 'Timeless architectural venues offering grand dramatic backdrops.' },
    { name: 'Nature Camps', desc: 'Wilderness glamping, trekking, and adventure offsites for energetic teams.' },
    { name: 'Curated Day-Out Experiences', desc: 'One-day refreshing corporate bonding retreats with dining and sports.' },
  ],
};

export const GIFTING_CATEGORIES = [
  {
    title: 'Employee Gifting',
    icon: 'Users',
    items: [
      'Festive and holiday gifting',
      'Work anniversaries and birthdays',
      'Welcome kits and onboarding gifts',
      'Promotions, milestones, and recognition moments',
    ],
  },
  {
    title: 'Business & Partner Gifting',
    icon: 'Briefcase',
    items: [
      'Client appreciation gifts',
      'Lead generation and marketing campaigns',
      'Corporate announcements and brand outreach',
      'Project milestones and deal closures',
    ],
  },
  {
    title: 'Event & Engagement Gifting',
    icon: 'Gift',
    items: [
      'Team-building programs',
      'Conferences, workshops, and training sessions',
      'Brand launches and activations',
      'Virtual and live events, including speaker and delegate thank-you gifts',
    ],
  },
];

export const GIFTING_PRODUCT_RANGES = [
  { id: 'all', name: 'All Products' },
  { id: 'gadgets', name: '1. Electronic Gadgets' },
  { id: 'office', name: '2. Office & Desktops' },
  { id: 'drinkware', name: '3. Drinkware' },
  { id: 'bags', name: '4. Bags & Sleeves' },
  { id: 'mementos', name: '5. Mementos & Awards' },
  { id: 'apparels', name: '6. Apparels & Wearables' },
  { id: 'hampers', name: '7. Hampers & Boxes' },
];

export const GIFTING_PRODUCTS: GiftingProductItem[] = [
  {
    id: 'G1',
    rangeId: 'gadgets',
    category: 'Electronic Gadgets',
    name: 'Smart EarPods & Wearable Tech',
    items: 'Power banks, Smart watches, EarPods, Wireless chargers',
    image: '/assets/gifting/smart_earpods.jpeg',
    badge: 'Category 01',
  },
  {
    id: 'G2',
    rangeId: 'office',
    category: 'Office & Desktops',
    name: 'Executive Planner & Welcome Kits',
    items: 'Planners, Organisers, Debossed diaries, New Joiner kits',
    image: '/assets/gifting/executive_planner.jpeg',
    badge: 'Category 02',
  },
  {
    id: 'G3',
    rangeId: 'office',
    category: 'Office & Desktops',
    name: 'Premium Leather Desk Suite',
    items: 'Desk mats, Pen holders, Business card cases, Executive journals',
    image: '/assets/gifting/leather_planner_kit.jpeg',
    badge: 'Category 02',
  },
  {
    id: 'G4',
    rangeId: 'drinkware',
    category: 'Drinkware',
    name: 'Matte Insulated Sippers & Tumblers',
    items: 'Sports bottles, Sippers, Self stirring mugs, Thermal flasks',
    image: '/assets/gifting/matte_sipper_bottles.jpeg',
    badge: 'Category 03',
  },
  {
    id: 'G5',
    rangeId: 'bags',
    category: 'Bags & Sleeves',
    name: 'Bespoke Laptop Bags & Sleeves',
    items: 'Laptop bags, Cloth bags, Travel bags, Gym bags, Paper bags',
    image: '/assets/gifting/laptop_sleeve.jpeg',
    badge: 'Category 04',
  },
  {
    id: 'G6',
    rangeId: 'bags',
    category: 'Bags & Sleeves',
    name: 'Executive Leather Totes & Duffles',
    items: 'Handcrafted vegan leather totes, travel duffles & pouches',
    image: '/assets/gifting/leather_tote_bag.jpeg',
    badge: 'Category 04',
  },
  {
    id: 'G7',
    rangeId: 'mementos',
    category: 'Mementos',
    name: 'Architectural Acrylic & Crystal Trophies',
    items: 'Trophies, Medals, Certificates, Commemorative Shields',
    image: '/assets/gifting/acrylic_crystal_trophies.jpeg',
    badge: 'Category 05',
  },
  {
    id: 'G8',
    rangeId: 'mementos',
    category: 'Mementos',
    name: 'Gold-Plated Corporate Honors',
    items: 'Faceted awards, brass mementos, gold-foil framed scrolls',
    image: '/assets/gifting/gold_plated_awards.jpeg',
    badge: 'Category 05',
  },
  {
    id: 'G9',
    rangeId: 'apparels',
    category: 'Apparels',
    name: 'Custom Team Jerseys & Sweatshirts',
    items: 'T-shirts, Sweatshirts, Jackets, Jerseys, Caps, Hand bands',
    image: '/assets/gifting/sports_jersey.jpeg',
    badge: 'Category 06',
  },
  {
    id: 'G10',
    rangeId: 'hampers',
    category: 'Hampers',
    name: 'Festive Gourmet & Dry Fruit Hampers',
    items: 'Festive hampers, Dry fruit boxes, Customised gourmet gift sets',
    image: '/assets/gifting/dry_fruit_hampers.jpeg',
    badge: 'Category 07',
  },
  {
    id: 'G11',
    rangeId: 'hampers',
    category: 'Hampers',
    name: 'Employee Festive Celebration Box',
    items: 'Curated celebration hamper with luxury stationery and treats',
    image: '/assets/gifting/employee_festive_kit.jpeg',
    badge: 'Category 07',
  },
  {
    id: 'G12',
    rangeId: 'gadgets',
    category: 'Electronic Gadgets',
    name: 'Executive Smart Audio & Neckband Kit',
    items: 'Premium wireless neckbands, smart trackers, fast power bank',
    image: '/assets/gifting/smart_neckband_kit.jpeg',
    badge: 'Category 01',
  },
];

export const CLIENTELLE: ClientPartner[] = [
  { name: 'Narayana Health', industry: 'Healthcare & Medical Summits', logo: '/assets/clients/narayana_health.jpeg' },
  { name: 'Kauvery Hospital', industry: 'Hospitals & Medical Conferences', logo: '/assets/clients/kauvery_hospital.jpeg' },
  { name: 'KIMS Hospitals Bengaluru', industry: 'Super-Specialty Conclaves', logo: '/assets/clients/kims_bengaluru.jpeg' },
  { name: 'Dell', industry: 'Global Technology & Keynotes', logo: '/assets/clients/dell.jpeg' },
  { name: 'RKFI', industry: 'Raajkamal Films International', logo: '/assets/clients/rkfi_films.jpeg' },
  { name: 'IBM', industry: 'Enterprise Technology & Townhalls', logo: '/assets/clients/ibm.jpeg' },
  { name: 'GO EC', industry: 'EV Mobility & Product Launches', logo: '/assets/clients/go_ec.jpeg' },
  { name: 'Temenos', industry: 'Banking Software & Conclaves', logo: '/assets/clients/temenos.jpeg' },
  { name: 'Booking Holdings', industry: 'Global Executive Offsites & Galas', logo: '/assets/clients/booking_holdings.jpeg' },
  { name: 'Decathlon', industry: 'Sports Festivals & Brand Activations', logo: '/assets/clients/decathlon.jpeg' },
];

// Compatibility exports
export type GiftingProduct = GiftingProductItem;
export type Patron = ClientPartner;
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

export const PATRONS = CLIENTELLE;
export const DISCIPLINES: Discipline[] = BRANDS.map((b) => ({
  id: b.id,
  tag: b.tag,
  category: b.name,
  title: b.headline,
  desc: b.desc,
  metric: 'Turnkey Excellence',
  image: b.image,
}));

export const CORPORATE_SERVICES = SERVICES_IN_BRIEF.map((s) => ({
  title: s.title,
  desc: s.tag,
}));

export const EQUIPMENT_RENTALS = [
  { category: 'Audio Systems', items: 'JBL / L-Acoustics Line Arrays, Digital Mixing Consoles, Shure Wireless Mics, Monitors' },
  { category: 'Visual & Projection', items: 'High-Lumen Laser Projectors, P2.6 / P3.9 4K Curved LED Screens, Switchers' },
  { category: 'Intelligent Lighting', items: 'Sharpy Moving Heads, LED Wash Pars, Profile Spots, DMX Consoles' },
  { category: 'Staging & Trussing', items: 'Heavy-Duty Aluminum Box Trusses, Goalposts, Stages, Podium Risers' },
];

export const LEISURES_OFFERINGS = LEISURES_INFO.accommodations.map((a) => ({
  type: a.name,
  desc: a.desc,
}));

export const CASE_DOSSIERS: CaseDossier[] = [
  {
    id: 'IH-01',
    category: 'corporate',
    location: 'BENGALURU CORRIDOR',
    pax: '1,200+ DELEGATES',
    title: 'Oncology Collegium South India',
    subtitle: 'CONFERENCES & EXHIBITIONS',
    desc: 'Turnkey medical conference stagecraft featuring high-definition curved LED projection, synchronized audio zoning, and scientific paper delivery.',
    telemetry: 'Zero Audio Latency · 100% On-Time Protocol',
    image: '/assets/events/oncology_collegium_stage.jpg',
    year: '2024',
    specs: { Format: 'Medical Conclave', Visuals: 'Multi-Screen LED', Audio: 'Line Array Rig' },
  },
  {
    id: 'IH-02',
    category: 'corporate',
    location: 'PALACE GROUNDS · BENGALURU',
    pax: '2,500+ EMPLOYEES',
    title: 'Enterprise Annual Assembly & Cultural Gala',
    subtitle: 'CORPORATE ENGAGEMENTS',
    desc: 'Monumental enterprise annual day celebrating milestone achievements with immersive lighting, custom acoustic trussing, and hospitality.',
    telemetry: 'Multi-camera Live Broadcast · 48 M.T. Rig Load',
    image: '/assets/events/corporate_engagements.jpeg',
    year: '2024',
    specs: { Span: '36m Clean Truss', PAX: '2,500 Delegates', Staging: 'Kinetic Truss' },
  },
  {
    id: 'IH-03',
    category: 'palace',
    location: 'HERITAGE RESORT · KARNATAKA',
    pax: '650 VIP GUESTS',
    title: 'Grand Regal Wedding & Sangeet',
    subtitle: 'PRIVATE CELEBRATIONS',
    desc: 'Lavish outdoor royal wedding pavilion with custom floral architecture, synchronized cold pyrotechnic fountains, and ambient illumination.',
    telemetry: 'Heritage Preservation · Cold Pyro Synced',
    image: '/assets/events/private_celebrations.jpeg',
    year: '2024',
    specs: { Décor: 'Bespoke Floral Mandap', Lighting: 'Warm Architectural', Pyro: 'Cold Spark Matrix' },
  },
  {
    id: 'IH-04',
    category: 'arena',
    location: 'GRAND LUXURY BALLROOM · BENGALURU',
    pax: '800 PATRONS',
    title: 'Illuminated Grand Ballroom Gala',
    subtitle: 'GALA EVENINGS',
    desc: 'Curated high-society banquet featuring cascading crystal chandeliers, ceiling drapery architecture, and intelligent moving-head fixtures.',
    telemetry: 'Atmospheric Lighting Grid · DMX Synchronized',
    image: '/assets/events/gala_evenings.jpeg',
    year: '2024',
    specs: { Ambiance: 'Crystal Chandelier Array', Audio: 'Concert Vocal Rig' },
  },
];

