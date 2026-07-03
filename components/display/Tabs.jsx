import React from 'react';

export function Tabs({ tabs = [], active, defaultActive, onChange, style }) {
  const [internal, setInternal] = React.useState(defaultActive ?? tabs[0]);
  const current = active !== undefined ? active : internal;
  const pick = (t) => { if (active === undefined) setInternal(t); onChange && onChange(t); };
  return (
    <div style={{
      display: 'inline-flex', gap: 4, padding: 4,
      background: 'var(--surface-soft)', borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)', ...style,
    }}>
      {tabs.map((t) => (
        <button key={t} onClick={() => pick(t)} style={{
          border: 'none', padding: '8px 20px', borderRadius: 'var(--radius-pill)',
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-bold)',
          cursor: 'pointer',
          background: current === t ? 'var(--surface-card)' : 'transparent',
          color: current === t ? 'var(--text-heading)' : 'var(--text-muted)',
          boxShadow: current === t ? 'var(--shadow-card)' : 'none',
          transition: 'background var(--dur-fast) var(--ease-drift), color var(--dur-fast) var(--ease-drift)',
        }}>
          {t}
        </button>
      ))}
    </div>
  );
}
