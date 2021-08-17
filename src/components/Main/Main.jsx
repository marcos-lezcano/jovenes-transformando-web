import React, {useState} from 'react'
import Style from './Main.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Secciones
import Description from './Description/Description.jsx'
import News from './News/News.jsx'

const Main = () => {

  const [data, setData] = useState({
    image: 'https://res.cloudinary.com/jovenes-transformando/image/upload/v1629096992/P%C3%A1gina%20web/portada2_ysjffg.jpg'
  })

  return (
    <div>
      {/* Imagen de portada */}
      <img
        src={data.image}
        alt='coverimage'
        className={Style.CoverImage}/>

      {/* Componente con el mensaje de bienvenida */}
      <Description/>

    {/* Componente con las ultimas noticias */}
      <News/>

    </div>
  )
}

export default Main
