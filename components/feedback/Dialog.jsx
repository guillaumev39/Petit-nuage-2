import React from 'react';
import { IconButton } from '../forms/IconButton.jsx';
import { Button } from '../forms/Button.jsx';

export function Dialog({ open, title, children, onClose, actions, width = 440 }) {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(38, 49, 74, 0.4)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 'var(--space-5)',
      }}
    >
      <div
        role="dialog" aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        style={{
          width, maxWidth: '100%',
          background: 'var(--surface-card)', borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-lift)', padding: 'var(--space-6)',
          fontFamily: 'var(--font-body)', color: 'var(--text-body)',
          position: 'relative',
        }}
      >
        {onClose && (
          <IconButton label="Fermer" variant="ghost" size="sm" onClick={onClose} style={{ position: 'absolute', top: 16, right: 16 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </IconButton>
        )}
        {title && <h3 style={{ margin: '0 0 12px', fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--text-heading)', paddingRight: 32 }}>{title}</h3>}
        <div>{children}</div>
        {actions && <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 'var(--space-5)' }}>{actions}</div>}
      </div>
    </div>
  );
}

Dialog.Button = Button;
