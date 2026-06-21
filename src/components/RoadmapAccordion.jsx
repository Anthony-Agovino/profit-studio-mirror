import { useState } from 'react';
import AccordionStep from './AccordionStep';
import { STEPS } from '../utils/constants';


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
