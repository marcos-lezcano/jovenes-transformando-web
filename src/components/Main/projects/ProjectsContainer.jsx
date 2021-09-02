import React from 'react'
import Style from './projectscontainer.module.css'

import ProjectCard from './ProjectCard.jsx'
import ButtonJT from '../../../Styles/Buttons/Buttons'

const ProjectsContainer = (props) => {
  return (
    <div className={Style.projects_container}>
      <div className={Style.projects_container_buttons}>
      <ButtonJT color='FE007C' text='¿Qué Hacemos?' size='12px'/>
      <div>Nuestros Programas</div>
      </div>
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
    </div>
  )
}

export default ProjectsContainer
