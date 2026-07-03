import React from 'react';

export function Switch({ label, checked, defaultChecked, onChange, style }) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isOn = checked !== undefined ? checked : internal;
  const toggle = () => { if (checked === undefined) setInternal(!isOn); onChange && onChange(!isOn); };
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', color: 'var(--text-body)', ...style }}>
      <span
        onClick={toggle} role="switch" aria-checked={isOn} tabIndex={0}
        onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggle(); } }}
        style={{
          width: 46, height: 26, borderRadius: 'var(--radius-pill)', flexShrink: 0,
          background: isOn ? 'var(--accent)' : 'var(--lpm-ivory-300)',
          padding: 3, boxSizing: 'border-box', display: 'inline-flex',
          transition: 'background var(--dur-base) var(--ease-drift)',
        }}
      >
        <span style={{
          width: 20, height: 20, borderRadius: '50%', background: '#fff',
          boxShadow: '0 1px 3px rgba(61,84,122,0.25)',
          transform: isOn ? 'translateX(20px)' : 'translateX(0)',
          transition: 'transform var(--dur-base) var(--ease-drift)',
        }}></span>
      </span>
      {label && <span onClick={toggle}>{label}</span>}
    </label>
  );
}
