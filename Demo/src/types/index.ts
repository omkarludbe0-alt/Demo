export interface Project {
  id: string;
  name: string;
  category: 'Residential' | 'Commercial' | 'Luxury Villas';
  location: string;
  city: string;
  status: 'Completed' | 'Ongoing' | 'Upcoming';
  configuration: string;
  area: string;
  priceRange: string;
  possession: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  galleryImages: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  amenities: string[];
  connectivity: {
    landmark: string;
    distance: string;
  }[];
  highlights: string[];
}

export interface ServiceExpertise {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  iconName: string;
}

export interface WhyChooseUsItem {
  number: string;
  title: string;
  description: string;
  metricLabel?: string;
  metricValue?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Exterior' | 'Interior' | 'Landscape' | 'Engineering';
  projectRef: string;
  imageUrl: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
  description: string;
}

export interface JourneyPhase {
  phaseNumber: string;
  name: string;
  timeline: string;
  summary: string;
  deliverables: string[];
  auditStandards: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  residence: string;
  location: string;
  year: string;
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  project: string;
  investmentBudget: string;
  preferredDate: string;
  message: string;
}
