import React from 'react'
import './styles.css'
import {Link} from 'react-scroll'
import Wave from '../CssWave'
// import Art from '../../assets/'

import NeonButton from '../Neonbutton/neonbutton'
const AnimatedHero = () => {
  return (
    <section id="Ahero" className="a_hero">
    <div className="relative wrapper mt-15 pt-12 md:pt-0 flex justify-center items-center">
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

        <div className="wrapper-hero w-[90%] h-[90%] grid grid-cols-1 md:grid-cols-2 pt-12">
          <div className="text-white md:flex items-center justify-center">
            
            <div>

            <h2 className="font-bold bg-clip-text text-transparent bg-gradient-mainheading text-center md:text-left  text-2xl md:text-5xl">
          Bringing Your Technological Needs at Affordable Price

            </h2>
            <p className="text-xl text-center  md:text-left md:text-2xl tracking-tighter mt-6">
            An enthusiastic web application products team building products for clients at a affordable price with great features and support.
            </p>
            <div className="w-full flex justify-center md:justify-start items-center mt-10">
            <NeonButton>
              <Link
              to="projects"
              smooth={true}
              offset={0}
              className="  tracking-tight hover:text-white  cursor-pointer"
              >
              Our Milestones
              </Link>
            </NeonButton>
            </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src="character.png" alt="luitomania_hero_bg" />
          </div>
        </div>
    </div>
    
    <Wave/>
    </section>
  )
}

export default AnimatedHero