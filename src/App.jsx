import React from 'react'
import Header   from './components/Header'
import Hero     from './components/Hero'
import About    from './components/About'
import Roles    from './components/Roles'
import Themes   from './components/Themes'
import Schedule from './components/Schedule'
import Rules    from './components/Rules'
import Footer   from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Roles />
        <Themes />
        <Schedule />
        <Rules />
      </main>
      <Footer />
    </>
  )
}
