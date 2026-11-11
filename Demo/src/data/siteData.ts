import {
  ServiceExpertise,
  WhyChooseUsItem,
  GalleryItem,
  JourneyPhase,
  Testimonial
} from '../types';

export const DEMO_SHOWCASE_INFO = {
  agencyName: 'SP VisionWorks',
  title: 'Client Demonstration Showcase',
  subtitle: 'Created for Construction Builders & Real Estate Developers',
  note: 'All project information, financial values, floor areas, and client reviews are fictional demonstration content crafted to showcase website engineering and branding capabilities.'
};

export const HIGHLIGHT_STATS = [
  {
    value: '1.8M+',
    label: 'Sq. Ft. Handed Over',
    sub: 'Across Mumbai & Pune micro-markets'
  },
  {
    value: '14+',
    label: 'Architectural Landmarks',
    sub: 'Delivered with structural excellence'
  },
  {
    value: '99.2%',
    label: 'On-Time Completion Rate',
    sub: 'Stringent milestone-based delivery'
  },
  {
    value: '₹3,400 Cr',
    label: 'Total Development Value',
    sub: 'Under masterplan across Maharashtra'
  }
];

export const SERVICES_EXPERTISE: ServiceExpertise[] = [
  {
    number: '01',
    title: 'Residential Development',
    subtitle: 'Ultra-Luxury Towers & Signature Residences',
    description: 'We conceive and execute iconic residential landmarks defined by generous floor-to-ceiling heights, expansive sea-facing decks, private elevator lobbies, and timeless architectural facades.',
    features: ['High-rise seismic shear wall engineering', 'Acoustic German fenestration systems', 'Biophilic sky gardens & private terraces', 'Uncompromising structural durability'],
    iconName: 'Building2'
  },
  {
    number: '02',
    title: 'Commercial Construction',
    subtitle: 'Grade-A Corporate Headquarters & Retail',
    description: 'Developing high-efficiency, LEED-certified commercial ecosystems with large column-free floor plates, redundant power matrices, and intelligent destination-controlled transit.',
    features: ['LEED Platinum energy envelopes', 'Clear 4.2m floor-to-ceiling spans', 'Smart BMS & automated access security', 'Destination-dispatch high-speed elevators'],
    iconName: 'Building'
  },
  {
    number: '03',
    title: 'Architectural Planning',
    subtitle: 'Masterplanning & Biophilic Spatial Design',
    description: 'Collaborating with renowned global and Indian architectural studios to optimize solar orientation, passive natural cooling, view corridors, and timeless urban aesthetics.',
    features: ['Micro-climate & wind tunnel simulation', 'Sunlight vector optimization', 'Zoning & regulatory compliance mastery', 'Integrated green roof ecosystems'],
    iconName: 'Compass'
  },
  {
    number: '04',
    title: 'Interior Design & Turnkey',
    subtitle: 'Bespoke Curated Living Environments',
    description: 'From book-matched Italian marble slabs to custom champagne brass joinery, our in-house atelier delivers bespoke turnkey interiors with obsessive material fidelity.',
    features: ['Hand-selected Italian marble inlays', 'Poggenpohl & Poliform joinery curation', 'Circadian smart lighting integration', 'Full turnkey interior handover'],
    iconName: 'Layers'
  },
  {
    number: '05',
    title: 'Project Management & EPC',
    subtitle: 'Rigorous On-Site Engineering & Audits',
    description: 'Executing complex civil engineering through digitized project tracking, strict material quality testing (M70 grade concrete, Fe550D TMT steel), and zero-compromise safety protocols.',
    features: ['Real-time 4D BIM construction modeling', 'Independent 3-tier concrete cube tests', 'Strict ISO 45001 safety governance', 'Contractual milestone transparency'],
    iconName: 'HardHat'
  },
  {
    number: '06',
    title: 'Sustainable Development',
    subtitle: 'Net-Positive Energy & Water Stewardship',
    description: 'Pioneering climate-responsive construction in Maharashtra through deep rainwater recharge, solar microgrids, zero-waste discharge, and native ecological landscaping.',
    features: ['IGBC Platinum benchmark adherence', '100% on-site rainwater recharge', 'Greywater recycling for landscape cooling', 'Low-VOC non-toxic building materials'],
    iconName: 'Leaf'
  }
];

