// Editorial pages: Qui sommes-nous (story) + FAQ.
const { Button, Card } = window.PetitNuageDesignSystem_f04838;

function EditorialHeader({ eyebrow, title, intro }) {
  return (
    <div className="lpm-edit-head" style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', padding: '72px 32px 0' }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', fontWeight: 600, color: 'var(--text-muted)' }}>
        <Fanions size={8} /> {eyebrow}
      </span>
      <h1 className="lpm-edit-title" style={{ margin: 0, fontSize: 52 }}>{title}</h1>
      <p style={{ margin: 0, fontSize: 17, color: 'var(--text-body)' }}>{intro}</p>
    </div>
  );
}

function MaisonScreen({ t, onOpenCollection }) {
  const m = t.maison;
  return (
    <main data-screen-label="La maison">
      <EditorialHeader eyebrow={m.eyebrow} title={m.title} intro={m.intro} />
      <section style={{ maxWidth: 'var(--container-max)', margin: '56px auto 0', padding: '0 32px' }}>
        <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--border-soft)' }}>
          <img src="../../assets/lifestyle-crib.jpg" alt="" style={{ width: '100%', height: 440, objectFit: 'cover', display: 'block' }} />
        </div>
      </section>
      <section className="lpm-maison-grid" style={{ maxWidth: 'var(--container-max)', margin: '56px auto 0', padding: '0 32px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
        {m.blocks.map(([h, p], i) => (
          <Card key={i} variant="outline" padding="28px">
            <h3 style={{ margin: '0 0 10px', fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, color: 'var(--text-heading)' }}>{h}</h3>
            <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.7 }}>{p}</p>
          </Card>
        ))}
      </section>
      <section style={{ maxWidth: 720, margin: '72px auto 0', padding: '0 32px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 18 }}><Fanions size={9} /></div>
        <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 28, lineHeight: 1.4, color: 'var(--text-heading)' }}>{m.quote}</div>
        <div style={{ marginTop: 28 }}>
          <Button size="lg" onClick={onOpenCollection}>{t.heroCta}</Button>
        </div>
      </section>
    </main>
  );
}

function FaqItem({ id, q, a, open, onToggle }) {
  return (
    <div id={`faq-${id}`} style={{ borderBottom: '1px solid var(--border-soft)', scrollMarginTop: 140 }}>
      <button onClick={onToggle} aria-expanded={open} style={{ width: '100%', background: 'none', border: 'none', padding: '18px 4px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, cursor: 'pointer', textAlign: 'left' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 500, color: 'var(--text-heading)' }}>{q}</span>
        <span aria-hidden="true" style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'var(--text-faint)', flexShrink: 0 }}>{open ? '−' : '+'}</span>
      </button>
      {open && <p style={{ margin: '0 0 20px', padding: '0 4px', fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7, maxWidth: 560, color: 'var(--text-body)' }}>{a}</p>}
    </div>
  );
}

function FaqScreen({ t, question }) {
  const f = t.faq;
  // A question named in the address (#/questions/livraison) opens first; otherwise the first one.
  const [openId, setOpenId] = React.useState(question || '0-0');
  React.useEffect(() => {
    if (!question) return;
    setOpenId(question);
    const el = document.getElementById(`faq-${question}`);
    if (el) el.scrollIntoView({ block: 'start' });
  }, [question]);
  return (
    <main data-screen-label="Vos questions">
      <EditorialHeader eyebrow={f.eyebrow} title={f.title} intro={f.intro} />
      <section style={{ maxWidth: 760, margin: '40px auto 0', padding: '0 32px', display: 'flex', flexDirection: 'column', gap: 44 }}>
        {f.groups.map(([g, items], gi) => (
          <div key={g}>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', fontWeight: 600, color: 'var(--text-muted)', paddingBottom: 10, borderBottom: '1px solid var(--lpm-ink-900)' }}>{g}</div>
            {items.map(([q, a, slug], qi) => {
              const id = slug || gi + '-' + qi;
              return <FaqItem key={id} id={id} q={q} a={a} open={openId === id} onToggle={() => setOpenId(openId === id ? null : id)} />;
            })}
          </div>
        ))}
      </section>
      <section style={{ maxWidth: 760, margin: '48px auto 0', padding: '0 32px' }}>
        <Card variant="soft" padding="22px 26px" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Fanions size={9} style={{ flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6 }}>{f.contact}</span>
        </Card>
      </section>
    </main>
  );
}

Object.assign(window, { MaisonScreen, FaqScreen });
