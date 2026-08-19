import React, { useState } from 'react'
import { FaRocket, FaLaptop, FaMicrophone } from 'react-icons/fa'
import chicoaltavoz     from '../img/chicoaltavoz.png'
import chicadev         from '../img/chicaDev.png'
import chicoestadistica from '../img/chicoestadistica.png'
import chicossaltando   from '../img/chicossaltando.png'

const days = [
  {
    id: 0, label:'Día 1', date:'Jue 22 Oct', mode:'Presencial', icon: FaRocket,
    color:'#00BFAE', ilu: chicoaltavoz,
    events:[
      { time:'16:00–17:00', name:'Apertura',   block:'Apertura',   bc:'var(--teal)', bb:'rgba(0,191,174,.1)',
        desc:'Presentación del evento, recepción de los participantes y presentación oficial de las temáticas.' },
      { time:'17:00–19:00', name:'Desarrollo', block:'Desarrollo', bc:'var(--blue)', bb:'rgba(0,102,255,.1)',
        desc:'Inicio del desarrollo y arquitectura del software.' },
      { time:'19:00–20:00', name:'Cierre',     block:'Cierre',     bc:'var(--pink)', bb:'rgba(255,59,110,.1)',
        desc:'Cierre de la primera jornada y recepción de los primeros pull requests.' },
    ],
  },
  {
    id: 1, label:'Día 2', date:'Vie 23 Oct', mode:'Virtual', icon: FaLaptop,
    color:'#0066FF', ilu: chicadev,
    events:[
      { time:'16:00–17:00', name:'Apertura',   block:'Apertura',   bc:'var(--teal)', bb:'rgba(0,191,174,.1)',
        desc:'Introducción de la jornada y dinámicas / activaciones virtuales con aliados.' },
      { time:'17:00–19:00', name:'Desarrollo', block:'Desarrollo', bc:'var(--blue)', bb:'rgba(0,102,255,.1)',
        desc:'Desarrollo intensivo de actividades.' },
      { time:'19:00–20:00', name:'Cierre',     block:'Cierre',     bc:'var(--pink)', bb:'rgba(255,59,110,.1)',
        desc:'Cierre de jornada y actualización de repositorios (pull requests).' },
    ],
  },
  {
    id: 2, label:'Día 3', date:'Sáb 24 Oct', mode:'Presencial', icon: FaMicrophone,
    color:'#FF3B6E', ilu: chicoestadistica,
    events:[
      { time:'15:00–16:00', name:'Retrospectiva',    block:'Retrospectiva',  bc:'var(--navy)', bb:'rgba(13,27,61,.08)',
        desc:'Resumen retrospectivo y palabras formales de la Coordinadora de Juventudes de Casa Joven.' },
      { time:'16:00–17:00', name:'Cierre de código', block:'Código',         bc:'var(--blue)', bb:'rgba(0,102,255,.1)',
        desc:'Últimas revisiones, validación y aceptación de los últimos pull requests.' },
      { time:'17:00–18:00', name:'Pitch y Demo',     block:'Pitch & Demo',   bc:'var(--teal)', bb:'rgba(0,191,174,.1)',
        desc:'Presentación en vivo de los MVPs por parte de los equipos.' },
      { time:'18:00–19:00', name:'Evaluación final', block:'Evaluación',     bc:'var(--pink)', bb:'rgba(255,59,110,.1)',
        desc:'Evaluación final del jurado y entrega de diplomas oficiales.' },
    ],
  },
]

export default function Schedule() {
  const [active, setActive] = useState(0)
  const day = days[active]

  return (
    <section id="schedule" className="schedule section-pad">
      <div className="wrap">

        {/* ── Header ── */}
        <div className="schedule__hd">
          <span className="eyebrow">Cronograma oficial</span>
          <h2 className="section-title">
            Modalidad y <span className="c-blue">Cronograma</span>
          </h2>
        </div>

        {/* Meta pills */}
        <div className="schedule__pills">
          {[
            { dot:'var(--teal)', label:'Modalidad híbrida' },
            { dot:'var(--blue)', label:'3 jornadas intensivas' },
            { dot:'var(--pink)', label:'4 horas por jornada' },
          ].map(m => (
            <span key={m.label} className="schedule__meta-pill">
              <span className="schedule__meta-dot" style={{ background: m.dot }} />
              {m.label}
            </span>
          ))}
        </div>

        {/* Tabs */}
        <div className="schedule__tabs">
          {days.map(d => (
            <button
              key={d.id}
              className={`sc-tab${active === d.id ? ' active' : ''}`}
              style={{ '--tab-c': d.color }}
              onClick={() => setActive(d.id)}
            >
              <span className="sc-tab__icon">
                <d.icon color={active === d.id ? '#fff' : d.color} />
              </span>
              <span>
                <span className="sc-tab__label">{d.label}</span>
                <span className="sc-tab__date">{d.date}</span>
              </span>
            </button>
          ))}
        </div>

        {/* ── Two-column layout: timeline left, illustration right ── */}
        <div className="schedule__body" key={active}>

          {/* Left: panel */}
          <div className="schedule__panel">
            <div className="sc-panel__head" style={{ background: `linear-gradient(135deg, ${day.color}, color-mix(in srgb, ${day.color} 65%, #0a1628))` }}>
              <div>
                <p className="sc-panel__mode">{day.mode}</p>
                <h3 className="sc-panel__title">{day.label} · {day.date}</h3>
              </div>
            </div>

            <div className="sc-timeline">
              {day.events.map((ev, i) => (
                <div
                  key={i}
                  className="sc-row"
                  style={{ '--ev-c': ev.bc, '--ev-bg': ev.bb }}
                >
                  <div className="sc-time">{ev.time}</div>
                  <div className="sc-line">
                    <div className="sc-node" />
                    <div className="sc-stem" />
                  </div>
                  <div className="sc-content">
                    <span className="sc-block">{ev.block}</span>
                    <p className="sc-name">{ev.name}</p>
                    <p className="sc-desc">{ev.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: chicossaltando illustration */}
          <div className="schedule__side-ilu">
            <img src={chicossaltando} alt="Chicos saltando" />
          </div>

        </div>

      </div>
    </section>
  )
}
