import React from "react";
import Style from "./Main.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Componentes de Secciones
import Description from "./Description/Description.jsx";
import NewsContainer from "./News/NewsContainer.jsx";
import ReferentsContainer from "./Referents/ReferentsContainer.jsx";
import ProjectsContainer from "./projects/ProjectsContainer.jsx";
import JoinUs from './JoinUs/JoinUs.jsx'

const Main = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* Imagen de portada */}
      <img
        src={
          "https://res.cloudinary.com/jovenes-transformando/image/upload/v1629096992/P%C3%A1gina%20web/portada2_ysjffg.jpg"
        }
        alt="coverimage"
        className={Style.CoverImage}
      />

      {/* Mensaje de bienvenida */}

      <Description />

      {/* Referentes*/}

      <ReferentsContainer />

      {/* Ultimas Noticias */}

      <NewsContainer />

      {/* Proyectos */}

      <ProjectsContainer />

      {/* Sumate a Militar */}

      <JoinUs/>

    </div>
  );
};

export default Main;
