import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import StepContent from './StepContent';

function AccordionStep({ step, isOpen, onToggle, formData, onFormChange }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;
    setHeight(isOpen ? contentRef.current.scrollHeight : 0);
  }, [isOpen]);

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

export default AccordionStep;
