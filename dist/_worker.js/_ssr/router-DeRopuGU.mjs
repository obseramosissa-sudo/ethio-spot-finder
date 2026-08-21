import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { f as require_react } from "../_libs/@react-leaflet/core+[...].mjs";
import { t as X, y as Menu } from "../_libs/lucide-react.mjs";
import { V as notFound, _ as createRootRouteWithContext, b as useRouter, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as getServerFnById, i as createServerFn, n as __exportAll, t as TSS_SERVER_FUNCTION } from "./server-CJQVVjBW.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { i as string, n as zodValidator, r as object, t as fallback } from "../_libs/tanstack__zod-adapter+zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/businesses-CbNDCQ6d.js
var biz_coffee_default = "/assets/biz-coffee-0ZG_mJ2T.jpg";
var biz_restaurant_default = "/assets/biz-restaurant-Bk1JiutV.jpg";
var biz_boutique_default = "/assets/biz-boutique-By3H3M11.jpg";
var biz_spa_default = "/assets/biz-spa-DUoeMQJZ.jpg";
var categories = [
	{
		slug: "restaurants",
		name: "Restaurants",
		icon: "🍽️",
		count: 128
	},
	{
		slug: "cafes",
		name: "Cafés & Coffee",
		icon: "☕",
		count: 96
	},
	{
		slug: "shopping",
		name: "Shopping",
		icon: "🛍️",
		count: 74
	},
	{
		slug: "beauty",
		name: "Beauty & Spa",
		icon: "💆",
		count: 52
	},
	{
		slug: "hotels",
		name: "Hotels & Stays",
		icon: "🏨",
		count: 41
	},
	{
		slug: "services",
		name: "Services",
		icon: "🧰",
		count: 63
	},
	{
		slug: "health",
		name: "Health",
		icon: "🩺",
		count: 38
	},
	{
		slug: "nightlife",
		name: "Nightlife",
		icon: "🎶",
		count: 29
	}
];
var businesses = [
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
		image: biz_coffee_default,
		photos: [
			biz_coffee_default,
			biz_coffee_default,
			biz_coffee_default
		],
		description: "Legendary Addis roastery pouring single-origin Ethiopian coffee since 1953. Buna ceremony daily. A living piece of Ethiopian coffee culture in the heart of Piazza.",
		phone: "+251 11 111 1379",
		website: "https://tomocacoffee.com",
		hours: [
			{
				day: "Mon",
				time: "07:00–20:00"
			},
			{
				day: "Tue",
				time: "07:00–20:00"
			},
			{
				day: "Wed",
				time: "07:00–20:00"
			},
			{
				day: "Thu",
				time: "07:00–20:00"
			},
			{
				day: "Fri",
				time: "07:00–20:00"
			},
			{
				day: "Sat",
				time: "07:00–20:00"
			},
			{
				day: "Sun",
				time: "Closed"
			}
		],
		paymentMethods: [
			"Cash",
			"CBE Birr",
			"Telebirr",
			"Card"
		],
		languages: ["Amharic", "English"],
		menuItems: [
			{
				name: "Single-origin buna",
				price: "80 ETB",
				note: "Roasted in-house"
			},
			{
				name: "Macchiato",
				price: "65 ETB"
			},
			{
				name: "Tomoca blend 250g",
				price: "450 ETB",
				note: "Take-home bag"
			}
		],
		services: [
			"Roastery tours",
			"Wholesale beans",
			"Takeaway"
		],
		lat: 9.0359,
		lng: 38.7519,
		featured: true,
		verified: true,
		tags: [
			"Coffee",
			"Roastery",
			"Takeaway"
		],
		amenities: [
			"Wi-Fi",
			"Outdoor seating",
			"Wheelchair accessible"
		]
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
		image: biz_restaurant_default,
		photos: [
			biz_restaurant_default,
			biz_restaurant_default,
			biz_restaurant_default
		],
		description: "Iconic cultural restaurant serving injera, tibs, kitfo and live traditional music every night. The go-to spot for visitors wanting a full Ethiopian dinner experience.",
		phone: "+251 11 661 2985",
		website: "https://yodethiopia.com",
		hours: [
			{
				day: "Mon",
				time: "11:00–23:30"
			},
			{
				day: "Tue",
				time: "11:00–23:30"
			},
			{
				day: "Wed",
				time: "11:00–23:30"
			},
			{
				day: "Thu",
				time: "11:00–23:30"
			},
			{
				day: "Fri",
				time: "11:00–23:30"
			},
			{
				day: "Sat",
				time: "11:00–23:30"
			},
			{
				day: "Sun",
				time: "11:00–23:30"
			}
		],
		paymentMethods: [
			"Cash",
			"Card",
			"Telebirr"
		],
		languages: ["Amharic", "English"],
		menuItems: [
			{
				name: "Tibs firfir",
				price: "520 ETB"
			},
			{
				name: "Kitfo special",
				price: "680 ETB",
				note: "With ayib & gomen"
			},
			{
				name: "Vegetarian fasting plate",
				price: "450 ETB"
			}
		],
		services: [
			"Live music",
			"Private dining",
			"Catering"
		],
		lat: 8.9927,
		lng: 38.7898,
		featured: true,
		verified: true,
		tags: [
			"Injera",
			"Live music",
			"Dinner"
		],
		amenities: [
			"Parking",
			"Live band",
			"Group seating"
		]
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
		image: biz_boutique_default,
		photos: [
			biz_boutique_default,
			biz_boutique_default,
			biz_boutique_default
		],
		description: "Handwoven cotton habesha dresses, netela scarves and modern Ethiopian design goods. Ethical production, fair-trade materials, and a beautiful showroom.",
		phone: "+251 11 552 0033",
		website: "https://muyaethiopia.com",
		hours: [
			{
				day: "Mon",
				time: "09:30–19:00"
			},
			{
				day: "Tue",
				time: "09:30–19:00"
			},
			{
				day: "Wed",
				time: "09:30–19:00"
			},
			{
				day: "Thu",
				time: "09:30–19:00"
			},
			{
				day: "Fri",
				time: "09:30–19:00"
			},
			{
				day: "Sat",
				time: "09:30–19:00"
			},
			{
				day: "Sun",
				time: "Closed"
			}
		],
		paymentMethods: [
			"Cash",
			"Card",
			"Telebirr"
		],
		languages: [
			"Amharic",
			"English",
			"French"
		],
		menuItems: [
			{
				name: "Handwoven netela scarf",
				price: "1,200 ETB"
			},
			{
				name: "Habesha dress",
				price: "3,500 ETB",
				note: "Made to order"
			},
			{
				name: "Leather clutch",
				price: "950 ETB"
			}
		],
		services: [
			"Custom tailoring",
			"Gift wrapping",
			"International shipping"
		],
		lat: 9.014,
		lng: 38.767,
		featured: true,
		verified: true,
		tags: [
			"Fashion",
			"Handmade",
			"Souvenirs"
		],
		amenities: [
			"Fitting room",
			"Wi-Fi",
			"Parking"
		]
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
		image: biz_spa_default,
		photos: [
			biz_spa_default,
			biz_spa_default,
			biz_spa_default
		],
		description: "Full-service spa with massage, facials, hammam and hair styling in a calm modern space. Professional therapists and premium products.",
		phone: "+251 11 663 3838",
		website: "https://bostondayspa.com",
		hours: [
			{
				day: "Mon",
				time: "09:00–21:00"
			},
			{
				day: "Tue",
				time: "09:00–21:00"
			},
			{
				day: "Wed",
				time: "09:00–21:00"
			},
			{
				day: "Thu",
				time: "09:00–21:00"
			},
			{
				day: "Fri",
				time: "09:00–21:00"
			},
			{
				day: "Sat",
				time: "09:00–21:00"
			},
			{
				day: "Sun",
				time: "09:00–21:00"
			}
		],
		paymentMethods: [
			"Cash",
			"Card",
			"Telebirr"
		],
		languages: ["Amharic", "English"],
		menuItems: [
			{
				name: "Swedish massage (60 min)",
				price: "1,800 ETB"
			},
			{
				name: "Deep facial",
				price: "1,500 ETB"
			},
			{
				name: "Hammam ritual",
				price: "2,200 ETB"
			}
		],
		services: [
			"Massage",
			"Facials",
			"Hair",
			"Nails",
			"Hammam"
		],
		lat: 8.9959,
		lng: 38.7826,
		featured: true,
		verified: true,
		tags: [
			"Massage",
			"Facial",
			"Salon"
		],
		amenities: [
			"Booking online",
			"Parking",
			"Private rooms"
		]
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
		image: biz_coffee_default,
		photos: [biz_coffee_default, biz_coffee_default],
		description: "Ethiopia's biggest café chain — espresso, macchiato and quick breakfast. Reliable Wi-Fi and a convenient Bole location.",
		phone: "+251 11 618 2222",
		website: "https://kaldiscoffee.com",
		hours: [
			{
				day: "Mon",
				time: "06:30–22:00"
			},
			{
				day: "Tue",
				time: "06:30–22:00"
			},
			{
				day: "Wed",
				time: "06:30–22:00"
			},
			{
				day: "Thu",
				time: "06:30–22:00"
			},
			{
				day: "Fri",
				time: "06:30–22:00"
			},
			{
				day: "Sat",
				time: "06:30–22:00"
			},
			{
				day: "Sun",
				time: "06:30–22:00"
			}
		],
		paymentMethods: [
			"Cash",
			"Telebirr",
			"Card"
		],
		languages: ["Amharic", "English"],
		menuItems: [
			{
				name: "Espresso",
				price: "45 ETB"
			},
			{
				name: "Breakfast combo",
				price: "180 ETB",
				note: "Pastry + coffee"
			},
			{
				name: "Iced latte",
				price: "95 ETB"
			}
		],
		services: [
			"Wi-Fi",
			"Takeaway",
			"Breakfast"
		],
		lat: 8.9902,
		lng: 38.7891,
		verified: true,
		tags: [
			"Wifi",
			"Breakfast",
			"Chain"
		],
		amenities: [
			"Wi-Fi",
			"Air conditioning",
			"Drive-through"
		]
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
		image: biz_restaurant_default,
		photos: [biz_restaurant_default, biz_restaurant_default],
		description: "Garden restaurant with wood-fired pizza, grill and Sunday brunch. A relaxed outdoor escape popular with families and weekend groups.",
		phone: "+251 11 371 5060",
		website: "#",
		hours: [
			{
				day: "Mon",
				time: "11:00–23:00"
			},
			{
				day: "Tue",
				time: "11:00–23:00"
			},
			{
				day: "Wed",
				time: "11:00–23:00"
			},
			{
				day: "Thu",
				time: "11:00–23:00"
			},
			{
				day: "Fri",
				time: "11:00–23:00"
			},
			{
				day: "Sat",
				time: "11:00–23:00"
			},
			{
				day: "Sun",
				time: "11:00–23:00"
			}
		],
		paymentMethods: ["Cash", "Card"],
		languages: ["Amharic", "English"],
		menuItems: [
			{
				name: "Wood-fired margherita",
				price: "420 ETB"
			},
			{
				name: "Sunday brunch buffet",
				price: "850 ETB"
			},
			{
				name: "Grilled ribeye",
				price: "1,200 ETB"
			}
		],
		services: [
			"Brunch",
			"Garden dining",
			"Private events"
		],
		lat: 8.9832,
		lng: 38.7581,
		tags: [
			"Brunch",
			"Garden",
			"Pizza"
		],
		amenities: [
			"Garden",
			"Parking",
			"Kids friendly"
		]
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
		image: biz_boutique_default,
		photos: [biz_boutique_default, biz_boutique_default],
		description: "Handwoven scarves, throws and rugs using Ethiopian cotton and eri silk. Fair-trade certified and beautiful enough to gift or keep.",
		phone: "+251 11 321 1421",
		website: "https://sabahar.com",
		hours: [
			{
				day: "Mon",
				time: "09:00–17:30"
			},
			{
				day: "Tue",
				time: "09:00–17:30"
			},
			{
				day: "Wed",
				time: "09:00–17:30"
			},
			{
				day: "Thu",
				time: "09:00–17:30"
			},
			{
				day: "Fri",
				time: "09:00–17:30"
			},
			{
				day: "Sat",
				time: "Closed"
			},
			{
				day: "Sun",
				time: "Closed"
			}
		],
		paymentMethods: [
			"Cash",
			"Card",
			"Bank transfer"
		],
		languages: ["Amharic", "English"],
		menuItems: [
			{
				name: "Cotton scarf",
				price: "900 ETB"
			},
			{
				name: "Eri silk throw",
				price: "3,200 ETB"
			},
			{
				name: "Woven rug",
				price: "5,500 ETB"
			}
		],
		services: [
			"Custom orders",
			"Wholesale",
			"International shipping"
		],
		lat: 8.9541,
		lng: 38.7203,
		verified: true,
		tags: [
			"Handmade",
			"Textiles",
			"Gifts"
		],
		amenities: ["Showroom", "Custom orders"]
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
		image: biz_spa_default,
		photos: [biz_spa_default, biz_spa_default],
		description: "Signature African wellness rituals, couples suites and heated pool. A luxury spa experience in the Bole neighborhood.",
		phone: "+251 11 667 2043",
		website: "https://kurifturesorts.com",
		hours: [
			{
				day: "Mon",
				time: "08:00–22:00"
			},
			{
				day: "Tue",
				time: "08:00–22:00"
			},
			{
				day: "Wed",
				time: "08:00–22:00"
			},
			{
				day: "Thu",
				time: "08:00–22:00"
			},
			{
				day: "Fri",
				time: "08:00–22:00"
			},
			{
				day: "Sat",
				time: "08:00–22:00"
			},
			{
				day: "Sun",
				time: "08:00–22:00"
			}
		],
		paymentMethods: [
			"Cash",
			"Card",
			"Telebirr"
		],
		languages: ["Amharic", "English"],
		menuItems: [
			{
				name: "African coffee scrub",
				price: "2,500 ETB"
			},
			{
				name: "Couples ritual",
				price: "4,800 ETB"
			},
			{
				name: "Heated pool day pass",
				price: "800 ETB"
			}
		],
		services: [
			"Spa",
			"Wellness",
			"Couples",
			"Pool"
		],
		lat: 8.9967,
		lng: 38.7842,
		tags: [
			"Spa",
			"Wellness",
			"Couples"
		],
		amenities: [
			"Pool",
			"Couples suites",
			"Parking"
		]
	}
];
var reviews = [
	{
		id: "r1",
		businessId: "tomoca-coffee",
		author: "Abebe K.",
		avatar: "AK",
		rating: 5,
		text: "The best macchiato in Addis. The beans are roasted in front of you and the smell is unforgettable. A must for coffee lovers.",
		date: "2026-07-12",
		helpful: 24,
		tags: ["Coffee", "Authentic"]
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
		tags: ["Busy", "Quality"]
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
		tags: ["Live music", "Kitfo"]
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
		tags: ["Dinner", "Reservation"]
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
		tags: ["Gifts", "Shipping"]
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
		tags: ["Massage", "Clean"]
	}
];
var collections = [
	{
		id: "c1",
		slug: "best-buna-addis",
		title: "Best buna in Addis",
		description: "Where to find the richest, most aromatic Ethiopian coffee in the capital — from historic roasters to modern cafés.",
		coverImage: biz_coffee_default,
		businessIds: ["tomoca-coffee", "kaldis-coffee"],
		featured: true,
		curatedBy: "Ethio Spot Team"
	},
	{
		id: "c2",
		slug: "cultural-dining",
		title: "Cultural dining experiences",
		description: "Restaurants where live music, traditional décor, and authentic flavors turn dinner into an experience.",
		coverImage: biz_restaurant_default,
		businessIds: ["yod-abyssinia"],
		featured: true,
		curatedBy: "Ethio Spot Team"
	},
	{
		id: "c3",
		slug: "ethical-shopping",
		title: "Ethical Ethiopian gifts",
		description: "Handmade, fair-trade fashion and textiles that support local artisans and make meaningful souvenirs.",
		coverImage: biz_boutique_default,
		businessIds: ["muya-boutique", "sabahar-textiles"],
		featured: true,
		curatedBy: "Ethio Spot Team"
	},
	{
		id: "c4",
		slug: "self-care-sunday",
		title: "Self-care Sunday",
		description: "Spas and wellness spots for massage, facials, hammam, and a calm reset in the city.",
		coverImage: biz_spa_default,
		businessIds: ["boston-day-spa", "kuriftu-spa"],
		featured: true,
		curatedBy: "Ethio Spot Team"
	},
	{
		id: "c5",
		slug: "family-friendly-weekend",
		title: "Family-friendly weekend",
		description: "Garden restaurants, easy parking, and relaxed spots that work for kids and groups.",
		coverImage: biz_restaurant_default,
		businessIds: ["sishu-restaurant"],
		featured: false,
		curatedBy: "Ethio Spot Team"
	}
];
var cities = Array.from(new Set(businesses.map((b) => b.city)));
function getBusiness(id) {
	return businesses.find((b) => b.id === id);
}
function getBusinessReviews(id) {
	return reviews.filter((r) => r.businessId === id);
}
function getCollection(slug) {
	return collections.find((c) => c.slug === slug);
}
function getCollectionBusinesses(collection) {
	return businesses.filter((b) => collection.businessIds.includes(b.id));
}
function searchBusinesses(query, category, city) {
	const q = query.trim().toLowerCase();
	return businesses.filter((b) => {
		if (category && b.categorySlug !== category) return false;
		if (city && b.city !== city) return false;
		if (!q) return true;
		return b.name.toLowerCase().includes(q) || b.description.toLowerCase().includes(q) || b.tags.some((t) => t.toLowerCase().includes(q)) || b.category.toLowerCase().includes(q) || b.amenities.some((a) => a.toLowerCase().includes(q));
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-DeRopuGU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BYPaighp.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
var ethio_spot_logo_png_asset_default = {
	version: 1,
	asset_id: "d47f1e94-15c5-436f-a7a6-af023187053a",
	project_id: "f2a843f6-d998-45ce-b010-47a1a32397e1",
	url: "/__l5e/assets-v1/d47f1e94-15c5-436f-a7a6-af023187053a/ethio-spot-logo.png",
	r2_key: "a/v1/f2a843f6-d998-45ce-b010-47a1a32397e1/d47f1e94-15c5-436f-a7a6-af023187053a/ethio-spot-logo.png",
	original_filename: "ethio-spot-logo.png",
	size: 645227,
	content_type: "image/png",
	created_at: "2026-07-31T20:02:43Z"
};
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/directory",
		label: "Directory"
	},
	{
		to: "/categories",
		label: "Categories"
	},
	{
		to: "/collections",
		label: "Collections"
	},
	{
		to: "/map",
		label: "Map"
	},
	{
		to: "/search",
		label: "Search"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex min-w-0 items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: ethio_spot_logo_png_asset_default.url,
						alt: "Ethio Spot logo",
						className: "h-9 w-auto shrink-0"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "truncate font-display text-lg font-bold tracking-tight",
							children: ["Ethio ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-brand",
								children: "Spot"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "-mt-0.5 truncate text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground",
							children: "Find · Connect · Grow"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 md:flex",
					children: nav.map((n) => {
						const active = n.to === "/" ? pathname === "/" : pathname.startsWith(n.to);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: n.to,
							className: `rounded-full px-4 py-2 text-sm font-medium transition ${active ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"}`,
							children: n.label
						}, n.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-2 md:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "rounded-full px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary",
						children: "Log in"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/register",
						className: "rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-brand-foreground shadow-brand transition hover:opacity-95",
						children: "List your business"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen((v) => !v),
					className: "grid h-10 w-10 place-items-center rounded-lg border border-border md:hidden",
					"aria-label": "Toggle menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-background md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3",
				children: [nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: n.to,
					onClick: () => setOpen(false),
					className: "rounded-lg px-3 py-2 text-sm font-medium hover:bg-secondary",
					children: n.label
				}, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex gap-2 border-t border-border pt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						onClick: () => setOpen(false),
						className: "flex-1 rounded-lg border border-border px-3 py-2 text-center text-sm font-medium",
						children: "Log in"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/register",
						onClick: () => setOpen(false),
						className: "flex-1 rounded-lg bg-brand-gradient px-3 py-2 text-center text-sm font-semibold text-brand-foreground",
						children: "List business"
					})]
				})]
			})
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 border-t border-border bg-secondary/40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: ethio_spot_logo_png_asset_default.url,
							alt: "Ethio Spot logo",
							className: "h-9 w-auto"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-lg font-bold",
							children: ["Ethio ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-brand",
								children: "Spot"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-sm text-sm text-muted-foreground",
						children: "Discover Ethiopian businesses on the map — restaurants, cafés, shops, spas and more. Locate what you love in seconds."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-semibold",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/directory",
							className: "hover:text-foreground",
							children: "Directory"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/categories",
							className: "hover:text-foreground",
							children: "Categories"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/collections",
							className: "hover:text-foreground",
							children: "Collections"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/map",
							className: "hover:text-foreground",
							children: "Map"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/search",
							className: "hover:text-foreground",
							children: "Search"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-semibold",
					children: "For Owners"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/register",
							className: "hover:text-foreground",
							children: "List your business"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/login",
							className: "hover:text-foreground",
							children: "Owner login"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/dashboard",
							className: "hover:text-foreground",
							children: "Dashboard"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin",
							className: "hover:text-foreground",
							children: "Admin"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Ethio Spot. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"Made with ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-brand",
						children: "green"
					}),
					" & ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold",
						children: "gold"
					}),
					" in Addis Ababa."
				] })]
			})
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$14 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Ethio Spot — Find Ethiopian businesses on the map" },
			{
				name: "description",
				content: "Ethio Spot is the fastest way to discover Ethiopian restaurants, cafés, shops, spas and services on an interactive map."
			},
			{
				property: "og:title",
				content: "Ethio Spot — Find businesses on the map"
			},
			{
				property: "og:description",
				content: "Discover, locate and visit Ethiopian businesses in seconds."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
			},
			{
				rel: "stylesheet",
				href: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$14.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		})
	});
}
var $$splitComponentImporter$12 = () => import("./routes-C8KmChaE.mjs");
var Route$13 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Ethio Spot — Discover Ethiopian businesses on the map" },
		{
			name: "description",
			content: "Find restaurants, cafés, shops, spas and services near you. Ethio Spot maps the best Ethiopian businesses in one place."
		},
		{
			property: "og:title",
			content: "Ethio Spot — Discover Ethiopian businesses"
		},
		{
			property: "og:description",
			content: "Find, locate and visit trusted Ethiopian businesses."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./admin-DI9X-LyG.mjs");
var Route$12 = createFileRoute("/admin")({
	head: () => ({ meta: [
		{ title: "Admin — Ethio Spot" },
		{
			name: "description",
			content: "Ethio Spot admin dashboard: approve listings, manage users and moderate reviews."
		},
		{
			property: "og:title",
			content: "Admin — Ethio Spot"
		},
		{
			property: "og:description",
			content: "Moderate the Ethio Spot platform."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./categories-DfiWulHD.mjs");
var Route$11 = createFileRoute("/categories")({
	head: () => ({ meta: [
		{ title: "Categories — Ethio Spot" },
		{
			name: "description",
			content: "Browse Ethiopian businesses by category — restaurants, cafés, shopping, spa and more."
		},
		{
			property: "og:title",
			content: "Categories — Ethio Spot"
		},
		{
			property: "og:description",
			content: "Every category, one place."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./collections-Dx_9UFLi.mjs");
var Route$10 = createFileRoute("/collections")({
	head: () => ({ meta: [
		{ title: "Collections — Ethio Spot" },
		{
			name: "description",
			content: "Curated collections of the best Ethiopian businesses — best coffee, cultural dining, ethical gifts, and more."
		},
		{
			property: "og:title",
			content: "Collections — Ethio Spot"
		},
		{
			property: "og:description",
			content: "Handpicked Ethiopian business collections."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./dashboard-Cr3B4DhK.mjs");
var Route$9 = createFileRoute("/dashboard")({
	head: () => ({ meta: [
		{ title: "Owner Analytics Dashboard — Ethio Spot" },
		{
			name: "description",
			content: "Track profile views, top search keywords and how often customers save your Ethio Spot listings."
		},
		{
			property: "og:title",
			content: "Owner Analytics Dashboard — Ethio Spot"
		},
		{
			property: "og:description",
			content: "Views, search keywords and saves for every listing you manage."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./directory-B8Mgiwpl.mjs");
var schema$1 = object({
	q: fallback(string(), "").default(""),
	category: fallback(string(), "").default(""),
	city: fallback(string(), "").default("")
});
var Route$8 = createFileRoute("/directory")({
	validateSearch: zodValidator(schema$1),
	head: () => ({ meta: [
		{ title: "Business Directory — Ethio Spot" },
		{
			name: "description",
			content: "Browse all Ethiopian businesses on Ethio Spot. Filter by category and city."
		},
		{
			property: "og:title",
			content: "Business Directory — Ethio Spot"
		},
		{
			property: "og:description",
			content: "Every Ethiopian business, one directory."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./login-Bz1WcBpQ.mjs");
var Route$7 = createFileRoute("/login")({
	head: () => ({ meta: [
		{ title: "Log in — Ethio Spot" },
		{
			name: "description",
			content: "Log in to your Ethio Spot owner account."
		},
		{
			property: "og:title",
			content: "Log in — Ethio Spot"
		},
		{
			property: "og:description",
			content: "Manage your business listing."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./map-WCw4_HB4.mjs");
var Route$6 = createFileRoute("/map")({
	head: () => ({ meta: [
		{ title: "Map — Ethio Spot" },
		{
			name: "description",
			content: "See every Ethiopian business on an interactive map. Pan, zoom and tap a pin to explore."
		},
		{
			property: "og:title",
			content: "Map — Ethio Spot"
		},
		{
			property: "og:description",
			content: "Every business, pinned to the map."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./register-DRpwVgFu.mjs");
var Route$5 = createFileRoute("/register")({
	head: () => ({ meta: [
		{ title: "List your business — Ethio Spot" },
		{
			name: "description",
			content: "Register your Ethiopian business on Ethio Spot. Free listing, verified badge, reach thousands."
		},
		{
			property: "og:title",
			content: "List your business — Ethio Spot"
		},
		{
			property: "og:description",
			content: "Put your business on the map in minutes."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./search-7ip94UNT.mjs");
var schema = object({ q: fallback(string(), "").default("") });
var Route$4 = createFileRoute("/search")({
	validateSearch: zodValidator(schema),
	head: () => ({ meta: [
		{ title: "Search — Ethio Spot" },
		{
			name: "description",
			content: "Search Ethiopian businesses across categories and cities."
		},
		{
			property: "og:title",
			content: "Search — Ethio Spot"
		},
		{
			property: "og:description",
			content: "Find any business in seconds."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var Route$3 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async ({ request }) => {
	const baseUrl = new URL(request.url).origin;
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/directory",
				changefreq: "daily",
				priority: "0.9"
			},
			{
				path: "/categories",
				changefreq: "weekly",
				priority: "0.8"
			},
			{
				path: "/collections",
				changefreq: "weekly",
				priority: "0.8"
			},
			{
				path: "/map",
				changefreq: "weekly",
				priority: "0.8"
			},
			{
				path: "/search",
				changefreq: "weekly",
				priority: "0.6"
			},
			{
				path: "/register",
				changefreq: "monthly",
				priority: "0.6"
			},
			{
				path: "/login",
				changefreq: "monthly",
				priority: "0.4"
			},
			...collections.map((c) => ({
				path: `/collections/${c.slug}`,
				changefreq: "monthly",
				priority: "0.7"
			})),
			...businesses.map((b) => ({
				path: `/business/${b.id}`,
				changefreq: "weekly",
				priority: "0.7"
			}))
		].map((e) => `  <url><loc>${baseUrl}${e.path}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getBusinessStorefront = createServerFn({ method: "GET" }).inputValidator((data) => ({ slug: String(data.slug).slice(0, 120) })).handler(createSsrRpc("f28b3f7e44324071ab1f777257fd8eb0e4daee10b6e901fb7ac6a58f609cd98e"));
var $$splitComponentImporter$2 = () => import("./business._id-CL78LTDa.mjs");
var $$splitNotFoundComponentImporter = () => import("./business._id-KbFSoKst.mjs");
var $$splitErrorComponentImporter = () => import("./business._id-BMnEnzie.mjs");
var Route$2 = createFileRoute("/business/$id")({
	loader: async ({ params }) => {
		const b = getBusiness(params.id);
		if (!b) throw notFound();
		const storefront = await getBusinessStorefront({ data: { slug: params.id } }).catch(() => ({
			products: [],
			jobs: []
		}));
		return {
			business: b,
			reviews: getBusinessReviews(params.id),
			storefront
		};
	},
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Not found — Ethio Spot" }, {
			name: "robots",
			content: "noindex"
		}] };
		const b = loaderData.business;
		return { meta: [
			{ title: `${b.name} — Ethio Spot` },
			{
				name: "description",
				content: b.description
			},
			{
				property: "og:title",
				content: `${b.name} — Ethio Spot`
			},
			{
				property: "og:description",
				content: b.description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./collections.index-BAX7f8tC.mjs");
var Route$1 = createFileRoute("/collections/")({
	head: () => ({ meta: [
		{ title: "Collections — Ethio Spot" },
		{
			name: "description",
			content: "Curated lists of Ethiopian businesses — best buna, cultural dining, ethical gifts, and more."
		},
		{
			property: "og:title",
			content: "Collections — Ethio Spot"
		},
		{
			property: "og:description",
			content: "Handpicked Ethiopian business lists by local experts."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./collections._slug-CxUBMqux.mjs");
var Route = createFileRoute("/collections/$slug")({
	loader: ({ params }) => {
		const c = getCollection(params.slug);
		if (!c) throw notFound();
		return {
			collection: c,
			businesses: getCollectionBusinesses(c)
		};
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Not found — Ethio Spot" }, {
			name: "robots",
			content: "noindex"
		}] };
		const c = loaderData.collection;
		return { meta: [
			{ title: `${c.title} — Ethio Spot` },
			{
				name: "description",
				content: c.description
			},
			{
				property: "og:title",
				content: `${c.title} — Ethio Spot`
			},
			{
				property: "og:description",
				content: c.description
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$13.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$14
});
var AdminRoute = Route$12.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$14
});
var CategoriesRoute = Route$11.update({
	id: "/categories",
	path: "/categories",
	getParentRoute: () => Route$14
});
var CollectionsRoute = Route$10.update({
	id: "/collections",
	path: "/collections",
	getParentRoute: () => Route$14
});
var DashboardRoute = Route$9.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$14
});
var DirectoryRoute = Route$8.update({
	id: "/directory",
	path: "/directory",
	getParentRoute: () => Route$14
});
var LoginRoute = Route$7.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$14
});
var MapRoute = Route$6.update({
	id: "/map",
	path: "/map",
	getParentRoute: () => Route$14
});
var RegisterRoute = Route$5.update({
	id: "/register",
	path: "/register",
	getParentRoute: () => Route$14
});
var SearchRoute = Route$4.update({
	id: "/search",
	path: "/search",
	getParentRoute: () => Route$14
});
var SitemapDotxmlRoute = Route$3.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$14
});
var BusinessIdRoute = Route$2.update({
	id: "/business/$id",
	path: "/business/$id",
	getParentRoute: () => Route$14
});
var CollectionsIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => CollectionsRoute
});
var CollectionsRouteChildren = {
	CollectionsSlugRoute: Route.update({
		id: "/$slug",
		path: "/$slug",
		getParentRoute: () => CollectionsRoute
	}),
	CollectionsIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AdminRoute,
	CategoriesRoute,
	CollectionsRoute: CollectionsRoute._addFileChildren(CollectionsRouteChildren),
	DashboardRoute,
	DirectoryRoute,
	LoginRoute,
	MapRoute,
	RegisterRoute,
	SearchRoute,
	SitemapDotxmlRoute,
	BusinessIdRoute
};
var routeTree = Route$14._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { Route$8 as a, cities as c, Route$4 as i, collections as l, Route as n, businesses as o, Route$2 as r, categories as s, router_exports as t, searchBusinesses as u };
