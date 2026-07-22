import coffee from "@/assets/biz-coffee.jpg";
import restaurant from "@/assets/biz-restaurant.jpg";
import boutique from "@/assets/biz-boutique.jpg";
import spa from "@/assets/biz-spa.jpg";

export type Business = {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  city: string;
  address: string;
  rating: number;
  reviews: number;
  priceLevel: 1 | 2 | 3;
  image: string;
  description: string;
  phone: string;
  website: string;
  hours: string;
  lat: number;
  lng: number;
  featured?: boolean;
  verified?: boolean;
  tags: string[];
};

export const categories = [
  { slug: "restaurants", name: "Restaurants", icon: "🍽️", count: 128 },
  { slug: "cafes", name: "Cafés & Coffee", icon: "☕", count: 96 },
  { slug: "shopping", name: "Shopping", icon: "🛍️", count: 74 },
  { slug: "beauty", name: "Beauty & Spa", icon: "💆", count: 52 },
  { slug: "hotels", name: "Hotels & Stays", icon: "🏨", count: 41 },
  { slug: "services", name: "Services", icon: "🧰", count: 63 },
  { slug: "health", name: "Health", icon: "🩺", count: 38 },
  { slug: "nightlife", name: "Nightlife", icon: "🎶", count: 29 },
];

export const businesses: Business[] = [
  {
    id: "tomoca-coffee",
    name: "Tomoca Coffee Roasters",
    category: "Cafés & Coffee",
    categorySlug: "cafes",
    city: "Addis Ababa",
    address: "Wawel St, Piazza",
    rating: 4.8,
    reviews: 1240,
    priceLevel: 2,
    image: coffee,
    description:
      "Legendary Addis roastery pouring single-origin Ethiopian coffee since 1953. Buna ceremony daily.",
    phone: "+251 11 111 1379",
    website: "https://tomocacoffee.com",
    hours: "Mon–Sat · 7:00–20:00",
    lat: 9.0359,
    lng: 38.7519,
    featured: true,
    verified: true,
    tags: ["Coffee", "Roastery", "Takeaway"],
  },
  {
    id: "yod-abyssinia",
    name: "Yod Abyssinia Cultural",
    category: "Restaurants",
    categorySlug: "restaurants",
    city: "Addis Ababa",
    address: "Bole Medhanialem",
    rating: 4.7,
    reviews: 980,
    priceLevel: 3,
    image: restaurant,
    description:
      "Iconic cultural restaurant serving injera, tibs, kitfo and live traditional music every night.",
    phone: "+251 11 661 2985",
    website: "https://yodethiopia.com",
    hours: "Daily · 11:00–23:30",
    lat: 8.9927,
    lng: 38.7898,
    featured: true,
    verified: true,
    tags: ["Injera", "Live music", "Dinner"],
  },
  {
    id: "muya-boutique",
    name: "Muya Ethiopia Boutique",
    category: "Shopping",
    categorySlug: "shopping",
    city: "Addis Ababa",
    address: "Kazanchis",
    rating: 4.6,
    reviews: 312,
    priceLevel: 2,
    image: boutique,
    description:
      "Handwoven cotton habesha dresses, netela scarves and modern Ethiopian design goods.",
    phone: "+251 11 552 0033",
    website: "https://muyaethiopia.com",
    hours: "Mon–Sat · 9:30–19:00",
    lat: 9.014,
    lng: 38.767,
    featured: true,
    verified: true,
    tags: ["Fashion", "Handmade", "Souvenirs"],
  },
  {
    id: "boston-day-spa",
    name: "Boston Day Spa",
    category: "Beauty & Spa",
    categorySlug: "beauty",
    city: "Addis Ababa",
    address: "Bole, Friendship Building",
    rating: 4.9,
    reviews: 540,
    priceLevel: 3,
    image: spa,
    description:
      "Full-service spa with massage, facials, hammam and hair styling in a calm modern space.",
    phone: "+251 11 663 3838",
    website: "https://bostondayspa.com",
    hours: "Daily · 9:00–21:00",
    lat: 8.9959,
    lng: 38.7826,
    featured: true,
    verified: true,
    tags: ["Massage", "Facial", "Salon"],
  },
  {
    id: "kaldis-coffee",
    name: "Kaldi's Coffee — Bole",
    category: "Cafés & Coffee",
    categorySlug: "cafes",
    city: "Addis Ababa",
    address: "Bole Rd",
    rating: 4.4,
    reviews: 2210,
    priceLevel: 1,
    image: coffee,
    description: "Ethiopia's biggest café chain — espresso, macchiato and quick breakfast.",
    phone: "+251 11 618 2222",
    website: "https://kaldiscoffee.com",
    hours: "Daily · 6:30–22:00",
    lat: 8.9902,
    lng: 38.7891,
    verified: true,
    tags: ["Wifi", "Breakfast", "Chain"],
  },
  {
    id: "sishu-restaurant",
    name: "Sishu Restaurant",
    category: "Restaurants",
    categorySlug: "restaurants",
    city: "Addis Ababa",
    address: "Old Airport",
    rating: 4.5,
    reviews: 430,
    priceLevel: 3,
    image: restaurant,
    description: "Garden restaurant with wood-fired pizza, grill and Sunday brunch.",
    phone: "+251 11 371 5060",
    website: "#",
    hours: "Daily · 11:00–23:00",
    lat: 8.9832,
    lng: 38.7581,
    tags: ["Brunch", "Garden", "Pizza"],
  },
  {
    id: "sabahar-textiles",
    name: "Sabahar Textiles",
    category: "Shopping",
    categorySlug: "shopping",
    city: "Addis Ababa",
    address: "Mekanissa",
    rating: 4.7,
    reviews: 189,
    priceLevel: 3,
    image: boutique,
    description: "Handwoven scarves, throws and rugs using Ethiopian cotton and eri silk.",
    phone: "+251 11 321 1421",
    website: "https://sabahar.com",
    hours: "Mon–Fri · 9:00–17:30",
    lat: 8.9541,
    lng: 38.7203,
    verified: true,
    tags: ["Handmade", "Textiles", "Gifts"],
  },
  {
    id: "kuriftu-spa",
    name: "Kuriftu Spa Bole",
    category: "Beauty & Spa",
    categorySlug: "beauty",
    city: "Addis Ababa",
    address: "Bole Atlas",
    rating: 4.6,
    reviews: 620,
    priceLevel: 3,
    image: spa,
    description: "Signature African wellness rituals, couples suites and heated pool.",
    phone: "+251 11 667 2043",
    website: "https://kurifturesorts.com",
    hours: "Daily · 8:00–22:00",
    lat: 8.9967,
    lng: 38.7842,
    tags: ["Spa", "Wellness", "Couples"],
  },
];

export const cities = Array.from(new Set(businesses.map((b) => b.city)));

export function getBusiness(id: string) {
  return businesses.find((b) => b.id === id);
}

export function searchBusinesses(query: string, category?: string, city?: string) {
  const q = query.trim().toLowerCase();
  return businesses.filter((b) => {
    if (category && b.categorySlug !== category) return false;
    if (city && b.city !== city) return false;
    if (!q) return true;
    return (
      b.name.toLowerCase().includes(q) ||
      b.description.toLowerCase().includes(q) ||
      b.tags.some((t) => t.toLowerCase().includes(q)) ||
      b.category.toLowerCase().includes(q)
    );
  });
}
