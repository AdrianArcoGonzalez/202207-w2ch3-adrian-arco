//crear tageta bingo
const xToNumbers = `X`;
let bombo = [];
let turn = 0;
let bingoCard = [];
const playerName = prompt(`Dime tu nombre`);
let lineaDone = false;

const createBingoCard = () => {
  let generateBingoCardNumbers = ``;
  let firstLaneBingoCard = [];
  let secondLaneBingoCard = [];
  let thirdLaneBingoCard = [];

  for (let i = 0; i < 15; i++) {
    generateBingoCardNumbers = Math.floor(Math.random() * 90) + 1;
    if (firstLaneBingoCard.length < 5) {
      firstLaneBingoCard.push(generateBingoCardNumbers);
    } else if (secondLaneBingoCard.length < 5) {
      secondLaneBingoCard.push(generateBingoCardNumbers);
    } else {
      thirdLaneBingoCard.push(generateBingoCardNumbers);
    }
  }
  bingoCard.push(firstLaneBingoCard, secondLaneBingoCard, thirdLaneBingoCard);

  return bingoCard;
};
const markNumbersOnBingoCard = (element, array) => {
  for (let i = 0; i < array.length; i++) {
    for (j = 0; j < array[i].length; j++) {
      if (array[i][j] === element) {
        array[i][j] = xToNumbers;
        console.log(`HAS ACERTADOOOO!`);
      }
    }
  }
};
// Mostrar targeta bingo
const showCard = (arr) => {
  return console.log(`Este es tu cartón`), console.table(arr);
};

//Confirmar cartón para comenzar
const confirmCard = () => {
  showCard(bingoCard);
  switch (
    confirm(
      `Quieres jugar con este cartón? Pulsa aceptar o cancelar para cambiarlo`
    )
  ) {
    case true:
      newTurn();
      break;
    case false:
      bingoCard = [];
      createBingoCard();
      confirmCard();
      break;
  }
};
//tabla highscore principio
const winnersTableStart = () => {
  const highScoreTableStarting = [
    { Name: `Marta`, Score: 64 },
    { Name: `Albert`, Score: 53 },
    { Name: `Maria`, Score: 38 },
    { Name: `Juan`, Score: 20 },
  ];
  return (
    console.log(`Esta es la tabla de puntuaciones.`),
    console.table(highScoreTableStarting)
  );
};
//tabla highscore final
const winnersTableEnd = (playerName, turn) => {
  let highScoreTableEnding = [
    { Name: `Marta`, Score: 64 },
    { Name: `Albert`, Score: 53 },
    { Name: `Maria`, Score: 38 },
    { Name: `Juan`, Score: 20 },
  ];
  let actualPlayerScore = 100 - parseFloat(turn);
  let actualPlayer = {
    Name: playerName,
    Score: actualPlayerScore,
  };
  highScoreTableEnding.push(actualPlayer);

  return console.table(highScoreTableEnding);
};
//Do it, do it better
const sayLineaOneTime = (array) => {
  if (
    (array[0][0] === xToNumbers &&
      array[0][1] === xToNumbers &&
      array[0][2] === xToNumbers &&
      array[0][3] === xToNumbers &&
      array[0][4] === xToNumbers) ||
    (array[1][0] === xToNumbers &&
      array[1][1] === xToNumbers &&
      array[1][2] === xToNumbers &&
      array[1][3] === xToNumbers &&
      array[1][4] === xToNumbers) ||
    (array[2][0] === xToNumbers &&
      array[2][1] === xToNumbers &&
      array[2][2] === xToNumbers &&
      array[2][3] === xToNumbers &&
      array[2][4] === xToNumbers)
  ) {
    console.log("LINEAAA!");
    lineaDone = true;
  } else {
    lineaDone = false;
  }
};
// acabar bingo
const bingoEnd = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (
      !array[i].every((currentNumber) => {
        return currentNumber === xToNumbers;
      })
    ) {
      return false;
    }
  }
  return true;
};
//Nuevo turno

const newTurn = () => {
  switch (confirm(`Siguiente turno?`)) {
    case true:
      if (bingoEnd(bingoCard) === true) {
        console.log(`BINGOOOOOOOO!!!!`);
        winnersTableEnd(playerName, turn);
        break;
      } else if (lineaDone === true) {
        const newNumber = generateNumber();
        turn = turn + 1;
        showCard(bingoCard);
        console.log(`Estamos en el turno`, turn);
        console.log("Este es el numero actual", newNumber);
        markNumbersOnBingoCard(newNumber, bingoCard);
        newTurn();
      } else if (lineaDone === false) {
        const newNumber = generateNumber();
        turn = turn + 1;
        showCard(bingoCard);
        sayLineaOneTime(bingoCard);
        console.log(`Estamos en el turno`, turn);
        console.log("Este es el numero actual", newNumber);
        markNumbersOnBingoCard(newNumber, bingoCard);
        newTurn();
      }
      break;

    case false:
      alert(`Hasta la proxima!`);

      break;
  }
};

//Creador de numeros random
const generateNumber = () => {
  let newNumber;
  do {
    newNumber = Math.floor(Math.random() * 90) + 1;
  } while (checkGeneratedNumberAlreadyExist(newNumber, bombo));
  bombo.push(newNumber);
  return newNumber;
};
//verificar numeros
function checkGeneratedNumberAlreadyExist(element, array) {
  if (array.includes(element)) {
    return true;
  } else {
    return false;
  }
}

const mainExecuterFunction = () => {
  winnersTableStart();
  createBingoCard(bingoCard);
  confirmCard();
  newTurn();
};
mainExecuterFunction();
