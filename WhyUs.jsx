import { useEffect, useRef } from 'react';
import { CheckCircle2, Lock, DollarSign, Zap, Globe, X, Heart, MessageCircle, Search, Bell, Home } from 'lucide-react';
import BloomLogo from './BloomLogo';

/* ── Content type data ───────────────────────────────────────── */
const allowedContent = [
  { emoji: '🌅', label: 'Lifestyle & vlogs' },
  { emoji: '💪', label: 'Fitness & wellness' },
  { emoji: '✈️', label: 'Travel & aventuras' },
  { emoji: '💄', label: 'Moda & beauty' },
  { emoji: '🍽️', label: 'Cooking & recetas' },
  { emoji: '🎵', label: 'Música & arte' },
  { emoji: '📸', label: 'Fotos behind-the-scenes' },
  { emoji: '💬', label: 'Q&A con tus fans' },
];

const notAllowed = [
  'Contenido sexual explícito',
  'Desnudos totales',
  'Material para adultos',
  'Contenido de OnlyFans style',
];

const differences = [
  {
    icon: <Lock size={18} />,
    title: '100% libre de contenido explícito',
    desc: 'Fanfix prohíbe por política cualquier contenido sexual o para adultos. Es una plataforma de entretenimiento soft — segura para marcas y patrocinadores.',
  },
  {
    icon: <DollarSign size={18} />,
    title: 'Ingresos directos en USD',
    desc: 'Tus fans pagan suscripción mensual en dólares para acceder a tu contenido exclusivo. Sin algoritmo que te frene, ingresos predecibles cada mes.',
  },
  {
    icon: <Zap size={18} />,
    title: 'Diseñada para influencers',
    desc: 'Fanfix fue construida específicamente para la relación influencer-fan. La conversión de seguidores a suscriptores es 3x mayor que otras plataformas.',
  },
  {
    icon: <Globe size={18} />,
    title: 'Audiencia global, ingresos reales',
    desc: 'Monetiza seguidores de cualquier país. Fanfix opera en +50 países con pagos directos. Tú te quedas el 80% de cada suscripción.',
  },
];

