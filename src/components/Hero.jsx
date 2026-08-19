import React from 'react'
import logoHeader from '../img/logoHeader.png'

const FORM = 'https://forms.gle/iD2AjxwsqNqMRWN68'

export default function Hero() {
  return (
    <section id="hero" className="hero">

      {/* ══ Background glows — soft defocused blue light ══ */}
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__glow hero__glow--teal" />
        <span className="hero__glow hero__glow--blue" />
        <span className="hero__glow hero__glow--center" />
      </div>

      {/* ══ Big decorative </> — above circles, below dots ══ */}
      <div className="hero__code-deco" aria-hidden="true">
        &lt;/&gt;
      </div>

      {/* ══ Pixel dot clusters — above </> ══ */}
      {/* Top-right cluster */}
      <div className="hero__dots hero__dots--tr" aria-hidden="true">
        <span className="hdot" style={{ width: 54, height: 54, background: '#00BFAE', top: 0,  right: 90, opacity: .9 }} />
        <span className="hdot" style={{ width: 36, height: 36, background: '#FF3B6E', top: 4,  right: 28, opacity: .95 }} />
        <span className="hdot" style={{ width: 38, height: 38, background: '#0D1B3D', top: 72, right: 0,  opacity: .85 }} />
        <span className="hdot" style={{ width: 26, height: 26, background: '#0066FF', top: 80, right: 56, opacity: .85 }} />
      </div>

      {/* Bottom cluster — pushed RIGHT under "transforman." */}
      <div className="hero__dots hero__dots--bc" aria-hidden="true">
        <span className="hdot" style={{ width: 32, height: 32, background: '#FF3B6E', top: 0,  left: 50, opacity: .9 }} />
        <span className="hdot" style={{ width: 44, height: 44, background: '#0066FF', top: 44, left: 0,  opacity: .85 }} />
        <span className="hdot" style={{ width: 28, height: 28, background: '#00BFAE', top: 46, left: 60, opacity: .8 }} />
        <span className="hdot" style={{ width: 22, height: 22, background: '#FF3B6E', top: 90, left: 28, opacity: .9 }} />
      </div>

      {/* ══ Content ══ */}
      <div className="hero__inner">

        {/* Logo */}
        <div className="hero__logo-row">
          <img src={logoHeader} alt="Hackathon Juventud y Participación Ciudadana" className="hero__logo-img" />
        </div>

        {/* Headline */}
        <h1 className="hero__headline">
          <span className="hero__hl-white">Código que</span><br />
          <span className="hero__hl-white">conecta.</span><br />
          <span className="hero__hl-teal">Ideas que</span><br />
          <span className="hero__hl-pink">transforman.</span>
        </h1>

        {/* CTA */}
        <a href={FORM} target="_blank" rel="noopener noreferrer" className="hero__cta-btn">
          INSCRÍBETE
        </a>

      </div>
    </section>
  )
}
