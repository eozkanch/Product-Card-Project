import { useState } from 'react';

function Calculator2() {
  const [result, setResult] = useState('0');

  const handleClear = () => setResult('0');
  const handleSignChange = () => setResult(prevResult => {
    if (prevResult === '0') return '0';
    return prevResult.charAt(0) === '-' ? prevResult.slice(1) : `-${prevResult}`;
  });
  const handlePercentage = () => setResult(prevResult => {
    if (prevResult === '0') return '0';
    return `${parseFloat(prevResult) / 100}`;
  });
  const handleOperator = operator => setResult(prevResult => {
    if (prevResult.endsWith(operator)) return prevResult;
    if (prevResult.endsWith('+') || prevResult.endsWith('-') || prevResult.endsWith('*') || prevResult.endsWith('/')) {
      return prevResult.slice(0, -1) + operator;
    }
    return `${prevResult}${operator}`;
  });
  const handleClick = value => {
    if (value === '=') {
      setResult(eval(result)); // eval fonksiyonu ile sonucu hesaplayın
    } else {
      setResult(prevResult => {
        if (prevResult === '0') return `${value}`;
        return `${prevResult}${value}`;
      });
    }
  };
  const handleDecimal = () => setResult(prevResult => {
    if (prevResult === '0') return '0.';
    if (prevResult.includes('.')) return prevResult;
    return `${prevResult}.`;
  });
  const handleEqual = () => setResult(prevResult => {
    if (prevResult.endsWith('+') || prevResult.endsWith('-') || prevResult.endsWith('*') || prevResult.endsWith('/')) {
      return prevResult.slice(0, -1);
    }
    // eslint-disable-next-line no-eval
    return `${eval(prevResult)}`;
  });

  return (
    <div className="w-full h-screen bg-gray-900">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="bg-gray-800 rounded-full p-2">
          <div className="flex flex-row flex-wrap items-center justify-center">
            <div className="flex flex-row flex-wrap items-center justify-center">
              <input
                type="text"
                value={result}
                readOnly
                className="w-64 h-16 text-2xl text-center bg-gray-800 focus:bg-gray-700 transition-all duration-300 ease-in-out rounded-md px-2 text-gray-100"
                placeholder="0"
              />
              <div className="flex flex-col items-center justify-between h-40 mx-2">
                <button
                  onClick={handleClear} className="h-16 w-16 text-2xl text-center bg-gray-700 hover:bg-gray-600 transition-all duration-300 ease-in-out rounded-full text-gray-100"
                >
                  AC
                </button>
                <button onClick={handleSignChange} className="h-16 w-16 text-2xl text-center bg-gray-700 hover:bg-gray-600 transition-all duration-300 ease-in-out rounded-full text-gray-100"
                >
                  +/-
                </button>
                <button onClick={handlePercentage}  className="h-16 w-16 text-2xl text-center bg-gray-700 hover:bg-gray-600 transition-all duration-300 ease-in-out rounded-full text-gray-100"
                >
                  %
                </button>
              </div>
              <div className="flex flex-col items-center justify-between h-40 mx-2">
                <button    onClick={() => handleOperator("/")}     className="h-16 w-16 text-2xl text-center bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 ease-in-out rounded-full text-gray-100"
                >
                  ÷
                </button>
                <button    onClick={() => handleOperator("*")}   className="h-16 w-16 text-2xl text-center bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 ease-in-out rounded-full text-gray-100"
                >
                  ×
                </button>
                <button   onClick={() => handleOperator("-")}    className="h-16 w-16 text-2xl text-center bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 ease-in-out rounded-full text-gray-100"
                >
                  -
                </button>
                <button      onClick={() => handleOperator("+")}      className="h-16 w-16 text-2xl text-center bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 ease-in-out rounded-full text-gray-100"
                  >
                  +
                  </button>
               
             
                 
               
                  </div>
                  <div className="flex flex-row flex-wrap items-center justify-center mx-2">
                  <button      onClick={() => handleClick("0")}    className="h-16 w-16 text-2xl text-center bg-gray-700 hover:bg-gray-800 transition-all duration-300 ease-in-out rounded-full text-gray-100"
                  >
                  0
                  </button>
                  <button      onClick={() => handleClick("9")}    className="h-16 w-16 text-2xl text-center bg-gray-700 hover:bg-gray-800 transition-all duration-300 ease-in-out rounded-full text-gray-100"
                  >
                  9
                  </button>
                  <button      onClick={() => handleClick("8")}  className="h-16 w-16 text-2xl text-center bg-gray-700 hover:bg-gray-800 transition-all duration-300 ease-in-out rounded-full text-gray-100"
                  >
                  8
                  </button>
                  <button     onClick={() => handleClick("7")}  className="h-16 w-16 text-2xl text-center bg-gray-700 hover:bg-gray-800 transition-all duration-300 ease-in-out rounded-full text-gray-100"
                  >
                  7
                  </button>
              
             
                  <button  onClick={() => handleClick("6")}  className="h-16 w-16 text-2xl text-center bg-gray-700 hover:bg-gray-800 transition-all duration-300 ease-in-out rounded-full text-gray-100"
                  >
                  6
                  </button>
                  <button    onClick={() => handleClick("5")} className="h-16 w-16 text-2xl text-center bg-gray-700 hover:bg-gray-800 transition-all duration-300 ease-in-out rounded-full text-gray-100"
                  >
                  5
                  </button>
               
                  <button onClick={() => handleClick("4")} className="h-16 w-16 text-2xl text-center bg-gray-700 hover:bg-gray-800 transition-all duration-300 ease-in-out rounded-full text-gray-100"
                  >
                  4
                  </button>
                  <button onClick={() => handleClick("3")} className="h-16 w-16 text-2xl text-center bg-gray-700 hover:bg-gray-800 transition-all duration-300 ease-in-out rounded-full text-gray-100"
                  >
                  3
                  </button>
                  <button onClick={() => handleClick("2")} className="h-16 w-16 text-2xl text-center bg-gray-700 hover:bg-gray-800 transition-all duration-300 ease-in-out rounded-full text-gray-100">
                  2
                  </button>
                  <button onClick={() => handleClick("1")} className="h-16 w-16 text-2xl text-center bg-gray-700 hover:bg-gray-800 transition-all duration-300 ease-in-out rounded-full text-gray-100">
                  1
                  </button>
                  <button onClick={() => handleClick("=")} className="h-16 w-16 text-2xl text-center bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 ease-in-out rounded-full">
                  =
                  </button>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
           
);
};
export default Calculator2;

