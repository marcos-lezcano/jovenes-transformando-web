import React from 'react'
import Style from './ReferentCard.module.css'

const ReferentCard = (props) => {

  const {color} = props

  return (
    <div className={Style.referent_card}>
      <img style={{border:`4px solid ${color}`}} alt='' width='120px' src='https://res.cloudinary.com/jovenes-transformando/image/upload/v1630527704/P%C3%A1gina%20web/Captura_de_pantalla_2021-08-31_18-52-38_trellz.png'/>
      <p className={Style.title_referent_card}>HORACIO GIGENA</p>
      <p className={Style.description_referent_card}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi"</p>
    </div>
  )
}

export default ReferentCard
