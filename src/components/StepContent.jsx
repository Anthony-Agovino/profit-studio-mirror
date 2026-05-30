import CopySnippet from './CopySnippet';
import PromptBuilder from './PromptBuilder';
import PromptDisplay from './PromptDisplay';
import { REFINEMENT_PROMPTS, DEPLOY_PROMPTS, OUTREACH_TEMPLATES } from '../utils/constants';

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

export default StepContent;
