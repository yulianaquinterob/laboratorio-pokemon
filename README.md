## Laboratorio Pokédex con Favoritos usando localStorage

## Objetivo

Construir una aplicación web que consuma la PokéAPI para buscar Pokémon por nombre, muestre la información en tarjetas y permita guardar Pokémon favoritos en localStorage para que persistan entre sesiones.

## Requisitos de la Aplicación

| # | Requisito |
| --- | --- |
| 1 2 | Tener un archivo index.html con un input para buscar Pokémon por nombre. Tener un botón Buscar que realice la consulta a la PokéAPI. |
| 3 | Tener un botón Limpiar que borre el input y los resultados de búsqueda. |
| 4 5 6 7 8 9 | Al buscar un Pokémon, si existe, se debe crear una tarjeta que muestre: - Imagen del Pokémon - Nombre - Número de ataque - Número de defensa La tarjeta debe tener un botón "Agregar a favoritos". Al hacer clic en "Agregar a favoritos", el Pokémon se debe guardar en localStorage. Al recargar la página, los Pokémon favoritos deben seguir visibles en pantalla. La tarjeta de cada Pokémon debe tener un botón "Eliminar" que: - Elimine la tarjeta de la pantalla. - Elimine únicamente ese Pokémon del localStorage. Si el Pokémon no existe, mostrar un mensaje de error. |


Nota: Dependiendo del dominio del tema, pueden elegir entre:

- Opción A: Un solo archivo script.js con todo el código.

- Opción B: Múltiples módulos como se muestra en la estructura.

Ambas opciones son válidas.

## Documentación de la PokéAPI

Consulten la documentación oficial de la PokéAPI para entender cómo hacer las peticiones:

