import { useEffect, useRef } from 'react';
import { FileText, Video, Rocket, Handshake } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <FileText size={22} />,
    title: 'Solicitud',
    desc: 'Rellena nuestro formulario de contacto. Es rápido, sin compromiso y totalmente confidencial.',
    gradient: 'linear-gradient(135deg, #F2A7C3, #D9A0DA)',
    glow: 'rgba(242,167,195,0.4)',
  },
  {
    number: '02',
    icon: <Video size={22} />,
    title: 'Entrevista inicial',
    desc: 'Una videollamada informal con nuestro equipo para conocer tu perfil y explicarte cómo trabajamos.',
    gradient: 'linear-gradient(135deg, #D9A0DA, #C3A7E8)',
    glow: 'rgba(217,160,218,0.4)',
  },
  {
    number: '03',
    icon: <Rocket size={22} />,
    title: 'Onboarding',
    desc: 'Te asignamos tu manager personal, configuramos tu cuenta Fanfix y diseñamos tu estrategia de lanzamiento.',
    gradient: 'linear-gradient(135deg, #C3A7E8, #b8a0f0)',
    glow: 'rgba(195,167,232,0.4)',
  },
  {
    number: '04',
    icon: <Handshake size={22} />,
    title: 'Partnership',
    desc: 'Empezamos a crecer juntas. Tú creas, nosotros gestionamos. Los ingresos llegan directamente a ti.',
    gradient: 'linear-gradient(135deg, #F2A7C3, #C3A7E8)',
    glow: 'rgba(242,167,195,0.4)',
  },
];

const Steps = () => {
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
    <section id="steps" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="h-px mb-20" style={{ background: 'linear-gradient(to right, transparent, rgba(195,167,232,0.15), transparent)' }} />

        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-glass-pink rounded-full px-4 py-2 mb-5">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#F2A7C3' }}>
              Cómo empezar
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            De cero a{' '}
            <span className="text-gradient italic">generando ingresos</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Cuatro pasos para empezar a monetizar tu comunidad. Del primer contacto
            a los primeros ingresos en menos de una semana.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.number}
              className="animate-on-scroll group relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] right-[-40%] h-px z-0"
                  style={{ background: 'linear-gradient(to right, rgba(195,167,232,0.25), transparent)' }} />
              )}

              <div className="bg-glass rounded-3xl p-7 card-hover h-full relative z-10 border border-white/5">
                {/* Big number bg */}
                <div className="text-white/8 font-display text-6xl font-bold absolute top-4 right-5 leading-none select-none">
                  {s.number}
                </div>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-lg"
                  style={{ background: s.gradient, boxShadow: `0 8px 24px ${s.glow}`, color: '#1a0d22' }}
                >
                  {s.icon}
                </div>

                <h3 className="text-white font-semibold text-lg mb-3">{s.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 animate-on-scroll">
          <a href="#contact" className="btn-primary inline-flex items-center gap-2 text-base">
            Quiero empezar ahora
          </a>
          <p className="text-white/30 text-sm mt-4">Sin compromisos · 100% confidencial · Gratis</p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
