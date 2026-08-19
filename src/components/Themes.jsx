import React from 'react'
import chicoaltavoz    from '../img/chicoaltavoz.png'
import chicoestadistica from '../img/chicoestadistica.png'
import chicatask       from '../img/chicatask.png'
import altavoz         from '../img/altavoz.png'
import cohete          from '../img/cohete.png'

const themes = [
  {
    num:   'Temática 01',
    title: 'Seguridad Ciudadana',
    desc:  'Comunidades más seguras mediante tecnología, prevención y respuesta ciudadana.',
    color: 'var(--teal)',
    accent:'#00BFAE',
    ilus:  chicoaltavoz,
  },
  {
    num:   'Temática 02',
    title: 'Educación',
    desc:  'Más oportunidades para aprender, innovar y crecer a través de soluciones digitales.',
    color: 'var(--blue)',
    accent:'#0066FF',
    ilus:  chicoestadistica,
  },
  {
    num:   'Temática 03',
    title: 'Participación Ciudadana',
    desc:  'Juventudes que dialogan, proponen y deciden para transformar su comunidad.',
    color: 'var(--pink)',
    accent:'#FF3B6E',
    ilus:  chicatask,
  },
]

/* ── Pocas estrellas decorativas con colores de la paleta ── */
const stars = [
  { top:'8%',  left:'18%',  size:28, color:'#00BFAE', rot:0   },
  { top:'14%', left:'72%',  size:22, color:'#0066FF', rot:25  },
  { top:'55%', left:'6%',   size:20, color:'#FF3B6E', rot:15  },
  { top:'72%', left:'80%',  size:26, color:'#00BFAE', rot:-20 },
  { top:'88%', left:'42%',  size:18, color:'#0066FF', rot:10  },
  { top:'30%', left:'92%',  size:22, color:'#FF3B6E', rot:-10 },
]

function StarIcon({ size, color, rot }) {
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 24 24"
      fill={color}
      style={{ transform: `rotate(${rot}deg)` }}
      aria-hidden="true"
    >
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  )
}

export default function Themes() {
  return (
    <section id="themes" className="themes section-pad">

      {/* ── Cohete esquina superior izquierda ── */}
      <img src={cohete} alt="" className="themes__corner-ilu themes__corner--cohete" aria-hidden="true" />

      {/* ── Altavoz esquina inferior derecha ── */}
      <img src={altavoz} alt="" className="themes__corner-ilu themes__corner--altavoz" aria-hidden="true" />

      {/* ── Estrellas decorativas ── */}
      {stars.map((s, i) => (
        <span
          key={i}
          className="themes__star"
          style={{ top: s.top, left: s.left }}
          aria-hidden="true"
        >
          <StarIcon size={s.size} color={s.color} rot={s.rot} />
        </span>
      ))}

      <div className="wrap" style={{ position:'relative', zIndex:2 }}>
        <div className="themes__hd">
          <span className="eyebrow">Temáticas oficiales</span>
          <h2 className="section-title">
            Los pilares del <span className="c-teal">Hackathon</span>
          </h2>
          <p className="section-lead">
            Todos los proyectos deben enmarcarse en una de estas tres temáticas.
            Estos son los pilares fijos del Hackathon.
          </p>
        </div>

        <div className="themes__grid">
          {themes.map(t => (
            <div
              key={t.num}
              className="tc"
              style={{ '--tc-color': t.color, '--tc-accent': t.accent }}
            >
              {/* Illustration */}
              <div className="tc__ilu-wrap">
                <img src={t.ilus} alt={t.title} className="tc__ilu-img" />
              </div>

              {/* Body */}
              <div className="tc__body">
                <p className="tc__num">{t.num}</p>
                <h3 className="tc__title">{t.title}</h3>
                <p className="tc__desc">{t.desc}</p>
                <div className="tc__footer-accent" style={{ background: t.accent }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
