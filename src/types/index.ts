
export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  slug: string;
}

export interface PriceRange {
  min: number;
  max: number;
}

export interface StockItem {
  id: string;
  name: string;
  description: string;
  priceRange: PriceRange;
  unit: string;
  available: boolean;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email?: string;
  isPremium: boolean;
}

export interface Location {
  address: string;
  section: string;
  description: string;
  isPremium: boolean;
}

export interface Wholesaler {
  id: string;
  name: string;
  description: string;
  logo: string;
  coverImage: string;
  categories: string[];
  stockItems: StockItem[];
  contactInfo: ContactInfo;
  location: Location;
  rating: number;
  reviewCount: number;
  verified: boolean;
  premium: boolean;
  featured: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  hasPaidAccess: boolean;
  favorites: string[];
}
