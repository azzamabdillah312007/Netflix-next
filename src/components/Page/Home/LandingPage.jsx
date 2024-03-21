import React from 'react'
import Header from './section/Header'
import Features from './section/Features'
import FAQ from './section/FAQ'
import Footer from './section/Footer'

export default function LandingPage() {
  return (
    <main className=' font-sans'>
        <Header />
        <Features />
        <FAQ />
        <Footer />
    </main>
  )
}
