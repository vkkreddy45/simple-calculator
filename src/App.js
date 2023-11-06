import './App.css';
import React, {useState} from 'react';

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult(0);
  };

  // const handleCalculate = () => {
  //   try {
  //     setResult(eval(input));
  //   } catch (error) {
  //     setResult('Error');
  //   }
  // };

  const handleCalculate = () => {
    try {
      setResult(evaluateExpression(input));
    } catch (error) {
      setResult('Error');
    }
  };
  
  const evaluateExpression = (expression) => {
    // Implement your own expression parsing and evaluation logic here
    // This is a simplified example and does not cover all possible cases
    
    // Split the expression into individual tokens (e.g., numbers, operators, parentheses)
    const tokens = expression.match(/\d+|\+|\-|\*|\/|\(|\)/g);
    
    // Perform the evaluation based on the tokens
    let result = parseFloat(tokens[0]); // Assume the first token is a number
    
    for (let i = 1; i < tokens.length; i += 2) {
      const operator = tokens[i];
      const operand = parseFloat(tokens[i + 1]);
      
      switch (operator) {
        case '+':
          result += operand;
          break;
        case '-':
          result -= operand;
          break;
        case '*':
          result *= operand;
          break;
        case '/':
          result /= operand;
          break;
        default:
          throw new Error('Invalid operator');
      }
    }
    
    return result;
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={handleClear}>Clear</button>
        </div>
      </div>
      <div className="result">Result: {result}</div>
    </div>
  );
};

export default Calculator;