[https://pokeapi.co/](https://pokeapi.co/)

## Pistas para la consulta:

- La URL base para obtener un Pokémon por nombre es:

https://pokeapi.co/api/v2/pokemon/{nombre}

- Por ejemplo, para buscar a Pikachu:

https://pokeapi.co/api/v2/pokemon/pikachu

- La respuesta incluye:

- name: nombre del Pokémon

- sprites.front_default: URL de la imagen

- stats: array con las estadísticas (buscar attack y defense)

## Tareas

## Tarea 1: Estructura HTML

Creen un archivo index.html con la siguiente estructura:


| Elemento | ¿Qué debe tener? |
| --- | --- |
| Input | id="inputPokemon" para ingresar el nombre del |
|   | Pokémon. |
| Botón Buscar | id="btnBuscar" para realizar la búsqueda. |
| Botón Limpiar | id="btnLimpiar" para limpiar el input y los resultados. |
| Contenedor de | id="resultadoBusqueda" donde se mostrará la tarjeta |
| resultados | del Pokémon buscado. |
| Contenedor de | id="listaFavoritos" donde se mostrarán las tarjetas |
| favoritos | de los Pokémon favoritos. |

Pista: Enlacen el CSS en el ```<head>``` y el script al final del ```<body>```. Si usan módulos, recuerden poner type="module" en la etiqueta ```<script>```.

## Tarea 2: Consumir la PokéAPI

## Escriban una función que:

- 1. Reciba el nombre del Pokémon como parámetro.

- 2. Haga una petición a la PokéAPI usando fetch.

- 3. Convierta la respuesta a JSON.

- 4. Devuelva el objeto del Pokémon.

## Pistas:

- Usen async/await para manejar la asincronía.

- Usen try/catch para manejar errores.

- Si el Pokémon no existe, la API devuelve un error 404. Manejen ese caso.

- Investiguen cómo acceder a las estadísticas de ataque y defensa desde la respuesta de la API.

## Tarea 3: Crear la tarjeta del Pokémon

Escriban una función que:


- 1. Reciba el objeto del Pokémon.

- 2. Cree un elemento HTML (tarjeta) con:

- La imagen del Pokémon.

- El nombre.

- El número de ataque.

- El número de defensa.

- Un botón "Agregar a favoritos".

- Un botón "Eliminar".

## Pistas:

- Usen document.createElement() para crear los elementos.

- Usen append() para añadir los elementos a la tarjeta.

- Usen textContent para el texto.

- Usen setAttribute() para la imagen.

- Añadan una clase CSS a la tarjeta para estilizarla.

## Tarea 4: Guardar y eliminar favoritos en localStorage

Escriban funciones para:

- 1. Guardar un Pokémon en favoritos:

- Recibe el objeto del Pokémon.

- Lo convierte a texto con JSON.stringify().

- Lo guarda en localStorage con una clave (por ejemplo, "favoritos").

- Si ya hay favoritos, los recupera, añade el nuevo y vuelve a guardar.

- Evita guardar el mismo Pokémon dos veces.

## 2. Recuperar los favoritos:

- Obtiene el valor de localStorage.

- Lo convierte de texto a objeto con JSON.parse().

- Devuelve el array de favoritos.

## 3. Eliminar un Pokémon de favoritos:

- Recibe el nombre (o ID) del Pokémon a eliminar.

- Recupera los favoritos de localStorage.


- Filtra el array para quitar el Pokémon que coincida con el nombre (o ID).

- Guarda el nuevo array en localStorage.

- Elimina la tarjeta correspondiente del DOM.

## Pistas:

- localStorage solo guarda strings. Por eso usamos JSON.stringify() y JSON.parse().

- Manejen el caso en que no haya favoritos guardados (el valor será null).

- Para eliminar un Pokémon específico, pueden usar filter() para crear un nuevo array sin ese Pokémon.

- Asegúrense de eliminar tanto del localStorage como del DOM.

## Tarea 5: Renderizar favoritos al cargar la página

## Escriban una función que:

- 1. Se ejecute al cargar la página.

- 2. Recupere los favoritos de localStorage.

- 3. Cree una tarjeta para cada favorito.

- 4. Las añada al contenedor de favoritos.

Pista: Usen el evento DOMContentLoaded o ejecuten la función al final del script.

## Tarea 6: Configurar los event listeners

## Agreguen event listeners para:

| Botón | Acción |
| --- | --- |
| Buscar | Obtener el texto del input, llamar a la API, crear la tarjeta y |
|   | mostrarla. |
| Limpiar | Vaciar el input y el contenedor de resultados. |
| Agregar a | Guardar el Pokémon en localStorage y renderizarlo en el |
| favoritos | contenedor de favoritos. |


| Botón | Acción |
| --- | --- |
| Eliminar | Eliminar el Pokémon del localStorage y quitar su tarjeta del |
|   | DOM. |

## Pistas:

- Usen addEventListener('click', callback).

- Para el botón de favoritos y el de eliminar, pueden usar delegación de eventos o añadir el listener a cada tarjeta.

- Manejen el caso en que el input esté vacío.

- Al eliminar, identifiquen el Pokémon por su nombre o ID para saber cuál quitar del localStorage.

## Tarea 7: Pulir la aplicación

- 1. Prueben la aplicación con diferentes Pokémon.

- 2. Verifiquen que los favoritos persistan al recargar la página.

- 3. Verifiquen que al eliminar un favorito, se elimine correctamente del localStorage y del DOM.

- 4. Aseguren que los errores se muestren correctamente.

- 5. Mejoren el diseño con CSS.

## Recursos

| Recurso | Enlace |
| --- | --- |
| PokéAPI | https://pokeapi.co/ |
| MDN - fetch | https://developer.mozilla.org/es/docs/Web/API/Fetch_API |
| MDN - | https://developer.mozilla.org/es/docs/Web/API/Window/localStorage |
| localStorage |   |
| MDN - | https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Globa |
| JSON |   |


| Recurso | Enlace |
| --- | --- |
| MDN - filter | https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Globa |

## Puntuación

Al final de la sesión, realizarás una autoevaluación.
