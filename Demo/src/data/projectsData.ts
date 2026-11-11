import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'aurevia-grand',
    name: 'Aurevia Grand',
    category: 'Residential',
    location: 'Worli Sea Face, South Mumbai',
    city: 'Mumbai',
    status: 'Ongoing',
    configuration: '3, 4 & 5 BHK Sky Mansions',
    area: '3,850 – 8,400 sq.ft.',
    priceRange: '₹18.5 Cr – ₹45.0 Cr',
    possession: 'Q4 2027 (Under Construction)',
    shortDescription: 'A soaring 62-storey waterfront landmark offering bespoke sky mansions with 270° unobstructed panoramic views of the Arabian Sea.',
    fullDescription: 'Aurevia Grand stands as the crown jewel of our residential collection. Designed in collaboration with premier international structural engineers and biophilic landscape architects, each residence features 12.5-foot clear ceiling heights, private elevator foyers, cantilevered wrap-around timber decks, and acoustic triple-glazed thermal facades designed to withstand coastal saline environments.',
    heroImage: '/src/assets/images/hero_aurevia_tower_1794373691703.jpg',
    galleryImages: [
      '/src/assets/images/hero_aurevia_tower_1794373691703.jpg',
      '/src/assets/images/sky_infinity_pool_1794373727683.jpg',
      '/src/assets/images/interior_luxury_residence_1794373692461.jpg',
      '/src/assets/images/architectural_craft_detail_1794373727579.jpg'
    ],
    specifications: [
      { label: 'Structural Design', value: 'Seismic Zone IV compliant RCC shear wall frame with M70 high-grade self-compacting concrete' },
      { label: 'Flooring & Finishes', value: 'Imported Botticino & Statuario Italian marble in living zones, engineered European white oak in master suites' },
      { label: 'Fenestration', value: 'Schüco acoustic triple-glazed low-E structural glazing with marine-grade champagne anodized aluminium' },
      { label: 'Air Conditioning', value: 'Daikin VRV central chilled water system with integrated MERV-13 medical grade air purification' },
      { label: 'Vertical Mobility', value: 'KONE destination-controlled high-speed elevators (5.0 m/s) with biometric private foyer access' },
      { label: 'Home Automation', value: 'KNX-integrated lighting, automated blinds, climate control, and digital keyless access' }
    ],
    amenities: [
      '400-ft High Sky Infinity Pool & Deck',
      'Private Helipad & Aviator Executive Lounge',
      '24/7 White-Glove Concierge & Valet',
      'Private Sommelier Tasting Cellar',
      '16-Seat Dolby Atmos Screening Cinema',
      'Dedicated Ultra-Fast EV Charging Bays',
      'Hydroponic Biophilic Sky Gardens',
      'Spa, Vitality Pool & Cryo-Wellness Suite'
    ],
    connectivity: [
      { landmark: 'Bandra-Worli Sea Link', distance: '3 mins' },
      { landmark: 'Nariman Point & Colaba', distance: '15 mins via Coastal Road' },
      { landmark: 'BKC Financial Hub', distance: '20 mins' },
      { landmark: 'Chhatrapati Shivaji Maharaj Int. Airport', distance: '25 mins' }
    ],
    highlights: [
      'Prime Worli Waterfront Frontage',
      'Zero Direct Column Intrusions in Living Rooms',
      'IGBC Platinum Green Building Pre-Certification',
      'Private 4-Car Dedicated Basement Parking'
    ]
  },
  {
    id: 'the-urban-nest',
    name: 'The Urban Nest',
    category: 'Residential',
    location: 'Koregaon Park, Lane 5, Pune',
    city: 'Pune',
    status: 'Completed',
    configuration: '2 & 3 BHK Designer Residences',
    area: '1,450 – 2,800 sq.ft.',
    priceRange: '₹2.85 Cr – ₹5.60 Cr',
    possession: 'Ready for Possession',
    shortDescription: 'Artisanal low-density boutique residences framed by champagne brass geometric screens and reflective garden walkways.',
    fullDescription: 'Nestled beneath the verdant rain trees of Koregaon Park, The Urban Nest balances Pune\'s cultural calm with modern architectural minimalism. Featuring distinctive perforated metal privacy screens inspired by classical Indian jali geometry, natural travertine stonework, and deep cantilevered balconies, each home welcomes dappled natural sunlight and year-round cross-ventilation.',
    heroImage: '/src/assets/images/urban_nest_facade_1794373710685.jpg',
    galleryImages: [
      '/src/assets/images/urban_nest_facade_1794373710685.jpg',
      '/src/assets/images/interior_luxury_residence_1794373692461.jpg',
      '/src/assets/images/architectural_craft_detail_1794373727579.jpg',
      '/src/assets/images/sky_infinity_pool_1794373727683.jpg'
    ],
    specifications: [
      { label: 'Structural Framework', value: 'Post-tensioned flat slab design providing flexible open-plan living configurations' },
      { label: 'Exterior Cladding', value: 'Self-cleaning textured architectural mineral plaster with custom CNC champagne bronze screens' },
      { label: 'Flooring', value: 'Large-format beige travertine slabs with seamless brass hairline inlay' },
      { label: 'Kitchen & Bath', value: 'Custom Poggenpohl modular cabinetry with Hansgrohe & Duravit sanitary appointments' },
      { label: 'Security Protocols', value: '4-Tier perimeter monitoring with RFID vehicle access and digital video door entry' }
    ],
    amenities: [
      'Heated 25m Lap Pool & Sun Deck',
      'Japanese Zen Garden with Reflection Walkway',
      'Soundproof Executive Co-working Pods',
      'Squash Court & Indoor Fitness Studio',
      'Children’s Discovery Play Lounge',
      'Private Residents’ Banquet Hall'
    ],
    connectivity: [
      { landmark: 'Osho Teerth Park & Gardens', distance: '2 mins walk' },
      { landmark: 'Pune International Airport', distance: '12 mins' },
      { landmark: 'Kalyani Nagar IT Park', distance: '7 mins' },
      { landmark: 'Pune Railway Station', distance: '10 mins' }
    ],
    highlights: [
      'Low-Density Layout with only 2 units per floor',
      '100% Power Backup for all homes',
      'Rainwater Harvesting & Solar Water Heating',
      'Ready to Move with Full Completion Certificate'
    ]
  },
  {
    id: 'aurevia-heights',
    name: 'Aurevia Heights',
    category: 'Residential',
    location: 'Pali Hill, Bandra West, Mumbai',
    city: 'Mumbai',
    status: 'Ongoing',
    configuration: '3 & 4 BHK Duplex Penthouses',
    area: '2,900 – 5,800 sq.ft.',
    priceRange: '₹14.2 Cr – ₹28.5 Cr',
    possession: 'Q2 2026 (Advanced Construction)',
    shortDescription: 'Bespoke duplex sky residences in Bandra’s most coveted tranquil hilltop enclave, finished with floor-to-ceiling glass and Italian marble.',
    fullDescription: 'Aurevia Heights represents timeless understated luxury in Bandra West. Crafted for connoisseurs of discretion and elegance, these duplex residences boast double-height 22-foot grand living rooms, custom brass staircase designs, acoustic isolation between floor plates, and panoramic sunset views across the Bandra coastline.',
    heroImage: '/src/assets/images/interior_luxury_residence_1794373692461.jpg',
    galleryImages: [
      '/src/assets/images/interior_luxury_residence_1794373692461.jpg',
      '/src/assets/images/hero_aurevia_tower_1794373691703.jpg',
      '/src/assets/images/architectural_craft_detail_1794373727579.jpg',
      '/src/assets/images/sky_infinity_pool_1794373727683.jpg'
    ],
    specifications: [
      { label: 'Living Room Height', value: '22-foot double-height volume with custom motorized solar drapery integration' },
      { label: 'Glazing & Acoustic', value: 'Saint-Gobain acoustic double-glazed laminated low-E glass facade' },
      { label: 'Kitchen & Utility', value: 'Italian Poliform kitchen setup with separate wet kitchen and butler pantry' },
      { label: 'Sanitary Fixtures', value: 'Gessi bathroom fixtures and freestanding Devon&Devon soaking tubs' },
      { label: 'Power & Utilities', value: '100% continuous dual-feed DG power backup with automated changeover' }
    ],
    amenities: [
      'Private Rooftop Jacuzzis on Penthouse Decks',
      'Private Chef Demonstration Kitchen',
      'Artisanal Coffee & Cigar Parlour',
      'Technogym Olympic Fitness Center',
      'Valet with Chauffeur Rest Quarters',
      'Temperature Controlled Wine Storage'
    ],
    connectivity: [
      { landmark: 'Carter Road Promenade', distance: '4 mins' },
      { landmark: 'Bandra-Worli Sea Link Entrance', distance: '8 mins' },
      { landmark: 'Bandra Kurla Complex (BKC)', distance: '14 mins' },
      { landmark: 'Domestic & Int. Airport Terminal', distance: '18 mins' }
    ],
    highlights: [
      'Exclusive 18 Ultra-Luxury Units Only',
      'Private Keycard Access Directly to Living Room',
      'Panoramic City & Sea Horizon Horizons',
      'Designed to IGBC Gold Sustainability Standards'
    ]
  },
  {
    id: 'greencrest-residency',
    name: 'Greencrest Residency',
    category: 'Luxury Villas',
    location: 'Khandala-Lonavala Foothills, Maharashtra',
    city: 'Lonavala',
    status: 'Completed',
    configuration: '4 & 5 BHK Hillside Villas & Sky Decks',
    area: '4,200 – 7,900 sq.ft.',
    priceRange: '₹8.5 Cr – ₹16.8 Cr',
    possession: 'Ready for Possession',
    shortDescription: 'Cascading hillside villas integrated into the lush Western Ghats forest canopy with private valley-edge infinity pools.',
    fullDescription: 'Greencrest Residency honors the majestic contours of the Sahyadri mountains. Built using local basalt stonework, sustainably harvested Burma teak, and living green roofs, each independent cantilevered residence blends into the misty hillside. Residents enjoy private heated pools looking out over dense monsoon valleys and year-round microclimates.',
    heroImage: '/src/assets/images/greencrest_residency_1794373710052.jpg',
    galleryImages: [
      '/src/assets/images/greencrest_residency_1794373710052.jpg',
      '/src/assets/images/luxury_villa_estate_1794373694032.jpg',
      '/src/assets/images/architectural_craft_detail_1794373727579.jpg',
      '/src/assets/images/interior_luxury_residence_1794373692461.jpg'
    ],
    specifications: [
      { label: 'Civil Architecture', value: 'Cantilevered steel-reinforced structural decks anchored deep into basalt bedrock' },
      { label: 'Masonry & Cladding', value: 'Hand-chiseled local black trap basalt stone and weather-treated timber slats' },
      { label: 'Sustainability Rating', value: 'IGBC Platinum net-positive rainwater harvesting and on-site solar micro-grid' },
      { label: 'Thermal Comfort', value: 'High thermal mass construction requiring 40% less artificial cooling' },
      { label: 'Pool Engineering', value: 'Ozone-filtered infinity pools with concealed perimeter balancing tanks' }
    ],
    amenities: [
      'Valley-Edge Cantilevered Private Infinity Pools',
      'Curated Organic Citrus & Spice Orchards',
      'Stargazing Observatory Deck with Telescope',
      'Private 2.5km Forest Hiking Trails',
      'Ayurvedic Hydrotherapy Wellness Pavilion',
      'Clubhouse with Fireside Lounge'
    ],
    connectivity: [
      { landmark: 'Mumbai-Pune Expressway Toll', distance: '8 mins' },
      { landmark: 'Lonavala Market & Station', distance: '10 mins' },
      { landmark: 'Navi Mumbai International Airport', distance: '45 mins' },
      { landmark: 'Pune West (Baner/Hinjawadi)', distance: '50 mins' }
    ],
    highlights: [
      'Sprawling 10-Acre Low-Impact Masterplan',
      '100% Unobstructed Forest & Valley Vistas',
      'Professional Property Management & Rental Desk',
      'Ready Possession with Gated Security'
    ]
  },
  {
    id: 'the-landmark',
    name: 'The Landmark',
    category: 'Commercial',
    location: 'G-Block, Bandra Kurla Complex (BKC), Mumbai',
    city: 'Mumbai',
    status: 'Completed',
    configuration: 'Grade-A Corporate Suites & Flagship Retail',
    area: '5,000 – 48,000 sq.ft. floor plates',
    priceRange: 'Lease & Outright Purchase on Request',
    possession: 'Immediate Occupancy',
    shortDescription: 'LEED Platinum high-performance corporate headquarters featuring dramatic bronze fins, reflection plaza, and column-free floor plates.',
    fullDescription: 'The Landmark is BKC’s premier corporate address, designed for multinational financial institutions, legal consultancies, and luxury brand flagships. With an imposing 32-foot triple-height arrival lobby, architectural reflection pond, column-free 4.2-meter floor plates, and intelligent building management systems, it establishes an elite standard for commercial development.',
    heroImage: '/src/assets/images/commercial_landmark_exterior_1794373693382.jpg',
    galleryImages: [
      '/src/assets/images/commercial_landmark_exterior_1794373693382.jpg',
      '/src/assets/images/architectural_craft_detail_1794373727579.jpg',
      '/src/assets/images/interior_luxury_residence_1794373692461.jpg',
      '/src/assets/images/hero_aurevia_tower_1794373691703.jpg'
    ],
    specifications: [
      { label: 'Building Efficiency', value: 'LEED Platinum certified envelope with 35% reduced energy consumption' },
      { label: 'Clear Ceiling Height', value: '4.2 meters clear slab-to-slab height optimized for open-plan corporate work' },
      { label: 'HVAC Infrastructure', value: 'Water-cooled centrifugal chillers with variable primary flow and UV-C treated air' },
      { label: 'Elevator Banks', value: '12 high-capacity KONE destination-dispatch passenger cars with 35-sec wait limit' },
      { label: 'Electrical Redundancy', value: 'Dual 33kV substations with N+1 diesel generator backup and UPS connectivity' }
    ],
    amenities: [
      '500-Seat Multi-Tier Amphitheatre & Auditorium',
      'Executive Telepresence Boardrooms',
      'Ground Floor High-Street Luxury Retail Arcade',
      'Rooftop Executive Lounge & Sunset Terrace',
      '4-Tier Security with Facial Recognition Access',
      'Multi-Level Automated Basement Parking for 800+ Cars'
    ],
    connectivity: [
      { landmark: 'Mumbai Metro Line 2B Station', distance: '2 mins walk' },
      { landmark: 'BKC Bullet Train Terminal (Upcoming)', distance: '4 mins' },
      { landmark: 'Domestic Airport Terminal 1', distance: '12 mins' },
      { landmark: 'South Mumbai via Coastal Link', distance: '18 mins' }
    ],
    highlights: [
      'Zero Column Obstructions on Central Floor Plates',
      'Triple-Height Architectural Glass Grand Lobby',
      'Dedicated Courier & Goods Loading Dock',
      'High-Speed Fiber Backbone & Redundant ISPs'
    ]
  },
  {
    id: 'solstice-villas',
    name: 'Solstice Villas',
    category: 'Luxury Villas',
    location: 'Kalyani Nagar / Wagholi, Pune',
    city: 'Pune',
    status: 'Upcoming',
    configuration: '5 BHK Signature Estate Villas',
    area: '6,500 – 11,200 sq.ft.',
    priceRange: '₹12.0 Cr – ₹22.5 Cr',
    possession: 'Pre-Launch / Expression of Interest',
    shortDescription: 'Gated enclave of 24 bespoke independent luxury estate villas featuring private infinity pools, sunlit atriums, and private basements.',
    fullDescription: 'Solstice Villas redefines privacy and estate ownership in Pune. Spread over expansive landscaped private plots, each home is an architectural masterpiece of warm stone, expansive glazing, and seamless indoor-outdoor living. Residents benefit from dedicated private elevators, private 4-car basements, personal lap pools, and lush manicured lawns.',
    heroImage: '/src/assets/images/luxury_villa_estate_1794373694032.jpg',
    galleryImages: [
      '/src/assets/images/luxury_villa_estate_1794373694032.jpg',
      '/src/assets/images/greencrest_residency_1794373710052.jpg',
      '/src/assets/images/architectural_craft_detail_1794373727579.jpg',
      '/src/assets/images/interior_luxury_residence_1794373692461.jpg'
    ],
    specifications: [
      { label: 'Plot Sizing', value: 'Individual deeded plots ranging from 8,000 to 14,000 sq.ft. per villa' },
      { label: 'Private Vertical Transit', value: 'Schindler pneumatic glass elevator connecting basement to rooftop terrace' },
      { label: 'Substructure', value: 'Private subterranean multi-car garage with air-conditioned lounge and staff quarters' },
      { label: 'Smart Integration', value: 'Control4 full-home automation for acoustics, lighting, irrigation and security' },
      { label: 'Landscape Architecture', value: 'Native Indian flora, frangipani groves, and automated drip irrigation systems' }
    ],
    amenities: [
      'Private Heated Swimming Pool & Timber Deck',
      'Sunken Lawn Amphitheater & Fire Pit',
      'Private 4-Car Air-Conditioned Basement',
      'Club Solstice with Tennis & Paddle Courts',
      'Gourmet Resident Deli & Bakery Pavilion',
      '24/7 Armed Security & Drone Patrol Protocol'
    ],
    connectivity: [
      { landmark: 'Kalyani Nagar High Street', distance: '6 mins' },
      { landmark: 'Pune Golf Course (Yerawada)', distance: '10 mins' },
      { landmark: 'Phoenix Marketcity Viman Nagar', distance: '8 mins' },
      { landmark: 'Pune Airport (PNQ)', distance: '12 mins' }
    ],
    highlights: [
      'Only 24 Signature Villas across 15 Landscaped Acres',
      'Full Customization of Interior Floorplans Available',
      'Pre-Launch Pricing & Preferential Plot Allotment',
      'Turnkey Delivery with 5-Year Maintenance Guarantee'
    ]
  }
];
