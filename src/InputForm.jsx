import React from "react";
import { useState } from "react";

const InputForm = ({ setPokemon }) => {
  const [searchValue, setSearchValue] = useState("");

  const searchPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setPokemon(data))
      .catch((error) => console.error(error));
  };

  return (
    <section className="input-form">
      <h3>Search for a Pokémon by Name or ID: </h3>
      <div className="input-form__search">
        <input
          required
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Search for a Pokémon..."
        />
        <button onClick={searchPokemon}>
          <img src="/src/assets/pokemon-icon.svg" alt="" />
        </button>
      </div>
    </section>
  );
};

export default InputForm;
