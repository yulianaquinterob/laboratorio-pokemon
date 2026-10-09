const URL_API = "https://pokeapi.co/api/v2/";

const pokemones = await buscarPokemones();
console.log(pokemones);

//boton buscar pokemon
// const botonBuscar = document.getElementById('boton-buscar');
// botonBuscar.addEventListener('click', obtenerPokemon);


export async function buscarPokemones(){
    try {
        const response = await fetch(`${URL_API}`);

        if(!response.ok) throw new Error("Error al conectar con la API");

        const data = await response.json();

        const responsePersonajes = await fetch(data.pokemon);

        if(!responsePersonajes.ok) throw new Error("Error al buscar los personajes");
        
        const listarPokemones = await responsePersonajes.json();
        
        return listarPokemones.results;


    } catch (error) {
        console.log("error", error.message);
        return []
    }
}

//buscar Pokemon
function obtenerPokemon(){


}

console.log(pokemones[0].name);
