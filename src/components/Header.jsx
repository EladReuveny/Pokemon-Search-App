import React from "react";
import pokemonLogo from "../assets/pokemon-logo.svg";

const Header = () => {
  return (
    <header>
      <h1>
        <img src={pokemonLogo} alt="Pokemon logo" className="logo" /> Search App
      </h1>
    </header>
  );
};

export default Header;
