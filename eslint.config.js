import { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Influencer · Lifestyle',
    handle: 'Instagram · 150K seguidores',
    text: 'Tenía más de 150K en Instagram y no monetizaba nada. En menos de 3 meses con Bloom empecé a generar ingresos reales. El manager me guió en todo — estrategia, precios, qué publicar. No esperaba que fuera tan directo.',
    income: '$20,000/mes',
    growth: '+210%',
    avatar: '✦',
    gradient: 'linear-gradient(135deg, #F2A7C3, #D9A0DA)',
  },
  {
    name: 'Influencer · Fitness',
    handle: 'TikTok · 120K seguidores',
    text: 'Lo que más me gustó fue la tranquilidad. Todo es soft, sin presiones. Mi comunidad ya me seguía, solo había que darles una forma de apoyarme directamente. Los resultados llegaron solos.',
    income: '$30,000/mes',
    growth: '+280%',
    avatar: '✦',
    gradient: 'linear-gradient(135deg, #C3A7E8, #D9A0DA)',
  },
  {
    name: 'Influencer · Moda',
    handle: 'Instagram · 210K seguidores',
    text: 'Dudé mucho al principio pero desde el primer día me sentí acompañada. Ahora tengo más de 3,000 suscriptores de pago y mis seguidores están felices de tener acceso a contenido exclusivo.',
    income: '$43,000/mes',
    growth: '+380%',
    avatar: '✦',
    gradient: 'linear-gradient(135deg, #D9A0DA, #F2A7C3)',
  },
];

const Testimonials = () => {
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
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 50% 50%, rgba(195,167,232,0.06) 0%, transparent 70%)'
      }} />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-glass-pink rounded-full px-4 py-2 mb-5">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#F2A7C3' }}>
              Casos reales
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Influencers que ya están{' '}
            <span className="text-gradient italic">ganando</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Creadoras con comunidades reales que convirtieron sus seguidores en
            ingresos mensuales consistentes con Fanfix.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="animate-on-scroll bg-glass rounded-3xl p-7 card-hover"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote size={28} className="mb-4" style={{ color: 'rgba(242,167,195,0.3)' }} />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-white/65 text-sm leading-relaxed mb-6">{t.text}</p>

              <div className="flex gap-4 mb-6">
                <div className="bg-white/3 rounded-xl px-4 py-2 border border-white/5">
                  <div className="text-white font-bold text-base">{t.income}</div>
                  <div className="text-white/40 text-xs">Ingreso mensual</div>
                </div>
                <div className="rounded-xl px-4 py-2" style={{ background: 'rgba(160,232,180,0.08)', border: '1px solid rgba(160,232,180,0.15)' }}>
                  <div className="text-emerald-400 font-bold text-base">{t.growth}</div>
                  <div className="text-white/40 text-xs">Crecimiento</div>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-white/5 pt-5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                  style={{ background: t.gradient }}
                >
                  <span style={{ color: '#1a0d22', fontSize: 16 }}>✦</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/35 text-xs">{t.handle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
