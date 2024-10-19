import React from "react";

const PokemonInfo = ({ pokemon }) => {
  return (
    <section className="pokemon-info">
      <div className="pokemon-info__header">
        <h3 id="pokemon-id">#{pokemon.id}</h3>
        <h2 id="pokemon-name">{pokemon.name}</h2>
        <img
          id="pokemon-sprite"
          src={pokemon.sprites.front_default}
          alt={`${pokemon.name} sprite`}
        />
      </div>
      <div className="pokemon-info__details">
        <p id="pokemon-weight">Weight: {pokemon.weight}</p>
        <p id="pokemon-height">Height: {pokemon.height}</p>
        <p id="pokemon-types">
          Types: {pokemon.types.map((type) => type.type.name).join(", ")}
        </p>
        <p id="pokemon-hp">HP: {pokemon.stats[0].base_stat}</p>
        <p id="pokemon-attack">Attack: {pokemon.stats[1].base_stat}</p>
        <p id="pokemon-defense">Defense: {pokemon.stats[2].base_stat}</p>
        <p id="pokemon-special-attack">
          Special Attack: {pokemon.stats[3].base_stat}
        </p>
        <p id="pokemon-special-defense">
          Special Defense: {pokemon.stats[4].base_stat}
        </p>
        <p id="pokemon-speed">Speed: {pokemon.stats[5].base_stat}</p>
      </div>
    </section>
  );
};

export default PokemonInfo;
