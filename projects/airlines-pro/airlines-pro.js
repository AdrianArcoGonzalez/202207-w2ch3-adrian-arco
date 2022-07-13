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

function airlinesPro() {
  // SALUDO
  const name = prompt("Digame su nombre para dirigirme a usted");
  alert(`Bienvenido a Skylab Airlines ${name}`);

  //MOSTRAR VUELOS

  for (let i = 0; i <= flights.length - 1; i++) {
    const vuelo = `El vuelo con origen: ${flights[i].from}, y destino ${flights[i].to} tiene un coste de ${flights[i].cost} `;

    if (flights[i].scale === true) {
      console.log(vuelo + `y realiza escala`);
    } else {
      console.log(vuelo + `y no realiza escalas`);
    }
  }
  //PRECIO MEDIO

  let midprice = 0;
  for (let i = 0; i <= flights.length - 1; i++) {
    midprice = parseFloat(flights[i].cost) + parseFloat(midprice);
  }
  midprice = parseFloat(midprice) / parseFloat(flights.length - 1);
  console.log(`El precio medio de todos los vuelos es ${midprice}`);

  //VUELOS CON ESCALAS
  escaleFly = [];
  console.log(`Los vuelos con escalas son los siguientes`);
  for (let i = 0; i <= flights.length - 1; i++) {
    if (flights[i].scale === true) {
      escaleFly.push(flights[i]);

      console.log(
        `El vuelo con origen: ${flights[i].from}, y destino ${flights[i].to} tiene un coste de ${flights[i].cost} y hace escala`
      );
    }
  }
  // Ultimos 5 IDS

  console.log(`Ultimos 5 destinos del dia`);
  let lastFly = [];
  for (let i = 0; i <= flights.length - 1; i++) {
    if (i >= flights.length - 5) {
      lastFly.push(flights[i]);
    }
  }
  for (let i = 0; i <= lastFly.length - 1; i++) {
    console.log(`Vuelo con destino a ${lastFly[i].to}`);
  }

  //ENTRAMOS EN MODO USER O ADMIN

  let account = prompt(`Eres User o Admin`);
  let accountverified = account.toUpperCase();

  if (accountverified === `USER`) {
    user();
  } else if (accountverified === `ADMIN`) {
    admin();
  } else if (accountverified !== `USER` || accountverified !== `ADMIN`) {
    alert(`Debes introducir admin o user para poder seguir`);
  }
}

//FUNCION MODO USER
function user() {
  alert(`Has entrado en modo user, ahora puedes comprar un vuelo`);
  let preciomax = prompt(`cual es el precio maximo que te quieres gastar?`);
  let vuelosDisp = [];
  for (let i = 0; i <= flights.length - 1; i++) {
    if (preciomax >= flights[i].cost) {
      vuelosDisp.push(flights[i]);
    }
  }
  for (let i = 0; i <= vuelosDisp.length - 1; i++) {
    console.log(
      `El vuelo con id ` +
        vuelosDisp[i].id +
        ` y destino ` +
        vuelosDisp[i].to +
        ` a tiene un precio de ` +
        vuelosDisp[i].cost
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

//FUNCION MODO ADMIN

function admin() {
  alert(
    `Como administrador puedes crear vuelos hasta un maximo de 15 o eliminarlos mediante el id.`
  );
  //crear vuelos
  switch (confirm("Quieres crear un nuevo vuelo?")) {
    case true:
      createFly();
      break;

    case false:
      switch (confirm(`Quieres eliminar un vuelo?`)) {
        case true:
          deleteFly();
        case false:
          alert(`Hasta la proxima!`);
      }

      break;
  }
}
// Crear vuelos nuevos
function createFly() {
  let createId = prompt(`Que id le quieres dar?`);
  createId = parseFloat(createId);

  let createTo = prompt("Que destino quieres darle al vuelo?");

  let createFrom = prompt(`Desde donde quieres que salga el vuelo?`);

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
  }
  // Plantilla de vuelo nuevo
  newFly = {
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

  //Mostrar vuelos con el vuelo nuevo añadido
  console.log(`Aquí tienes los vuelos nuevos`);
  for (let i = 0; i <= flights.length - 1; i++) {
    const vuelo = `El vuelo con origen: ${flights[i].from}, y destino ${flights[i].to} tiene un coste de ${flights[i].cost} `;

    if (flights[i].scale === true) {
      console.log(vuelo + `y realiza escala`);
    } else {
      console.log(vuelo + `y no realiza escalas`);
    }
  }
  switch (confirm(`Quieres seguir administrando los vuelos?`)) {
    case true:
      admin();
      break;
    case false:
      alert(`Hasta la proxima!`);
      break;
  }
}

//Funcion para borrar vuelos

function deleteFly() {
  flightToDelete = prompt(`Digame el Id del vuelo que quiere eliminar`);
  flightToDelete = parseFloat(flightToDelete);

  if (flightToDelete < 1 || flightToDelete > flights.length - 1) {
    alert(`Ese id no existe`);
  } else {
    const indexOfObject = flights.findIndex((flight) => {
      return flight.id === flightToDelete;
    });
    flights.splice(indexOfObject, 1);

    console.log(`Esta en la nueva lista de vuelos. `);
    for (let i = 0; i <= flights.length - 1; i++) {
      const vuelo = `El vuelo con origen: ${flights[i].from}, y destino ${flights[i].to} tiene un coste de ${flights[i].cost} `;

      if (flights[i].scale === true) {
        console.log(vuelo + `y realiza escala`);
      } else {
        console.log(vuelo + `y no realiza escalas`);
      }
    }
  }
  admin();
}

airlinesPro();
