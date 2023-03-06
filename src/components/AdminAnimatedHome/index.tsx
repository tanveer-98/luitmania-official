import React from 'react'
import './styles.css'
import { Link } from 'react-scroll'
import Wave from '../CssWave'
// import Art from '../../assets/'

import NeonButton from '../Neonbutton/neonbutton'
const AdminAnimatedBG = ({ children }: any) => {
  return (
    <div id="Ahero" className="a_hero ">
      <div className="wrapper flex justify-center items-center" style={{height: "100%"}}>
        <div className='z-[19] h-full w-full md:my-15 py-10'>
        {children}
        </div>

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
      </div>
      <Wave />
    </div>
  )
}

export default AdminAnimatedBG