import { useState, useEffect, useRef } from 'react';
import { Send, Instagram, MessageCircle, CheckCircle2, Loader2 } from 'lucide-react';

// ─── Pon aquí tu endpoint de Formspree ───────────────────────
// 1. Ve a https://formspree.io → Sign up gratis
// 2. New Form → copia el endpoint (ej: https://formspree.io/f/xabcdefg)
// 3. Reemplaza el valor de abajo
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
// ─────────────────────────────────────────────────────────────

const Contact = () => {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: '', instagram: '', followers: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.animate-on-scroll')?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', instagram: '', followers: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle = {
    base: 'w-full bg-white/4 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none transition-all',
    border: { border: '1px solid rgba(255,255,255,0.07)' },
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Top divider */}
      <div className="max-w-7xl mx-auto">
        <div className="h-px mb-20" style={{ background: 'linear-gradient(to right, transparent, rgba(195,167,232,0.15), transparent)' }} />
      </div>

      {/* Bottom glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
          style={{ background: 'rgba(195,167,232,0.08)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div className="animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-glass-pink rounded-full px-4 py-2 mb-5">
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#F2A7C3' }}>
                Únete
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Da el primer paso hacia{' '}
              <span className="text-gradient italic">tu independencia</span>{' '}
              financiera
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Cuéntanos sobre tu comunidad y te explicamos exactamente cómo puedes
              monetizarla. Sin compromisos, sin costes iniciales y con total confidencialidad.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="https://instagram.com/bloomagency"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-glass rounded-2xl px-5 py-4 border border-white/5 transition-colors"
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(242,167,195,0.2)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[#1a0d22] flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #F2A7C3, #D9A0DA)' }}>
                  <Instagram size={18} />
                </div>
                <div>
                  <div className="text-white font-medium text-sm">Instagram</div>
                  <div className="text-white/40 text-xs">@bloomagency</div>
                </div>
              </a>
              <a
                href="https://t.me/bloomagency"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-glass rounded-2xl px-5 py-4 border border-white/5 transition-colors"
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(195,167,232,0.2)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[#1a0d22] flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #C3A7E8, #b8a0f0)' }}>
                  <MessageCircle size={18} />
                </div>
                <div>
                  <div className="text-white font-medium text-sm">Telegram</div>
                  <div className="text-white/40 text-xs">Respuesta inmediata</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="animate-on-scroll" style={{ transitionDelay: '150ms' }}>
            <div className="bg-glass rounded-3xl p-8" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>

              {status === 'success' ? (
                /* ── Success state ── */
                <div className="flex flex-col items-center text-center py-8 gap-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-emerald-400" />
                  </div>
                  <h3 className="text-white font-display text-2xl font-bold">¡Solicitud enviada!</h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                    Te contactamos en menos de 24 horas. Revisa tu Instagram o Telegram.
                  </p>
                  <button onClick={() => setStatus('idle')} className="btn-outline text-sm mt-2">
                    Enviar otra solicitud
                  </button>
                </div>

              ) : (
                /* ── Form ── */
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                  {/* Nombre */}
                  <div>
                    <label className="text-white/55 text-xs font-semibold uppercase tracking-wider block mb-2">Nombre</label>
                    <input
                      type="text" name="name" value={form.name} onChange={handleChange} required
                      placeholder="Tu nombre o alias"
                      className={inputStyle.base}
                      style={inputStyle.border}
                      onFocus={e => e.target.style.borderColor = 'rgba(195,167,232,0.4)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.07)'}
                    />
                  </div>

                  {/* Instagram */}
                  <div>
                    <label className="text-white/55 text-xs font-semibold uppercase tracking-wider block mb-2">Instagram / Red social</label>
                    <input
                      type="text" name="instagram" value={form.instagram} onChange={handleChange} required
                      placeholder="@tunombre"
                      className={inputStyle.base}
                      style={inputStyle.border}
                      onFocus={e => e.target.style.borderColor = 'rgba(195,167,232,0.4)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.07)'}
                    />
                  </div>

                  {/* Seguidores */}
                  <div>
                    <label className="text-white/55 text-xs font-semibold uppercase tracking-wider block mb-2">Seguidores aproximados</label>
                    <select
                      name="followers" value={form.followers} onChange={handleChange} required
                      className={`${inputStyle.base} appearance-none`}
                      style={{ ...inputStyle.border, colorScheme: 'dark' }}
                      onFocus={e => e.target.style.borderColor = 'rgba(195,167,232,0.4)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.07)'}
                    >
                      <option value="" disabled>Selecciona un rango</option>
                      <option value="50k-100k">50,000 – 100,000</option>
                      <option value="100k-500k">100,000 – 500,000</option>
                      <option value="500k-1m">500,000 – 1,000,000</option>
                      <option value="1m+">Más de 1,000,000</option>
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label className="text-white/55 text-xs font-semibold uppercase tracking-wider block mb-2">Mensaje (opcional)</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} rows={3}
                      placeholder="Cuéntanos un poco sobre ti..."
                      className={`${inputStyle.base} resize-none`}
                      style={inputStyle.border}
                      onFocus={e => e.target.style.borderColor = 'rgba(195,167,232,0.4)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.07)'}
                    />
                  </div>

                  {/* Error */}
                  {status === 'error' && (
                    <p className="text-red-400/80 text-xs text-center bg-red-400/8 rounded-xl py-2 px-3 border border-red-400/15">
                      Algo salió mal. Inténtalo de nuevo o escríbenos directamente por Instagram.
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary flex items-center justify-center gap-2 mt-2 w-full text-base disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <><Loader2 size={16} className="animate-spin" /> Enviando...</>
                    ) : (
                      <><span>Enviar solicitud</span><Send size={16} /></>
                    )}
                  </button>

                  <p className="text-white/25 text-xs text-center">
                    Requisito mínimo: 50,000 seguidores en al menos una plataforma · +18 años · 100% confidencial
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
