import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: '¿Cuántos seguidores necesito para entrar?',
    a: 'Trabajamos con influencers que tienen un mínimo de 50,000 seguidores en al menos una plataforma — Instagram, TikTok, YouTube o similar. No importa la red, lo importante es que tengas una comunidad real y comprometida.',
  },
  {
    q: '¿Qué es Fanfix y por qué es diferente a otras plataformas?',
    a: 'Fanfix es la plataforma de monetización de audiencias 100% soft más grande del mundo. Sin contenido explícito — ideal para influencers de lifestyle, fitness, moda, entretenimiento y más. Es perfectamente compatible con tu imagen pública en redes.',
  },
  {
    q: '¿Cuánto puedo ganar con mi comunidad?',
    a: 'Depende de tu audiencia y nicho, pero nuestras influencers generan de media más de $35,000 al mes. Las más activas superan los $80,000 mensuales. El modelo escala directamente con tu comunidad y nivel de engagement.',
  },
  {
    q: '¿Qué tipo de contenido se publica en Fanfix?',
    a: 'Contenido exclusivo completamente soft: fotos y vídeos lifestyle, behind the scenes, tutoriales, rutinas de fitness, contenido personalizado para tus fans, vlogs íntimos… Nada explícito. Es el contenido que ya creas, con acceso VIP para tus seguidores más fieles.',
  },
  {
    q: '¿Fanfix es como OnlyFans? ¿Tengo que publicar contenido explícito?',
    a: 'No. Fanfix y OnlyFans son plataformas completamente diferentes. Fanfix prohíbe estrictamente cualquier contenido sexual o explícito. Es entretenimiento 100% soft — lifestyle, fitness, moda, vlogs, behind-the-scenes. Nunca te pediremos contenido que incomode tu imagen pública.',
  },
  {
    q: '¿Cómo protegen mi privacidad e imagen?',
    a: 'Manejamos toda la información con total confidencialidad. Puedes trabajar con tu nombre artístico, tú decides qué contenido crear y nunca te pediremos nada que no quieras hacer. Tu imagen pública en redes no se ve afectada.',
  },
  {
    q: '¿Cuánto cobra la agencia?',
    a: 'Trabajamos con un modelo de comisión sobre ingresos generados. Sin pagos adelantados, sin cuotas fijas. Solo ganamos cuando tú ganas — lo que garantiza que nuestros incentivos estén completamente alineados con tu éxito.',
  },
  {
    q: '¿Puedo dejar la agencia cuando quiera?',
    a: 'Sí, sin contratos de permanencia. Si en algún momento quieres seguir por tu cuenta o probar otra cosa, lo respetamos totalmente. Queremos que te quedes por los resultados, no por obligación contractual.',
  },
];

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="bg-glass rounded-2xl overflow-hidden transition-all duration-300 border"
      style={{ borderColor: open ? 'rgba(195,167,232,0.2)' : 'rgba(255,255,255,0.05)' }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-white/85 font-medium text-sm md:text-base">{q}</span>
        <ChevronDown
          size={18}
          style={{ color: '#C3A7E8' }}
          className={`flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-6">
          <p className="text-white/50 text-sm leading-relaxed border-t border-white/5 pt-4">{a}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
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
    <section id="faq" className="section-padding" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-glass-pink rounded-full px-4 py-2 mb-5">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#F2A7C3' }}>
              Preguntas frecuentes
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Resolvemos tus{' '}
            <span className="text-gradient italic">dudas</span>
          </h2>
          <p className="text-white/50 text-lg">
            Todo lo que necesitas saber antes de dar el paso. Si tienes alguna pregunta más,
            escríbenos directamente.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="animate-on-scroll" style={{ transitionDelay: `${i * 60}ms` }}>
              <FAQItem q={f.q} a={f.a} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