export const WHY_CHOOSE_US_ITEMS: WhyChooseUsItem[] = [
  {
    number: '01',
    title: 'Structural Rigor & Uncompromised Materials',
    description: 'We exclusively deploy M70 self-compacting concrete, corrosion-resistant Fe550D TMT steel, and marine-grade anodized aluminium engineered to endure over a century of coastal weather.',
    metricValue: 'M70',
    metricLabel: 'Concrete Grade'
  },
  {
    number: '02',
    title: 'Transparent Milestone-Linked Governance',
    description: 'Every rupee invested is tracked via escrow accounts with stage-wise progress photographic audits accessible directly by homeowners on their dedicated client portal.',
    metricValue: '100%',
    metricLabel: 'Escrow Ringfenced'
  },
  {
    number: '03',
    title: 'Biophilic, Climate-Responsive Architecture',
    description: 'We design homes that breathe naturally. Deep cantilevered balconies, sun-shading terracotta louvers, and cross-ventilation reduce active cooling energy demands by up to 35%.',
    metricValue: '35%',
    metricLabel: 'Energy Efficiency'
  },
  {
    number: '04',
    title: 'Contractually Assured Timely Delivery',
    description: 'We honor our commitments. By employing modular aluminum formwork and automated supply chain logistics, our on-time delivery record remains the gold standard in the region.',
    metricValue: '99.2%',
    metricLabel: 'On-Time Handover'
  },
  {
    number: '05',
    title: 'Discreet Private Client Management',
    description: 'From your first site inquiry to interior customizations and key handover, a senior dedicated relationship executive oversees every detail of your acquisition.',
    metricValue: '1 : 1',
    metricLabel: 'Dedicated Concierge'
  },
  {
    number: '06',
    title: 'Obsessive Material & Joinery Detailing',
    description: 'Every millimeter is scrutinized—from laser-aligned Italian travertine joints to acoustic concealed door hinges and whisper-quiet hydronic plumbing systems.',
    metricValue: '0-Defect',
    metricLabel: 'Audit Protocol'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Aurevia Grand Twilight Skyscraper Façade',
    category: 'Exterior',
    projectRef: 'Aurevia Grand, Worli Sea Face',
    imageUrl: '/src/assets/images/hero_aurevia_tower_1794373691703.jpg',
    aspectRatio: 'landscape',
    description: 'Vertical sky gardens and champagne gold accent illumination against the Mumbai evening skyline.'
  },
  {
    id: 'gal-2',
    title: 'Penthouse Grand Living Room & Sea View',
    category: 'Interior',
    projectRef: 'Aurevia Heights, Bandra West',
    imageUrl: '/src/assets/images/interior_luxury_residence_1794373692461.jpg',
    aspectRatio: 'landscape',
    description: 'Expansive double-height living room featuring Italian travertine floors and sunset views over the Arabian Sea.'
  },
  {
    id: 'gal-3',
    title: 'Corporate Headquarters & Reflection Plaza',
    category: 'Exterior',
    projectRef: 'The Landmark, BKC Mumbai',
    imageUrl: '/src/assets/images/commercial_landmark_exterior_1794373693382.jpg',
    aspectRatio: 'portrait',
    description: 'LEED Platinum glass facade with vertical bronze sun fins and reflecting pool pedestrian entrance.'
  },
  {
    id: 'gal-4',
    title: 'Solstice Hillside Villa & Private Infinity Pool',
    category: 'Landscape',
    projectRef: 'Solstice Villas, Pune',
    imageUrl: '/src/assets/images/luxury_villa_estate_1794373694032.jpg',
    aspectRatio: 'landscape',
    description: 'Private infinity pool overlooking the rolling hills of Maharashtra, framed by stone masonry and teakwood decks.'
  },
  {
    id: 'gal-5',
    title: 'Biophilic Cantilevered Hillside Residences',
    category: 'Exterior',
    projectRef: 'Greencrest Residency, Lonavala',
    imageUrl: '/src/assets/images/greencrest_residency_1794373710052.jpg',
    aspectRatio: 'landscape',
    description: 'Cascading living green roofs and private viewing decks harmoniously embedded into the mountain topography.'
  },
  {
    id: 'gal-6',
    title: 'Artisanal Brass Lattice Screens & Courtyard',
    category: 'Engineering',
    projectRef: 'The Urban Nest, Koregaon Park',
    imageUrl: '/src/assets/images/urban_nest_facade_1794373710685.jpg',
    aspectRatio: 'portrait',
    description: 'Custom CNC champagne bronze jali panels providing privacy, solar shading, and intricate natural shadow play.'
  },
  {
    id: 'gal-7',
    title: 'Travertine & Champagne Bronze Joinery Craft',
    category: 'Engineering',
    projectRef: 'Materials & Craftsmanship Atelier',
    imageUrl: '/src/assets/images/architectural_craft_detail_1794373727579.jpg',
    aspectRatio: 'square',
    description: 'Millimeter-precise architectural joinery between natural honed Italian stone and custom brushed brass partitions.'
  },
  {
    id: 'gal-8',
    title: '400-Foot Rooftop Sky Infinity Pool',
    category: 'Landscape',
    projectRef: 'Aurevia Grand Sky Deck',
    imageUrl: '/src/assets/images/sky_infinity_pool_1794373727683.jpg',
    aspectRatio: 'landscape',
    description: 'Panoramic twilight view of the Bandra-Worli Sea Link and city shoreline from the 62nd-floor infinity deck.'
  }
];

