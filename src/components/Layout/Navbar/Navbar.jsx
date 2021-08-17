import React from 'react'
import ButtonJT from '../../../Styles/Buttons/Buttons.jsx'
import Style from './navbar.module.css'

const Navbar = () => {
  return (
    <nav>
      <img
        src='https://res.cloudinary.com/jovenes-transformando/image/upload/v1629091508/P%C3%A1gina%20web/logo_gjirgu.png'
        alt='logo foeeerte'
        width='20%'/>
      <div className={Style.sections}>
        <p>Noticias</p>
        <p>Quiénes Somos</p>
        <p><ButtonJT color='FE007C' text='SUMATE' size='18px'/></p>
      </div>
    </nav>
  )
}

export default Navbar
