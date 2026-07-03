// Editorial pages: La maison (story) + Le guide du sommeil.
const { Button, Card } = window.PetitNuageDesignSystem_f04838;

function EditorialHeader({ eyebrow, title, intro }) {
  return (
    <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', padding: '72px 32px 0' }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', fontWeight: 600, color: 'var(--text-muted)' }}>
        <Fanions size={8} /> {eyebrow}
      </span>
      <h1 style={{ margin: 0, fontSize: 52 }}>{title}</h1>
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
          <img src="../../assets/lifestyle-crib.png" alt="" style={{ width: '100%', height: 440, objectFit: 'cover', display: 'block' }} />
        </div>
      </section>
      <section style={{ maxWidth: 'var(--container-max)', margin: '56px auto 0', padding: '0 32px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
        {m.blocks.map(([h, p], i) => (
          <Card key={i} variant="outline" padding="28px">
            <h3 style={{ margin: '0 0 10px', fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, color: 'var(--text-heading)' }}>{h}</h3>
            <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.7 }}>{p}</p>
          </Card>
        ))}
      </section>
      <section style={{ maxWidth: 720, margin: '72px auto 0', padding: '0 32px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 28, lineHeight: 1.4, color: 'var(--text-heading)' }}>{m.quote}</div>
        <div style={{ marginTop: 28 }}>
          <Button size="lg" onClick={onOpenCollection}>{t.heroCta}</Button>
        </div>
      </section>
    </main>
  );
}

function GuideSommeilScreen({ t, onOpenCollection }) {
  const g = t.guideSommeil;
  return (
    <main data-screen-label="Guide du sommeil">
      <EditorialHeader eyebrow={g.eyebrow} title={g.title} intro={g.intro} />
      <section style={{ maxWidth: 760, margin: '48px auto 0', padding: '0 32px', display: 'flex', flexDirection: 'column' }}>
        {g.articles.map(([h, p], i) => (
          <article key={i} style={{ padding: '28px 0', borderTop: i > 0 ? '1px solid var(--border-soft)' : 'none', display: 'grid', gridTemplateColumns: '52px 1fr', gap: 20, alignItems: 'start' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 34, fontWeight: 500, color: 'var(--lpm-jouy-300)', lineHeight: 1 }}>{String(i + 1).padStart(2, '0')}</span>
            <div>
              <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-display)', fontSize: 25, fontWeight: 600, color: 'var(--text-heading)' }}>{h}</h3>
              <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.7, maxWidth: 560 }}>{p}</p>
            </div>
          </article>
        ))}
      </section>
      <section style={{ maxWidth: 760, margin: '32px auto 0', padding: '0 32px', textAlign: 'center' }}>
        <Card variant="soft" padding="32px" style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 24, color: 'var(--text-heading)' }}>{t.guideTitle}</span>
          <Button onClick={onOpenCollection}>{g.cta}</Button>
        </Card>
      </section>
    </main>
  );
}

Object.assign(window, { MaisonScreen, GuideSommeilScreen });
