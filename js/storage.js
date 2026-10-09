const CLAVE = "favoritos";

export function obtenerFavoritos() {
  return JSON.parse(localStorage.getItem(CLAVE)) || [];
}

export function guardarFavorito(pokemon) {
  const favoritos = obtenerFavoritos();
  const yaExiste = favoritos.some(p => p.nombre === pokemon.nombre);
  if (yaExiste) return false;

  favoritos.push(pokemon);
  localStorage.setItem(CLAVE, JSON.stringify(favoritos));
  return true;
}

export function eliminarFavorito(nombre) {
  const favoritos = obtenerFavoritos().filter(p => p.nombre !== nombre);
  localStorage.setItem(CLAVE, JSON.stringify(favoritos));
}