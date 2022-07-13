const boton1 = document.getElementById("1");
const boton2 = document.getElementById("2");
const boton3 = document.getElementById("3");
const boton4 = document.getElementById("4");
const boton5 = document.getElementById("5");
const boton6 = document.getElementById("6");
const boton7 = document.getElementById("7");
const boton8 = document.getElementById("8");
const boton9 = document.getElementById("9");
const boton0 = document.getElementById("0");
const botonResta = document.getElementById("boton-restar");
const botonMulti = document.getElementById("boton-multiplicar");
const botonDivi = document.getElementById("boton-dividir");
const botonSuma = document.getElementById("boton-sumar");
const botonResultado = document.getElementById("boton-resultado");
const botonReset = document.getElementById("boton-reset");
const botonComa = document.getElementById("boton-punto");

let screenNumber = "";
let pressedOperation = "";
let tempNumber1 = null;
let tempNumber2 = null;
let result = null;
let decimalResult = null;

const showScreenNumber = () => {
  document.getElementById("pantalla").innerHTML = screenNumber;
};

const operations = () => {
  if (pressedOperation === "+") {
    result = tempNumber1 + tempNumber2;
  } else if (pressedOperation === "-") {
    result = tempNumber1 - tempNumber2;
  } else if (pressedOperation === "*") {
    result = tempNumber1 * tempNumber2;
  } else if (pressedOperation === "/") {
    result = tempNumber1 / tempNumber2;
  }
};
const checkIfDecimals = () => {
  if (result % 1 !== 0) {
    decimalResult = result.toFixed(3);
  } else {
    decimalResult = result;
  }
};

const checkMaxNums = () => {
  if (screenNumber.length >= 20) {
    return true;
  }
  return false;
};

const createEventlistenersNums = () => {
  const buttonsArray = [
    boton0,
    boton1,
    boton2,
    boton3,
    boton4,
    boton5,
    boton6,
    boton7,
    boton8,
    boton9,
  ];
  buttonsArray.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (checkMaxNums() === false) {
        screenNumber += `${index}`;
        showScreenNumber();
      } else {
        alert("Has alcanzado en maximo de numeros");
      }
    });
  });
};
botonComa.addEventListener("click", () => {
  screenNumber += ".";
});

botonReset.addEventListener("click", () => {
  document.getElementById("pantalla").innerHTML = "";
  screenNumber = "";
  tempNumber1 = null;
  tempNumber2 = null;
  pressedOperation = "";
  result = null;
});

botonSuma.addEventListener("click", () => {
  if (tempNumber1 === null) {
    pressedOperation = "+";
    tempNumber1 = Number(screenNumber);
    screenNumber = "";
  } else if (tempNumber1 !== null) {
    tempNumber2 = Number(screenNumber);
    operations();
    pressedOperation = "+";
    screenNumber = result;
    showScreenNumber();
    screenNumber = "";
    tempNumber1 = result;
  }
});

botonResta.addEventListener("click", () => {
  if (tempNumber1 === null) {
    pressedOperation = "-";
    tempNumber1 = Number(screenNumber);
    screenNumber = "";
  } else if (tempNumber1 !== null) {
    tempNumber2 = Number(screenNumber);
    operations();
    pressedOperation = "-";
    screenNumber = result;
    showScreenNumber();
    screenNumber = "";
    tempNumber1 = result;
  }
});

botonMulti.addEventListener("click", () => {
  if (tempNumber1 === null) {
    pressedOperation = "*";
    tempNumber1 = Number(screenNumber);
    screenNumber = "";
  } else if (tempNumber1 !== null) {
    tempNumber2 = Number(screenNumber);
    operations();
    pressedOperation = "*";
    screenNumber = result;
    showScreenNumber();
    screenNumber = "";
    tempNumber1 = result;
  }
});

botonDivi.addEventListener("click", () => {
  if (tempNumber1 === null) {
    pressedOperation = "/";
    tempNumber1 = Number(screenNumber);
    screenNumber = "";
  } else if (tempNumber1 !== null) {
    tempNumber2 = Number(screenNumber);
    operations();
    pressedOperation = "/";
    screenNumber = result;
    showScreenNumber();
    screenNumber = "";
    tempNumber1 = result;
  }
});

botonResultado.addEventListener("click", () => {
  tempNumber2 = Number(screenNumber);
  operations();
  checkIfDecimals();
  const StringResult = decimalResult.toString();
  decimalResult = StringResult.replace(".", ",");
  document.getElementById("pantalla").innerHTML = decimalResult;
});

createEventlistenersNums();
