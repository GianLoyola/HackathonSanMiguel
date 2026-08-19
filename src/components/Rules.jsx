import React, { useState, useEffect } from 'react'
import { FaFile, FaSearch, FaRobot, FaUnlock, FaLightbulb, FaRocket, FaDesktop, FaCode, FaShieldAlt } from 'react-icons/fa'
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'

const rules = [
  {
    icon: FaFile, bg:'rgba(0,191,174,.1)', c:'var(--teal)',
    title:'Repositorios Controlados',
    desc:'La organización creará y proveerá repositorios de GitHub, agregando a los equipos como colaboradores. Solo se evaluará el código alojado en estos repositorios.',
  },
  {
    icon: FaSearch, bg:'rgba(0,102,255,.1)', c:'var(--blue)',
    title:'Monitoreo',
    desc:'El equipo técnico monitoreará la trazabilidad de los commits y aceptará los pull requests estrictamente dentro de los horarios de las jornadas.',
  },
  {
    icon: FaRobot, bg:'rgba(255,59,110,.1)', c:'var(--pink)',
    title:'Uso de IA',
    desc:'Se permite el uso de cualquier Inteligencia Artificial como herramienta de apoyo para acelerar el desarrollo.',
  },
  {
    icon: FaUnlock, bg:'rgba(13,27,61,.08)', c:'#ffffff',
    title:'Licencia',
    desc:'El proyecto ganador será de código abierto (Open Source), salvo que el equipo creador decida aplicar otra licencia al finalizar el evento.',
  },
]

const criteria = [
  { icon: FaLightbulb, title:'Impacto y Viabilidad',          pct:30, c:'var(--teal)',
    desc:'Si resuelve un problema real y relevante, y si es factible implementarlo.' },
  { icon: FaRocket, title:'Innovación y Creatividad',       pct:25, c:'var(--pink)',
    desc:'Si aporta un enfoque novedoso y original frente a las alternativas existentes.' },
  { icon: FaDesktop, title:'Experiencia de Usuario (UI/UX)', pct:25, c:'var(--blue)',
    desc:'Si la interfaz es intuitiva y fácil de usar, valorando buenas prácticas de desarrollo.' },
  { icon: FaCode, title:'Defensa Técnica',               pct:20, c:'var(--navy)',
    desc:'El jurado hará preguntas para validar el entendimiento profundo del código escrito.' },
]

export default function Rules() {
  const [tab, setTab] = useState('rules')
  const [visible, setVisible] = useState(true)

  // Fade effect on tab change
  const switchTab = (t) => {
    setVisible(false)
    setTimeout(() => {
      setTab(t)
      setVisible(true)
    }, 220)
  }

  return (
    <section id="rules" className="rules section-pad">
      <div className="wrap">

        <div className="rules__hd">
          <span className="eyebrow">El campo de juego</span>
          <h2 className="section-title">
            Reglas e <span className="c-teal">Integridad del Código</span>
          </h2>
          <p className="section-lead">
            Para garantizar <strong>transparencia, calidad y equidad</strong> en el desarrollo
            de las soluciones, se establecen las siguientes reglas.
          </p>
        </div>

        {/* Tabs */}
        <div className="rules__tabs">
          <button className={`rtab${tab==='rules'?' active':''}`} onClick={() => switchTab('rules')}>
            Reglas de desarrollo
          </button>
          <button className={`rtab${tab==='eval'?' active':''}`} onClick={() => switchTab('eval')}>
            Criterios de evaluación
          </button>
        </div>

        {/* ── Rules ── */}
        <div className={`rules__fade-wrap${visible ? ' is-visible' : ''}`}>
          {tab === 'rules' && (
            <div className="rules__layout">
              <div className="rules__grid">
                {rules.map((r, i) => (
                  <div key={i} className="rule-card" style={{ '--ri-c': r.c, '--ri-bg': r.bg }}>
                    <div className="rule-card__ico">
                      <span role="img" aria-hidden="true"><r.icon color={r.c} /></span>
                    </div>
                    <div>
                      <span className="rule-card__dot" />
                      <h3 className="rule-card__title">{r.title}</h3>
                      <p className="rule-card__desc">{r.desc}</p>
                    </div>
                  </div>
                ))}

                {/* Equity note */}
                <div className="rule-card full" style={{ '--ri-c':'var(--teal)', '--ri-bg':'rgba(0,191,174,.08)', background:'rgba(0,191,174,.03)', borderColor:'rgba(0,191,174,.2)' }}>
                  <div className="rule-card__ico">
                    <span role="img" aria-hidden="true"><FaShieldAlt color="var(--teal)" /></span>
                  </div>
                  <div>
                    <p className="rule-card__desc" style={{ color:'var(--gray-700)', fontWeight:500 }}>
                      Estas reglas promueven la <strong style={{ color:'var(--teal)' }}>equidad técnica</strong> y
                      la <strong style={{ color:'var(--blue)' }}>trazabilidad</strong> del trabajo colaborativo.
                      ¡Juguemos limpio, creemos impacto!
                    </p>
                  </div>
                </div>
              </div>

              {/* Illustration */}
              <div className="rules__ilu-col">
                <img src={img1} alt="Reglas de desarrollo" className="rules__ilu-img" />
              </div>
            </div>
          )}

          {/* ── Evaluation ── */}
          {tab === 'eval' && (
            <div className="rules__layout">
              <div className="eval__grid">
                {criteria.map((c, i) => (
                  <div key={i} className="eval-card" style={{ '--ec-c': c.c }}>
                    <div className="eval-card__top">
                      <span className="eval-card__icon" role="img" aria-hidden="true"><c.icon color={c.c} /></span>
                      <span className="eval-card__pct">{c.pct}%</span>
                    </div>
                    <h3 className="eval-card__title">{c.title}</h3>
                    <p className="eval-card__desc">{c.desc}</p>
                    <div className="eval-card__bar">
                      <div className="eval-card__fill" style={{ width:`${c.pct}%` }} />
                    </div>
                  </div>
                ))}

                <div className="eval__note full">
                  <span role="img" aria-label="Nota" style={{ fontSize:'1.2rem', flexShrink:0 }}><FaLightbulb color="#FFD700" /></span>
                  <p>
                    El puntaje es acumulativo. Un MVP sólido con buena defensa técnica puede ganarle
                    a uno más complejo pero mal explicado. ¡Prepara tu pitch!
                  </p>
                </div>
              </div>

              {/* Illustration */}
              <div className="rules__ilu-col">
                <img src={img2} alt="Criterios de evaluación" className="rules__ilu-img" />
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
