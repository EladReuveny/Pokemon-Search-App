import React from "react";

const PokemonInfo = ({ pokemon }) => {
  const typeColors = {
    grass: "#78C850",
    fire: "#F08030",
    water: "#6890F0",
    bug: "#A8B820",
    normal: "#A8A878",
    electric: "#F8D030",
    ice: "#98D8D8",
    ground: "#E0C68B",
    fairy: "#F4B2E4",
    fighting: "#C03028",
    poison: "#A040A0",
    flying: "#A98FF0",
    psychic: "#F85888",
    rock: "#B8A038",
    ghost: "#705898",
    dragon: "#7038F8",
    steel: "#B8B8D0",
    dark: "#705848",
  };

  return (
    <section className="pokemon-info">
      <div className="pokemon-info__header">
        <h3 id="pokemon-id">#{pokemon.id}</h3>
        <h2 id="pokemon-name">{pokemon.name}</h2>
        <div className="pokemon-size">
          <p id="pokemon-weight">
            <b>Weight:</b> {pokemon.weight}
          </p>
          <p id="pokemon-height">
            <b>Height:</b> {pokemon.height}
          </p>
        </div>
        <div className="pokemon-types">
          {pokemon.types.map((type, index) => (
            <span
              key={index}
              id="pokemon-type"
              style={{ background: typeColors[type.type.name] }}
            >
              {type.type.name}
            </span>
          ))}
        </div>
        <img
          id="pokemon-sprite"
          src={pokemon.sprites.front_default}
          alt={`${pokemon.name} sprite`}
        />
      </div>
      <hr />
      <div className="pokemon-info__details">
      <h2 className="pokemon-evolutions__title">
          <a href="#pokemon-evolutions">Evolutions</a>
        </h2>
        <div id="pokemon-evolutions">
          {pokemon.secondLvl && (
            <div className="pokemon-evolutions__second-lvl">
              <p>
                <b>{pokemon.secondLvl.name}</b>
              </p>
              <img
                src={pokemon.secondLvl.img}
                alt={`${pokemon.secondLvl.name} image`}
              />
            </div>
          )}
          {pokemon.thirdLvl && (
            <>
            <hr />
            <div className="pokemon-evoltuions__third-lvl">
              <p>
                <b>{pokemon.thirdLvl.name}</b>
              </p>
              <img
                src={pokemon.thirdLvl.img}
                alt={`${pokemon.thirdLvl.name} image`}
              />
            </div>
            </>
          )}
        </div>
        <p id="pokemon-hp">
          <b>HP:</b> {pokemon.stats[0].base_stat}
        </p>
        <p id="pokemon-attack">
          <b>Attack:</b> {pokemon.stats[1].base_stat}
        </p>
        <p id="pokemon-defense">
          <b>Defense:</b> {pokemon.stats[2].base_stat}
        </p>
        <p id="pokemon-speed">
          <b>Speed:</b> {pokemon.stats[5].base_stat}
        </p>
        <p id="pokemon-special-attack">
          <b>Special Attack:</b> {pokemon.stats[3].base_stat}
        </p>
        <p id="pokemon-special-defense">
          <b>Special Defense:</b> {pokemon.stats[4].base_stat}
        </p>

      </div>
    </section>
  );
};

export default PokemonInfo;
