import chooseBlockQuestions from "./choseBlockQuestions";
import { questions1 } from "./pasapalabra";

describe("Given a function that choose an questions object from 0 to 2", () => {
  describe("When it's called and it receives a 1 as parameter", () => {
    test("Then it should return the object questionsGame = questions1", () => {
      const number = 1;
      const expectedQuestionsBlock = questions1;

      const expectedReturn = chooseBlockQuestions(number);

      expect(expectedReturn).toBe(expectedQuestionsBlock);
    });
  });
});
