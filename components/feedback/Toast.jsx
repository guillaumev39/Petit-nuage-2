import React from 'react';

export function Toast({ open = true, tone = 'success', children, style }) {
  const tones = {
    success: { icon: '✓', color: 'var(--status-success)', bg: 'var(--status-success-bg)' },
    error: { icon: '!', color: 'var(--status-error)', bg: 'var(--status-error-bg)' },
    info: { icon: 'i', color: 'var(--lpm-jouy-700)', bg: 'var(--lpm-jouy-100)' },
  };
  const t = tones[tone];
  if (!open) return null;
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 12,
      background: 'var(--surface-card)', borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-lift)', padding: '10px 20px 10px 10px',
      fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-bold)',
      color: 'var(--text-heading)', ...style,
    }}>
      <span style={{
        width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
        background: t.bg, color: t.color,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 14, fontWeight: 800,
      }}>{t.icon}</span>
      {children}
    </div>
  );
}
