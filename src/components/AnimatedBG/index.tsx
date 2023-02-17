import React from 'react'
import './styles.css'
import Wave from '../CssWave'
// import Art from '../../assets/'
import character from '../../assets/character.png'
const AnimatedHero = () => {
  return (
    <div id="Ahero" className="a_hero">
    <div className="wrapper flex justify-center items-center">
        {/* <h2 className="wrapper__h2">Animated Background</h2> */}
        <div className="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div className="wrapper-hero w-[90%] h-[90%] grid grid-cols-1 md:grid-cols-2">
          <div className="text-white md:flex items-center justify-center">
            
            <div>

            <h2 className="font-bold text-left  text-2xl md:text-5xl">
          Bringing Your Technological Needs at Affordable Price

            </h2>
            <p className="text-xl md:text-2xl tracking-tighter mt-2">
            An enthusiastic web application products team building products for clients at a affordable price with great features and support.
            </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={character} alt="luitomania_hero_bg" />
          </div>
        </div>
    </div>
    
    <Wave/>
    </div>
  )
}

export default AnimatedHero