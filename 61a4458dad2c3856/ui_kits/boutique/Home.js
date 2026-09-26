(function () {
// Home — editorial, asymmetric layout. Numbered collection, full-bleed lifestyle, hairline guide.
const {
  Button,
  Badge,
  Card
} = window.PetitNuageDesignSystem_f04838;
const eyebrowStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: 11.5,
  letterSpacing: 'var(--tracking-wide)',
  textTransform: 'uppercase',
  fontWeight: 600,
  color: 'var(--text-muted)'
};

/* Product as an editorial figure — no card box, photo + hairline + caption. The whole figure is a link. */
function ProductFigure({
  p,
  i,
  lang,
  t
}) {
  const loc = p[lang];
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: `#/oreiller/${p.id}`,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onFocus: () => setHover(true),
    onBlur: () => setHover(false),
    style: {
      display: 'block',
      color: 'inherit',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: '#fff',
      overflow: 'hidden',
      aspectRatio: '4 / 4.6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: loc.name,
    style: {
      width: '88%',
      height: '88%',
      objectFit: 'contain',
      transition: 'transform 700ms var(--ease-drift)',
      transform: hover ? 'scale(1.035)' : 'none'
    }
  }), p.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16,
      ...eyebrowStyle,
      color: 'var(--lpm-wool-700)'
    }
  }, p.badge[lang]), p.imgProvisional && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 12,
      right: 14,
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, t.provisional)), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      borderTop: '1px solid var(--lpm-ink-900)',
      marginTop: 18,
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 27,
      fontWeight: 500,
      color: 'var(--text-heading)',
      fontStyle: hover ? 'italic' : 'normal'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--text-faint)',
      verticalAlign: 'super',
      marginRight: 8,
      fontStyle: 'normal'
    }
  }, String(i + 1).padStart(2, '0')), loc.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--text-heading)'
    }
  }, window.lpmPrice(p.price, lang))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 3
    }
  }, p.dims, " \xB7 ", loc.age, " \xB7 ", loc.fabric))));
}
function HeroHeadline({
  t,
  lang
}) {
  // Italic accent on the last words — editorial, not template-like.
  const parts = [t.heroTitle1, t.heroTitle2];
  return /*#__PURE__*/React.createElement("h1", {
    className: "lpm-hero-headline",
    style: {
      margin: 0,
      fontSize: 'clamp(56px, 7vw, 92px)',
      fontWeight: 500,
      lineHeight: 1.02,
      letterSpacing: '-0.01em'
    }
  }, parts[0], /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      fontWeight: 400,
      color: 'var(--lpm-jouy-700)'
    }
  }, parts[1]));
}

