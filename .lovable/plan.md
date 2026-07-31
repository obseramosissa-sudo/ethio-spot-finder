Google Maps is a generic global map. Ethio Spot wins by being the curated, Ethiopia-first business network. Here is the recommended differentiation roadmap.

## Proposition
Position Ethio Spot as "the home of Ethiopian business discovery" — not just coordinates, but trust, culture, and commerce between locals, visitors, and owners.

## Features to add

### 1. Verified & curated Ethiopian business profiles
- Verified badge, business hours, accepted payment methods, menu/service lists, photos, and a short Amharic/English bio.
- Owner-claimed profiles with a public edit history.
- Google Maps only shows basic info; Ethio Spot owns the rich, local story.

### 2. Curated collections & cultural discovery
- "Best coffee in Addis", "Weekend buna spots", "Traditional kitfo restaurants", "Wedding venues", "Day trips from Addis".
- Seasonal lists (e.g., Genna, Meskel, Timkat).
- Human curation beats algorithmic Google listings.

### 3. Community reviews & local photos
- Reviews that highlight Ethiopian-specific criteria: authenticity, hospitality, value, hygiene, atmosphere.
- Photo uploads by customers and owners.
- Report misleading reviews via admin moderation.

### 4. Multi-language support
- Toggle between English and Amharic (later Oromiffa/Tigrigna).
- Localized category names and search synonyms.
- Google Maps supports Amharic labels but not Ethiopian business context.

### 5. Owner dashboard & analytics
- Real view, direction, call, and review analytics.
- Respond to reviews, update hours, post deals, and manage photos.
- Subscription-free; premium tier later for promoted placement.
- Google Business Profile exists, but this is inside the Ethio Spot ecosystem.

### 6. Deals, events & promotions
- Owner-posted daily/weekly deals ("10% off lunch today").
- Local event listings: live music, pop-up markets, food festivals.
- Push users from discovery to action.

### 7. Localized search & category filters
- Search by "buna", "tibs", "shiro", "bole", "piazza", "24-hour", "wi-fi", "family friendly".
- Category icons and filters tuned to Ethiopian habits.
- Smarter than generic Google keyword search.

### 8. Mobile-first nearby discovery
- "Near me" quick filter with walking/driving distance.
- Simple list view first, map second for low-bandwidth users.
- Fast loading on slower networks.

### 9. Saved lists & sharing
- Users can save favorite spots, create shareable lists, and send links via Telegram/WhatsApp.
- Social discovery loop that Google does not have for Ethiopia.

### 10. Traveler & diaspora mode
- Convert prices to USD/EUR, show if a place accepts card, English-friendly staff, airport proximity.
- A dedicated page for "First time in Addis?".

## Implementation plan

Phase 1 — Trust & content
- Enable Lovable Cloud (Supabase) for persistent data.
- Expand the business schema: verified, payments, languages, photos, menus, opening hours, owner_claimed.
- Add review and photo tables.
- Add rich detail page sections.

Phase 2 — Discovery & community
- Add curated collections route and admin UI.
- Add reviews, ratings, and saved favorites.
- Add multi-language toggle (Amharic first).

Phase 3 — Owner value & monetization
- Make register/login real with auth and owner roles.
- Build the owner dashboard with real analytics.
- Add deals/events posting and admin approval.

Phase 4 — Growth loops
- Add shareable lists, WhatsApp deeplink, traveler mode.
- Optimize for mobile and low-bandwidth performance.

## Technical notes
- Requires Lovable Cloud for database, auth, file storage, and admin functions.
- Keep map as a secondary layer; the primary value is curated Ethiopian business data.

Which phase or features should we start with first?