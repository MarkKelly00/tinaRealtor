export interface User {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
}

export interface Listing {
  id: string;
  mls: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  lotSize?: number;
  propertyType: string;
  listingDate: string;
  status: 'active' | 'pending' | 'sold';
  images: string[];
  description: string;
  features: string[];
  agent: {
    name: string;
    email: string;
    phone: string;
  };
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface FavoriteListing {
  id: string;
  userId: string;
  listingId: string;
  dateAdded: string;
  notes?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  message: string;
  listingId?: string;
}

export interface SearchFilters {
  minPrice?: number;
  maxPrice?: number;
  beds?: number;
  baths?: number;
  propertyType?: string;
  city?: string;
  state?: string;
  zipCode?: string;
}

export interface AgentProfile {
  name: string;
  title: string;
  email: string;
  phone: string;
  bio: string;
  image: string;
  license: string;
  specialties: string[];
  socialLinks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
} 