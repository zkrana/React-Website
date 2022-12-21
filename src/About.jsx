import React from 'react'
import Header from './components/Home/Header';
import Footer from './components/Home/Footer';
import AboutHero from './components/About/Introduce';
import Team from './components/About/Team';
import Support from './components/Home/Support';
export default function About() {
  return (
    <div>
        <Header />
        <AboutHero />
        <Team />
        <Support />
        <Footer />
    </div>
  )
}
