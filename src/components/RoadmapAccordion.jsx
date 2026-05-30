import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search, Wrench, RefreshCw, Rocket, MessageSquare, Copy, Check } from 'lucide-react';
import PromptBuilder from './PromptBuilder';
import PromptDisplay from './PromptDisplay';
import './RoadmapAccordion.css';

/* ─── Static content ─────────────────────────────────────────── */

const REFINEMENT_PROMPTS = [
  {
    label: 'Make Buttons Functional',
    text: "Update all the 'Call Now' and 'Contact Us' buttons to use functional `tel:` and `mailto:` links based on the business contact info. Make sure the hover states are obvious.",
  },
  {
    label: 'Improve Mobile Layout',
    text: 'Review the mobile responsiveness. Ensure the navigation bar converts to a hamburger menu on screens smaller than 768px, and that the services grid stacks into a single column.',
  },
  {
    label: 'Add Smooth Animations',
    text: 'Add subtle fade-in animations to the services cards when they scroll into view. Use CSS keyframes and intersection observers (or just simple CSS hover transitions) to make the site feel premium.',
  },
  {
    label: 'Fix Image Placeholders',
    text: 'Replace any broken image links with high-quality Unsplash source URLs relevant to this specific business niche. Ensure all images have semantic `alt` tags.',
  },
];

const DEPLOY_PROMPTS = [
  {
    label: 'Safe GitHub Push Prompt',
    text: "I want to push this project to GitHub so I can connect it to Vercel. Please give me the exact terminal commands to initialize git, add all files, commit with the message 'Initial website build', and push to a remote repository.",
  },
  {
    label: 'Deployment Fixes',
    text: "I deployed this site but the CSS isn't loading. Please check the `index.html` file and ensure all asset paths are relative (using `./` instead of `/`) so it works on GitHub Pages.",
  },
];

const OUTREACH_TEMPLATES = [
  {
    label: 'Template 1: Direct Message (Instagram / Facebook)',
    text: `Hey [Business Name] team! 👋 I'm a local web designer in [City]. I saw your awesome reviews but noticed the website is a bit outdated on mobile. I actually went ahead and built a brand new, premium version of your site for fun.

You can view it live here on your phone: [Your Vercel Link]

No pressure at all, but if you love it and want to use it, let me know!`,
  },
  {
    label: 'Template 2: Email (Professional)',
    text: `Subject: New website design for [Business Name]

Hi [Owner Name or Team],

I was looking for a [Service] in [City] and found your business. Your reviews are fantastic, but I noticed your current website is missing a few things that could help convert more visitors into customers.

I'm a local developer, and I took the liberty of building a modernized, mobile-friendly mockup for you. You can see it live here: [Your Vercel Link]

Take a look on your phone! If you like the direction, I'd love to chat about transferring it over to you.

Best,
[Your Name]
[Your Phone]`,
  },
];

const STEPS = [
  { id: 1, icon: <Search size={16} />,      title: 'Find a Local Business Opportunity',   accent: 'indigo'  },
  { id: 2, icon: <Wrench size={16} />,      title: 'Build the Website with Claude Code',  accent: 'teal'    },
  { id: 3, icon: <RefreshCw size={16} />,   title: 'Refine the Website',                  accent: 'emerald' },
  { id: 4, icon: <Rocket size={16} />,      title: 'Deploy the Website',                  accent: 'indigo'  },
  { id: 5, icon: <MessageSquare size={16}/>, title: 'Outreach Messages',                   accent: 'teal'    },
];

/* ─── Reusable copy-snippet block ────────────────────────────── */

function CopySnippet({ label, text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="ra__snippet">
      {label && <p className="ra__snippet-label">{label}</p>}
      <div className="ra__snippet-body">
        <pre className="ra__snippet-text">{text}</pre>
        <button
          className={`ra__snippet-copy${copied ? ' ra__snippet-copy--done' : ''}`}
          onClick={handleCopy}
          aria-label="Copy to clipboard"
        >
          {copied ? <Check size={13} /> : <Copy size={13} />}
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
    </div>
  );
}

/* ─── Per-step content ───────────────────────────────────────── */

