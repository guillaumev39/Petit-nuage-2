(function () {
// Shared chrome: Wordmark, Header (with FR/EN toggle), ReassuranceBar, Footer, ProductPhoto.
const {
  IconButton,
  Tooltip
} = window.PetitNuageDesignSystem_f04838;

/* Koyumé lockup — the word alone, letterspaced serif caps. A link when given an href. */
function Wordmark({
  size = 17,
  color = 'var(--lpm-ink-900)',
  href,
  className
}) {
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: href ? () => window.scrollTo(0, 0) : undefined,
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: size * 1.18,
      letterSpacing: '0.26em',
      paddingLeft: '0.26em',
      textTransform: 'uppercase',
      color,
      lineHeight: 1,
      whiteSpace: 'nowrap'
    }
  }, "Koyum\xE9"));
}
function CartIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 10a4 4 0 0 1-8 0"
  }));
}
function LangToggle({
  lang,
  onChange
}) {
  const b = l => ({
    border: 'none',
    background: 'none',
    padding: '2px 4px',
    cursor: 'pointer',
    fontFamily: 'var(--font-body)',
    fontSize: 12,
    letterSpacing: '0.08em',
    fontWeight: lang === l ? 700 : 500,
    color: lang === l ? 'var(--text-heading)' : 'var(--text-faint)',
    textDecoration: lang === l ? 'underline' : 'none',
    textUnderlineOffset: 4
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: b('fr'),
    onClick: () => onChange('fr')
  }, "FR"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--border-strong)',
      fontSize: 11
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("button", {
    style: b('en'),
    onClick: () => onChange('en')
  }, "EN"));
}

/* One-line announcement bar — jouy-900, star glyph, calm copy. */
function AnnounceBar({
  t
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--lpm-jouy-900)',
      color: 'rgba(255,253,248,0.9)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 9,
      padding: '8px 16px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/decor-star.svg",
    alt: "",
    style: {
      width: 11,
      height: 11,
      display: 'block',
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      letterSpacing: '0.06em',
      fontWeight: 500
    }
  }, t.announce));
}
function Header({
  t,
  lang,
  setLang,
  active,
  cartCount,
  onCart
}) {
  const link = i => ({
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    fontSize: 14,
    color: active === i ? 'var(--text-heading)' : 'var(--text-muted)',
    textDecoration: 'none',
    cursor: 'pointer',
    letterSpacing: '0.01em',
    borderBottom: active === i ? '1px solid var(--lpm-ink-500)' : '1px solid transparent',
    paddingBottom: 2
  });
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(250,247,240,0.94)',
      backdropFilter: 'blur(6px)',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lpm-header-inner",
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '18px 32px',
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("nav", {
    className: "lpm-nav",
    style: {
      display: 'flex',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: link(0),
    href: "#/",
    onClick: () => window.scrollTo(0, 0)
  }, t.nav[0]), /*#__PURE__*/React.createElement("a", {
    style: link(1),
    href: "#/qui-sommes-nous",
    onClick: () => window.scrollTo(0, 0)
  }, t.nav[1])), /*#__PURE__*/React.createElement(Wordmark, {
    size: 19,
    className: "lpm-wordmark",
    href: "#/"
  }), /*#__PURE__*/React.createElement("div", {
    className: "lpm-header-actions",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      justifySelf: 'end'
    }
  }, /*#__PURE__*/React.createElement(LangToggle, {
    lang: lang,
    onChange: setLang
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: t.cartLabel
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: t.cartLabel,
    variant: "ghost",
    onClick: onCart
  }, /*#__PURE__*/React.createElement(CartIcon, null))), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      right: -2,
      minWidth: 16,
      height: 16,
      borderRadius: 999,
      background: 'var(--accent)',
      color: '#FFFDF8',
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 4px'
    }
  }, cartCount)))));
}
function ReassuranceBar({
  t
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-soft)',
      borderBottom: '1px solid var(--border-soft)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lpm-reassurance",
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 32px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)'
    }
  }, t.reassurance.map((x, i) => /*#__PURE__*/React.createElement("span", {
    key: x,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      fontWeight: 500,
      letterSpacing: '0.02em',
      color: 'var(--text-muted)',
      padding: '14px 18px',
      textAlign: 'center',
      borderLeft: i > 0 ? '1px solid var(--border-soft)' : 'none'
    }
  }, x))));
}
function Footer({
  t
}) {
  const a = {
    color: 'rgba(255,253,248,0.62)',
    textDecoration: 'none',
    cursor: 'pointer',
    fontSize: 14
  };
  // One address per link, column by column (same order as t.footerCols).
  const footerLinks = [['#/'], ['#/questions/livraison', '#/questions/entretien', 'mailto:contact@koyume.fr'], ['#/qui-sommes-nous']];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-inverse)',
      marginTop: 88
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lpm-footer-grid",
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 32px',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 16,
    color: "#FFFDF8"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'rgba(255,253,248,0.62)',
      maxWidth: 240,
      lineHeight: 1.6
    }
  }, t.footerBaseline), /*#__PURE__*/React.createElement(Fanions, {
    size: 8,
    style: {
      marginTop: 2,
      opacity: 0.85
    }
  })), t.footerCols.map(([title, links], ci) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'rgba(255,253,248,0.4)',
      fontWeight: 600
    }
  }, title), links.map((l, li) => /*#__PURE__*/React.createElement("a", {
    key: l,
    style: a,
    href: footerLinks[ci][li]
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,253,248,0.14)',
      padding: '20px 32px 22px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'rgba(255,253,248,0.45)'
    }
  }, t.legal));
}

/* Product packshot on a white ground (photos are white-background packshots). */
function ProductPhoto({
  src,
  alt,
  height = 300,
  radius = 'var(--radius-lg)',
  provisional,
  provisionalLabel,
  contain = true,
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      height,
      borderRadius: radius,
      background: '#FFFFFF',
      border: '1px solid var(--border-soft)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: contain ? 'contain' : 'cover',
      display: 'block'
    }
  }), provisional && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 10,
      right: 12,
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      background: 'rgba(255,255,255,0.85)',
      padding: '3px 8px',
      borderRadius: 4
    }
  }, provisionalLabel));
}

/* Fanions — the brand's micro-signature: three tiny flags (rose, straw, sage). */
function Fanions({
  size = 9,
  style
}) {
  const tri = c => ({
    width: 0,
    height: 0,
    borderLeft: `${size * 0.62}px solid transparent`,
    borderRight: `${size * 0.62}px solid transparent`,
    borderTop: `${size}px solid ${c}`
  });
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      gap: 5,
      alignItems: 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: tri('var(--lpm-rose-300)')
  }), /*#__PURE__*/React.createElement("span", {
    style: tri('var(--lpm-straw-300)')
  }), /*#__PURE__*/React.createElement("span", {
    style: tri('var(--lpm-sage-300)')
  }));
}
Object.assign(window, {
  Wordmark,
  Header,
  ReassuranceBar,
  Footer,
  ProductPhoto,
  CartIcon,
  LangToggle,
  Fanions,
  AnnounceBar
});
})();
