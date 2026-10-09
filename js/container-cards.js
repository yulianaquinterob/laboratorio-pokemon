import { buscarPokemones } from './api.js';

class listCards extends HTMLElement {
  async connectedCallback() {
    const pokemones = await buscarPokemones();

    const row = document.createElement("div");
    row.className = "row row-cols-4 g-5 py-5 justify-content-center";

    pokemones.forEach((pokemon) => {
      const item = document.createElement("card-component");
      item.className = "col";
      item.setAttribute("name", pokemon.name);
      item.setAttribute("img", pokemon.sprites.front_default);
      item.setAttribute("ataque", pokemon.stats[1].base_stat);
      item.setAttribute("defensa", pokemon.stats[2].base_stat);
      row.appendChild(item);
    });

    this.appendChild(row);
  }
}

customElements.define("list-cards", listCards);