import React from 'react';

export function Select({ label, options = [], style, selectStyle, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)', ...style }}>
      {label && <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-bold)', color: 'var(--text-heading)' }}>{label}</span>}
      <div style={{ position: 'relative', display: 'flex' }}>
        <select
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            height: 'var(--control-height)', padding: '0 42px 0 18px', flex: 1,
            borderRadius: 'var(--radius-pill)',
            border: `1px solid ${focus ? 'var(--border-focus)' : 'var(--border-strong)'}`,
            background: 'var(--surface-card)', color: 'var(--text-body)',
            fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)',
            outline: 'none', appearance: 'none', cursor: 'pointer',
            boxShadow: focus ? 'var(--focus-ring)' : 'none',
            transition: 'box-shadow var(--dur-fast) var(--ease-drift)',
            ...selectStyle,
          }}
          {...rest}
        >
          {options.map((o) => (
            <option key={o.value ?? o} value={o.value ?? o}>{o.label ?? o}</option>
          ))}
        </select>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </label>
  );
}
