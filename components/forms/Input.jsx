import React from 'react';

export function Input({ label, hint, error, style, inputStyle, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)', ...style }}>
      {label && <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-bold)', color: 'var(--text-heading)' }}>{label}</span>}
      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          height: 'var(--control-height)', padding: '0 18px',
          borderRadius: 'var(--radius-pill)',
          border: `1px solid ${error ? 'var(--status-error)' : focus ? 'var(--border-focus)' : 'var(--border-strong)'}`,
          background: 'var(--surface-card)', color: 'var(--text-body)',
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)',
          outline: 'none',
          boxShadow: focus ? 'var(--focus-ring)' : 'var(--shadow-inset)',
          transition: 'box-shadow var(--dur-fast) var(--ease-drift), border-color var(--dur-fast) var(--ease-drift)',
          ...inputStyle,
        }}
        {...rest}
      />
      {(error || hint) && (
        <span style={{ fontSize: 'var(--text-xs)', color: error ? 'var(--status-error)' : 'var(--text-muted)', paddingLeft: 18 }}>
          {error || hint}
        </span>
      )}
    </label>
  );
}
