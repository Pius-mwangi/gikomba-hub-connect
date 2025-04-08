
import { Category, Wholesaler } from "../types";

export const categories: Category[] = [
  {
    id: "cat-1",
    name: "Clothes",
    description: "Quality second-hand clothes for all ages",
    imageUrl: "/placeholder.svg",
    slug: "clothes"
  },
  {
    id: "cat-2",
    name: "Shoes",
    description: "All types of footwear for men, women, and children",
    imageUrl: "/placeholder.svg",
    slug: "shoes"
  },
  {
    id: "cat-3",
    name: "Kidswear",
    description: "Children's clothing from infants to teens",
    imageUrl: "/placeholder.svg",
    slug: "kidswear"
  },
  {
    id: "cat-4",
    name: "Bags",
    description: "Handbags, backpacks, and luggage",
    imageUrl: "/placeholder.svg",
    slug: "bags"
  },
  {
    id: "cat-5",
    name: "Mitumba Bundles",
    description: "Wholesale clothing bales and bundles",
    imageUrl: "/placeholder.svg",
    slug: "mitumba-bundles"
  },
  {
    id: "cat-6",
    name: "Accessories",
    description: "Belts, hats, scarves, and more",
    imageUrl: "/placeholder.svg",
    slug: "accessories"
  }
];

