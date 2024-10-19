import React, { useState } from "react";
import InputForm from "./InputForm";
import Header from "./Header";
import PokemonInfo from "./PokemonInfo";

const App = () => {
  const [pokemonData, setPokemonData] = useState(null);

  return (
    <div className="app-container">
      <Header />
      <main>
        <InputForm setPokemon={setPokemonData} />
        {pokemonData && <PokemonInfo pokemon={pokemonData} />}
      </main>
    </div>
  );
};

export default App;
