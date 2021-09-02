import React from 'react'
import Style from './newscontainer.module.css'

import CardNew from './CardNew'
import BigCardNew from './BigCardNew'
import ButtonJT from '../../../Styles/Buttons/Buttons'

const NewsContainer = (props) => {
  return(
    <div className={Style.news_container}>
      <div className={Style.news_container_buttons}>
      <ButtonJT color='D93C00' text='Últimas Noticias' size='12px'/>
      <div>Ver Todas</div>
      </div>
      <BigCardNew/>
      <div className={Style.news_container_cards}>
        <CardNew/>
        <CardNew/>
        <CardNew/>
      </div>

    </div>
)


}

export default NewsContainer
