import React from "react";

function LoadingSpinner() {
  return (
    <div className="loading-screen">
      <div className="loading-ring" />
      <span className="loading-brand">I-Com Systems</span>
      <style>{`
        .loading-screen {
          position: fixed;
          inset: 0;
          background: var(--color-bg-base);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: var(--space-6);
          z-index: 9999;
        }
        .loading-ring {
          width: 52px;
          height: 52px;
          border: 3px solid var(--color-bg-subtle);
          border-top-color: var(--color-accent-primary);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          box-shadow: var(--glow-primary);
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .loading-brand {
          font-family: var(--font-heading);
          font-size: var(--text-sm);
          font-weight: var(--font-weight-semibold);
          color: var(--color-text-muted);
          letter-spacing: var(--letter-spacing-widest);
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
}

export default LoadingSpinner;
