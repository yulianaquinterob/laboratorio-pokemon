const URL_API = "https://pokeapi.co/api/v2/";

export async function buscarPokemones() {
  try {
    const response = await fetch(`${URL_API}pokemon?limit=20`);
    if (!response.ok) throw new Error("Error al buscar los pokemones");

    const data = await response.json();

    return await Promise.all(
      data.results.map((p) => fetch(p.url).then((r) => r.json()))
    );
  } catch (error) {
    console.log("error", error.message);
    return [];
  }
}

export async function obtenerPokemon(nombre) {
  const response = await fetch(`${URL_API}pokemon/${nombre}`);
  if (!response.ok) throw new Error("Pokémon no encontrado");
  return await response.json();
}