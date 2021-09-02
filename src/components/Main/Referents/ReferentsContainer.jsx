import React from 'react'
import Style from './ReferentsContainer.module.css'

import ReferentCard from './ReferentCard.jsx'

const ReferentsContainer = (props) => {
  return (
    <div className={Style.referents_container}>
        <ReferentCard color='#00A1F1'/>
        <ReferentCard color='#FE007C'/>
        <ReferentCard color ='#D93C00'/>
    </div>
  )
}

export default ReferentsContainer
