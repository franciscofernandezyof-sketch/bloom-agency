import { ArrowRight, Sparkles, TrendingUp, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-bg relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Decorative orbs */}
      <div className="orb absolute top-1/4 left-[-10%] w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'rgba(242,167,195,0.12)', animationDelay: '0s' }} />
      <div className="orb absolute bottom-1/4 right-[-5%] w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'rgba(195,167,232,0.10)', animationDelay: '3s' }} />
      <div className="orb absolute top-[60%] left-[40%] w-[300px] h-[300px] pointer-events-none"
        style={{ background: 'rgba(217,160,218,0.07)', animationDelay: '1.5s' }} />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-glass-pink rounded-full px-4 py-2 mb-8 animate-fade-up">
              <Sparkles size={14} style={{ color: '#F2A7C3' }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#F2A7C3' }}>
                Agencia Oficial de Fanfix
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6 animate-fade-up delay-100">
              Tu comunidad ya vale{' '}
              <span className="text-gradient italic">dinero</span>
            </h1>

            {/* Subheadline */}
            <p className="text-white/55 text-lg md:text-xl leading-relaxed mb-10 max-w-lg animate-fade-up delay-200">
              Si tienes <span className="text-white/80 font-medium">+50K seguidores</span> en Instagram,
              TikTok o YouTube, ya tienes lo más difícil. Nosotros convertimos esa audiencia en{' '}
              <span className="text-white/80 font-medium">ingresos reales de +$35,000/mes</span>{' '}
              a través de Fanfix —{' '}
              <span className="font-medium" style={{ color: '#D9A0DA' }}>100% soft, 100% tuyo.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-12 animate-fade-up delay-300">
              <a href="#contact" className="btn-primary flex items-center gap-2">
                Monetiza ahora
                <ArrowRight size={16} />
              </a>
              <a href="#services" className="btn-outline">
                Cómo funciona
              </a>
            </div>

            {/* Trust stats */}
            <div className="flex flex-wrap gap-6 animate-fade-up delay-400">
              {[
                { icon: <Users size={16} />, value: '+120', label: 'Influencers +50K' },
                { icon: <TrendingUp size={16} />, value: '+3x', label: 'Ingresos en 90 días' },
                { icon: <Sparkles size={16} />, value: '100%', label: 'Contenido soft' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-glass-pink flex items-center justify-center"
                    style={{ color: '#C3A7E8' }}>
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg leading-tight">{stat.value}</div>
                    <div className="text-white/45 text-xs">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — card mockup */}
          <div className="hidden lg:flex justify-center items-center relative animate-scale-in delay-300">
            <div className="relative w-full max-w-sm">
              <div className="bg-glass rounded-3xl p-8 glow-pink">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #F2A7C3, #C3A7E8)', boxShadow: '0 8px 24px rgba(195,167,232,0.35)' }}>
                    <Sparkles size={20} style={{ color: '#1a0d22' }} />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Panel de influencer</div>
                    <div className="text-white/40 text-xs">Bloom Agency</div>
                  </div>
                  <div className="ml-auto">
                    <span className="bg-emerald-500/20 text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-500/30">
                      Activa
                    </span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: 'Ingresos mes', value: '$38,400', trend: '+210%' },
                    { label: 'Seguidores', value: '184K', trend: '+34%' },
                    { label: 'Suscriptores', value: '2,140', trend: '+67%' },
                    { label: 'Engagement', value: '9.2%', trend: '+12%' },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/3 rounded-2xl p-4 border border-white/5">
                      <div className="text-white/40 text-xs mb-1">{s.label}</div>
                      <div className="text-white font-bold text-lg leading-none mb-1">{s.value}</div>
                      <div className="text-emerald-400 text-xs font-medium">{s.trend}</div>
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="bg-white/3 rounded-2xl p-4 border border-white/5">
                  <div className="flex justify-between mb-2">
                    <span className="text-white/50 text-xs">Objetivo mensual</span>
                    <span className="text-white/80 text-xs font-semibold">$40,000</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: '85%', background: 'linear-gradient(to right, #F2A7C3, #C3A7E8)' }}
                    />
                  </div>
                  <div className="text-right mt-1.5">
                    <span className="text-xs font-semibold" style={{ color: '#D9A0DA' }}>85% conseguido</span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 rounded-2xl px-4 py-3 shadow-xl"
                style={{ background: 'linear-gradient(135deg, #F2A7C3, #C3A7E8)', boxShadow: '0 12px 30px rgba(195,167,232,0.45)' }}>
                <div className="text-[#1a0d22] text-xs font-semibold">Nuevo ingreso</div>
                <div className="text-[#1a0d22] font-bold text-lg">+$ 1,840</div>
              </div>

              {/* Bottom badge */}
              <div className="absolute -bottom-4 -left-4 bg-glass rounded-2xl px-4 py-3 border border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white/70 text-xs">Gestión en tiempo real</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #0D0B12, transparent)' }} />
    </section>
  );
};

export default Hero;
