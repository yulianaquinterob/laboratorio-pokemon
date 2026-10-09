import { obtenerFavoritos } from "./storage.js";
import { crearTarjeta } from "./cards.js"; // pendiente por el nombre de las tarjetas 

export function renderizarFavoritos() {
  const contenedor = document.getElementById("listaFavoritos");
  contenedor.innerHTML = "";

  const favoritos = obtenerFavoritos();
  favoritos.forEach(pokemon => {
    contenedor.append(crearTarjeta(pokemon));
  });
}

document.addEventListener("DOMContentLoaded", renderizarFavoritos);