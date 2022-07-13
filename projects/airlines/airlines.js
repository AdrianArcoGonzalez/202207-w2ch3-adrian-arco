let name = prompt("Digame su nombre para poder dirigirme a usted");
alert(`Bienvenido a Skylab Airlanes ${name}`);

let flights = [
  { id: 00, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },

  { id: 01, to: "New York", from: "Barcelona", cost: 700, scale: false },

  { id: 02, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },

  { id: 03, to: "Paris", from: "Barcelona", cost: 210, scale: false },

  { id: 04, to: "Roma", from: "Barcelona", cost: 150, scale: false },

  { id: 05, to: "London", from: "Madrid", cost: 200, scale: false },

  { id: 06, to: "Madrid", from: "Barcelona", cost: 90, scale: false },

  { id: 07, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },

  { id: 08, to: "Shangai", from: "Barcelona", cost: 800, scale: true },

  { id: 09, to: "Sydney", from: "Barcelona", cost: 150, scale: true },

  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

//Mostrar vuelos
document.write(`<h2>Todos nuestros vuelos</h2>`);
for (let i = 0; i <= flights.length - 1; i++) {
  const vuelo = `El vuelo con origen: ${flights[i].from}, y destino ${flights[i].to} tiene un coste de ${flights[i].cost} `;

  if (flights[i].scale === true) {
    document.write(vuelo + `y realiza escala<br><br>`);
  } else {
    document.write(vuelo + `y no realiza escalas<br><br>`);
  }
}

//precio medio

let midprice = 0;
for (let i = 0; i <= flights.length - 1; i++) {
  midprice = parseFloat(flights[i].cost) + parseFloat(midprice);
}
midprice = parseFloat(midprice) / parseFloat(flights.length - 1);
document.write(`<h4>El precio medio de todos los vuelos es ${midprice}</h4>`);

//Vuelos con escala
escaleFly = [];
document.write(`<h2>Los vuelos con escalas son los siguientes</h2>`);
for (let i = 0; i <= flights.length - 1; i++) {
  if (flights[i].scale === true) {
    escaleFly.push(flights[i]);

    document.write(
      `El vuelo con origen: ${flights[i].from}, y destino ${flights[i].to} tiene un coste de ${flights[i].cost} y hace escala<br><br>`
    );
  }
}

//Ultimos 5 ids
document.write(`<h2>Ultimos 5 destinos del dia</h2>`);
let lastFly = [];
for (let i = 0; i <= flights.length - 1; i++) {
  if (flights[i].id > 5) {
    lastFly.push(flights[i]);
  }
}
for (let i = 0; i <= lastFly.length - 1; i++) {
  document.write(`Vuelo con destino a ${lastFly[i].to}<br><br>`);
}
