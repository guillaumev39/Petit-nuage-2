import React from 'react';

export function Tooltip({ label, children }) {
  const [show, setShow] = React.useState(false);
  return (
    <span
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      style={{ position: 'relative', display: 'inline-flex' }}
    >
      {children}
      <span style={{
        position: 'absolute', bottom: 'calc(100% + 8px)', left: '50%',
        transform: `translateX(-50%) translateY(${show ? 0 : 4}px)`,
        background: 'var(--lpm-ink-900)', color: '#fff',
        padding: '6px 14px', borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)',
        whiteSpace: 'nowrap', pointerEvents: 'none',
        opacity: show ? 1 : 0,
        transition: 'opacity var(--dur-fast) var(--ease-drift), transform var(--dur-fast) var(--ease-drift)',
        zIndex: 50,
      }}>
        {label}
      </span>
    </span>
  );
}
