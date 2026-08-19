import React, { useState, useEffect } from 'react'
import logoHero      from '../img/logoHeader.png'
import logoPrincipal from '../img/logoprincipal.png'

const FORM = 'https://forms.gle/iD2AjxwsqNqMRWN68'

const links = [
  { label: 'El Evento',  href: '#about'    },
  { label: 'Temáticas',  href: '#themes'   },
  { label: 'Roles',      href: '#roles'    },
  { label: 'Cronograma', href: '#schedule' },
  { label: 'Reglas',     href: '#rules'    },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 64)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const cls = ['hdr', scrolled ? 'hdr--solid' : 'hdr--over'].join(' ')

  return (
    <header className={cls}>
      <div className="hdr__inner">

        {/* ── Logo ── */}
        <a href="#hero" className="hdr__logo" aria-label="Hackathon Juventudes — inicio">
          <img
            src={scrolled ? logoPrincipal : logoHero}
            alt="Hackathon Juventud y Participación Ciudadana"
            className="hdr__logo-img"
          />
        </a>

        {/* ── Desktop nav ── */}
        <nav className="hdr__nav" aria-label="Navegación principal">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hdr__link">{l.label}</a>
          ))}
        </nav>
        <a href={FORM} target="_blank" rel="noopener noreferrer" className="hdr__cta">
          Inscríbete
        </a>

        {/* ── Hamburger ── */}
        <button
          className="hdr__burger"
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {open && (
        <nav className="hdr__mobile" aria-label="Menú móvil">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="hdr__mobile-link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={FORM}
            target="_blank"
            rel="noopener noreferrer"
            className="hdr__mobile-cta"
            onClick={() => setOpen(false)}
          >
            ¡Inscríbete ahora!
          </a>
        </nav>
      )}
    </header>
  )
}
