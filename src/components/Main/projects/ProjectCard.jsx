import React from 'react'
import Style from './projectcard.module.css'

import ButtonJT from '../../../Styles/Buttons/Buttons.jsx'

const ProjectCard = (props) => {

  return (
    <div className={Style.project_card_container}>
      <div className={Style.project_front}>
        <p>Pateando Al Futuro</p>
        <ButtonJT color='FE007C' text='Conocé más' size='13px'/>
      </div>
      <div className={Style.project_img}>
      </div>
  </div>
  )
}

export default ProjectCard
