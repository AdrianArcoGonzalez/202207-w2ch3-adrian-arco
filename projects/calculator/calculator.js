const calculadora = (numero1, numero2) => {
  /* const numero1 = prompt("Introduce un numero");
  const numero2 = prompt(
    "Si me das un segundo numero hare todas las operaciones que se con el"
  ); */
  const operaciones = [];

  if (Number(numero1) && numero2 === "") {
    const raizcuadrada = Math.sqrt(parseFloat(numero1));

    let raiz = "";
    if (raizcuadrada % 1 === 0) {
      raiz = raizcuadrada;
    } else {
      raiz = raizcuadrada.toFixed(3);
    }

    console.log(`La raiz cuadrada de ${numero1} es ${raiz}`);
  } else if (Number(numero1, numero2)) {
    const sum = parseFloat(numero1) + parseFloat(numero2);
    const rest = parseFloat(numero1) - parseFloat(numero2);
    const multi = parseFloat(numero1) * parseFloat(numero2);
    const div = parseFloat(numero1) / parseFloat(numero2);

    let suma = "";
    let resta = "";
    let multiplicar = "";
    let dividir = "";
    if (sum % 1 !== 0) {
      suma = sum.toFixed(3);
    } else {
      suma = sum;
    }
    if (rest % 1 !== 0) {
      resta = rest.toFixed(3);
    } else {
      resta = rest;
    }
    if (multi % 1 !== 0) {
      multiplicar = multi.toFixed(3);
    } else {
      multiplicar = multi;
    }
    if (div % 1 !== 0) {
      dividir = div.toFixed(3);
    } else {
      dividir = div;
    }

    operaciones.push(suma, resta, multiplicar, dividir);

    console.log(`El resultado de la suma de ${numero1} mas ${numero2} es <b>${operaciones[0]}</b><br>
El resultado de la resta de ${numero1} menos ${numero2} es <b>${operaciones[1]}</b><br>
El resultado de la multiplicacion de ${numero1} por ${numero2} es <b>${operaciones[2]}</b><br>
El resultado de dividir ${numero1} entre ${numero2} es <b>${operaciones[3]}</b>`);
  } else if (!Number(numero1) || (!Number(numero2) && numero2 !== "")) {
    console.log(
      "Solo se pueden introducir numeros! Has puesto los decimales con una coma? Prueba con un punto"
    );
  }

  return operaciones;
};
export default calculadora;
