import React from 'react'
import chicossaludando from '../img/chicossaludando.png'
import { FaUsers, FaBirthdayCake, FaHandshake, FaCalendarAlt } from 'react-icons/fa'

const stats = [
  { v:'50',     l:'Participantes',       icon: FaUsers, c:'var(--teal)' },
  { v:'15–29',  l:'Rango de edad',        icon: FaBirthdayCake, c:'var(--blue)' },
  { v:'3–4',    l:'Por equipo',           icon: FaHandshake, c:'var(--pink)' },
  { v:'10 Oct', l:'Cierre inscripciones', icon: FaCalendarAlt, c:'#FFD700' },
]

export default function About() {
  return (
    <section id="about" className="about section-pad">
      <div className="wrap">

        {/* ── Top: texto + ilustración chicossaludando ── */}
        <div className="about__top">
          <div className="about__text">
            <span className="eyebrow">Sobre el evento</span>
            <h2 className="section-title">
              Presentación<br />
              <span className="c-teal">del Evento</span>
            </h2>

            <div className="about__intro">
              El <strong>Hackathon Juventudes San Miguel</strong> es un evento intensivo de tecnología
              sin fines de lucro, diseñado para reunir a <strong>desarrolladores y mentes creativas</strong>{' '}
              con el objetivo de construir MVPs funcionales, promover el talento tecnológico local
              y crear soluciones innovadoras a problemas reales de nuestra comunidad.
            </div>

            <p className="section-lead" style={{ marginBottom: '1.5rem' }}>
              Organizado en alianza con <strong>Casa Joven — Municipalidad de San Miguel</strong>.
              Trabajando por soluciones que transforman nuestra ciudad.
            </p>

            <div className="about__tags">
              <span className="about__tag tag-teal">Sin fines de lucro</span>
              <span className="about__tag tag-blue">Modalidad híbrida</span>
              <span className="about__tag tag-pink">22–24 de Octubre 2026</span>
            </div>
          </div>

          {/* Ilustración principal: chicossaludando */}
          <div className="about__hero-ilu">
            <img src={chicossaludando} alt="Chicos saludando" className="about__ilu-main" />
          </div>
        </div>

        {/* ── Bottom: stats sin Foco ── */}
        <div className="about__stats">
          {stats.map(s => (
            <div
              key={s.l}
              className={`about__stat-card`}
              style={{ '--sc-color': s.c }}
            >
              <div className="about__stat-emoji">
                <s.icon color={s.c} style={{ opacity: 0.7 }} />
              </div>
              <div className="about__stat-val">{s.v}</div>
              <div className="about__stat-lbl">{s.l}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
