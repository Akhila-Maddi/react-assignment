import React from 'react'
import About from './components/About'  // Capital A
import Footer from './components/Footer'  // Capital F
import Hero from './components/Hero'     // Capital H
import Navbar from './components/Navbar' // Capital N
import Services from './components/Services' // Capital S
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Footer />
    </>
  )
}

export default App