import React from 'react'
import Footer from './Footer/Footer'
import Supportus from './Support Us/supportus'
import Newb from './News & Blog/newsb'
import Production from './Production/production'
import Category from './Categories/Categories'
import About from './components/About'
import Hom from './components/Hom'

function Home() {
  return (
    <>
    <Hom/>
    <About/>
    <Category/>
    <Production/>
    <Newb/>
    <Supportus/>
    <Footer/>
    </>
  )
}

export default Home
