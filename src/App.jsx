import React, { useState } from "react";
import InputForm from "./components/InputForm";
import Header from "./components/Header";
import PokemonInfo from "./components/PokemonInfo";

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