function StepContent({ stepId, formData, onFormChange }) {
  switch (stepId) {
    case 1:
      return (
        <div className="ra__content">
          <p className="ra__overview">
            The best way to sell a website is to build it first. Before generating the code, you need to find a local business that desperately needs an upgrade.
          </p>
          <h4 className="ra__subsection-title">Action Plan</h4>
          <ol className="ra__numbered-list">
            <li>
              <strong>Use Google Maps:</strong> Search for niches like "Landscaping," "Plumbers," or "Roofers" in your local area.
            </li>
            <li>
              <strong>Filter by Needs:</strong> Look for businesses that have:
              <ul className="ra__sub-list">
                <li>Great reviews (4.0+ stars) but no website link.</li>
                <li>A website that says "Not Secure" (No SSL).</li>
                <li>An outdated website that breaks on mobile devices.</li>
              </ul>
            </li>
            <li>
              <strong>Gather Info:</strong> Once you find a target, collect their Name, Phone, Address, and Services to plug into the Step 2 Prompt Builder.
            </li>
          </ol>
        </div>
      );

    case 2:
      return (
        <div className="ra__step2">
          <p className="ra__step2-intro">
            Fill in your client's business details below. The <strong>Master Prompt</strong> will generate automatically — copy it straight into Claude Code to build their website.
          </p>
          <PromptBuilder formData={formData} onFormChange={onFormChange} />
          <PromptDisplay formData={formData} />
        </div>
      );

    case 3:
      return (
        <div className="ra__content">
          <p className="ra__overview">
            The initial generation gets you 90% of the way there. Use these follow-up prompts in Claude Code to add the final polish and make the site production-ready.
          </p>
          <h4 className="ra__subsection-title">Refinement Prompts</h4>
          <div className="ra__snippets">
            {REFINEMENT_PROMPTS.map(p => (
              <CopySnippet key={p.label} label={p.label} text={p.text} />
            ))}
          </div>
        </div>
      );

    case 4:
      return (
        <div className="ra__content">
          <p className="ra__overview">
            You need a live link to send to the business owner so they can see the mockup on their own phone.
          </p>
          <h4 className="ra__subsection-title">Deployment Options</h4>
          <div className="ra__deploy-options">
            <div className="ra__deploy-option">
              <span className="ra__deploy-badge ra__deploy-badge--free">Free / Fast</span>
              <p>
                <strong>Vercel or Netlify</strong> — best for the initial outreach. Drag and drop the project folder, or push to GitHub and connect in seconds.
              </p>
            </div>
            <div className="ra__deploy-option">
              <span className="ra__deploy-badge ra__deploy-badge--paid">Paid / Custom Domain</span>
              <p>
                <strong>Hostinger or Namecheap</strong> — best for when the client pays and wants their own <code>.com</code> domain.
              </p>
            </div>
          </div>
          <h4 className="ra__subsection-title">Helpful Prompts</h4>
          <div className="ra__snippets">
            {DEPLOY_PROMPTS.map(p => (
              <CopySnippet key={p.label} label={p.label} text={p.text} />
            ))}
          </div>
        </div>
      );

    case 5:
      return (
        <div className="ra__content">
          <p className="ra__overview">
            Now that you have a live, stunning mockup, it's time to reach out. Don't sell the website — just show it to them.
          </p>
          <div className="ra__snippets">
            {OUTREACH_TEMPLATES.map(t => (
              <CopySnippet key={t.label} label={t.label} text={t.text} />
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}

/* ─── Accordion item ─────────────────────────────────────────── */

function AccordionStep({ step, isOpen, onToggle, formData, onFormChange }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;
    setHeight(isOpen ? contentRef.current.scrollHeight : 0);
  }, [isOpen, formData]);

  useEffect(() => {
    if (!isOpen || !contentRef.current) return;
    const observer = new ResizeObserver(() => {
      setHeight(contentRef.current.scrollHeight);
    });
    observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, [isOpen]);

  return (
    <div className={`ra__step ra__step--${step.accent}${isOpen ? ' ra__step--open' : ''}`}>
      <button
        className="ra__header"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="ra__header-left">
          <span className={`ra__badge ra__badge--${step.accent}`}>{step.id}</span>
          <span className="ra__icon">{step.icon}</span>
          <span className="ra__title">{step.title}</span>
        </div>
        <ChevronDown
          size={16}
          className={`ra__chevron${isOpen ? ' ra__chevron--open' : ''}`}
        />
      </button>

      <div
        className="ra__body"
        style={{ height: `${height}px` }}
        aria-hidden={!isOpen}
      >
        <div ref={contentRef} className="ra__body-inner">
          <StepContent
            stepId={step.id}
            formData={formData}
            onFormChange={onFormChange}
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Root component ─────────────────────────────────────────── */

function RoadmapAccordion({ formData, onFormChange }) {
  const [openStep, setOpenStep] = useState(2);

  const toggle = (stepId) => {
    setOpenStep(prev => prev === stepId ? null : stepId);
  };

  return (
    <div className="ra">
      <div className="ra__intro">
        <h1 className="ra__heading">Build Local Business Websites with Claude Code</h1>
        <p className="ra__subheading">
          Create client-ready local business websites using real business details, customisable prompts, and a professional workflow.
        </p>
      </div>

      <div className="ra__label">
        <span>Roadmap &amp; Resources</span>
      </div>

      <div className="ra__list">
        {STEPS.map(step => (
          <AccordionStep
            key={step.id}
            step={step}
            isOpen={openStep === step.id}
            onToggle={() => toggle(step.id)}
            formData={formData}
            onFormChange={onFormChange}
          />
        ))}
      </div>
    </div>
  );
}

export default RoadmapAccordion;
