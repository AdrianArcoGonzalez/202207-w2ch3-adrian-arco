import { questions1, questions2, questions3 } from "./pasapalabra";

const chooseBlockQuestions = (number) => {
  if (number === 1) {
    return questions1;
  }
  if (number === 2) {
    return questions2;
  }
  return questions3;
};

export default chooseBlockQuestions;
