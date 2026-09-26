(function () {
// Editorial pages: Qui sommes-nous (story) + FAQ.
const {
  Button,
  Card
} = window.PetitNuageDesignSystem_f04838;
function EditorialHeader({
  eyebrow,
  title,
  intro
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "lpm-edit-head",
    style: {
      maxWidth: 640,
      margin: '0 auto',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'center',
      padding: '72px 32px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Fanions, {
    size: 8
  }), " ", eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "lpm-edit-title",
    style: {
      margin: 0,
      fontSize: 52
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      color: 'var(--text-body)'
    }
  }, intro));
}
function MaisonScreen({
  t,
  onOpenCollection
}) {
  const m = t.maison;
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "La maison"
  }, /*#__PURE__*/React.createElement(EditorialHeader, {
    eyebrow: m.eyebrow,
    title: m.title,
    intro: m.intro
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '56px auto 0',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      border: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/lifestyle-crib.jpg",
    alt: "",
    style: {
      width: '100%',
      height: 440,
      objectFit: 'cover',
      display: 'block'
    }
  }))), /*#__PURE__*/React.createElement("section", {
    className: "lpm-maison-grid",
    style: {
      maxWidth: 'var(--container-max)',
      margin: '56px auto 0',
      padding: '0 32px',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22
    }
  }, m.blocks.map(([h, p], i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    variant: "outline",
    padding: "28px"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 10px',
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.7
    }
  }, p)))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 720,
      margin: '72px auto 0',
      padding: '0 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Fanions, {
    size: 9
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 28,
      lineHeight: 1.4,
      color: 'var(--text-heading)'
    }
  }, m.quote), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onOpenCollection
  }, t.heroCta))));
}
function FaqItem({
  id,
  q,
  a,
  open,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("div", {
    id: `faq-${id}`,
    style: {
      borderBottom: '1px solid var(--border-soft)',
      scrollMarginTop: 140
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    "aria-expanded": open,
    style: {
      width: '100%',
      background: 'none',
      border: 'none',
      padding: '18px 4px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 16,
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 21,
      fontWeight: 500,
      color: 'var(--text-heading)'
    }
  }, q), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      color: 'var(--text-faint)',
      flexShrink: 0
    }
  }, open ? '−' : '+')), open && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 20px',
      padding: '0 4px',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.7,
      maxWidth: 560,
      color: 'var(--text-body)'
    }
  }, a));
}
function FaqScreen({
  t,
  question
}) {
  const f = t.faq;
  // A question named in the address (#/questions/livraison) opens first; otherwise the first one.
  const [openId, setOpenId] = React.useState(question || '0-0');
  React.useEffect(() => {
    if (!question) return;
    setOpenId(question);
    const el = document.getElementById(`faq-${question}`);
    if (el) el.scrollIntoView({
      block: 'start'
    });
  }, [question]);
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "Vos questions"
  }, /*#__PURE__*/React.createElement(EditorialHeader, {
    eyebrow: f.eyebrow,
    title: f.title,
    intro: f.intro
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 760,
      margin: '40px auto 0',
      padding: '0 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 44
    }
  }, f.groups.map(([g, items], gi) => /*#__PURE__*/React.createElement("div", {
    key: g
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'var(--text-muted)',
      paddingBottom: 10,
      borderBottom: '1px solid var(--lpm-ink-900)'
    }
  }, g), items.map(([q, a, slug], qi) => {
    const id = slug || gi + '-' + qi;
    return /*#__PURE__*/React.createElement(FaqItem, {
      key: id,
      id: id,
      q: q,
      a: a,
      open: openId === id,
      onToggle: () => setOpenId(openId === id ? null : id)
    });
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 760,
      margin: '48px auto 0',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "soft",
    padding: "22px 26px",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Fanions, {
    size: 9,
    style: {
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.6
    }
  }, f.contact))));
}
Object.assign(window, {
  MaisonScreen,
  FaqScreen
});
})();
