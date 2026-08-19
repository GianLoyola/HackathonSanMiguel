import React from 'react'
import logoHeader from '../img/logoHeader.png'

const links = [
  { label:'El Evento',  href:'#about'    },
  { label:'Temáticas',  href:'#themes'   },
  { label:'Roles',      href:'#roles'    },
  { label:'Cronograma', href:'#schedule' },
  { label:'Reglas',     href:'#rules'    },
]

/* Deterministic star positions */
const stars = Array.from({ length: 60 }, (_, i) => ({
  x:     ((i * 137.5) % 100),
  y:     ((i * 97.3)  % 100),
  r:     i % 3 === 0 ? 2.5 : i % 3 === 1 ? 1.5 : 1,
  op:    0.15 + (i % 5) * 0.08,
  delay: (i % 8) * 0.4,
}))

export default function Footer() {
  return (
    <footer className="footer">

      {/* Star field */}
      <svg className="footer__stars" aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {stars.map((s, i) => (
          <circle
            key={i}
            cx={s.x} cy={s.y} r={s.r / 20}
            fill="#fff"
            opacity={s.op}
            style={{ animationDelay: `${s.delay}s` }}
            className="footer__star"
          />
        ))}
      </svg>

      {/* Glow accents */}
      <span className="footer__glow footer__glow--teal" aria-hidden="true" />
      <span className="footer__glow footer__glow--blue" aria-hidden="true" />

      <div className="wrap footer__wrap">
        <div className="footer__grid">

          {/* ── Brand ── */}
          <div className="footer__brand-col">
            <img
              src={logoHeader}
              alt="Hackathon Juventud y Participación Ciudadana"
              className="footer__logo"
            />
            <p className="footer__tagline">Innovar · Colaborar · Transformar</p>

            <div className="footer__dots" aria-hidden="true">
              <span style={{ background:'var(--teal)'  }} />
              <span style={{ background:'var(--blue)'  }} />
              <span style={{ background:'var(--pink)'  }} />
              <span style={{ background:'#8B5CF6'      }} />
            </div>
          </div>

          {/* ── Nav ── */}
          <div>
            <p className="footer__col-label">Secciones</p>
            <ul className="footer__links">
              {links.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="footer__link">
                    <span className="footer__link-arrow">→</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <p className="footer__col-label">Contacto</p>
            <div className="footer__contact">

              <div className="footer__contact-row">
                <span className="footer__contact-icon">✉️</span>
                <a href="mailto:giandev312@gmail.com" className="footer__link">
                  giandev312@gmail.com
                </a>
              </div>

              <div className="footer__contact-row">
                <span className="footer__contact-icon">💬</span>
                <a
                  href="https://wa.me/51907090315"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  +51 907 090 315 (WhatsApp)
                </a>
              </div>

              <div className="footer__contact-row">
                <span className="footer__contact-icon">📸</span>
                <a
                  href="https://www.instagram.com/hackathonjuvenil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  @hackathonjuvenil
                </a>
              </div>

              <div className="footer__contact-row">
                <span className="footer__contact-icon">👥</span>
                {/* Facebook link — pendiente de URL */}
                <span className="footer__link footer__link--muted">
                  Hackathon San Miguel (Facebook)
                </span>
              </div>

            </div>

            <a
              href="https://forms.gle/iD2AjxwsqNqMRWN68"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__cta"
            >
              Inscríbete ahora →
            </a>
          </div>

        </div>

        <div className="footer__bottom">
          <p className="footer__copy">© 2026 Hackathon Juventudes San Miguel</p>
          <div className="footer__bottom-deco" aria-hidden="true">
            {'★ ✦ ★ ✦ ★'.split(' ').map((s, i) => (
              <span key={i} className="footer__star-deco">{s}</span>
            ))}
          </div>
          <p className="footer__credit">Hecho con <span>♥</span> para la comunidad</p>
        </div>

      </div>
    </footer>
  )
}
