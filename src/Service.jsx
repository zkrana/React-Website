import React from 'react'
import Header from './components/Home/Header';
import Footer from './components/Home/Footer';
import AboutHero from './components/Service/ServiceIntro';
import AboutHero2 from './components/Service/ServiceIntro2';
import ServSupport from './components/Service/ServiceSupport';
import Pricing from './components/Service/Pricing';
import Faq from './components/Accordion/Faq';
export default function Service() {
  return (
    <div>
        <Header />
        <AboutHero />
        <AboutHero2 />
        <ServSupport />
        <Pricing />
        <Faq />
        <Footer />
    </div>
  )
}
