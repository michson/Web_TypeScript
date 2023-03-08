










function addnum(
    num1: number,
    num2: number,
    showResult: boolean,
    phrase: string
  ) {
    const result = num1 + num2;
    if (showResult) {
      console.log(phrase + result);
    } else {
      return result;
    }
  };

  const number1 = 78;
  const number2 = 56;
  const printResult = false;
  const resultPhrase = `Your Result is: `;
  addnum(number1, number2, printResult, resultPhrase);
  
