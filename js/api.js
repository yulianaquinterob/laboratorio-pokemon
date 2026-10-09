const URL_API = "https://pokeapi.co/api/v2/";

const pokemones = await buscarPokemones();
console.log(pokemones);

//boton buscar pokemon
const botonBuscar = document.getElementById('boton-buscar');
botonBuscar.addEventListener('click', obtenerPokemon);


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


function obtenerPokemon(){

    const inputBusqueda = document.getElementById('nombre-pokemon');
    
    //Control para saber si se ejecuto la funcion del evento
    console.log("se ejecuto el evento correctamente");
    
    console.log(inputBusqueda.value);
    
    //Guardo el texto limpio y en minusculas
    const textoIngresado = inputBusqueda.value.trim().toLowerCase();
    console.log(textoIngresado);
    if (textoIngresado != "") {
        /*
            Usando Optional Chaining (?.) (La más rápida 🌟)
            El signo ?. le dice a JavaScript: "Si name existe, continúa con el toLowerCase(). Si es undefined o null, detente ahí y no rompas el código".
         */
            //La explicacion la dejo al final del archivo en Obsidian
            const pokemonesEncontrados = pokemones.filter(pokemon => 
            pokemon.name?.toLowerCase().includes(textoIngresado));
    
            console.log(pokemonesEncontrados);
    
           //CrearTarjetaPersonajeEncontrado(personajesEncontrados);
    }else{
        console.log("No se ingreso ningun nombre de personaje");
    }

}

console.log(pokemones[0].name);
