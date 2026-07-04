// Product detail: gallery, fabric, qty, add to cart, tabs, review.
const { Button, Badge, Card, Tabs, Select } = window.PetitNuageDesignSystem_f04838;

function ProductScreen({ product, lang, t, onBack, onAdd }) {
  const p = product;
  const loc = p[lang];
  const [tab, setTab] = React.useState(t.tabs[0]);
  React.useEffect(() => { setTab(t.tabs[0]); }, [lang]);
  const gallery = [p.img, '../../assets/detail-toile.png', '../../assets/lifestyle-crib.png'];
  const [mainImg, setMainImg] = React.useState(p.img);
  React.useEffect(() => { setMainImg(p.img); }, [p]);
  const tabContent = { [t.tabs[0]]: loc.desc, [t.tabs[1]]: t.care, [t.tabs[2]]: t.shipping };
  return (
    <main className="lpm-product-main" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '36px 32px 0' }}>
      <a onClick={onBack} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-body)', fontSize: 13.5, fontWeight: 500, color: 'var(--text-muted)', cursor: 'pointer', marginBottom: 26 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        {t.back}
      </a>
      <div className="lpm-product-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 56, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <ProductPhoto src={mainImg} alt={loc.name} height={440} radius="var(--radius-xl)" provisional={p.imgProvisional && mainImg === p.img} provisionalLabel={t.provisional} contain={mainImg === p.img} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {gallery.map((g, i) => (
              <div key={i} onClick={() => setMainImg(g)} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: `1px solid ${mainImg === g ? 'var(--border-focus)' : 'var(--border-soft)'}`, cursor: 'pointer', height: 92, background: '#fff' }}>
                <img src={g} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
            {p.badge && <Badge tone={p.badge.tone}>{p.badge[lang]}</Badge>}
            <h1 className="lpm-product-title" style={{ margin: 0, fontSize: 46 }}>{loc.name}</h1>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--text-muted)' }}>{p.dims} · {loc.age}</div>
          </div>
          <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 26, color: 'var(--text-heading)' }}>{lang === 'fr' ? p.price : p.priceEn}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, borderTop: '1px solid var(--border-soft)', paddingTop: 18 }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', fontWeight: 600, color: 'var(--text-muted)' }}>{t.fabricLabel}</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 19, color: 'var(--text-heading)' }}>{loc.fabric}</span>
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end' }}>
            <Select label={t.qty} options={['1', '2', '3']} style={{ width: 100 }} />
            <Button size="lg" style={{ flex: 1 }} onClick={() => onAdd(p)}>{t.addToCart}</Button>
          </div>
          <Card variant="soft" padding="4px 20px" style={{ borderRadius: 'var(--radius-md)' }}>
            {t.productReassurance.map((line, i) => (
              <div key={i} style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, fontWeight: 500, color: 'var(--text-body)', padding: '10px 0', borderTop: i > 0 ? '1px solid rgba(35,33,28,0.07)' : 'none' }}>{line}</div>
            ))}
          </Card>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Tabs tabs={t.tabs} active={tab} onChange={setTab} />
            <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7, maxWidth: 470 }}>{tabContent[tab]}</p>
          </div>
          <div style={{ borderTop: '1px solid var(--border-soft)', paddingTop: 18, fontFamily: 'var(--font-display)', fontSize: 18, fontStyle: 'italic', color: 'var(--text-body)', lineHeight: 1.45 }}>
            {t.review}
          </div>
        </div>
      </div>
    </main>
  );
}

window.ProductScreen = ProductScreen;
