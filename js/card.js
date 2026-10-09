class CardAddComponent extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute("name") ?? "";
    const img = this.getAttribute("img") ?? "";
    const ataque = this.getAttribute("ataque") ?? "-";
    const defensa = this.getAttribute("defensa") ?? "-";

    this.innerHTML = `
      <div class="card">
        <img src="${img}" class="card-img-top" alt="${name}">
        <div class="card-body">
          <h4 class="nombre card-title">${name}</h4>
        </div>
        <ul class="list-group list-group-flush">
          <li class="numero-ataque list-group-item">Ataque: ${ataque}</li>
          <li class="numero-defensa list-group-item">Defensa: ${defensa}</li>
        </ul>
        <div class="card-body">
          <a class="boton-agregar btn btn-primary">Agregar a favoritos</a>
        </div>
      </div>
    `;
  }
}

customElements.define("card-component", CardAddComponent);