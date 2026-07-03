import React from 'react';

export function Card({ variant = 'shadow', padding = 'var(--space-5)', hoverLift = false, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    shadow: { boxShadow: 'var(--shadow-card)', border: 'none' },
    outline: { boxShadow: 'none', border: '1px solid var(--border-soft)' },
    soft: { boxShadow: 'none', border: 'none', background: 'var(--surface-soft)' },
    jouy: { boxShadow: 'none', border: 'none', background: 'var(--surface-jouy)' },
  };
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-lg)',
        padding,
        fontFamily: 'var(--font-body)', color: 'var(--text-body)',
        transition: 'transform var(--dur-base) var(--ease-drift), box-shadow var(--dur-base) var(--ease-drift)',
        ...variants[variant],
        ...(hoverLift && hover ? { transform: 'translateY(-4px)', boxShadow: 'var(--shadow-lift)' } : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
