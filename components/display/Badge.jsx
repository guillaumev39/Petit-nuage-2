import React from 'react';

export function Badge({ tone = 'jouy', children, style }) {
  const tones = {
    jouy: { background: 'var(--lpm-jouy-100)', color: 'var(--lpm-jouy-700)' },
    wool: { background: 'var(--lpm-wool-100)', color: 'var(--lpm-wool-700)' },
    rose: { background: 'var(--lpm-rose-100)', color: '#B06478' },
    sage: { background: 'var(--lpm-sage-100)', color: '#5F7852' },
    success: { background: 'var(--status-success-bg)', color: 'var(--status-success)' },
    warning: { background: 'var(--status-warning-bg)', color: 'var(--status-warning)' },
    error: { background: 'var(--status-error-bg)', color: 'var(--status-error)' },
    ink: { background: 'var(--lpm-ink-900)', color: '#FFFDF8' },
  };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '4px 12px', borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase',
      ...tones[tone], ...style,
    }}>
      {children}
    </span>
  );
}
