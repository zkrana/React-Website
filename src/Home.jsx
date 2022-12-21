import React from 'react'
import Header from './components/Home/Header';
import Hero from './components/Home/Hero';
import Feature from './components/Home/Feature';
import Support from './components/Home/Support';
import Promotion from './components/Home/Promotion';
import Footer from './components/Home/Footer';

export default function Home() {
  return (
    <div>
        <Header />
        <Hero />
        <Feature />
        <Promotion />
        <Support />
        <Footer />
    </div>
  )
}
