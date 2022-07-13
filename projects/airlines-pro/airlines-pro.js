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

function user() {
  alert(`Has entrado en modo user, ahora puedes comprar un vuelo`);
  const preciomax = prompt(`cual es el precio maximo que te quieres gastar?`);
  const vuelosDisp = [];
  for (let i = 0; i <= flights.length - 1; i++) {
    if (preciomax >= flights[i].cost) {
      vuelosDisp.push(flights[i]);
    }
  }
  for (let i = 0; i <= vuelosDisp.length - 1; i++) {
    console.log(
      `El vuelo con id ${vuelosDisp[i].id} y destino ${vuelosDisp[i].to} a tiene un precio de ${vuelosDisp[i].cost}`
    );
  }

  let vueloComprado = prompt(`Digame el id del vuelo que desea comprar`);
  vueloComprado = parseFloat(vueloComprado);

  for (let i = 0; i < vuelosDisp.length; i++) {
    if (vueloComprado === vuelosDisp[i].id) {
      alert(
        `Ha comprado el vuelo con id ${vuelosDisp[i].id}. Gracias por su compra, vuelva pronto.`
      );
    }
  }
}

function airlinesPro() {
  const name = prompt("Digame su nombre para dirigirme a usted");
  alert(`Bienvenido a Skylab Airlines ${name}`);

  for (let i = 0; i <= flights.length - 1; i++) {
    const vuelo = `El vuelo con origen: ${flights[i].from}, y destino ${flights[i].to} tiene un coste de ${flights[i].cost} `;

    if (flights[i].scale === true) {
      console.log(`${vuelo} y realiza escala`);
    } else {
      console.log(`${vuelo} y no realiza escalas`);
    }
  }

  let midprice = 0;
  for (let i = 0; i <= flights.length - 1; i++) {
    midprice = parseFloat(flights[i].cost) + parseFloat(midprice);
  }
  midprice = parseFloat(midprice) / parseFloat(flights.length - 1);
  console.log(`El precio medio de todos los vuelos es ${midprice}`);

  const escaleFly = [];
  console.log(`Los vuelos con escalas son los siguientes`);
  for (let i = 0; i <= flights.length - 1; i++) {
    if (flights[i].scale === true) {
      escaleFly.push(flights[i]);

      console.log(
        `El vuelo con origen: ${flights[i].from}, y destino ${flights[i].to} tiene un coste de ${flights[i].cost} y hace escala`
      );
    }
  }
  console.log(`Ultimos 5 destinos del dia`);
  const lastFly = [];
  for (let i = 0; i <= flights.length - 1; i++) {
    if (i >= flights.length - 5) {
      lastFly.push(flights[i]);
    }
  }
  for (let i = 0; i <= lastFly.length - 1; i++) {
    console.log(`Vuelo con destino a ${lastFly[i].to}`);
  }

  const account = prompt(`Eres User o Admin`);
  const accountverified = account.toUpperCase();

  if (accountverified === `USER`) {
    user();
  } else if (accountverified === `ADMIN`) {
    admin();
  } else if (accountverified !== `USER` || accountverified !== `ADMIN`) {
    alert(`Debes introducir admin o user para poder seguir`);
  }
}
function createFly() {
  let createId = prompt(`Que id le quieres dar?`);
  createId = parseFloat(createId);

  const createTo = prompt("Que destino quieres darle al vuelo?");

  const createFrom = prompt(`Desde donde quieres que salga el vuelo?`);

  let createCost = prompt(`Que precio quieres darle al vuelo?`);
  createCost = parseFloat(createCost);

  let createScale;
  switch (confirm(`Quieres que el vuelo tenga escala?`)) {
    case true:
      createScale = true;
      break;
    case false:
      createScale = false;
      break;
    default:
  }

  const newFly = {
    id: createId,
    to: createTo,
    from: createFrom,
    cost: createCost,
    scale: createScale,
  };
  if (flights.length <= 14) {
    flights.push(newFly);
  } else {
    alert(`Lo siento no se pueden crear mas vuelos`);
  }

  console.log(`Aquí tienes los vuelos nuevos`);
  for (let i = 0; i <= flights.length - 1; i++) {
    const vuelo = `El vuelo con origen: ${flights[i].from}, y destino ${flights[i].to} tiene un coste de ${flights[i].cost} `;

    if (flights[i].scale === true) {
      console.log(`${vuelo}y realiza escala`);
    } else {
      console.log(`${vuelo}y no realiza escalas`);
    }
  }
  switch (confirm(`Quieres seguir administrando los vuelos?`)) {
    case true:
      admin();
      break;
    case false:
      alert(`Hasta la proxima!`);
      break;
    default:
  }
}

function deleteFly() {
  let flightToDelete = prompt(`Digame el Id del vuelo que quiere eliminar`);
  flightToDelete = parseFloat(flightToDelete);

  if (flightToDelete < 1 || flightToDelete > flights.length - 1) {
    alert(`Ese id no existe`);
  } else {
    const indexOfObject = flights.findIndex(
      (flight) => flight.id === flightToDelete
    );
    flights.splice(indexOfObject, 1);

    console.log(`Esta en la nueva lista de vuelos. `);
    for (let i = 0; i <= flights.length - 1; i++) {
      const vuelo = `El vuelo con origen: ${flights[i].from}, y destino ${flights[i].to} tiene un coste de ${flights[i].cost} `;

      if (flights[i].scale === true) {
        console.log(`${vuelo}y realiza escala`);
      } else {
        console.log(`${vuelo}y no realiza escalas`);
      }
    }
  }
  function admin() {
    alert(
      `Como administrador puedes crear vuelos hasta un maximo de 15 o eliminarlos mediante el id.`
    );
    switch (confirm("Quieres crear un nuevo vuelo?")) {
      case true:
        createFly();
        break;

      case false:
        switch (confirm(`Quieres eliminar un vuelo?`)) {
          case true:
            deleteFly();
            break;
          case false:
            alert(`Hasta la proxima!`);
            break;
          default:
        }
        break;
      default:
    }
  }

  admin();
}

airlinesPro();
