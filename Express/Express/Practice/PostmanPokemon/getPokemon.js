const axios = require('axios');
const fs = require('fs');

const pokemonNames = ['bulbasaur', 'charmander', 'squirtle', 'pikachu', 'jigglypuff'];
const outputFile = 'pokemonRequests.txt';

const fetchPokemonData = async (name) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    fs.appendFileSync(outputFile, `Request: GET https://pokeapi.co/api/v2/pokemon/${name}\nResponse:\n${JSON.stringify(response.data, null, 2)}\n\n`);
  } catch (error) {
    console.error(`Error fetching data for ${name}:`, error);
  }
};

fs.writeFileSync(outputFile, '');  // Clear the file before appending
pokemonNames.forEach(fetchPokemonData);