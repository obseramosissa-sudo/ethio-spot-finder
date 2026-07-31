import coffee from "@/assets/biz-coffee.jpg";
import restaurant from "@/assets/biz-restaurant.jpg";
import boutique from "@/assets/biz-boutique.jpg";
import spa from "@/assets/biz-spa.jpg";

export type Business = {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  city: string;
  address: string;
  rating: number;
  reviews: number;
  priceLevel: 1 | 2 | 3;
  image: string;
  photos: string[];
  description: string;
  phone: string;
  website: string;
  hours: { day: string; time: string }[];
  paymentMethods: string[];
  languages: string[];
  menuItems: { name: string; price: string; note?: string }[];
  services: string[];
  lat: number;
  lng: number;
  featured?: boolean;
  verified?: boolean;
  tags: string[];
  amenities: string[];
};

export type Review = {
  id: string;
  businessId: string;
  author: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
  helpful: number;
  tags: string[];
};

export type Collection = {
  id: string;
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  businessIds: string[];
  featured: boolean;
  curatedBy: string;
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
    slug: "tomoca-coffee-roasters",
    name: "Tomoca Coffee Roasters",
    category: "Cafés & Coffee",
    categorySlug: "cafes",
    city: "Addis Ababa",
    address: "Wawel St, Piazza",
    rating: 4.8,
    reviews: 1240,
    priceLevel: 2,
    image: coffee,
    photos: [coffee, coffee, coffee],
    description:
      "Legendary Addis roastery pouring single-origin Ethiopian coffee since 1953. Buna ceremony daily. A living piece of Ethiopian coffee culture in the heart of Piazza.",
    phone: "+251 11 111 1379",
    website: "https://tomocacoffee.com",
    hours: [
      { day: "Mon", time: "07:00–20:00" },
      { day: "Tue", time: "07:00–20:00" },
      { day: "Wed", time: "07:00–20:00" },
      { day: "Thu", time: "07:00–20:00" },
      { day: "Fri", time: "07:00–20:00" },
      { day: "Sat", time: "07:00–20:00" },
      { day: "Sun", time: "Closed" },
    ],
    paymentMethods: ["Cash", "CBE Birr", "Telebirr", "Card"],
    languages: ["Amharic", "English"],
    menuItems: [
      { name: "Single-origin buna", price: "80 ETB", note: "Roasted in-house" },
      { name: "Macchiato", price: "65 ETB" },
      { name: "Tomoca blend 250g", price: "450 ETB", note: "Take-home bag" },
    ],
    services: ["Roastery tours", "Wholesale beans", "Takeaway"],
    lat: 9.0359,
    lng: 38.7519,
    featured: true,
    verified: true,
    tags: ["Coffee", "Roastery", "Takeaway"],
    amenities: ["Wi-Fi", "Outdoor seating", "Wheelchair accessible"],
  },
  {
    id: "yod-abyssinia",
    slug: "yod-abyssinia-cultural",
    name: "Yod Abyssinia Cultural",
    category: "Restaurants",
    categorySlug: "restaurants",
    city: "Addis Ababa",
    address: "Bole Medhanialem",
    rating: 4.7,
    reviews: 980,
    priceLevel: 3,
    image: restaurant,
    photos: [restaurant, restaurant, restaurant],
    description:
      "Iconic cultural restaurant serving injera, tibs, kitfo and live traditional music every night. The go-to spot for visitors wanting a full Ethiopian dinner experience.",
    phone: "+251 11 661 2985",
    website: "https://yodethiopia.com",
    hours: [
      { day: "Mon", time: "11:00–23:30" },
      { day: "Tue", time: "11:00–23:30" },
      { day: "Wed", time: "11:00–23:30" },
      { day: "Thu", time: "11:00–23:30" },
      { day: "Fri", time: "11:00–23:30" },
      { day: "Sat", time: "11:00–23:30" },
      { day: "Sun", time: "11:00–23:30" },
    ],
    paymentMethods: ["Cash", "Card", "Telebirr"],
    languages: ["Amharic", "English"],
    menuItems: [
      { name: "Tibs firfir", price: "520 ETB" },
      { name: "Kitfo special", price: "680 ETB", note: "With ayib & gomen" },
      { name: "Vegetarian fasting plate", price: "450 ETB" },
    ],
    services: ["Live music", "Private dining", "Catering"],
    lat: 8.9927,
    lng: 38.7898,
    featured: true,
    verified: true,
    tags: ["Injera", "Live music", "Dinner"],
    amenities: ["Parking", "Live band", "Group seating"],
  },
  {
    id: "muya-boutique",
    slug: "muya-ethiopia-boutique",
    name: "Muya Ethiopia Boutique",
    category: "Shopping",
    categorySlug: "shopping",
    city: "Addis Ababa",
    address: "Kazanchis",
    rating: 4.6,
    reviews: 312,
    priceLevel: 2,
    image: boutique,
    photos: [boutique, boutique, boutique],
    description:
      "Handwoven cotton habesha dresses, netela scarves and modern Ethiopian design goods. Ethical production, fair-trade materials, and a beautiful showroom.",
    phone: "+251 11 552 0033",
    website: "https://muyaethiopia.com",
    hours: [
      { day: "Mon", time: "09:30–19:00" },
      { day: "Tue", time: "09:30–19:00" },
      { day: "Wed", time: "09:30–19:00" },
      { day: "Thu", time: "09:30–19:00" },
      { day: "Fri", time: "09:30–19:00" },
      { day: "Sat", time: "09:30–19:00" },
      { day: "Sun", time: "Closed" },
    ],
    paymentMethods: ["Cash", "Card", "Telebirr"],
    languages: ["Amharic", "English", "French"],
    menuItems: [
      { name: "Handwoven netela scarf", price: "1,200 ETB" },
      { name: "Habesha dress", price: "3,500 ETB", note: "Made to order" },
      { name: "Leather clutch", price: "950 ETB" },
    ],
    services: ["Custom tailoring", "Gift wrapping", "International shipping"],
    lat: 9.014,
    lng: 38.767,
    featured: true,
    verified: true,
    tags: ["Fashion", "Handmade", "Souvenirs"],
    amenities: ["Fitting room", "Wi-Fi", "Parking"],
  },
  {
    id: "boston-day-spa",
    slug: "boston-day-spa",
    name: "Boston Day Spa",
    category: "Beauty & Spa",
    categorySlug: "beauty",
    city: "Addis Ababa",
    address: "Bole, Friendship Building",
    rating: 4.9,
    reviews: 540,
    priceLevel: 3,
    image: spa,
    photos: [spa, spa, spa],
    description:
      "Full-service spa with massage, facials, hammam and hair styling in a calm modern space. Professional therapists and premium products.",
    phone: "+251 11 663 3838",
    website: "https://bostondayspa.com",
    hours: [
      { day: "Mon", time: "09:00–21:00" },
      { day: "Tue", time: "09:00–21:00" },
      { day: "Wed", time: "09:00–21:00" },
      { day: "Thu", time: "09:00–21:00" },
      { day: "Fri", time: "09:00–21:00" },
      { day: "Sat", time: "09:00–21:00" },
      { day: "Sun", time: "09:00–21:00" },
    ],
    paymentMethods: ["Cash", "Card", "Telebirr"],
    languages: ["Amharic", "English"],
    menuItems: [
      { name: "Swedish massage (60 min)", price: "1,800 ETB" },
      { name: "Deep facial", price: "1,500 ETB" },
      { name: "Hammam ritual", price: "2,200 ETB" },
    ],
    services: ["Massage", "Facials", "Hair", "Nails", "Hammam"],
    lat: 8.9959,
    lng: 38.7826,
    featured: true,
    verified: true,
    tags: ["Massage", "Facial", "Salon"],
    amenities: ["Booking online", "Parking", "Private rooms"],
  },
  {
    id: "kaldis-coffee",
    slug: "kaldis-coffee-bole",
    name: "Kaldi's Coffee — Bole",
    category: "Cafés & Coffee",
    categorySlug: "cafes",
    city: "Addis Ababa",
    address: "Bole Rd",
    rating: 4.4,
    reviews: 2210,
    priceLevel: 1,
    image: coffee,
    photos: [coffee, coffee],
    description: "Ethiopia's biggest café chain — espresso, macchiato and quick breakfast. Reliable Wi-Fi and a convenient Bole location.",
    phone: "+251 11 618 2222",
    website: "https://kaldiscoffee.com",
    hours: [
      { day: "Mon", time: "06:30–22:00" },
      { day: "Tue", time: "06:30–22:00" },
      { day: "Wed", time: "06:30–22:00" },
      { day: "Thu", time: "06:30–22:00" },
      { day: "Fri", time: "06:30–22:00" },
      { day: "Sat", time: "06:30–22:00" },
      { day: "Sun", time: "06:30–22:00" },
    ],
    paymentMethods: ["Cash", "Telebirr", "Card"],
    languages: ["Amharic", "English"],
    menuItems: [
      { name: "Espresso", price: "45 ETB" },
      { name: "Breakfast combo", price: "180 ETB", note: "Pastry + coffee" },
      { name: "Iced latte", price: "95 ETB" },
    ],
    services: ["Wi-Fi", "Takeaway", "Breakfast"],
    lat: 8.9902,
    lng: 38.7891,
    verified: true,
    tags: ["Wifi", "Breakfast", "Chain"],
    amenities: ["Wi-Fi", "Air conditioning", "Drive-through"],
  },
  {
    id: "sishu-restaurant",
    slug: "sishu-restaurant",
    name: "Sishu Restaurant",
    category: "Restaurants",
    categorySlug: "restaurants",
    city: "Addis Ababa",
    address: "Old Airport",
    rating: 4.5,
    reviews: 430,
    priceLevel: 3,
    image: restaurant,
    photos: [restaurant, restaurant],
    description: "Garden restaurant with wood-fired pizza, grill and Sunday brunch. A relaxed outdoor escape popular with families and weekend groups.",
    phone: "+251 11 371 5060",
    website: "#",
    hours: [
      { day: "Mon", time: "11:00–23:00" },
      { day: "Tue", time: "11:00–23:00" },
      { day: "Wed", time: "11:00–23:00" },
      { day: "Thu", time: "11:00–23:00" },
      { day: "Fri", time: "11:00–23:00" },
      { day: "Sat", time: "11:00–23:00" },
      { day: "Sun", time: "11:00–23:00" },
    ],
    paymentMethods: ["Cash", "Card"],
    languages: ["Amharic", "English"],
    menuItems: [
      { name: "Wood-fired margherita", price: "420 ETB" },
      { name: "Sunday brunch buffet", price: "850 ETB" },
      { name: "Grilled ribeye", price: "1,200 ETB" },
    ],
    services: ["Brunch", "Garden dining", "Private events"],
    lat: 8.9832,
    lng: 38.7581,
    tags: ["Brunch", "Garden", "Pizza"],
    amenities: ["Garden", "Parking", "Kids friendly"],
  },
  {
    id: "sabahar-textiles",
    slug: "sabahar-textiles",
    name: "Sabahar Textiles",
    category: "Shopping",
    categorySlug: "shopping",
    city: "Addis Ababa",
    address: "Mekanissa",
    rating: 4.7,
    reviews: 189,
    priceLevel: 3,
    image: boutique,
    photos: [boutique, boutique],
    description: "Handwoven scarves, throws and rugs using Ethiopian cotton and eri silk. Fair-trade certified and beautiful enough to gift or keep.",
    phone: "+251 11 321 1421",
    website: "https://sabahar.com",
    hours: [
      { day: "Mon", time: "09:00–17:30" },
      { day: "Tue", time: "09:00–17:30" },
      { day: "Wed", time: "09:00–17:30" },
      { day: "Thu", time: "09:00–17:30" },
      { day: "Fri", time: "09:00–17:30" },
      { day: "Sat", time: "Closed" },
      { day: "Sun", time: "Closed" },
    ],
    paymentMethods: ["Cash", "Card", "Bank transfer"],
    languages: ["Amharic", "English"],
    menuItems: [
      { name: "Cotton scarf", price: "900 ETB" },
      { name: "Eri silk throw", price: "3,200 ETB" },
      { name: "Woven rug", price: "5,500 ETB" },
    ],
    services: ["Custom orders", "Wholesale", "International shipping"],
    lat: 8.9541,
    lng: 38.7203,
    verified: true,
    tags: ["Handmade", "Textiles", "Gifts"],
    amenities: ["Showroom", "Custom orders"],
  },
  {
    id: "kuriftu-spa",
    slug: "kuriftu-spa-bole",
    name: "Kuriftu Spa Bole",
    category: "Beauty & Spa",
    categorySlug: "beauty",
    city: "Addis Ababa",
    address: "Bole Atlas",
    rating: 4.6,
    reviews: 620,
    priceLevel: 3,
    image: spa,
    photos: [spa, spa],
    description: "Signature African wellness rituals, couples suites and heated pool. A luxury spa experience in the Bole neighborhood.",
    phone: "+251 11 667 2043",
    website: "https://kurifturesorts.com",
    hours: [
      { day: "Mon", time: "08:00–22:00" },
      { day: "Tue", time: "08:00–22:00" },
      { day: "Wed", time: "08:00–22:00" },
      { day: "Thu", time: "08:00–22:00" },
      { day: "Fri", time: "08:00–22:00" },
      { day: "Sat", time: "08:00–22:00" },
      { day: "Sun", time: "08:00–22:00" },
    ],
    paymentMethods: ["Cash", "Card", "Telebirr"],
    languages: ["Amharic", "English"],
    menuItems: [
      { name: "African coffee scrub", price: "2,500 ETB" },
      { name: "Couples ritual", price: "4,800 ETB" },
      { name: "Heated pool day pass", price: "800 ETB" },
    ],
    services: ["Spa", "Wellness", "Couples", "Pool"],
    lat: 8.9967,
    lng: 38.7842,
    tags: ["Spa", "Wellness", "Couples"],
    amenities: ["Pool", "Couples suites", "Parking"],
  },
];

