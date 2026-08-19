import React from 'react'

/**
 * LogoIcon — isotipo SVG fiel a la guía de marca.
 * Círculo con trazo azul navy + arco teal + punto teal (arriba)
 * + figura humana pink (derecha) + etiqueta </> blanca en el centro.
 *
 * Props:
 *   size   — tamaño total en px  (default: 56)
 *   white  — variante todo blanco para fondos oscuros
 */
export default function LogoIcon({ size = 56, white = false }) {
  const s = size
  const navy  = white ? '#fff' : '#0D1B3D'
  const teal  = white ? '#fff' : '#00BFAE'
  const pink  = white ? 'rgba(255,255,255,.75)' : '#FF3B6E'
  const label = white ? '#fff' : '#0D1B3D'

  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── Outer circle (navy stroke) ── */}
      <circle cx="28" cy="28" r="23" stroke={navy} strokeWidth="3" />

      {/* ── Teal arc (top-left quarter) ── */}
      <path
        d="M 10.5 18 A 19 19 0 0 1 28 9"
        stroke={teal}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* ── Teal dot (top of circle) ── */}
      <circle cx="28" cy="7" r="3.5" fill={teal} />

      {/* ── Pixel dots cluster (top-left brand dots) ── */}
      <rect x="5"  y="8"  width="4" height="4" rx="1" fill={teal}  opacity=".8" />
      <rect x="10" y="5"  width="3" height="3" rx=".8" fill={teal}  opacity=".5" />
      <rect x="3"  y="13" width="3" height="3" rx=".8" fill={pink}  opacity=".7" />

      {/* ── Human figure (pink, right side) ── */}
      {/* head */}
      <circle cx="42" cy="22" r="3.5" fill={pink} />
      {/* body */}
      <path
        d="M36 35 Q38 28 42 27 Q46 28 46 33"
        stroke={pink}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* ── </> label (center) ── */}
      <text
        x="28"
        y="33"
        textAnchor="middle"
        fontFamily="'Montserrat', monospace"
        fontSize="11"
        fontWeight="900"
        fill={label}
        letterSpacing="-0.5"
      >
        &lt;/&gt;
      </text>
    </svg>
  )
}
