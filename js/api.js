const URL_API = "https://pokeapi.co/api/v2/";

export async function buscarPokemones() {
    try {
        const response = await fetch(`${URL_API}`);

        if (!response.ok) throw new Error("Error al conectar con la API");

        const data = await response.json();

        const responsePersonajes = await fetch(data.pokemon);

        if (!responsePersonajes.ok) throw new Error("Error al buscar los personajes");

        const listarPokemones = await responsePersonajes.json();

        return listarPokemones.results;

    } catch (error) {
        console.log("error", error.message);
        return [];
    }
}

// buscar un Pokémon por nombre
export async function obtenerPokemon(nombre) {
    const response = await fetch(`${URL_API}pokemon/${nombre}`);

    if (!response.ok) throw new Error("Pokémon no encontrado");

    const data = await response.json();

    return {
        nombre: data.name,
        imagen: data.sprites.front_default,
        ataque: data.stats.find((s) => s.stat.name === "attack").base_stat,
        defensa: data.stats.find((s) => s.stat.name === "defense").base_stat,
    };
}