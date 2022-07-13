const xToNumbers = `X`;
const bombo = [];
let turn = 0;
let bingoCard = [];
const playerName = prompt(`Dime tu nombre`);
let lineaDone = false;

const createBingoCard = () => {
  let generateBingoCardNumbers = ``;
  const firstLaneBingoCard = [];
  const secondLaneBingoCard = [];
  const thirdLaneBingoCard = [];

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

const showCard = (arr) => (
  console.log(`Este es tu cartón`), console.table(arr)
);

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
    default:
  }
};

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

const winnersTableEnd = (playerName, turn) => {
  const highScoreTableEnding = [
    { Name: `Marta`, Score: 64 },
    { Name: `Albert`, Score: 53 },
    { Name: `Maria`, Score: 38 },
    { Name: `Juan`, Score: 20 },
  ];
  const actualPlayerScore = 100 - parseFloat(turn);
  const actualPlayer = {
    Name: playerName,
    Score: actualPlayerScore,
  };
  highScoreTableEnding.push(actualPlayer);

  return console.table(highScoreTableEnding);
};

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

const bingoEnd = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (!array[i].every((currentNumber) => currentNumber === xToNumbers)) {
      return false;
    }
  }
  return true;
};

function checkGeneratedNumberAlreadyExist(element, array) {
  if (array.includes(element)) {
    return true;
  }
  return false;
}

const generateNumber = () => {
  let newNumber;
  do {
    newNumber = Math.floor(Math.random() * 90) + 1;
  } while (checkGeneratedNumberAlreadyExist(newNumber, bombo));
  bombo.push(newNumber);
  return newNumber;
};
const newTurn = () => {
  switch (confirm(`Siguiente turno?`)) {
    case true:
      if (bingoEnd(bingoCard) === true) {
        console.log(`BINGOOOOOOOO!!!!`);
        winnersTableEnd(playerName, turn);
        break;
      } else if (lineaDone === true) {
        const newNumber = generateNumber();
        turn += 1;
        showCard(bingoCard);
        console.log(`Estamos en el turno`, turn);
        console.log("Este es el numero actual", newNumber);
        markNumbersOnBingoCard(newNumber, bingoCard);
        newTurn();
      } else if (lineaDone === false) {
        const newNumber = generateNumber();
        turn += 1;
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
    default:
  }
};

const mainExecuterFunction = () => {
  winnersTableStart();
  createBingoCard();
  confirmCard();
  newTurn();
};
mainExecuterFunction();
