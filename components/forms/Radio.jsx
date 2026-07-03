import React from 'react';

export function Radio({ label, name, checked, defaultChecked, onChange, value, style }) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isOn = checked !== undefined ? checked : internal;
  const select = () => { if (checked === undefined) setInternal(true); onChange && onChange(value); };
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', color: 'var(--text-body)', ...style }}>
      <input type="radio" name={name} checked={isOn} onChange={select} value={value} style={{ position: 'absolute', opacity: 0, width: 0 }} />
      <span style={{
        width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
        border: `2px solid ${isOn ? 'var(--accent)' : 'var(--border-strong)'}`,
        background: 'var(--surface-card)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        transition: 'border-color var(--dur-fast) var(--ease-drift)',
      }}>
        <span style={{
          width: 10, height: 10, borderRadius: '50%',
          background: 'var(--accent)',
          transform: isOn ? 'scale(1)' : 'scale(0)',
          transition: 'transform var(--dur-fast) var(--ease-drift)',
        }}></span>
      </span>
      {label}
    </label>
  );
}
