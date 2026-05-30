const TEMPLATE = `You are an expert full-stack web developer specialising in building high-converting local business websites. Your task is to build a complete, production-ready website for the following business.

## Business Details

- **Business Name:** {{BUSINESS_NAME}}
- **Business Type:** {{BUSINESS_TYPE}}
- **Location (City/Area):** {{CITY}}
- **Phone Number:** {{PHONE}}
- **Google Maps Link:** {{MAPS_LINK}}{{TAGLINE_BLOCK}}{{ADDRESS_BLOCK}}{{EMAIL_BLOCK}}{{SERVICES_BLOCK}}{{HOURS_BLOCK}}

## Brand & Design

- **Brand Style:** {{BRAND_STYLE}}
- **Primary Brand Color:** {{PRIMARY_COLOR}}
- **Main Call-to-Action:** {{MAIN_CTA}}

## Your Instructions

Build a complete, single-page website using only HTML, CSS (no frameworks), and minimal vanilla JavaScript. The website must include the following sections in order:

1. **Navigation Bar** — sticky, with the business name/logo on the left, nav links (Services, About, Contact) on the right, and a prominent CTA button ("{{MAIN_CTA}}").

2. **Hero Section** — full-viewport-height hero. Large, confident headline announcing what the business does and where. Subheading with the core value proposition. Two CTA buttons: primary ("{{MAIN_CTA}}") and secondary ("Learn More"). Use the primary brand color ({{PRIMARY_COLOR}}) for the primary button. The hero should have a visually impressive gradient or background treatment.

3. **Services Section** — display the business's main services in a clean 3-column card grid. Each card has an icon, title, and a short description. If specific services were provided, use them; otherwise infer the most common services for a {{BUSINESS_TYPE}}.

4. **Why Choose Us Section** — 3–4 trust-building points (e.g., experience, guarantee, local reputation, response time). Use icons and short punchy text.

5. **About Section** — a warm, human section about the business. Include a placeholder for a team photo (left) and text (right) on desktop, stacked on mobile.

6. **Contact Section** — include:
   - Phone number with a click-to-call link (tel: {{PHONE}})
   - An embedded Google Map using the provided link: {{MAPS_LINK}}
   - A simple contact form (Name, Phone/Email, Message, Submit button)

7. **Footer** — business name, tagline, quick nav links, phone, and copyright.

## Technical Requirements

- **Responsive:** Mobile-first, perfect on all screen sizes. Use CSS Grid and Flexbox.
- **Performance:** No external CSS frameworks or JS libraries. Keep it fast.
- **Typography:** Use Google Fonts. Choose a clean, professional pairing appropriate for a {{BRAND_STYLE}} {{BUSINESS_TYPE}}.
- **Color Palette:** Primary color is {{PRIMARY_COLOR}}. Derive a complementary palette (lighter/darker shades, neutrals) from it.
- **Animations:** Subtle scroll-reveal animations using the Intersection Observer API. No excessive animation.
- **Accessibility:** Semantic HTML5, proper heading hierarchy, alt text, ARIA labels on interactive elements.
- **Code Quality:** Well-commented HTML, organised CSS with clear section comments, clean JS.

Deliver the complete website as a single \`index.html\` file with internal \`<style>\` and \`<script>\` tags. The code must be ready to open in a browser with no build step.`;

function buildOptionalBlock(label, value) {
  if (!value || value.trim() === '') return '';
  return `\n- **${label}:** ${value.trim()}`;
}

export function generatePrompt(formData) {
  const {
    businessName,
    businessType,
    city,
    phone,
    mapsLink,
    brandStyle,
    primaryColor,
    mainCta,
    tagline,
    address,
    email,
    services,
    hours,
  } = formData;

  const brandStyleLabels = {
    professional: 'Professional & Trustworthy',
    friendly: 'Friendly & Approachable',
    luxury: 'Luxury & Premium',
    bold: 'Bold & Modern',
    minimal: 'Clean & Minimal',
  };

  return TEMPLATE
    .replace(/{{BUSINESS_NAME}}/g, businessName || '[Business Name]')
    .replace(/{{BUSINESS_TYPE}}/g, businessType || '[Business Type]')
    .replace(/{{CITY}}/g, city || '[City/Area]')
    .replace(/{{PHONE}}/g, phone || '[Phone Number]')
    .replace(/{{MAPS_LINK}}/g, mapsLink || '[Google Maps Link]')
    .replace(/{{BRAND_STYLE}}/g, brandStyleLabels[brandStyle] || brandStyle)
    .replace(/{{PRIMARY_COLOR}}/g, primaryColor || '#6366f1')
    .replace(/{{MAIN_CTA}}/g, mainCta || 'Get a Free Quote')
    .replace('{{TAGLINE_BLOCK}}', buildOptionalBlock('Tagline', tagline))
    .replace('{{ADDRESS_BLOCK}}', buildOptionalBlock('Full Address', address))
    .replace('{{EMAIL_BLOCK}}', buildOptionalBlock('Email', email))
    .replace('{{SERVICES_BLOCK}}', buildOptionalBlock('Main Services', services))
    .replace('{{HOURS_BLOCK}}', buildOptionalBlock('Opening Hours', hours));
}