export const reviews: Review[] = [
  {
    id: "r1",
    businessId: "tomoca-coffee",
    author: "Abebe K.",
    avatar: "AK",
    rating: 5,
    text: "The best macchiato in Addis. The beans are roasted in front of you and the smell is unforgettable. A must for coffee lovers.",
    date: "2026-07-12",
    helpful: 24,
    tags: ["Coffee", "Authentic"],
  },
  {
    id: "r2",
    businessId: "tomoca-coffee",
    author: "Sarah M.",
    avatar: "SM",
    rating: 4,
    text: "Classic spot, but very busy on weekends. Come early to get a seat. Their Tomoca blend is great to take home.",
    date: "2026-06-28",
    helpful: 12,
    tags: ["Busy", "Quality"],
  },
  {
    id: "r3",
    businessId: "yod-abyssinia",
    author: "Dawit T.",
    avatar: "DT",
    rating: 5,
    text: "Took my foreign colleagues here and they loved it. The live music and kitfo were the highlight of their trip.",
    date: "2026-07-20",
    helpful: 31,
    tags: ["Live music", "Kitfo"],
  },
  {
    id: "r4",
    businessId: "yod-abyssinia",
    author: "Helen B.",
    avatar: "HB",
    rating: 4,
    text: "Food is excellent, portions generous. Booking is recommended on weekends when the band plays.",
    date: "2026-07-05",
    helpful: 8,
    tags: ["Dinner", "Reservation"],
  },
  {
    id: "r5",
    businessId: "muya-boutique",
    author: "Meron G.",
    avatar: "MG",
    rating: 5,
    text: "Beautiful handwoven pieces. I bought gifts for my family abroad and they shipped them safely. Highly recommend.",
    date: "2026-07-18",
    helpful: 15,
    tags: ["Gifts", "Shipping"],
  },
  {
    id: "r6",
    businessId: "boston-day-spa",
    author: "Lydia A.",
    avatar: "LA",
    rating: 5,
    text: "The hammam ritual was incredible. Professional staff, clean facilities, and the massage was exactly what I needed.",
    date: "2026-07-22",
    helpful: 19,
    tags: ["Massage", "Clean"],
  },
];

