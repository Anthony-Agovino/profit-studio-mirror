import { Search, Wrench, RefreshCw, Rocket, MessageSquare } from 'lucide-react';

export const REFINEMENT_PROMPTS = [
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

export const DEPLOY_PROMPTS = [
  {
    label: 'Safe GitHub Push Prompt',
    text: "I want to push this project to GitHub so I can connect it to Vercel. Please give me the exact terminal commands to initialize git, add all files, commit with the message 'Initial website build', and push to a remote repository.",
  },
  {
    label: 'Deployment Fixes',
    text: "I deployed this site but the CSS isn't loading. Please check the `index.html` file and ensure all asset paths are relative (using `./` instead of `/`) so it works on GitHub Pages.",
  },
];

export const OUTREACH_TEMPLATES = [
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

export const STEPS = [
  { id: 1, icon: <Search size={16} />,      title: 'Find a Local Business Opportunity',   accent: 'indigo'  },
  { id: 2, icon: <Wrench size={16} />,      title: 'Build the Website with Claude Code',  accent: 'teal'    },
  { id: 3, icon: <RefreshCw size={16} />,   title: 'Refine the Website',                  accent: 'emerald' },
  { id: 4, icon: <Rocket size={16} />,      title: 'Deploy the Website',                  accent: 'indigo'  },
  { id: 5, icon: <MessageSquare size={16}/>, title: 'Outreach Messages',                   accent: 'teal'    },
];
