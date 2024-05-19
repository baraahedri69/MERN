const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// 1. An array of Pokémon objects where the id is evenly divisible by 3
const idDivisibleBy3 = pokémon.filter(p => p.id % 3 === 0);
console.log(idDivisibleBy3);

// 2. An array of Pokémon objects that are "fire" type
const fireTypePokémon = pokémon.filter(p => p.types.includes("fire"));
console.log(fireTypePokémon);

// 3. An array of Pokémon objects that have more than one type
const multipleTypePokémon = pokémon.filter(p => p.types.length > 1);
console.log(multipleTypePokémon);

// 4. An array with just the names of the Pokémon
const pokémonNames = pokémon.map(p => p.name);
console.log(pokémonNames);

// 5. An array with just the names of Pokémon with an id greater than 99
const namesWithIdGreaterThan99 = pokémon
    .filter(p => p.id > 99)
    .map(p => p.name);
console.log(namesWithIdGreaterThan99);

// 6. An array with just the names of the Pokémon whose only type is poison
const poisonTypeNames = pokémon
    .filter(p => p.types.length === 1 && p.types[0] === "poison")
    .map(p => p.name);
console.log(poisonTypeNames);

// 7. An array containing just the first type of all the Pokémon whose second type is "flying"
const firstTypeOfSecondFlying = pokémon
    .filter(p => p.types[1] === "flying")
    .map(p => p.types[0]);
console.log(firstTypeOfSecondFlying);

// 8. A count of the number of Pokémon that are "normal" type
const normalTypeCount = pokémon.filter(p => p.types.includes("normal")).length;
console.log(normalTypeCount);