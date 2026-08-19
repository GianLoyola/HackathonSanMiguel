import React, { useState } from 'react'
import imgBackend  from '../img/Backend.png'
import imgFrontend from '../img/Frontend.png'
import imgNegocio  from '../img/Negocio.png'
import imgUX       from '../img/UX.png'

const roles = [
  {
    id: 'frontend',
    label: 'Frontend',
    color: 'var(--blue)',
    bg: 'rgba(0,102,255,.08)',
    img: imgFrontend,
    tag: 'Desarrollo',
    tagColor: 'var(--blue)',
    headline: 'Crea interfaces que enamoran',
    desc: 'Construye la experiencia visual del producto. Trabajas con HTML, CSS, JavaScript y frameworks modernos para que el usuario tenga una experiencia fluida e intuitiva.',
    skills: ['React / Vue / Angular', 'CSS / Tailwind', 'UX Básico', 'APIs REST'],
  },
  {
    id: 'backend',
    label: 'Backend',
    color: 'var(--teal)',
    bg: 'rgba(0,191,174,.08)',
    img: imgBackend,
    tag: 'Desarrollo',
    tagColor: 'var(--teal)',
    headline: 'El motor que mueve todo',
    desc: 'Diseñas la lógica del negocio, bases de datos y APIs. Tu código es el corazón invisible que hace que todo funcione de manera segura y eficiente.',
    skills: ['Node / Python / Java', 'Bases de datos', 'APIs y REST', 'Autenticación'],
  },
  {
    id: 'ux',
    label: 'Diseño UI/UX',
    color: 'var(--pink)',
    bg: 'rgba(255,59,110,.08)',
    img: imgUX,
    tag: 'Diseño',
    tagColor: 'var(--pink)',
    headline: 'Diseña soluciones centradas en personas',
    desc: 'Investigas, prototipas y creas interfaces que resuelven problemas reales. Tu trabajo convierte ideas complejas en experiencias simples y memorables.',
    skills: ['Figma / Adobe XD', 'User Research', 'Prototipado', 'Design Systems'],
  },
  {
    id: 'negocio',
    label: 'Negocio',
    color: '#8B5CF6',
    bg: 'rgba(139,92,246,.08)',
    img: imgNegocio,
    tag: 'Estrategia',
    tagColor: '#8B5CF6',
    headline: 'Transforma ideas en impacto real',
    desc: 'Defines el modelo de negocio, validas la viabilidad de la solución y lideras el pitch final ante los jurados. Tu visión estratégica es lo que diferencia un proyecto de un producto.',
    skills: ['Business Model Canvas', 'Pitch & presentación', 'Análisis de mercado', 'Liderazgo'],
  },
]

export default function Roles() {
  const [active, setActive] = useState(0)
  const role = roles[active]

  return (
    <section id="roles" className="roles-sec section-pad">
      <div className="wrap">

        <div className="roles__hd">
          <span className="eyebrow">Equipo ideal</span>
          <h2 className="section-title">
            Los roles del <span className="c-teal">Hackathon</span>
          </h2>
          <p className="section-lead">
            Cada equipo necesita entre 3 y 4 personas con perfiles complementarios.
            Conoce qué aporta cada rol.
          </p>
        </div>

        {/* ── Tabs ── */}
        <div className="roles__tabs">
          {roles.map((r, i) => (
            <button
              key={r.id}
              className={`roles__tab${active === i ? ' active' : ''}`}
              style={{ '--rc': r.color }}
              onClick={() => setActive(i)}
            >
              {r.label}
            </button>
          ))}
        </div>

        {/* ── Panel ── */}
        <div className="roles__panel" key={role.id} style={{ '--rc': role.color, '--rc-bg': role.bg }}>

          {/* Left: info */}
          <div className="roles__info">
            <span className="roles__tag" style={{ background: role.bg, color: role.tagColor }}>
              {role.tag}
            </span>
            <h3 className="roles__headline">{role.headline}</h3>
            <p className="roles__desc">{role.desc}</p>

            <div className="roles__skills">
              <p className="roles__skills-label">Habilidades clave</p>
              <div className="roles__skills-list">
                {role.skills.map(s => (
                  <span key={s} className="roles__skill-chip" style={{ borderColor: role.color, color: role.color }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: illustration */}
          <div className="roles__ilu-wrap">
            <div className="roles__ilu-bg" style={{ background: role.bg }} />
            <img
              src={role.img}
              alt={role.label}
              className="roles__ilu-img"
            />
          </div>

        </div>

        {/* ── Dot navigation ── */}
        <div className="roles__dots-nav">
          {roles.map((r, i) => (
            <button
              key={r.id}
              className={`roles__dot${active === i ? ' active' : ''}`}
              style={{ '--rc': r.color }}
              onClick={() => setActive(i)}
              aria-label={r.label}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
