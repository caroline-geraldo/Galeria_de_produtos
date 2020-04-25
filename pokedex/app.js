/*Função que busca os pokemon */
const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

const fetchPokemon = () => {
    const generatePokemonPromises = () => Array(150).fill().map((_, index) => 
    fetch(getPokemonUrl(index + 1)).then(response => response.json())) 
    
    
    

    const pokemonPromises = generatePokemonPromises()

    //for (let i =1; i <= 150; i++){
      //  pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
        
    //}
    Promise.all(pokemonPromises)
        .then(pokemons => {
            

             return pokemons.reduce((accumulator,pokemon) => {
                const types = pokemon.types.map(typeInfo => typeInfo.type.name)

            accumulator += `
            <li class="card ${types[0]}">
            <img class="card-image " alt="${pokemon.name}" src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" />
            <h2 class="card-title">${pokemon.id}.${pokemon.name}</h2>
            <p class="card-subtitle">${types.join(' | ')}</p>
            </li>`


            return accumulator

            }, '')

           
           ul.innerHTML = lisPokemons
        })
        .then(pokemons => {
            const ul = document.querySelector('[data-js = "pokedex"]')
            ul.innerHTML = pokemons


        })


}
fetchPokemon()