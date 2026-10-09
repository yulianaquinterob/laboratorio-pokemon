class CardAddComponent extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute("name") ?? "";
    const img = this.getAttribute("img") ?? "";
    const ataque = this.getAttribute("ataque") ?? "0";
    const defensa = this.getAttribute("defensa") ?? "0";

    this.innerHTML = `
      <div class="card"
           data-nombre="${name}"
           data-imagen="${img}"
           data-ataque="${ataque}"
           data-defensa="${defensa}">
        <img src="${img}" class="card-img-top" alt="${name}">
        <div class="card-body">
          <h4 class="nombre card-title">${name}</h4>
        </div>
        <ul class="list-group list-group-flush">
          <li class="numero-ataque list-group-item">Ataque: ${ataque}</li>
          <li class="numero-defensa list-group-item">Defensa: ${defensa}</li>
        </ul>
        <div class="card-body">
          <button class="boton-agregar btn btn-primary me-2">Agregar a favoritos</button>
          <button class="btn-eliminar btn btn-danger">Eliminar</button>
        </div>
      </div>
    `;
  }
}

customElements.define("card-component", CardAddComponent);