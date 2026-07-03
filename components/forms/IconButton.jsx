import React from 'react';

export function IconButton({ label, size = 'md', variant = 'soft', children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const d = size === 'sm' ? 34 : size === 'lg' ? 52 : 44;
  const variants = {
    soft: { background: 'var(--surface-soft)', color: 'var(--accent-strong)' },
    ghost: { background: 'transparent', color: 'var(--text-muted)' },
    solid: { background: 'var(--accent)', color: '#fff' },
  };
  const hovers = {
    soft: { background: 'var(--accent-soft)' },
    ghost: { background: 'var(--surface-soft)', color: 'var(--text-heading)' },
    solid: { background: 'var(--accent-strong)' },
  };
  return (
    <button
      aria-label={label}
      title={label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: d, height: d, border: 'none', borderRadius: 'var(--radius-pill)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background var(--dur-fast) var(--ease-drift), color var(--dur-fast) var(--ease-drift)',
        ...variants[variant], ...(hover ? hovers[variant] : null), ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
