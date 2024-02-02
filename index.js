const search = document.getElementById("search");
const btn = document.getElementById("btn");
const pokemonImage = document.getElementById("pokemon-image");

btn.addEventListener("click", () => {
  let pokemon = search.value.toLowerCase().trim();

  fetchPokemon(pokemon);
});

async function fetchPokemon(pokemon) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  try {
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }
    const value = await response.json();
    console.log(value);
    pokemonImage.src = value.sprites.front_default;
    pokemonImage.alt = value.name;
  } catch (error) {
    console.error(error);
  }
}
