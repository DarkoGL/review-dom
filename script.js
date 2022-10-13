//1.1 Basandote en el array siguiente, crea una lista ul > li
//dinámicamente en el html que imprima cada uno de los paises.
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const ul$$ = document.createElement("ul");

for (country of countries) {
  let li$$ = document.createElement("li");
  li$$.textContent = country;
  ul$$.appendChild(li$$);
}
document.body.appendChild(ul$$);

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const removeElement$$ = document.querySelector(".fn-remove-me");
removeElement$$.remove();

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
//en el div de html con el atributo data-function="printHere".

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const ul2$$ = document.createElement("ul");

for (const car of cars) {
  let li1$$ = document.createElement("li");
  li1$$.textContent = car;
  ul2$$.appendChild(li1$$);
}

const div$$ = document.querySelector('[data-function="printHere"]'); //selecciono div
div$$.appendChild(ul2$$); //añadir ul al div atributo atributo data-function="printHere".

//1.4 Crea dinamicamente en el html una lista de div que contenga un elemento
//h4 para el titulo y otro elemento img para la imagen.

const countries2 = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const ul3$$ = document.createElement("ul");

for (const country2 of countries2) {
  let countryDiv$$ = document.createElement("div");
  //aquí hemos creado los 5 divs

  //creo los h4 y las img
  let h4$$ = document.createElement("h4");
  h4$$.textContent = country2.title;
  let img$$ = document.createElement("img");
  img$$.src = country2.imgUrl;

  //ahora meto los h4 y las imagenes

  countryDiv$$.appendChild(h4$$);
  countryDiv$$.appendChild(img$$);

  //meto los elementos del array en cada div
  document.body.appendChild(countryDiv$$);
}

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
//elemento de la lista.

const button$$ = document.createElement("button");

button$$.textContent = "Púlsame!!!";
button$$.style.padding = "15px";

button$$.addEventListener("click", () => {
  const divs$$ = document.querySelectorAll("div");
  if (divs$$.length === 6) divs$$[divs$$.length - 1].remove();
});

document.body.appendChild(button$$);

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
//elementos de las listas que elimine ese mismo elemento del html.
const divs$$ = document.querySelectorAll("div");
let firstDiv = divs$$[0];

for (const div of divs$$) {
  let button2$$ = document.createElement("button");

  button2$$.textContent = "Elimíname";
  button2$$.style.padding = "15px";
  if(div !== firstDiv) div.appendChild(button2$$);
  button2$$.addEventListener("click", () => {
    div.remove();
  });
}
