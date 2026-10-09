import { guardarFavorito, eliminarFavorito } from "./storage.js";
import { renderizarFavoritos } from "./favoritos.js";

document.addEventListener("click", (e) => {
  const boton = e.target.closest("button, a");
  if (!boton) return;

  const tarjeta = boton.closest(".card");
  if (!tarjeta) return;

  if (boton.classList.contains("boton-agregar")) {
    const pokemon = {
      nombre: tarjeta.dataset.nombre,
      imagen: tarjeta.dataset.imagen,
      ataque: Number(tarjeta.dataset.ataque),
      defensa: Number(tarjeta.dataset.defensa),
    };
    guardarFavorito(pokemon);
    renderizarFavoritos();
  }

  if (boton.classList.contains("btn-eliminar")) {
    eliminarFavorito(tarjeta.dataset.nombre);
    renderizarFavoritos();
    if (tarjeta.closest("#resultadoBusqueda")) tarjeta.remove();
  }
});

document.addEventListener("DOMContentLoaded", renderizarFavoritos);