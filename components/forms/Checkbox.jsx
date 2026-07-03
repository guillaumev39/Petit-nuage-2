import React from 'react';

export function Checkbox({ label, checked, defaultChecked, onChange, style }) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isOn = checked !== undefined ? checked : internal;
  const toggle = () => { if (checked === undefined) setInternal(!isOn); onChange && onChange(!isOn); };
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', color: 'var(--text-body)', ...style }}>
      <span
        onClick={toggle}
        role="checkbox" aria-checked={isOn} tabIndex={0}
        onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggle(); } }}
        style={{
          width: 22, height: 22, borderRadius: 8, flexShrink: 0,
          border: `2px solid ${isOn ? 'var(--accent)' : 'var(--border-strong)'}`,
          background: isOn ? 'var(--accent)' : 'var(--surface-card)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background var(--dur-fast) var(--ease-drift), border-color var(--dur-fast) var(--ease-drift)',
        }}
      >
        {isOn && (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        )}
      </span>
      {label && <span onClick={toggle}>{label}</span>}
    </label>
  );
}
