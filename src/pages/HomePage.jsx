import React from 'react'
import Hero from '../components/Hero.jsx'
import Section1 from '../components/Section1.jsx'
import Footer from '../components/Footer.jsx'
import ProductSection from '../components/ProductSection.jsx'
import OurStory from '../components/OurStory.jsx'
import FAQ from '../components/FAQ.jsx'

export default function HomePage() {
  return (
    <>
        <Hero />
        <Section1 />
        <ProductSection />
        <OurStory />
        <FAQ />
    </>
  )
}
