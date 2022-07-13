function calculatorPro() {
  let newNumber;
  const numberList = [];

  do {
    newNumber = prompt("Enter a number or press cancel to stop");
    if (Number.isNaN(newNumber) || newNumber === "" || newNumber === " ") {
      alert(
        "It just accept numbers. If you use (,) for decimals try using (.)"
      );
    } else {
      numberList.push(newNumber);
    }
  } while (newNumber !== null);

  numberList.pop();

  let numeroSuma = numberList[0];
  let numeroResta = numberList[0];
  let numeroMulti = numberList[0];
  let numeroDivi = numberList[0];

  for (let i = 1; i < numberList.length; i++) {
    numeroSuma = parseFloat(numeroSuma) + parseFloat(numberList[i]);
    numeroResta = parseFloat(numeroResta) - parseFloat(numberList[i]);
    numeroMulti = parseFloat(numeroMulti) * parseFloat(numberList[i]);
    numeroDivi = parseFloat(numeroDivi) / parseFloat(numberList[i]);
  }

  let numeroSumaDecimal = 0;
  let numeroRestaDecimal = 0;
  let numeroMultiDecimal = 0;
  let numeroDiviDecimal = 0;

  if (numeroSuma % 1 !== 0) {
    numeroSumaDecimal = numeroSuma.toFixed(3);
  } else {
    numeroSumaDecimal = numeroSuma;
  }
  if (numeroResta % 1 !== 0) {
    numeroRestaDecimal = numeroResta.toFixed(3);
  } else {
    numeroRestaDecimal = numeroResta;
  }

  if (numeroMulti % 1 !== 0) {
    numeroMultiDecimal = numeroMulti.toFixed(3);
  } else {
    numeroMultiDecimal = numeroMulti;
  }

  if (numeroDivi % 1 !== 0) {
    numeroDiviDecimal = numeroDivi.toFixed(3);
  } else {
    numeroDiviDecimal = numeroDivi;
  }

  console.log(`The result of the sum is ${numeroSumaDecimal}`);
  console.log(`The result of the rest is ${numeroRestaDecimal}`);
  console.log(`The result of the multiplication is ${numeroMultiDecimal}`);
  console.log(`The result of the division is ${numeroDiviDecimal}`);

  switch (confirm("New numbers? y/n")) {
    case true:
      calculatorPro();
      break;

    case false:
      alert("Bye!");
      break;

    default:
  }
}

calculatorPro();
