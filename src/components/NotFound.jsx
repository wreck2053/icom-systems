import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', minHeight: '70vh', gap: 'var(--space-6)',
      padding: 'var(--space-8)',
    }}>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: 'var(--text-4xl)',
        fontWeight: 'var(--font-weight-bold)', color: 'var(--color-accent-primary)',
        lineHeight: 1,
      }}>404</span>
      <h1 style={{ fontSize: 'var(--text-xl)', color: 'var(--color-text-primary)' }}>
        Page Not Found
      </h1>
      <p style={{
        color: 'var(--color-text-secondary)', maxWidth: 420,
        textAlign: 'center', lineHeight: 'var(--line-height-loose)',
      }}>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="btn-primary">Return Home</Link>
    </div>
  );
}

export default NotFound;
