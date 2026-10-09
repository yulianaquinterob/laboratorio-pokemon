import

const inputPokemon = document.getElementById("inputPokemon");
const btnBuscar = document.getElementById("btnBuscar");
const btnLimpiar = document.getElementById("btnLimpiar");
const resultadoBusqueda = document.getElementById("resultadoBusqueda");

btnBuscar.addEventListener("click", async () => {
  const nombre = inputPokemon.value.trim().toLowerCase();

  if (nombre === "") {
    resultadoBusqueda.textContent = "Escribe el nombre de un Pokémon.";
    return;
  }

  try {
    const pokemon = await obtenerPokemon(nombre);
    resultadoBusqueda.innerHTML = "";
    resultadoBusqueda.append(crearTarjeta(pokemon));
  } catch (error) {
    resultadoBusqueda.textContent = "Pokémon no encontrado. Revisa el nombre e intenta de nuevo.";
  }
});

btnLimpiar.addEventListener("click", () => {
  inputPokemon.value = "";
  resultadoBusqueda.innerHTML = "";
});