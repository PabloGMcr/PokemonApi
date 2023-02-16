
function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const card = document.querySelector('.card');//-> {{}}
        const image = card.querySelector('img');
        image.src = data.sprites.front_default;
        const title = card.querySelector('.card-text');
        title.textContent = data.name;
      })
      .catch(error => {
        console.error(error);
      }); 
  } 
 

  /* Boton */
  
  let currentPokemonId = 1;

  const nextPokemonButton = document.querySelector('#next-pokemon');
nextPokemonButton.addEventListener('click', () => {
  currentPokemonId++;
  fetchPokemon(currentPokemonId);
});

fetchPokemon(currentPokemonId);

//
