 master
import { ChevronDown, Palette } from 'lucide-react';
import { getColorSuggestions } from '../utils/colorRecommendations';
import './PromptBuilder.css';

const BRAND_STYLES = [
  { value: 'professional', label: 'Professional & Trustworthy' },
  { value: 'friendly', label: 'Friendly & Approachable' },
  { value: 'luxury', label: 'Luxury & Premium' },
  { value: 'bold', label: 'Bold & Modern' },
  { value: 'minimal', label: 'Clean & Minimal' },
];

function FormField({ label, children, hint }) {
  return (
    <div className="pb-field">
      <label className="pb-field__label">{label}</label>
      {children}
      {hint && <p className="pb-field__hint">{hint}</p>}
    </div>
  );
}

function PromptBuilder({ formData, onFormChange }) {
  const [advancedOpen, setAdvancedOpen] = useState(false);
 master

  const handleChange = (e) => {
    onFormChange(e.target.name, e.target.value);
  };

  const applySuggestion = (hex) => {
    onFormChange('primaryColor', hex);
  };

  return (
    <div className="pb">
      {/* Basic Options */}
      <section className="pb__section">
        <h3 className="pb__section-title">Basic Options</h3>
        <div className="pb__grid">
          <FormField label="Business Name">
            <input
              className="pb-input"
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="e.g. Joe's Plumbing"
            />
          </FormField>

          <FormField label="Business Type">
            <input
              className="pb-input"
              type="text"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              placeholder="e.g. Plumber, Dentist, Salon..."
            />
          </FormField>

          <FormField label="City / Area">
            <input
              className="pb-input"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="e.g. Austin, TX"
            />
          </FormField>

          <FormField label="Phone Number">
            <input
              className="pb-input"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. (512) 555-0100"
            />
          </FormField>

          <FormField label="Google Maps Link" hint="Paste the share URL from Google Maps">
            <input
              className="pb-input pb-input--full"
              type="url"
              name="mapsLink"
              value={formData.mapsLink}
              onChange={handleChange}
              placeholder="https://maps.google.com/..."
            />
          </FormField>
        </div>
      </section>

      {/* Style Options */}
      <section className="pb__section">
        <h3 className="pb__section-title">Style Options</h3>
        <div className="pb__grid">
          <FormField label="Brand Style">
            <select
              className="pb-select"
              name="brandStyle"
              value={formData.brandStyle}
              onChange={handleChange}
            >
              {BRAND_STYLES.map(s => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </FormField>

          <FormField label="Main CTA Text">
            <input
              className="pb-input"
              type="text"
              name="mainCta"
              value={formData.mainCta}
              onChange={handleChange}
              placeholder="e.g. Get a Free Quote"
            />
          </FormField>
        </div>

        {/* Color suggestions */}
        <div className="pb-color">
          <div className="pb-color__header">
            <Palette size={14} />
            <span>Primary Brand Color</span>
            {formData.businessType && (
              <span className="pb-color__hint">
                — suggestions for "{formData.businessType}"
              </span>
            )}
          </div>
          <div className="pb-color__swatches">
            {colorSuggestions.map(palette => (
              <button
                key={palette.primary}
                className={`pb-swatch${formData.primaryColor === palette.hex ? ' pb-swatch--active' : ''}`}
                style={{ '--swatch-color': palette.hex }}
                onClick={() => applySuggestion(palette.hex)}
                title={`${palette.label}: ${palette.reason}`}
              >
                <span className="pb-swatch__dot" />
                <span className="pb-swatch__label">{palette.label}</span>
              </button>
            ))}
          </div>
          <div className="pb-color__picker-row">
            <label className="pb-color__picker-label">Custom color</label>
            <input
              type="color"
              className="pb-color__picker"
              name="primaryColor"
              value={formData.primaryColor}
              onChange={handleChange}
            />
            <span className="pb-color__hex">{formData.primaryColor}</span>
          </div>
        </div>
      </section>

      {/* Advanced Options */}
      <section className="pb__section pb__section--advanced">
        <button
          className="pb__advanced-toggle"
          onClick={() => setAdvancedOpen(prev => !prev)}
          aria-expanded={advancedOpen}
        >
          <span>Advanced Options</span>
          <ChevronDown
            size={16}
            className={`pb__chevron${advancedOpen ? ' pb__chevron--open' : ''}`}
          />
        </button>
        <div
          className={`pb__advanced-body${advancedOpen ? ' pb__advanced-body--open' : ''}`}
        >
          <div className="pb__grid pb__grid--advanced">
            <FormField label="Business Tagline">
              <input
                className="pb-input"
                type="text"
                name="tagline"
                value={formData.tagline}
                onChange={handleChange}
                placeholder="e.g. Fast, Reliable & Local"
              />
            </FormField>

            <FormField label="Full Address">
              <input
                className="pb-input"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="e.g. 123 Main St, Austin, TX 78701"
              />
            </FormField>

            <FormField label="Email Address">
              <input
                className="pb-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. info@joesplumbing.com"
              />
            </FormField>

            <FormField label="Main Services" hint="List the key services offered">
              <textarea
                className="pb-textarea"
                name="services"
                value={formData.services}
                onChange={handleChange}
                rows={3}
                placeholder="e.g. Leak repairs, Drain cleaning, Water heater installation..."
              />
            </FormField>

            <FormField label="Opening Hours">
              <textarea
                className="pb-textarea"
                name="hours"
                value={formData.hours}
                onChange={handleChange}
                rows={3}
                placeholder="e.g. Mon–Fri: 8am–6pm, Sat: 9am–3pm, Sun: Closed"
              />
            </FormField>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PromptBuilder;
