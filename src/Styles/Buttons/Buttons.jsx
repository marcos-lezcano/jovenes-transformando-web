import React from "react";
import Style from "./buttons.module.css";

const ButtonJT = ({ color, size, text }) => {
  // COLORES:
  // rosado: FE007C
  // azul: 00A1F1
  // rojo: D93C00
  // amarillo: FABC05

  return (
    <div>
      <button
        className={
        color === "FE007C"
          ? Style.pink
          : color === "00A1F1"
          ? Style.blue
          : color === "D93C00"
          ? Style.red
          : color === "FABC05"
          ? Style.yellow
          : null
      } style={{fontSize:size}}>{text}</button>
    </div>
  );
};

export default ButtonJT;
