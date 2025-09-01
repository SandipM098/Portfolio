import React from 'react'
import Header from '../Components/Header'
import { Welcome } from './Welcome'
import AboutMe from './AboutMe'

const Hero = () => {
  return (
    <>
    <div className='mx-40'>
    <Header/>
    <br />
    <Welcome/>
    <br />
    <AboutMe/>
    </div>
    </>
  )
}

export default Hero