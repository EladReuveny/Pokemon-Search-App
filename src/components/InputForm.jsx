import React from "react";
import { useState } from "react";
import pokemonIcon from "../assets/pokemon-icon.svg";

const InputForm = ({ setPokemon }) => {
  const [searchValue, setSearchValue] = useState("");

  const searchPokemon = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchValue.toLowerCase()}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPokemon(data);

      const dataSpeciesUrl = data.species.url;

      const speciesResponse = await fetch(dataSpeciesUrl);
      if (!speciesResponse.ok) {
        throw new Error(`HTTP error! status: ${speciesResponse.status}`);
      }
      const speciesData = await speciesResponse.json();

      const evolutionChainUrl = speciesData.evolution_chain.url;

      const evolutionChainResponse = await fetch(evolutionChainUrl);
      if (!evolutionChainResponse.ok) {
        throw new Error(`HTTP error! status: ${evolutionChainResponse.status}`);
      }
      const evolutionChainData = await evolutionChainResponse.json();

      const secondLvl = evolutionChainData.chain.evolves_to[0]?.species.name;
      const thirdLvl =
        evolutionChainData.chain.evolves_to[0]?.evolves_to[0]?.species.name;

      const response2 = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${secondLvl}`
      );
      if (!response2.ok) {
        throw new Error(`HTTP error! status: ${response2.status}`);
      }
      const data2 = await response2.json();

      const secondLevelData = {
        name: data2.name,
        img: data2.sprites.front_default,
      };

      let thirdLevelData = null;

      if (thirdLvl) {
        const response3 = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${thirdLvl}`
        );
        if (!response3.ok) {
          throw new Error(`HTTP error! status: ${response3.status}`);
        }
        const data3 = await response3.json();

        thirdLevelData = {
          name: data3.name,
          img: data3.sprites.front_default,
        };
      }

      setPokemon((p) => ({
        ...p,
        secondLvl: secondLevelData,
        thirdLvl: thirdLevelData,
      }));
    } catch (error) {
      alert("Error: Invalid input! Try again.");
      console.error(error);
    }
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
          <img src={pokemonIcon} alt="Pokemon Icon" />
        </button>
      </div>
    </section>
  );
};

export default InputForm;
