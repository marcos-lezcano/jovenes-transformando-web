import React from 'react'

import {StyledFooter} from '../../../Styles/styled_footer.js'

//LOGOS
import logo from '../../../assets/footer_logo.png'
import face from '../../../assets/fb_logo.png'
import insta from '../../../assets/insta_logo.png'
import wpp from '../../../assets/wpp.png'

const Footer = (props) => {
  return (
    <StyledFooter>
      <img className='logo' src={logo} alt='' width='500px'/>
      <div className='logos'>
        <a href='https://www.facebook.com/JovenesTransformando2021' target="_blank" rel="noopener noreferrer">
          <img src={face} alt='' width='40rem'/>
        </a>
        <a href='https://www.instagram.com/jovenestransformando_/' target="_blank" rel="noopener noreferrer">
        <img src={insta} alt='' width='40rem'/>
        </a>
        <a href='https://wa.me/5493541591897' target="_blank" rel="noopener noreferrer">
        <img src={wpp} alt='' width='40rem'/>
        </a>
      </div>
      <p>© 2021 JOVENES TRANSFORMANDO</p>
    </StyledFooter>
  )
}

export default Footer
