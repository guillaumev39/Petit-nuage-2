import React from 'react';

const sizes = {
  sm: { height: 'var(--control-height-sm)', padding: '0 16px', fontSize: 'var(--text-sm)' },
  md: { height: 'var(--control-height)', padding: '0 24px', fontSize: 'var(--text-md)' },
  lg: { height: '52px', padding: '0 32px', fontSize: 'var(--text-lg)' },
};

const variants = {
  primary: { background: 'var(--accent)', color: 'var(--text-on-accent)', border: 'none' },
  secondary: { background: 'var(--surface-soft)', color: 'var(--accent-strong)', border: 'none' },
  outline: { background: 'transparent', color: 'var(--text-heading)', border: '1px solid var(--border-strong)' },
  ghost: { background: 'transparent', color: 'var(--text-body)', border: 'none' },
};

export function Button({ variant = 'primary', size = 'md', disabled, icon, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const hoverStyles = {
    primary: { background: 'var(--accent-strong)' },
    secondary: { background: 'var(--accent-soft)' },
    outline: { background: 'var(--surface-soft)', borderColor: 'var(--border-focus)' },
    ghost: { background: 'var(--surface-soft)' },
  };
  return (
    <button
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-bold)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'background var(--dur-fast) var(--ease-drift), border-color var(--dur-fast) var(--ease-drift)',
        ...sizes[size], ...variants[variant],
        ...(hover && !disabled ? hoverStyles[variant] : null),
        ...style,
      }}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
}
