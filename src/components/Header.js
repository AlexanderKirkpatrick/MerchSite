import React from "react";
import swagImage from "./../img/swag.png";

function Header(){
  return (
    <React.Fragment>
      <h1>Merch</h1>
      <img src={swagImage} alt="An image of word swag written in graffiti style" />
    </React.Fragment>
  );
}

export default Header;