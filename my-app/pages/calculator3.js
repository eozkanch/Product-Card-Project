import { useState } from 'react';
import { create, all } from 'mathjs';

function Calculator3() {
  const [result, setResult] = useState('0');
  const math = create(all);

  const handleClear = () => setResult('0');
  const handleSignChange = () =>
    setResult((prevResult) => {
      if (prevResult === '0') return '0';
      return prevResult.charAt(0) === '-' ? prevResult.slice(1) : `-${prevResult}`;
    });

  const handlePercentage = () =>
    setResult((prevResult) => {
      if (prevResult === '0') return '0';
      return `${parseFloat(prevResult) / 100}`;
    });

  const handleOperator = (operator) =>
    setResult((prevResult) => {
      if (prevResult.endsWith(operator)) return prevResult;
      if (prevResult.endsWith('+') || prevResult.endsWith('-') || prevResult.endsWith('*') || prevResult.endsWith('/')) {
        return prevResult.slice(0, -1) + operator;
      }
      return `${prevResult}${operator}`;
    });

  const handleClick = (value) =>
    setResult((prevResult) => {
      if (prevResult === '0') return `${value}`;
      return `${prevResult}${value}`;
    });

  const handleDecimal = () =>
    setResult((prevResult) => {
      if (prevResult === '0') return '0.';
      if (prevResult.includes('.')) return prevResult;
      return `${prevResult}.`;
    });

  const handleEqual = () =>
    setResult((prevResult) => {
      if (prevResult.endsWith('+') || prevResult.endsWith('-') || prevResult.endsWith('*') || prevResult.endsWith('/')) {
        return prevResult.slice(0, -1);
      }
      return `${math.evaluate(prevResult)}`;
    });

  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col justify-center items-center">
      <div className="bg-gray-800 rounded-xl p-6">
        <input
          type="text"
          value={result}
          readOnly
          className="w-80 h-16 text-3xl text-right bg-gray-800 focus:bg-gray-700 transition-all duration-300 ease-in-out rounded-md px-2 text-gray-100"
          placeholder="0"
        />
        <div className="grid grid-cols-4 gap-2 mt-6">
          <button onClick={handleClear} className="col-span-2 h-16 text-3xl text-center bg-gray-700 hover:bg-gray-600 transition-all duration-300 ease-in-out rounded-md text-gray-100">
            AC
          </button>
          <button onClick={handleSignChange} className="h-16 text-3xl text-center bg-gray-700 hover:bg-gray-600 transition-all duration-300 ease-in-out rounded-md text-gray-100">
            +/-
          </button>
          <button onClick={handlePercentage} className="h-16 text-3xl text-center bg-gray-700 hover:bg-gray-600 transition-all duration-300 ease-in-out rounded-md text-gray-100">
            %
          </button>
          <button onClick={() => handleOperator('/')} className="h-16 text-3xl text-center bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 ease-in-out rounded-md text-gray-100">
            ÷
          </button>
          <button onClick={() => handleClick('7')} className="h-16 text-3xl text-center bg-gray-700 hover:bg-gray-800 transition-all duration-300 ease-in-out rounded-md text-gray-100">
            7
          </button>
          <button onClick={() => handleClick('8')} className="h-16 text-3xl text-center bg-gray-700 hover:bg-gray-800 transition-all duration-300 ease-in-out rounded-md text-gray-100">
            8
          </button>
          <button onClick={() => handleClick('9')} className="h-16 text-3xl text-center bg-gray-700 hover:bg-gray-800 transition-all duration-300 ease-in-out rounded-md text-gray-100">
            9
          </button>
          <button onClick={() => handleClick('*')} className="h-16 text-3xl text-center bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 ease-in-out rounded-md text-gray-100">
            *
          </button>
          <button onClick={() => handleClick('4')} className="h-16 text-3xl text-center bg-gray-700 hover:bg-gray-800 transition-all duration-300 ease-in-out rounded-md text-gray-100">
            4
          </button>
          <button onClick={() => handleClick('5')} className="h-16 text-3xl text-center bg-gray-700 hover:bg-gray-800 transition-all duration-300 ease-in-out rounded-md text-gray-100">
            5
          </button>
          <button onClick={() => handleClick('6')} className="h-16 text-3xl text-center bg-gray-700 hover:bg-gray-800 transition-all duration-300 ease-in-out rounded-md text-gray-100">
            6
          </button>
          <button onClick={() => handleClick('-')} className="h-16 text-3xl text-center bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 ease-in-out rounded-md text-gray-100">
            -
          </button>
          <button onClick={() => handleClick('1')} className="h-16 text-3xl text-center bg-gray-700 hover:bg-gray-800 transition-all duration-300 ease-in-out rounded-md text-gray-100">
            1
          </button>
          <button onClick={() => handleClick('2')} className="h-16 text-3xl text-center bg-gray-700 hover:bg-gray-800 transition-all duration-300 ease-in-out rounded-md text-gray-100">
            2
          </button>
          <button onClick={() => handleClick('3')} className="h-16 text-3xl text-center bg-gray-700 hover:bg-gray-800 transition-all duration-300 ease-in-out rounded-md text-gray-100">
            3
          </button>
          <button onClick={() => handleClick('+')} className="h-16 text-3xl text-center bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 ease-in-out rounded-md text-gray-100">
            +
          </button>
          <button onClick={() => handleClick('0')} className="h-16 text-3xl text-center bg-gray-700 hover:bg-gray-800 transition-all duration-300 ease-in-out rounded-md text-gray-100">
            0
          </button>
          <button onClick={() => handleClick('.')} className="h-16 text-3xl text-center bg-gray-700 hover:bg-gray-800 transition-all duration-300 ease-in-out rounded-md text-gray-100">
            .
          </button>
          <button onClick={() => handleEqual()} className="h-16 text-3xl text-center bg-green-500 hover:bg-green-600 transition-all duration-300 ease-in-out rounded-md text-gray-100">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator3;
