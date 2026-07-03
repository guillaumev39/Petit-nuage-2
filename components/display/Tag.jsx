import React from 'react';

export function Tag({ selected, onClick, onRemove, children, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <span
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '7px 16px', borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-bold)',
        cursor: onClick ? 'pointer' : 'default',
        background: selected ? 'var(--accent)' : hover && onClick ? 'var(--surface-soft)' : 'var(--surface-card)',
        color: selected ? '#fff' : 'var(--text-body)',
        border: `1px solid ${selected ? 'var(--accent)' : 'var(--border-strong)'}`,
        transition: 'background var(--dur-fast) var(--ease-drift), color var(--dur-fast) var(--ease-drift)',
        ...style,
      }}
    >
      {children}
      {onRemove && (
        <svg onClick={(e) => { e.stopPropagation(); onRemove(); }} width="13" height="13" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="3" strokeLinecap="round" style={{ cursor: 'pointer', opacity: 0.7 }}>
          <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      )}
    </span>
  );
}
