import { obtenerFavoritos } from "./storage.js";
import { crearTarjeta } from "./cards.js";

export function renderizarFavoritos() {
  const contenedor = document.getElementById("listaFavoritos");
  if (!contenedor) return;
  contenedor.innerHTML = "";

  const favoritos = obtenerFavoritos();
  favoritos.forEach(pokemon => {
    const tarjeta = crearTarjeta(pokemon);
    tarjeta.querySelector(".boton-agregar")?.remove();
    contenedor.append(tarjeta);
  });
}