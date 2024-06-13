import React, { useState } from 'react';

function App() {
    const [pokemonList, setPokemonList] = useState([]);

    const fetchPokemon = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=807');
            const data = await response.json();
            setPokemonList(data.results);
        } catch (error) {
            console.error('Error fetching Pokémon data:', error);
        }
    };

    return (
        <div className="App">
            <button onClick={fetchPokemon}>Fetch Pokemon</button>
            <ul>
                {pokemonList.map((pokemon, index) => (
                    <li key={index}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;