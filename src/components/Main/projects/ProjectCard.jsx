import React from 'react'
import Style from './projectcard.module.css'

import {ButtonAlternative} from '../../../Styles/styled_button_alternative.js'

const ProjectCard = (props) => {

  return (
    <div className={Style.project_card_container}>
      <div className={Style.project_front}>
        <p>Pateando Al Futuro</p>
        <ButtonAlternative
          size='13px'
          color='white'
          back='#FE007C'
          >Conocé más</ButtonAlternative>
      </div>
      <div className={Style.project_img}>
      </div>
  </div>
  )
}

export default ProjectCard
