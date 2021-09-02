import React from 'react'
import Style from './joinus.module.css'

import ButtonJT from '../../../Styles/Buttons/Buttons.jsx'

const JoinUs = (props) => {
  return (

    <div className={Style.join_us_container}>
    <div className={Style.join_us_title}>
      <p>SUMATE A MILITAR PARA TRANSFORMAR LA REALIDAD</p>
      <div>
      <ButtonJT color='00A1F1' text='QUIERO MILITAR PARA LA JT' bolder='true' size='20px'/>
      <ButtonJT color='FABC05' text='DONAR' bolder='true' size='15px'/>
      </div>
    </div>
    <img alt='' src='https://res.cloudinary.com/jovenes-transformando/image/upload/v1630560301/P%C3%A1gina%20web/118593993_189803562542432_3920917944867910463_n_gvwxnd.jpg'/>
    </div>
)
}

export default JoinUs