/* ── Realistic Phone Mockup ──────────────────────────────────── */
const FanfixPhoneMockup = () => {
  const posts = [
    { cols: 'col-span-1 row-span-2', bg: 'linear-gradient(160deg, #e8c8f0 0%, #c9a8e8 50%, #a888d4 100%)', locked: false, likes: '4.2K', tag: '✨ Exclusive', hasPerson: true },
    { cols: 'col-span-1', bg: 'linear-gradient(135deg, #fdd8e8 0%, #f4a8cc 100%)', locked: false, likes: '2.1K', emoji: '🌸' },
    { cols: 'col-span-1', bg: 'linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 100%)', locked: true },
    { cols: 'col-span-1', bg: 'linear-gradient(135deg, #fce8d0 0%, #f8c89a 100%)', locked: false, likes: '1.8K', emoji: '☀️' },
    { cols: 'col-span-1', bg: 'linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 100%)', locked: true },
  ];

  return (
    <div className="relative w-[240px] flex-shrink-0 select-none">
      <div className="relative overflow-hidden flex flex-col"
        style={{ borderRadius: '36px', border: '1.5px solid rgba(195,167,232,0.35)', background: '#0f0f0f', boxShadow: '0 40px 100px rgba(195,167,232,0.25), 0 0 0 1px rgba(255,255,255,0.04)', height: '510px' }}>

        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3 pb-1 flex-shrink-0">
          <span className="text-white/70 text-[9px] font-semibold">9:41</span>
          <div className="w-16 h-4 rounded-full bg-black absolute top-0 left-1/2 -translate-x-1/2" />
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5 items-end h-2.5">
              {[3,4,5,6].map(h => <div key={h} className="w-0.5 rounded-sm bg-white/70" style={{ height: h }} />)}
            </div>
            <div className="w-4 h-2 rounded-sm border border-white/50 p-px ml-1">
              <div className="h-full bg-white/70 rounded-sm w-3/4" />
            </div>
          </div>
        </div>

        {/* App nav */}
        <div className="flex items-center justify-between px-4 py-2 flex-shrink-0">
          <span className="font-black text-white text-base" style={{ letterSpacing: '-0.5px' }}>
            fan<span style={{ color: '#c3a7e8' }}>fix</span>
          </span>
          <div className="flex items-center gap-2">
            <Search size={13} className="text-white/60" />
            <div className="relative"><Bell size={13} className="text-white/60" /><div className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-rose-400" /></div>
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          {/* Cover */}
          <div className="relative h-20" style={{ background: 'linear-gradient(135deg, #e8c0f0 0%, #d4a8e8 40%, #b890d8 100%)' }}>
            <div className="absolute top-2 left-4 w-12 h-12 rounded-full opacity-40" style={{ background: 'rgba(255,255,255,0.5)', filter: 'blur(10px)' }} />
            <div className="absolute bottom-1 right-8 w-8 h-8 rounded-full opacity-30" style={{ background: 'rgba(255,255,255,0.6)', filter: 'blur(8px)' }} />
          </div>

          <div className="px-3 pb-2 relative">
            {/* Avatar */}
            <div className="absolute -top-7 left-3 p-0.5 rounded-full" style={{ background: 'linear-gradient(135deg, #F2A7C3, #C3A7E8)' }}>
              <div className="w-12 h-12 rounded-full border-2 border-[#0f0f0f] overflow-hidden" style={{ background: 'linear-gradient(160deg, #e8c8f0 0%, #b090d8 100%)' }}>
                <div className="w-full h-full flex items-end justify-center">
                  <div className="w-6 h-7 rounded-t-full" style={{ background: 'rgba(180,140,220,0.8)' }} />
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-1.5 pb-1">
              <div className="px-3 py-1 rounded-full text-[9px] font-bold text-[#1a0d22]" style={{ background: 'linear-gradient(135deg, #F2A7C3, #C3A7E8)' }}>Subscribe</div>
            </div>

            <div className="flex items-center gap-1 mt-1">
              <span className="text-white font-bold text-[11px]">Sofia Vega</span>
              <svg width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5" fill="#C3A7E8"/><path d="M3 5l1.5 1.5L7 3.5" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round"/></svg>
            </div>
            <div className="text-white/45 text-[9px]">@sofiavega · lifestyle & travel ✈️</div>
            <div className="text-white/55 text-[8.5px] mt-1 leading-tight">☀️ Living chill, creating vibes<br/>📍 Miami · 184K followers</div>

            <div className="flex gap-3 mt-2 mb-2">
              {[['2.1K', 'Fans'], ['847', 'Posts'], ['$9.99', '/mo']].map(([v, l]) => (
                <div key={l} className="text-center">
                  <div className="text-white font-bold text-[10px] leading-none">{v}</div>
                  <div className="text-white/35 text-[8px]">{l}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-1.5 mb-2">
              {[{ tier: 'Fan', price: '$9.99', color: '#F2A7C3' }, { tier: 'VIP', price: '$24.99', color: '#C3A7E8' }].map(t => (
                <div key={t.tier} className="flex-1 rounded-lg py-1 px-2 text-center border" style={{ background: `${t.color}12`, borderColor: `${t.color}35` }}>
                  <div className="font-bold text-[8.5px]" style={{ color: t.color }}>{t.tier}</div>
                  <div className="text-white/45 text-[7.5px]">{t.price}/mo</div>
                </div>
              ))}
            </div>

            <div className="flex gap-2 border-b mb-2" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              {['Posts', 'Exclusivo', 'VIP'].map((tab, i) => (
                <div key={tab} className="pb-1 text-[8.5px] font-semibold" style={{ color: i === 0 ? '#C3A7E8' : 'rgba(255,255,255,0.3)', borderBottom: i === 0 ? '1.5px solid #C3A7E8' : 'none' }}>{tab}</div>
              ))}
            </div>
          </div>

          {/* Post grid */}
          <div className="grid grid-cols-3 gap-0.5 px-0.5">
            {posts.map((p, i) => (
              <div key={i} className={`relative overflow-hidden ${p.cols}`}
                style={{ background: p.bg, aspectRatio: p.cols.includes('row-span-2') ? '1/2' : '1/1', borderRadius: '4px' }}>
                {p.hasPerson && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full mb-0.5" style={{ background: 'linear-gradient(180deg, #e8d0f4 0%, #c0a0e0 100%)', opacity: 0.9 }} />
                    <div className="w-12 h-10 rounded-t-full" style={{ background: 'linear-gradient(180deg, #c8a8e8 0%, #9878c4 100%)', opacity: 0.85 }} />
                  </div>
                )}
                {p.emoji && <div className="absolute inset-0 flex items-center justify-center text-xl opacity-60">{p.emoji}</div>}
                {p.locked && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5" style={{ background: 'rgba(10,5,20,0.85)' }}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'rgba(195,167,232,0.2)', border: '1px solid rgba(195,167,232,0.3)' }}><span className="text-[9px]">🔒</span></div>
                    <span className="text-white/40 text-[7px] font-medium">Suscríbete</span>
                  </div>
                )}
                {p.tag && <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded-full text-[6.5px] font-bold" style={{ background: 'linear-gradient(135deg, #F2A7C3, #C3A7E8)', color: '#1a0d22' }}>{p.tag}</div>}
                {p.likes && <div className="absolute bottom-1 right-1 flex items-center gap-0.5"><Heart size={6} className="fill-white/80 text-white/80" /><span className="text-white/80 text-[7px] font-medium">{p.likes}</span></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom nav */}
        <div className="flex items-center justify-around px-2 py-2 flex-shrink-0 border-t" style={{ background: '#0f0f0f', borderColor: 'rgba(255,255,255,0.07)' }}>
          {[
            { icon: <Home size={14} />, active: false },
            { icon: <Search size={14} />, active: false },
            { icon: <MessageCircle size={14} />, active: false },
            { icon: <Bell size={14} />, active: false },
            { icon: <div className="w-4 h-4 rounded-full" style={{ background: 'linear-gradient(135deg, #F2A7C3, #C3A7E8)' }} />, active: true },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center" style={{ color: item.active ? '#C3A7E8' : 'rgba(255,255,255,0.3)' }}>
              {item.icon}
              {item.active && <div className="w-1 h-1 rounded-full mt-0.5" style={{ background: '#C3A7E8' }} />}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-40 h-10 rounded-full pointer-events-none" style={{ background: 'rgba(195,167,232,0.35)', filter: 'blur(24px)' }} />
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 rounded-full pointer-events-none" style={{ background: 'rgba(242,167,195,0.2)', filter: 'blur(20px)' }} />
    </div>
  );
};

/* ── Main Section ────────────────────────────────────────────── */
const FanfixSection = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.animate-on-scroll')?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(195,167,232,0.08) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto relative">

        {/* ── Header ── */}
        <div className="text-center mb-16 animate-on-scroll">
          {/* Fanfix logo integrado como badge */}
          <div className="inline-flex items-center gap-3 bg-glass rounded-2xl px-5 py-3 mb-7"
            style={{ border: '1px solid rgba(195,167,232,0.18)' }}>
            <img
              src="/fanfix-logo.png"
              alt="Fanfix"
              className="h-7 w-auto object-contain"
              style={{ filter: 'brightness(0) invert(1) opacity(0.9)' }}
            />
            <div className="w-px h-4 bg-white/15" />
            <span className="text-white/50 text-xs font-semibold tracking-widest uppercase">Plataforma oficial</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            ¿Qué es{' '}
            <span className="text-gradient italic">Fanfix</span>
            {' '}y por qué es diferente?
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Piensa en Fanfix como un <strong className="text-white/75">Instagram de pago</strong> — tus seguidores pagan una suscripción
            mensual para acceder a contenido exclusivo tuyo. Sin algoritmo, sin restricciones, ingresos directos.
          </p>
        </div>

        {/* ── NOT OnlyFans banner ── */}
        <div className="animate-on-scroll mb-14">
          <div className="rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left"
            style={{ background: 'linear-gradient(135deg, rgba(242,167,195,0.07) 0%, rgba(195,167,232,0.07) 100%)', border: '1px solid rgba(195,167,232,0.2)' }}>
            {/* Big X badge */}
            <div className="flex-shrink-0 flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)' }}>
                <span className="text-2xl font-black text-red-400">✕</span>
              </div>
              <div className="text-white/20 text-3xl font-thin hidden md:block">|</div>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-display text-xl md:text-2xl font-bold mb-2">
                Fanfix <span className="text-red-400">NO es OnlyFans</span> — y eso lo cambia todo
              </h3>
              <p className="text-white/55 text-sm md:text-base leading-relaxed">
                El contenido explícito está <strong className="text-red-400">estrictamente prohibido</strong> en la plataforma.
                Fanfix es entretenimiento 100% soft — el mismo contenido que ya publicas en redes,
                pero en exclusivo para tus fans más fieles. Sin riesgos para tu imagen, sin estigma, sin compromisos.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="px-5 py-2.5 rounded-full text-sm font-bold"
                style={{ background: 'rgba(195,167,232,0.12)', border: '1px solid rgba(195,167,232,0.3)', color: '#C3A7E8' }}>
                100% Soft ✓
              </div>
            </div>
          </div>
        </div>

        {/* ── Content types ── */}
        <div className="animate-on-scroll mb-14">
          <div className="grid md:grid-cols-2 gap-6">

            {/* What IS allowed */}
            <div className="rounded-3xl p-6" style={{ background: 'rgba(195,167,232,0.05)', border: '1px solid rgba(195,167,232,0.15)' }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs" style={{ background: 'rgba(52,211,153,0.15)', border: '1px solid rgba(52,211,153,0.3)' }}>✓</div>
                <span className="text-white font-semibold text-sm">Contenido que SÍ se publica</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {allowedContent.map((c) => (
                  <div key={c.label} className="flex items-center gap-2 rounded-xl px-3 py-2"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <span className="text-base">{c.emoji}</span>
                    <span className="text-white/65 text-xs font-medium">{c.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What is NOT allowed */}
            <div className="rounded-3xl p-6" style={{ background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.12)' }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs" style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.25)' }}>✕</div>
                <span className="text-white font-semibold text-sm">Lo que NO está permitido</span>
              </div>
              <div className="flex flex-col gap-2 mb-5">
                {notAllowed.map((n) => (
                  <div key={n} className="flex items-center gap-2.5 rounded-xl px-3 py-2"
                    style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.1)' }}>
                    <X size={12} className="text-red-400 flex-shrink-0" />
                    <span className="text-white/55 text-xs font-medium">{n}</span>
                  </div>
                ))}
              </div>
              {/* Reassurance */}
              <div className="rounded-2xl p-3 mt-2" style={{ background: 'rgba(195,167,232,0.08)', border: '1px solid rgba(195,167,232,0.15)' }}>
                <p className="text-white/60 text-xs leading-relaxed">
                  <span style={{ color: '#C3A7E8' }} className="font-semibold">Tu tranquilidad es nuestra prioridad.</span>{' '}
                  Nunca te pediremos contenido que no quieras hacer. Tú marcas los límites, siempre.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Real app screenshots ── */}
        <div className="animate-on-scroll mb-16">
          <div className="grid md:grid-cols-2 gap-5">

            <div className="rounded-3xl overflow-hidden card-hover"
              style={{ border: '1px solid rgba(195,167,232,0.15)', boxShadow: '0 20px 60px rgba(195,167,232,0.12)' }}>
              <img
                src="/fanfix-app.png"
                alt="Fanfix app"
                className="w-full h-72 object-cover object-top"
              />
            </div>

            <div className="rounded-3xl overflow-hidden card-hover"
              style={{ border: '1px solid rgba(242,167,195,0.15)', boxShadow: '0 20px 60px rgba(242,167,195,0.12)' }}>
              <img
                src="/fanfix-live.png"
                alt="Fanfix Livestreams"
                className="w-full h-72 object-cover object-top"
              />
            </div>

          </div>
        </div>

        {/* ── Phone + differences ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — phone + side stats */}
          <div className="animate-on-scroll flex flex-col items-center gap-8">
            <div className="flex items-center gap-6 justify-center">
              <FanfixPhoneMockup />
              <div className="flex flex-col gap-3">
                {[
                  { value: '+10K', label: 'Creadores activos' },
                  { value: '+50', label: 'Países' },
                  { value: '$9.99', label: 'Sub. mínima' },
                  { value: '80%', label: 'Revenue share' },
                ].map((s) => (
                  <div key={s.label} className="bg-glass rounded-2xl px-4 py-3 border border-white/5 min-w-[100px]">
                    <div className="font-bold text-lg leading-none" style={{ color: '#D9A0DA' }}>{s.value}</div>
                    <div className="text-white/40 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform badge */}
            <div className="inline-flex items-center gap-3 bg-glass rounded-2xl px-5 py-3 border border-white/8">
              <BloomLogo size={36} />
              <div>
                <div className="text-white font-semibold text-sm">Bloom Agency · Fanfix Partner</div>
                <div className="text-white/35 text-xs">fanfix.io · Plataforma oficial</div>
              </div>
              <CheckCircle2 size={16} style={{ color: '#C3A7E8' }} className="ml-1" />
            </div>
          </div>

          {/* Right — why different */}
          <div className="animate-on-scroll" style={{ transitionDelay: '150ms' }}>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Por qué Fanfix es la mejor opción
            </h3>
            <p className="text-white/50 text-base mb-8 leading-relaxed">
              Creada desde cero para influencers. Monetiza tu audiencia con el contenido
              que ya produces — sin cambiar quién eres ni comprometer tu imagen pública.
            </p>

            <div className="flex flex-col gap-4">
              {differences.map((d, i) => (
                <div key={d.title} className="flex items-start gap-4 bg-glass rounded-2xl p-5 card-hover"
                  style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, rgba(242,167,195,0.2), rgba(195,167,232,0.2))', color: '#C3A7E8', border: '1px solid rgba(195,167,232,0.2)' }}>
                    {d.icon}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">{d.title}</div>
                    <div className="text-white/45 text-xs leading-relaxed">{d.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FanfixSection;
