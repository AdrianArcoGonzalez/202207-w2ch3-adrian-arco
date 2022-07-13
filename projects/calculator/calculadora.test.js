import calculadora from "./calculator";

describe("Given a calculator function", () => {
  describe("When its called and it receives 2 and 4", () => {
    test(`Then it should return [6, -2, 8, "0.500"]`, () => {
      const number1 = 2;
      const number2 = 4;
      const expectedResult = [6, -2, 8, "0.500"];

      const expectedReturn = calculadora(number1, number2);

      expect(expectedReturn).toBe(expectedResult);
    });
  });
});
