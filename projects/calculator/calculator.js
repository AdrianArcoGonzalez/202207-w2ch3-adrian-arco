// Creamos los prompts para los numeros
numero1 = prompt("Introduce un numero");
numero2 = prompt(
  "Si me das un segundo numero hare todas las operaciones que se con el"
);

//Creamos el array vacio que llevará las operciones
let operaciones = [];

//Primer if para dar raiz cuadrada si el prompt 2 esta vacio.
//Else if donde chequeo que los dos esten llenos, operamos y pusheamos a operaciones para mostrarlo.

if (Number(numero1) && numero2 == "") {
  let raizcuadrada = Math.sqrt(parseFloat(numero1));

  //creamos resultado vacio

  let raiz = "";
  // if para decimales sean 3 y numero entero salga con 0 decimales
  if (raizcuadrada % 1 == 0) {
    raiz = raizcuadrada;
  } else {
    raiz = raizcuadrada.toFixed(3);
  }

  document.write(`La raiz cuadrada de ${numero1} es ${raiz}`);
} else if (Number(numero1, numero2)) {
  let sum = parseFloat(numero1) + parseFloat(numero2);
  let rest = parseFloat(numero1) - parseFloat(numero2);
  let multi = parseFloat(numero1) * parseFloat(numero2);
  let div = parseFloat(numero1) / parseFloat(numero2);

  //creamos los resultados vacios

  let suma = "";
  let resta = "";
  let multiplicar = "";
  let dividir = "";

  // Para poner decimales solo cuando sea necesario
  if (sum % 1 != 0) {
    suma = sum.toFixed(3);
  } else {
    suma = sum;
  }
  if (rest % 1 != 0) {
    resta = rest.toFixed(3);
  } else {
    resta = rest;
  }
  if (multi % 1 != 0) {
    multiplicar = multi.toFixed(3);
  } else {
    multiplicar = multi;
  }
  if (div % 1 != 0) {
    dividir = div.toFixed(3);
  } else {
    dividir = div;
  }

  operaciones.push(suma, resta, multiplicar, dividir);

  document.write(`El resultado de la suma de ${numero1} mas ${numero2} es <b>${operaciones[0]}</b><br>
El resultado de la resta de ${numero1} menos ${numero2} es <b>${operaciones[1]}</b><br>
El resultado de la multiplicacion de ${numero1} por ${numero2} es <b>${operaciones[2]}</b><br>
El resultado de dividir ${numero1} entre ${numero2} es <b>${operaciones[3]}</b>`);

  // Primer Prompt numero y segundo vacio
} else if (!Number(numero1) || (!Number(numero2) && numero2 !== "")) {
  alert(
    "Solo se pueden introducir numeros! Has puesto los decimales con una coma? Prueba con un punto"
  );
}