// Two hero films — one is picked at random on each page load.
const HERO_FILMS = ['../../assets/lifestyle-enfant.mp4', '../../assets/products/coussin-moutons.mp4'];
function Hero({
  t,
  lang,
  variant
}) {
  const [filmSrc] = React.useState(() => HERO_FILMS[Math.floor(Math.random() * HERO_FILMS.length)]);
  if (variant === 'lifestyle' || variant === 'film') {
    return /*#__PURE__*/React.createElement("section", {
      className: "lpm-hero-film",
      style: {
        position: 'relative',
        minHeight: 600,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end'
      }
    }, variant === 'film' ? /*#__PURE__*/React.createElement("video", {
      key: filmSrc,
      src: filmSrc,
      poster: "../../assets/lifestyle-crib.jpg",
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }) : /*#__PURE__*/React.createElement("img", {
      src: "../../assets/lifestyle-crib.jpg",
      alt: "",
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(35,33,28,0.62), rgba(35,33,28,0) 68%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "lpm-hero-film-row",
      style: {
        position: 'relative',
        width: '100%',
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 32px 56px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        gap: 32
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...eyebrowStyle,
        color: 'rgba(255,253,248,0.75)'
      }
    }, t.heroEyebrow)), /*#__PURE__*/React.createElement("h1", {
      className: "lpm-hero-title",
      style: {
        margin: 0,
        fontSize: 'clamp(48px, 6vw, 80px)',
        fontWeight: 500,
        lineHeight: 1.04,
        color: '#FFFDF8'
      }
    }, t.heroTitle), /*#__PURE__*/React.createElement("p", {
      className: "lpm-hero-sub",
      style: {
        margin: '18px 0 0',
        maxWidth: 540,
        fontFamily: 'var(--font-body)',
        fontSize: 17,
        lineHeight: 1.6,
        color: 'rgba(255,253,248,0.9)'
      }
    }, t.heroSub)), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      style: {
        flexShrink: 0
      },
      onClick: () => window.scroll({
        top: document.getElementById('collection').offsetTop - 100,
        behavior: 'smooth'
      })
    }, t.heroCta)));
  }
  // Packshot — asymmetric: oversized headline crossing the grid, image offset right.
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lpm-hero-pack",
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '84px 32px 0',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...eyebrowStyle,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Fanions, {
    size: 8
  }), " ", t.heroEyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement(HeroHeadline, {
    t: t,
    lang: lang
  })), /*#__PURE__*/React.createElement("div", {
    className: "lpm-hero-pack-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 48,
      alignItems: 'start',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 26,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      maxWidth: 360,
      color: 'var(--text-body)'
    }
  }, t.heroSub), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => window.scroll({
      top: document.getElementById('collection').offsetTop - 100,
      behavior: 'smooth'
    })
  }, t.heroCta), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => window.scroll({
      top: document.getElementById('guide').offsetTop - 100,
      behavior: 'smooth'
    }),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-heading)',
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      borderBottom: '1px solid var(--lpm-ink-900)',
      padding: '0 0 2px'
    }
  }, t.heroCta2))), /*#__PURE__*/React.createElement("div", {
    className: "lpm-hero-pack-img",
    style: {
      marginTop: -72,
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lpm-hero-pack-photo",
    style: {
      background: '#fff',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 480
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.lpmProducts[1].img,
    alt: "",
    style: {
      width: '92%',
      height: '92%',
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...eyebrowStyle,
      marginTop: 10,
      textAlign: 'right'
    }
  }, t.heroCaption)))));
}
function HomeScreen({
  lang,
  t,
  heroVariant = 'packshot'
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    t: t,
    lang: lang,
    variant: heroVariant
  }), /*#__PURE__*/React.createElement(ReassuranceBar, {
    t: t
  }), /*#__PURE__*/React.createElement("section", {
    id: "collection",
    className: "lpm-collection",
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '84px 32px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lpm-collection-head",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 44,
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "lpm-h2",
    style: {
      margin: 0,
      fontSize: 44,
      fontWeight: 500
    }
  }, t.collTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      fontSize: 15,
      maxWidth: 300,
      textAlign: 'right'
    }
  }, t.collSub)), /*#__PURE__*/React.createElement("div", {
    className: "lpm-collection-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 28
    }
  }, window.lpmProducts.map((p, i) => /*#__PURE__*/React.createElement(ProductFigure, {
    key: p.id,
    p: p,
    i: i,
    lang: lang,
    t: t
  })))), heroVariant === 'packshot' && /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      marginTop: 96,
      minHeight: 520,
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/lifestyle-crib.jpg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to right, rgba(35,33,28,0.5), rgba(35,33,28,0.05) 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "lpm-life-inner",
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 32px',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 440,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...eyebrowStyle,
      color: 'rgba(255,253,248,0.7)'
    }
  }, t.lifestyleEyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "lpm-h2",
    style: {
      margin: 0,
      fontSize: 40,
      fontWeight: 500,
      color: '#FFFDF8',
      lineHeight: 1.08
    }
  }, t.lifestyleTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15.5,
      color: 'rgba(255,253,248,0.85)'
    }
  }, t.lifestyleText), /*#__PURE__*/React.createElement("a", {
    href: "#/oreiller/moyen",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      color: '#FFFDF8',
      cursor: 'pointer',
      textDecoration: 'none',
      borderBottom: '1px solid rgba(255,253,248,0.7)',
      paddingBottom: 2,
      marginTop: 6
    }
  }, lang === 'fr' ? 'Voir Le Moyen' : 'See The Medium')))), /*#__PURE__*/React.createElement("section", {
    id: "guide",
    className: "lpm-guide",
    style: {
      maxWidth: 880,
      margin: '96px auto 0',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...eyebrowStyle,
      textAlign: 'center',
      marginBottom: 10
    }
  }, lang === 'fr' ? 'Le guide des tailles' : 'Size guide'), /*#__PURE__*/React.createElement("h2", {
    className: "lpm-h2",
    style: {
      margin: '0 0 36px',
      fontSize: 40,
      fontWeight: 500,
      textAlign: 'center'
    }
  }, t.guideTitle), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--lpm-ink-900)'
    }
  }, t.guideRows.map((row, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: `#/oreiller/${window.lpmProducts[i].id}`,
    className: "lpm-guide-row",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr 0.8fr 1.6fr auto',
      gap: 18,
      alignItems: 'baseline',
      padding: '20px 4px',
      borderBottom: '1px solid var(--border-soft)',
      cursor: 'pointer',
      color: 'inherit',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 500,
      color: 'var(--text-heading)'
    }
  }, row[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, row[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, row[2]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, row[3]), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-faint)'
    }
  }, "\u2192"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--lpm-sage-100)',
      marginTop: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lpm-story-inner",
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px 32px 78px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Fanions, {
    size: 8
  }), /*#__PURE__*/React.createElement("span", {
    style: eyebrowStyle
  }, t.nightEyebrow)), /*#__PURE__*/React.createElement("h2", {
    className: "lpm-h2",
    style: {
      margin: '0 0 44px',
      fontSize: 40,
      fontWeight: 500,
      maxWidth: 540
    }
  }, t.nightTitle), /*#__PURE__*/React.createElement("div", {
    className: "lpm-night-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 24
    }
  }, t.nightValues.map(([h, p], i) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      borderTop: '1px solid var(--lpm-ink-900)',
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--lpm-ink-500)',
      letterSpacing: '0.14em',
      marginBottom: 8
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 8px',
      fontFamily: 'var(--font-display)',
      fontSize: 23,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.7,
      maxWidth: 320
    }
  }, p)))))));
}
window.HomeScreen = HomeScreen;
})();
