import { obtenerPokemon } from "./api.js";
import { crearTarjeta } from "./cards.js";

const form = document.querySelector("form");
const inputPokemon = document.getElementById("inputPokemon");
const btnLimpiar = document.getElementById("btnLimpiar");
const resultadoBusqueda = document.getElementById("resultadoBusqueda");
const listaCompleta = document.getElementById("listaCompleta");

const ocultarLista = (ocultar) => {
  listaCompleta.classList.toggle("d-none", ocultar);
  listaCompleta.classList.toggle("d-block", !ocultar);
};

const mostrarLista = () => {
  resultadoBusqueda.innerHTML = "";
  ocultarLista(false);
};

const buscar = async () => {
  const nombre = inputPokemon.value.trim().toLowerCase();

  if (nombre === "") {
    mostrarLista();
    return;
  }

  ocultarLista(true);
  resultadoBusqueda.innerHTML = "";

  try {
    const pokemon = await obtenerPokemon(nombre);

    const col = document.createElement("div");
    col.className = "col-12 col-sm-8 col-md-4";
    col.append(crearTarjeta(pokemon));

    resultadoBusqueda.append(col);
  } catch (error) {
    console.error(error);
    resultadoBusqueda.innerHTML = `
      <div class="col-12 col-md-6">
        <div class="alert alert-warning text-center" role="alert">
          Pokémon no encontrado. Revisa el nombre e intenta de nuevo.
        </div>
      </div>`;
  }
};

// el submit cubre el botón Buscar y la tecla Enter
form.addEventListener("submit", (e) => {
  e.preventDefault();
  buscar();
});

inputPokemon.addEventListener("input", () => {
  if (inputPokemon.value.trim() === "") mostrarLista();
});

btnLimpiar.addEventListener("click", () => {
  inputPokemon.value = "";
  mostrarLista();
});