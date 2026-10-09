export function crearTarjeta(pokemon) {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("card");
  tarjeta.style.width = "18rem";
  tarjeta.dataset.nombre = pokemon.nombre;
  tarjeta.dataset.imagen = pokemon.imagen;
  tarjeta.dataset.ataque = pokemon.ataque;
  tarjeta.dataset.defensa = pokemon.defensa;

  const img = document.createElement("img");
  img.classList.add("card-img-top");
  img.setAttribute("src", pokemon.imagen);
  img.setAttribute("alt", pokemon.nombre);

  const cuerpo = document.createElement("div");
  cuerpo.classList.add("card-body");
  const titulo = document.createElement("h4");
  titulo.classList.add("nombre", "card-title");
  titulo.textContent = pokemon.nombre;
  cuerpo.append(titulo);

  const lista = document.createElement("ul");
  lista.classList.add("list-group", "list-group-flush");
  const ataque = document.createElement("li");
  ataque.classList.add("numero-ataque", "list-group-item");
  ataque.textContent = `Ataque: ${pokemon.ataque}`;
  const defensa = document.createElement("li");
  defensa.classList.add("numero-defensa", "list-group-item");
  defensa.textContent = `Defensa: ${pokemon.defensa}`;
  lista.append(ataque, defensa);

  const botones = document.createElement("div");
  botones.classList.add("card-body");
  const btnAgregar = document.createElement("button");
  btnAgregar.classList.add("boton-agregar", "btn", "btn-primary");
  btnAgregar.textContent = "Agregar a favoritos";
  const btnEliminar = document.createElement("button");
  btnEliminar.classList.add("btn-eliminar", "btn", "btn-danger");
  btnEliminar.textContent = "Eliminar";
  botones.append(btnAgregar, btnEliminar);

  tarjeta.append(img, cuerpo, lista, botones);
  return tarjeta;
}