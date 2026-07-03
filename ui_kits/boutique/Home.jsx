// Home — editorial, asymmetric layout. Numbered collection, full-bleed lifestyle, hairline guide.
const { Button, Badge, Card } = window.PetitNuageDesignSystem_f04838;

const eyebrowStyle = { fontFamily: 'var(--font-body)', fontSize: 11.5, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', fontWeight: 600, color: 'var(--text-muted)' };

/* Product as an editorial figure — no card box, photo + hairline + caption. */
function ProductFigure({ p, i, lang, t, onOpen, offset }) {
  const loc = p[lang];
  const [hover, setHover] = React.useState(false);
  return (
    <figure onClick={() => onOpen(p)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ margin: 0, cursor: 'pointer', marginTop: offset ? 56 : 0, transition: 'margin 0s' }}>
      <div style={{ position: 'relative', background: '#fff', overflow: 'hidden', aspectRatio: '4 / 4.6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={p.img} alt={loc.name} style={{ width: '88%', height: '88%', objectFit: 'contain', transition: 'transform 700ms var(--ease-drift)', transform: hover ? 'scale(1.035)' : 'none' }} />
        {p.badge && <span style={{ position: 'absolute', top: 16, left: 16, ...eyebrowStyle, color: 'var(--lpm-wool-700)' }}>{p.badge[lang]}</span>}
        {p.imgProvisional && <span style={{ position: 'absolute', bottom: 12, right: 14, fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>{t.provisional}</span>}
      </div>
      <figcaption style={{ borderTop: '1px solid var(--lpm-ink-900)', marginTop: 18, paddingTop: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 27, fontWeight: 500, color: 'var(--text-heading)', fontStyle: hover ? 'italic' : 'normal' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, color: 'var(--text-faint)', verticalAlign: 'super', marginRight: 8, fontStyle: 'normal' }}>{String(i + 1).padStart(2, '0')}</span>
            {loc.name}
          </span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 500, color: 'var(--text-heading)' }}>{lang === 'fr' ? p.price : p.priceEn}</span>
        </div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', marginTop: 3 }}>{p.dims} · {loc.age} · {loc.fabric}</div>
      </figcaption>
    </figure>
  );
}

function HeroHeadline({ t, lang }) {
  // Italic accent on the last words — editorial, not template-like.
  const parts = lang === 'fr' ? ['De belles nuits,', 'dès ce soir'] : ['Beautiful nights,', 'starting tonight'];
  return (
    <h1 style={{ margin: 0, fontSize: 'clamp(56px, 7vw, 92px)', fontWeight: 500, lineHeight: 1.02, letterSpacing: '-0.01em' }}>
      {parts[0]}<br />
      <em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--lpm-jouy-700)' }}>{parts[1]}</em>
    </h1>
  );
}

function Hero({ t, lang, variant }) {
  if (variant === 'lifestyle' || variant === 'film') {
    return (
      <section style={{ position: 'relative', minHeight: 600, overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        {variant === 'film'
          ? <video src="../../assets/products/coussin-moutons.mp4" autoPlay muted loop playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}></video>
          : <img src="../../assets/lifestyle-crib.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(35,33,28,0.55), rgba(35,33,28,0) 55%)' }}></div>
        <div style={{ position: 'relative', width: '100%', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 32px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32 }}>
          <div>
            <div style={{ ...eyebrowStyle, color: 'rgba(255,253,248,0.75)', marginBottom: 14 }}>{t.heroEyebrow}</div>
            <h1 style={{ margin: 0, fontSize: 'clamp(48px, 6vw, 80px)', fontWeight: 500, lineHeight: 1.04, color: '#FFFDF8' }}>{t.heroTitle}</h1>
          </div>
          <Button size="lg" style={{ flexShrink: 0 }} onClick={() => window.scroll({ top: document.getElementById('collection').offsetTop - 100, behavior: 'smooth' })}>{t.heroCta}</Button>
        </div>
      </section>
    );
  }
  // Packshot — asymmetric: oversized headline crossing the grid, image offset right.
  return (
    <section style={{ background: 'var(--surface-page)', overflow: 'hidden' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '84px 32px 0', position: 'relative' }}>
        <div style={{ ...eyebrowStyle, display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
          <Fanions size={8} /> {t.heroEyebrow}
        </div>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 720 }}>
          <HeroHeadline t={t} lang={lang} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 48, alignItems: 'start', marginTop: 8 }}>
          <div style={{ paddingTop: 40, display: 'flex', flexDirection: 'column', gap: 26, alignItems: 'flex-start' }}>
            <p style={{ margin: 0, fontSize: 17, maxWidth: 360, color: 'var(--text-body)' }}>{t.heroSub}</p>
            <div style={{ display: 'flex', gap: 22, alignItems: 'center' }}>
              <Button size="lg" onClick={() => window.scroll({ top: document.getElementById('collection').offsetTop - 100, behavior: 'smooth' })}>{t.heroCta}</Button>
              <a onClick={() => window.scroll({ top: document.getElementById('guide').offsetTop - 100, behavior: 'smooth' })}
                 style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--text-heading)', cursor: 'pointer', borderBottom: '1px solid var(--lpm-ink-900)', paddingBottom: 2 }}>{t.heroCta2}</a>
            </div>
          </div>
          <div style={{ marginTop: -72, position: 'relative', zIndex: 1 }}>
            <div style={{ background: '#fff', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', height: 480 }}>
              <img src={window.lpmProducts[1].img} alt="" style={{ width: '92%', height: '92%', objectFit: 'contain' }} />
            </div>
            <div style={{ ...eyebrowStyle, marginTop: 10, textAlign: 'right' }}>{lang === 'fr' ? 'Le Moyen — toile « Bergerie »' : 'The Medium — “Bergerie” toile'}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeScreen({ lang, t, heroVariant = 'packshot', onOpenProduct }) {
  return (
    <main>
      <Hero t={t} lang={lang} variant={heroVariant} />
      <ReassuranceBar t={t} />

      {/* Collection — numbered figures, staggered middle */}
      <section id="collection" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '84px 32px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 44, gap: 24 }}>
          <h2 style={{ margin: 0, fontSize: 44, fontWeight: 500 }}>{t.collTitle}</h2>
          <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: 15, maxWidth: 300, textAlign: 'right' }}>{t.collSub}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
          {window.lpmProducts.map((p, i) => <ProductFigure key={p.id} p={p} i={i} lang={lang} t={t} onOpen={onOpenProduct} offset={i === 1} />)}
        </div>
      </section>

      {/* Lifestyle — full-bleed, text overlaid (hidden when hero already shows it) */}
      {heroVariant === 'packshot' && (
        <section style={{ position: 'relative', marginTop: 96, minHeight: 520, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
          <img src="../../assets/lifestyle-crib.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(35,33,28,0.5), rgba(35,33,28,0.05) 60%)' }}></div>
          <div style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px 32px', width: '100%' }}>
            <div style={{ maxWidth: 440, display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
              <span style={{ ...eyebrowStyle, color: 'rgba(255,253,248,0.7)' }}>{t.lifestyleEyebrow}</span>
              <h2 style={{ margin: 0, fontSize: 40, fontWeight: 500, color: '#FFFDF8', lineHeight: 1.08 }}>{t.lifestyleTitle}</h2>
              <p style={{ margin: 0, fontSize: 15.5, color: 'rgba(255,253,248,0.85)' }}>{t.lifestyleText}</p>
              <a onClick={() => onOpenProduct(window.lpmProducts[1])} style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: '#FFFDF8', cursor: 'pointer', borderBottom: '1px solid rgba(255,253,248,0.7)', paddingBottom: 2, marginTop: 6 }}>
                {lang === 'fr' ? 'Voir Le Moyen' : 'See The Medium'}
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Size guide — hairline editorial rows, no card */}
      <section id="guide" style={{ maxWidth: 880, margin: '96px auto 0', padding: '0 32px' }}>
        <div style={{ ...eyebrowStyle, textAlign: 'center', marginBottom: 10 }}>{lang === 'fr' ? 'Le guide des tailles' : 'Size guide'}</div>
        <h2 style={{ margin: '0 0 36px', fontSize: 40, fontWeight: 500, textAlign: 'center' }}>{t.guideTitle}</h2>
        <div style={{ borderTop: '1px solid var(--lpm-ink-900)' }}>
          {t.guideRows.map((row, i) => (
            <div key={i} onClick={() => onOpenProduct(window.lpmProducts[i])}
              style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 0.8fr 1.6fr auto', gap: 18, alignItems: 'baseline', padding: '20px 4px', borderBottom: '1px solid var(--border-soft)', cursor: 'pointer' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 500, color: 'var(--text-heading)' }}>{row[0]}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-body)' }}>{row[1]}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-body)' }}>{row[2]}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-muted)' }}>{row[3]}</span>
              <span aria-hidden="true" style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-faint)' }}>→</span>
            </div>
          ))}
        </div>
      </section>

      {/* Story band */}
      <section style={{ background: 'var(--surface-inverse)', marginTop: 96 }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '88px 32px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <span style={{ ...eyebrowStyle, color: 'rgba(255,253,248,0.5)' }}>{t.storyEyebrow}</span>
          <h2 style={{ margin: 0, fontSize: 44, fontWeight: 500, color: '#FFFDF8', lineHeight: 1.1 }}>{t.storyTitle}</h2>
          <p style={{ margin: 0, fontSize: 16, color: 'rgba(255,253,248,0.72)', maxWidth: 560 }}>{t.storyText}</p>
        </div>
      </section>
    </main>
  );
}

window.HomeScreen = HomeScreen;