export const wholesalers: Wholesaler[] = [
  {
    id: "ws-1",
    name: "Mama Wairimu Collections",
    description: "Specializing in premium children's clothing bundles imported directly from UK and US sources. Known for high-quality selection and fair prices.",
    logo: "/placeholder.svg",
    coverImage: "/placeholder.svg",
    categories: ["cat-1", "cat-3"],
    stockItems: [
      {
        id: "si-1",
        name: "Children's Summer Wear Bundle",
        description: "Mixed summer clothing for children aged 2-8 years",
        priceRange: { min: 8000, max: 12000 },
        unit: "per bale (100pcs)",
        available: true
      },
      {
        id: "si-2",
        name: "Baby Clothing Bundle",
        description: "High-quality baby clothes for 0-24 months",
        priceRange: { min: 10000, max: 15000 },
        unit: "per bale (120pcs)",
        available: true
      }
    ],
    contactInfo: {
      phone: "+254712345678",
      whatsapp: "+254712345678",
      email: "mamawairimu@example.com",
      isPremium: true
    },
    location: {
      address: "Building 4, Row C",
      section: "Gikomba Children's Section",
      description: "Near the main entrance, red building with green door",
      isPremium: true
    },
    rating: 4.8,
    reviewCount: 124,
    verified: true,
    premium: true,
    featured: true
  },
  {
    id: "ws-2",
    name: "Baba Jack Shoes",
    description: "The largest selection of quality second-hand shoes in all of Gikomba. Specializing in branded sports shoes and casual footwear.",
    logo: "/placeholder.svg",
    coverImage: "/placeholder.svg",
    categories: ["cat-2"],
    stockItems: [
      {
        id: "si-3",
        name: "Grade A Sports Shoes Bundle",
        description: "Premium brand sports shoes, mixed sizes",
        priceRange: { min: 20000, max: 30000 },
        unit: "per bale (50 pairs)",
        available: true
      },
      {
        id: "si-4",
        name: "Women's Casual Shoes",
        description: "Mixed women's flats and casual shoes",
        priceRange: { min: 15000, max: 22000 },
        unit: "per bale (80 pairs)",
        available: false
      }
    ],
    contactInfo: {
      phone: "+254723456789",
      whatsapp: "+254723456789",
      isPremium: true
    },
    location: {
      address: "Block B, Stall 23",
      section: "Gikomba Shoe Market",
      description: "Corner stall with blue sign",
      isPremium: true
    },
    rating: 4.6,
    reviewCount: 98,
    verified: true,
    premium: true,
    featured: true
  },
  {
    id: "ws-3",
    name: "Fashion Hub Enterprises",
    description: "Trendy women's and men's clothing at competitive wholesale prices. New stock arrives weekly.",
    logo: "/placeholder.svg",
    coverImage: "/placeholder.svg",
    categories: ["cat-1"],
    stockItems: [
      {
        id: "si-5",
        name: "Ladies' Dresses Bundle",
        description: "Mixed summer and casual dresses, modern styles",
        priceRange: { min: 15000, max: 25000 },
        unit: "per bale (80pcs)",
        available: true
      },
      {
        id: "si-6",
        name: "Men's T-shirts Bundle",
        description: "Branded and plain t-shirts, mixed sizes",
        priceRange: { min: 12000, max: 18000 },
        unit: "per bale (100pcs)",
        available: true
      }
    ],
    contactInfo: {
      phone: "+254734567890",
      whatsapp: "+254734567890",
      isPremium: false
    },
    location: {
      address: "Main Market, Row 5",
      section: "Central Clothing Area",
      description: "Look for the yellow banner",
      isPremium: false
    },
    rating: 4.2,
    reviewCount: 67,
    verified: true,
    premium: false,
    featured: false
  },
  {
    id: "ws-4",
    name: "Luggage Kings",
    description: "Specializing in all types of bags, backpacks, and luggage. From school bags to travel suitcases.",
    logo: "/placeholder.svg",
    coverImage: "/placeholder.svg",
    categories: ["cat-4"],
    stockItems: [
      {
        id: "si-7",
        name: "Mixed Handbags Bundle",
        description: "Assorted women's handbags, various styles",
        priceRange: { min: 18000, max: 28000 },
        unit: "per bale (60pcs)",
        available: true
      },
      {
        id: "si-8",
        name: "Backpacks Bundle",
        description: "School and casual backpacks, good condition",
        priceRange: { min: 15000, max: 22000 },
        unit: "per bale (50pcs)",
        available: true
      }
    ],
    contactInfo: {
      phone: "+254745678901",
      whatsapp: "+254745678901",
      isPremium: false
    },
    location: {
      address: "Building 2, Ground Floor",
      section: "Bags Section",
      description: "Large corner shop with blue walls",
      isPremium: false
    },
    rating: 4.5,
    reviewCount: 83,
    verified: true,
    premium: false,
    featured: false
  },
  {
    id: "ws-5",
    name: "Mitumba Masters",
    description: "The premier source for wholesale clothing bales direct from UK, US, and Canadian sources. Known for consistent quality.",
    logo: "/placeholder.svg",
    coverImage: "/placeholder.svg",
    categories: ["cat-5", "cat-1"],
    stockItems: [
      {
        id: "si-9",
        name: "Grade A Mixed Clothing Bale",
        description: "Premium mixed clothing, minimum 70% branded items",
        priceRange: { min: 35000, max: 45000 },
        unit: "per bale (250pcs)",
        available: true
      },
      {
        id: "si-10",
        name: "Winter Clothing Bundle",
        description: "Jackets, sweaters, and cold-weather items",
        priceRange: { min: 40000, max: 50000 },
        unit: "per bale (150pcs)",
        available: false
      }
    ],
    contactInfo: {
      phone: "+254756789012",
      whatsapp: "+254756789012",
      isPremium: true
    },
    location: {
      address: "Warehouse Area, Building 8",
      section: "Wholesale Bale Section",
      description: "Large warehouse with green roof",
      isPremium: true
    },
    rating: 4.9,
    reviewCount: 156,
    verified: true,
    premium: true,
    featured: true
  },
  {
    id: "ws-6",
    name: "Accessory World",
    description: "Specializing in all types of fashion accessories including belts, hats, scarves, and jewelry at wholesale prices.",
    logo: "/placeholder.svg",
    coverImage: "/placeholder.svg",
    categories: ["cat-6"],
    stockItems: [
      {
        id: "si-11",
        name: "Mixed Accessories Bundle",
        description: "Assorted accessories including belts, hats, and scarves",
        priceRange: { min: 10000, max: 15000 },
        unit: "per box (200pcs)",
        available: true
      },
      {
        id: "si-12",
        name: "Fashion Jewelry Bundle",
        description: "Costume jewelry including necklaces, earrings, and bracelets",
        priceRange: { min: 8000, max: 12000 },
        unit: "per box (300pcs)",
        available: true
      }
    ],
    contactInfo: {
      phone: "+254767890123",
      whatsapp: "+254767890123",
      isPremium: false
    },
    location: {
      address: "Market Center, Stall 45",
      section: "Accessories Area",
      description: "Small shop with display window",
      isPremium: false
    },
    rating: 4.3,
    reviewCount: 62,
    verified: true,
    premium: false,
    featured: false
  }
];
