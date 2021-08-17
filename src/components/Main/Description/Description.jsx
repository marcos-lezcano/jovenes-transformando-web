import React from "react";
import Style from "./description.module.css";

const Description = (props) => {
  return (
    <div className={Style.description_container}>
      <div className={Style.title}>
        <p style={{ color: "#00A1F1" }}>Somos&nbsp;</p>
        <p>la &nbsp;</p>
        <p style={{ color: "#FE007C" }}>fuerza&nbsp;</p>
        <p>de&nbsp;la&nbsp;</p>
        <p style={{ color: "#D93C00" }}>juventud&nbsp;</p>
      </div>
      <div className={Style.description}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
    </div>
  );
};

export default Description;
