import { useState, useMemo } from 'react';
import { Copy, Check, Eye, EyeOff } from 'lucide-react';
import { generatePrompt } from '../utils/promptTemplates';
import './PromptDisplay.css';

function PromptDisplay({ formData }) {
  const [copied, setCopied] = useState(false);
  const [hidden, setHidden] = useState(false);

  const prompt = useMemo(() => generatePrompt(formData), [formData]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.createElement('textarea');
      el.value = prompt;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="pd">
      <div className="pd__action-bar glass">
        <div className="pd__action-bar-left">
          <span className="pd__label">Master Prompt</span>
          <span className="pd__live-dot" title="Updates in real-time" />
        </div>
        <div className="pd__action-bar-right">
          <button
            className="pd__btn pd__btn--ghost"
            onClick={() => setHidden(prev => !prev)}
            aria-label={hidden ? 'Show prompt' : 'Hide prompt'}
          >
            {hidden ? <Eye size={15} /> : <EyeOff size={15} />}
            <span>{hidden ? 'Show' : 'Hide'}</span>
          </button>
          <button
            className={`pd__btn pd__btn--copy${copied ? ' pd__btn--copied' : ''}`}
            onClick={handleCopy}
            aria-label="Copy prompt to clipboard"
          >
            {copied ? <Check size={15} /> : <Copy size={15} />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {!hidden && (
        <div className="pd__body">
          <pre className="pd__pre"><code>{prompt}</code></pre>
        </div>
      )}

      {hidden && (
        <div className="pd__hidden-msg">
          <EyeOff size={20} className="pd__hidden-icon" />
          <p>Prompt hidden — click <strong>Show</strong> to reveal.</p>
        </div>
      )}
    </div>
  );
}

export default PromptDisplay;
