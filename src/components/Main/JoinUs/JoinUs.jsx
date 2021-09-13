import React from 'react'
import Style from './joinus.module.css'

import {ButtonAlternative} from '../../../Styles/styled_button_alternative.js'

const JoinUs = (props) => {
  return (

    <div className={Style.join_us_container}>
    <div className={Style.join_us_title}>
      <p>SUMATE A MILITAR PARA TRANSFORMAR LA REALIDAD</p>
      <div className={Style.buttons}>
      <ButtonAlternative className={Style.alt} back='#00A1F1' color='white' weight='bolder' size='20px'>QUIERO MILITAR PARA LA JT</ButtonAlternative>
      <ButtonAlternative className={Style.alt} back='#FABC05' color='white' weight='bolder' size='15px'>DONAR</ButtonAlternative>
    </div>
    </div>
    <img alt='' src='https://res.cloudinary.com/jovenes-transformando/image/upload/v1630560301/P%C3%A1gina%20web/118593993_189803562542432_3920917944867910463_n_gvwxnd.jpg'/>
    </div>
)
}

export default JoinUs
