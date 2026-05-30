import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

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

export default CopySnippet;