export const JOURNEY_PHASES: JourneyPhase[] = [
  {
    phaseNumber: '01',
    name: 'Strategic Planning & Feasibility',
    timeline: 'Months 01 – 03',
    summary: 'Comprehensive topological site surveys, micro-climate wind tunnel simulations, geotechnical soil bore testing, and rigorous regulatory alignment.',
    deliverables: [
      'Geotechnical soil load-bearing analysis down to bedrock',
      'Wind tunnel micro-climate aero-elastic study',
      'Zoning, environmental clearances & legal title diligence',
      'Macro feasibility study & investment structuring'
    ],
    auditStandards: 'Third-party geotechnical audit & environmental impact baseline'
  },
  {
    phaseNumber: '02',
    name: 'Architectural & Engineering Design',
    timeline: 'Months 04 – 07',
    summary: 'Collaboration between international facade engineers, biophilic landscape masters, and structural specialists using 4D BIM modeling.',
    deliverables: [
      'Comprehensive 4D BIM structural clash detection models',
      'Acoustic fenestration & thermal transmission calculations',
      'LEED / IGBC green building certification blueprint',
      'Bespoke material procurement scheduling and quarry visits'
    ],
    auditStandards: 'Peer structural review by premier engineering faculties'
  },
  {
    phaseNumber: '03',
    name: 'Precision Structural Construction',
    timeline: 'Months 08 – 24',
    summary: 'Execution of deep pile foundations, high-strength M70 concrete cores, and post-tensioned slabs using automated aluminum formwork systems.',
    deliverables: [
      'Seismic Zone IV reinforced concrete core and shear walls',
      'Continuous ultrasonic concrete testing on every batch',
      'Anti-corrosion epoxy coated Fe550D TMT reinforcement',
      'Zero-tolerance laser plumb alignment across all vertical shafts'
    ],
    auditStandards: 'Independent laboratory cube-crush certification at 7 & 28 days'
  },
  {
    phaseNumber: '04',
    name: 'Turnkey Finishing & Detailing',
    timeline: 'Months 25 – 34',
    summary: 'Curated installation of imported Italian marble, Schüco acoustic facades, VRV climate cooling, and precision electrical KNX automation.',
    deliverables: [
      'Book-matched Botticino & Statuario marble slab setting',
      'Schüco acoustic glass facade sealing and water-tightness tests',
      'High-speed KONE destination-dispatch lift commissioning',
      'White-glove electrical, MEP, and acoustic insulation audits'
    ],
    auditStandards: '120-point finishing inspection by senior quality directors'
  },
  {
    phaseNumber: '05',
    name: 'Quality Audit & Seamless Handover',
    timeline: 'Months 35 – 36',
    summary: 'Formal structural completion certification, local municipal occupancy permits, pre-delivery snagging, and dedicated VIP key ceremony.',
    deliverables: [
      'Comprehensive Occupancy Certificate (OC) procurement',
      'Homeowner digital asset manual with warranty documents',
      '5-Year structural integrity guarantee contract',
      'Dedicated on-site facility & estate management handover'
    ],
    auditStandards: 'Zero-snag sign-off with dedicated relationship director'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'From the initial architectural presentation to the day we received the keys to our sky mansion at Worli, Aurevia Developers demonstrated a level of structural transparency and craftsmanship rare in Indian real estate. The attention to acoustic glass insulation and marble detailing is flawless.',
    author: 'Rajiv Singhania',
    role: 'Managing Director, Horizon Capital Partners',
    residence: 'Resident at Aurevia Grand',
    location: 'Worli, South Mumbai',
    year: 'Possession 2024'
  },
  {
    id: 'test-2',
    quote: 'Our duplex penthouse at Aurevia Heights in Bandra is a true sanctuary. The 22-foot high ceilings and effortless natural cross-ventilation have redefined how my family experiences Mumbai living. The delivery schedule was met to the exact promised week.',
    author: 'Dr. Avantika Kothari & Dr. Vikram Kothari',
    role: 'Senior Consultant & Cardiac Surgeon',
    residence: 'Resident at Aurevia Heights',
    location: 'Pali Hill, Bandra West',
    year: 'Possession 2025'
  },
  {
    id: 'test-3',
    quote: 'We leased three contiguous floor plates at The Landmark in BKC for our regional headquarters. The column-free floor plan, destination-controlled elevators, and LEED Platinum efficiency have elevated our employee productivity and sustainability credentials.',
    author: 'Siddharth Menon',
    role: 'Chief Operating Officer, Pan-Asia Tech Holdings',
    residence: 'Corporate Tenant at The Landmark',
    location: 'Bandra Kurla Complex, Mumbai',
    year: 'Occupancy 2024'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'How does Aurevia Developers ensure on-time delivery for high-rise projects?',
    answer: 'We employ automated modular aluminum formwork, pre-engineered structural steel assemblies, and synchronized 4D BIM construction scheduling. All contractor milestones are ringfenced via escrow contracts, maintaining our 99.2% on-time delivery track record across Maharashtra.'
  },
  {
    question: 'Can homebuyers customize floor plans and interior appointments during construction?',
    answer: 'Yes. For our ongoing projects such as Aurevia Grand and Solstice Villas, our in-house architectural team provides personalized layout consultations. Homeowners can reconfigure non-structural internal walls, select custom Italian marble slabs, and configure KNX home automation systems prior to MEP rough-in.'
  },
  {
    question: 'What sustainable and green building standards are incorporated?',
    answer: 'All Aurevia developments are designed to achieve IGBC (Indian Green Building Council) Gold or Platinum ratings. This includes solar PV microgrids, 100% on-site rainwater harvesting, solar-reflective cool roof coatings, EV fast-charging bays, and native xeriscape landscaping.'
  },
  {
    question: 'Do you offer dedicated NRI investment services and remote legal facilitation?',
    answer: 'Yes. Our dedicated NRI Private Client Desk manages seamless overseas remittances, power-of-attorney documentation, video-conference architectural walkthroughs, digital signing, and post-possession leasing and estate management for clients based in the UAE, UK, Singapore, and USA.'
  }
];