export const collections: Collection[] = [
  {
    id: "c1",
    slug: "best-buna-addis",
    title: "Best buna in Addis",
    description: "Where to find the richest, most aromatic Ethiopian coffee in the capital — from historic roasters to modern cafés.",
    coverImage: coffee,
    businessIds: ["tomoca-coffee", "kaldis-coffee"],
    featured: true,
    curatedBy: "Ethio Spot Team",
  },
  {
    id: "c2",
    slug: "cultural-dining",
    title: "Cultural dining experiences",
    description: "Restaurants where live music, traditional décor, and authentic flavors turn dinner into an experience.",
    coverImage: restaurant,
    businessIds: ["yod-abyssinia"],
    featured: true,
    curatedBy: "Ethio Spot Team",
  },
  {
    id: "c3",
    slug: "ethical-shopping",
    title: "Ethical Ethiopian gifts",
    description: "Handmade, fair-trade fashion and textiles that support local artisans and make meaningful souvenirs.",
    coverImage: boutique,
    businessIds: ["muya-boutique", "sabahar-textiles"],
    featured: true,
    curatedBy: "Ethio Spot Team",
  },
  {
    id: "c4",
    slug: "self-care-sunday",
    title: "Self-care Sunday",
    description: "Spas and wellness spots for massage, facials, hammam, and a calm reset in the city.",
    coverImage: spa,
    businessIds: ["boston-day-spa", "kuriftu-spa"],
    featured: true,
    curatedBy: "Ethio Spot Team",
  },
  {
    id: "c5",
    slug: "family-friendly-weekend",
    title: "Family-friendly weekend",
    description: "Garden restaurants, easy parking, and relaxed spots that work for kids and groups.",
    coverImage: restaurant,
    businessIds: ["sishu-restaurant"],
    featured: false,
    curatedBy: "Ethio Spot Team",
  },
];

export const cities = Array.from(new Set(businesses.map((b) => b.city)));

export function getBusiness(id: string) {
  return businesses.find((b) => b.id === id);
}

export function getBusinessReviews(id: string) {
  return reviews.filter((r) => r.businessId === id);
}

export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug);
}

export function getCollectionBusinesses(collection: Collection) {
  return businesses.filter((b) => collection.businessIds.includes(b.id));
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
      b.category.toLowerCase().includes(q) ||
      b.amenities.some((a) => a.toLowerCase().includes(q))
    );
  });
}
