const palettes = {
  plumber: [
    { label: 'Trust Blue', primary: '#1d4ed8', hex: '#1d4ed8', reason: 'Builds trust and reliability' },
    { label: 'Navy Pro', primary: '#1e3a5f', hex: '#1e3a5f', reason: 'Professional and dependable' },
    { label: 'Steel Grey', primary: '#475569', hex: '#475569', reason: 'Clean, industrial authority' },
    { label: 'Aqua Teal', primary: '#0d9488', hex: '#0d9488', reason: 'Water-inspired credibility' },
  ],
  electrician: [
    { label: 'Electric Yellow', primary: '#ca8a04', hex: '#ca8a04', reason: 'Energy and attention' },
    { label: 'Safety Orange', primary: '#ea580c', hex: '#ea580c', reason: 'Bold, high-visibility trade' },
    { label: 'Midnight Blue', primary: '#1e3a5f', hex: '#1e3a5f', reason: 'Authoritative and safe' },
    { label: 'Graphite', primary: '#374151', hex: '#374151', reason: 'Industrial precision' },
  ],
  restaurant: [
    { label: 'Appetite Red', primary: '#dc2626', hex: '#dc2626', reason: 'Stimulates appetite' },
    { label: 'Warm Amber', primary: '#d97706', hex: '#d97706', reason: 'Welcoming and inviting' },
    { label: 'Forest Green', primary: '#16a34a', hex: '#16a34a', reason: 'Fresh, organic, healthy' },
    { label: 'Rich Espresso', primary: '#7c3aed', hex: '#7c3aed', reason: 'Upscale dining feel' },
  ],
  cafe: [
    { label: 'Espresso Brown', primary: '#78350f', hex: '#78350f', reason: 'Warmth and coffee culture' },
    { label: 'Sage Green', primary: '#4d7c0f', hex: '#4d7c0f', reason: 'Natural, artisan vibe' },
    { label: 'Blush Rose', primary: '#be185d', hex: '#be185d', reason: 'Friendly and inviting' },
    { label: 'Warm Caramel', primary: '#b45309', hex: '#b45309', reason: 'Cozy and comfortable' },
  ],
  dentist: [
    { label: 'Clean Blue', primary: '#0284c7', hex: '#0284c7', reason: 'Clinical trust and hygiene' },
    { label: 'Mint Fresh', primary: '#059669', hex: '#059669', reason: 'Fresh, healthy associations' },
    { label: 'Soft Teal', primary: '#0d9488', hex: '#0d9488', reason: 'Calm and professional' },
    { label: 'Pure White-Blue', primary: '#3b82f6', hex: '#3b82f6', reason: 'Cleanliness and precision' },
  ],
  salon: [
    { label: 'Rose Gold', primary: '#c2185b', hex: '#c2185b', reason: 'Glamour and elegance' },
    { label: 'Soft Lavender', primary: '#7c3aed', hex: '#7c3aed', reason: 'Luxurious and feminine' },
    { label: 'Warm Gold', primary: '#b45309', hex: '#b45309', reason: 'Premium, upscale feel' },
    { label: 'Blush Pink', primary: '#be185d', hex: '#be185d', reason: 'Beauty and confidence' },
  ],
  hair: [
    { label: 'Rose Gold', primary: '#c2185b', hex: '#c2185b', reason: 'Stylish and contemporary' },
    { label: 'Deep Plum', primary: '#7c3aed', hex: '#7c3aed', reason: 'Bold, creative identity' },
    { label: 'Warm Chestnut', primary: '#92400e', hex: '#92400e', reason: 'Natural hair tones' },
    { label: 'Graphite Cool', primary: '#374151', hex: '#374151', reason: 'Modern salon aesthetic' },
  ],
  gym: [
    { label: 'Power Red', primary: '#dc2626', hex: '#dc2626', reason: 'Energy and intensity' },
    { label: 'Electric Blue', primary: '#2563eb', hex: '#2563eb', reason: 'Performance and drive' },
    { label: 'Bold Black', primary: '#111827', hex: '#111827', reason: 'Strength and authority' },
    { label: 'Neon Green', primary: '#16a34a', hex: '#16a34a', reason: 'Vitality and results' },
  ],
  fitness: [
    { label: 'Energize Orange', primary: '#ea580c', hex: '#ea580c', reason: 'Motivation and action' },
    { label: 'Athletic Blue', primary: '#1d4ed8', hex: '#1d4ed8', reason: 'Performance and trust' },
    { label: 'Fresh Green', primary: '#16a34a', hex: '#16a34a', reason: 'Health and vitality' },
    { label: 'Bold Red', primary: '#dc2626', hex: '#dc2626', reason: 'Power and determination' },
  ],
  lawyer: [
    { label: 'Authority Navy', primary: '#1e3a5f', hex: '#1e3a5f', reason: 'Trust and authority' },
    { label: 'Classic Gold', primary: '#b45309', hex: '#b45309', reason: 'Prestige and excellence' },
    { label: 'Deep Charcoal', primary: '#1f2937', hex: '#1f2937', reason: 'Serious, professional' },
    { label: 'Credible Blue', primary: '#1d4ed8', hex: '#1d4ed8', reason: 'Confidence and reliability' },
  ],
  accountant: [
    { label: 'Trust Blue', primary: '#1d4ed8', hex: '#1d4ed8', reason: 'Precision and reliability' },
    { label: 'Forest Green', primary: '#15803d', hex: '#15803d', reason: 'Financial growth and stability' },
    { label: 'Slate Grey', primary: '#475569', hex: '#475569', reason: 'Professional and neutral' },
    { label: 'Navy Anchor', primary: '#1e3a5f', hex: '#1e3a5f', reason: 'Trustworthy and established' },
  ],
  cleaner: [
    { label: 'Fresh Blue', primary: '#0284c7', hex: '#0284c7', reason: 'Clean, hygienic associations' },
    { label: 'Sparkling Teal', primary: '#0d9488', hex: '#0d9488', reason: 'Freshness and cleanliness' },
    { label: 'Mint Green', primary: '#059669', hex: '#059669', reason: 'Natural and eco-friendly' },
    { label: 'Cloud White-Blue', primary: '#3b82f6', hex: '#3b82f6', reason: 'Pure and spotless' },
  ],
  landscaper: [
    { label: 'Deep Forest', primary: '#15803d', hex: '#15803d', reason: 'Nature and growth' },
    { label: 'Earth Brown', primary: '#92400e', hex: '#92400e', reason: 'Outdoor, grounded feel' },
    { label: 'Sage Green', primary: '#4d7c0f', hex: '#4d7c0f', reason: 'Natural and organic' },
    { label: 'Sky Blue', primary: '#0284c7', hex: '#0284c7', reason: 'Open spaces and freshness' },
  ],
  roofer: [
    { label: 'Slate Grey', primary: '#475569', hex: '#475569', reason: 'Solid and dependable' },
    { label: 'Terracotta', primary: '#c2410c', hex: '#c2410c', reason: 'Roofing materials, warmth' },
    { label: 'Steel Blue', primary: '#1d4ed8', hex: '#1d4ed8', reason: 'Trustworthy and strong' },
    { label: 'Dark Charcoal', primary: '#1f2937', hex: '#1f2937', reason: 'Premium, bold authority' },
  ],
  painter: [
    { label: 'Vivid Blue', primary: '#2563eb', hex: '#2563eb', reason: 'Crisp, professional finish' },
    { label: 'Warm Yellow', primary: '#d97706', hex: '#d97706', reason: 'Bright, cheerful results' },
    { label: 'Forest Green', primary: '#15803d', hex: '#15803d', reason: 'Natural, refreshed spaces' },
    { label: 'Rich Red', primary: '#dc2626', hex: '#dc2626', reason: 'Bold, confident craftsmanship' },
  ],
  mechanic: [
    { label: 'Power Red', primary: '#dc2626', hex: '#dc2626', reason: 'Speed and performance' },
    { label: 'Steel Blue', primary: '#1d4ed8', hex: '#1d4ed8', reason: 'Precision and reliability' },
    { label: 'Industrial Grey', primary: '#374151', hex: '#374151', reason: 'Strength and durability' },
    { label: 'Racing Orange', primary: '#ea580c', hex: '#ea580c', reason: 'Energy and expertise' },
  ],
  'real estate': [
    { label: 'Premium Gold', primary: '#b45309', hex: '#b45309', reason: 'Luxury and prestige' },
    { label: 'Navy Prestige', primary: '#1e3a5f', hex: '#1e3a5f', reason: 'Trust and professionalism' },
    { label: 'Emerald Growth', primary: '#059669', hex: '#059669', reason: 'Investment and growth' },
    { label: 'Warm Bronze', primary: '#92400e', hex: '#92400e', reason: 'Established and grounded' },
  ],
  realestate: [
    { label: 'Premium Gold', primary: '#b45309', hex: '#b45309', reason: 'Luxury and prestige' },
    { label: 'Navy Prestige', primary: '#1e3a5f', hex: '#1e3a5f', reason: 'Trust and professionalism' },
    { label: 'Emerald Growth', primary: '#059669', hex: '#059669', reason: 'Investment and growth' },
    { label: 'Warm Bronze', primary: '#92400e', hex: '#92400e', reason: 'Established and grounded' },
  ],
};

const defaultPalettes = [
  { label: 'Indigo Pro', primary: '#6366f1', hex: '#6366f1', reason: 'Modern, versatile and professional' },
  { label: 'Teal Trust', primary: '#0d9488', hex: '#0d9488', reason: 'Fresh, trustworthy and approachable' },
  { label: 'Emerald Growth', primary: '#059669', hex: '#059669', reason: 'Success, growth and vitality' },
  { label: 'Sky Blue', primary: '#0284c7', hex: '#0284c7', reason: 'Clean, reliable and open' },
];

export function getColorSuggestions(businessType) {
  if (!businessType || businessType.trim().length < 2) return defaultPalettes;

  const lower = businessType.toLowerCase();

  for (const [keyword, palette] of Object.entries(palettes)) {
    if (lower.includes(keyword)) return palette;
  }

  return defaultPalettes;
}
