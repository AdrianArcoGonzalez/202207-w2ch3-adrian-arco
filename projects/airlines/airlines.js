const name = prompt("Digame su nombre para poder dirigirme a usted");
alert(`Bienvenido a Skylab Airlanes ${name}`);

const flights = [
  { id: 0, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },

  { id: 1, to: "New York", from: "Barcelona", cost: 700, scale: false },

  { id: 2, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },

  { id: 3, to: "Paris", from: "Barcelona", cost: 210, scale: false },

  { id: 4, to: "Roma", from: "Barcelona", cost: 150, scale: false },

  { id: 5, to: "London", from: "Madrid", cost: 200, scale: false },

  { id: 6, to: "Madrid", from: "Barcelona", cost: 90, scale: false },

  { id: 7, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },

  { id: 8, to: "Shangai", from: "Barcelona", cost: 800, scale: true },

  { id: 9, to: "Sydney", from: "Barcelona", cost: 150, scale: true },

  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];
document.write(`<h2>Todos nuestros vuelos</h2>`);
for (let i = 0; i <= flights.length - 1; i++) {
  const vuelo = `El vuelo con origen: ${flights[i].from}, y destino ${flights[i].to} tiene un coste de ${flights[i].cost} `;

  if (flights[i].scale === true) {
    document.write(`${vuelo} y realiza escala<br><br>`);
  } else {
    document.write(`${vuelo} y no realiza escalas<br><br>`);
  }
}

let midprice = 0;
for (let i = 0; i <= flights.length - 1; i++) {
  midprice = parseFloat(flights[i].cost) + parseFloat(midprice);
}
midprice = parseFloat(midprice) / parseFloat(flights.length - 1);
document.write(`<h4>El precio medio de todos los vuelos es ${midprice}</h4>`);

const escaleFly = [];
document.write(`<h2>Los vuelos con escalas son los siguientes</h2>`);
for (let i = 0; i <= flights.length - 1; i++) {
  if (flights[i].scale === true) {
    escaleFly.push(flights[i]);

    document.write(
      `El vuelo con origen: ${flights[i].from}, y destino ${flights[i].to} tiene un coste de ${flights[i].cost} y hace escala<br><br>`
    );
  }
}

document.write(`<h2>Ultimos 5 destinos del dia</h2>`);
const lastFly = [];
for (let i = 0; i <= flights.length - 1; i++) {
  if (flights[i].id > 5) {
    lastFly.push(flights[i]);
  }
}
for (let i = 0; i <= lastFly.length - 1; i++) {
  document.write(`Vuelo con destino a ${lastFly[i].to}<br><br>`);
}
