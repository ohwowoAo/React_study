import React from 'react';

const arr = Array.from(Array(100), (_, i) => i+1);
const btn = arr.map((num, index)=> num % 10 === 0 ? false : <button key={index}>{num % 7 === 0 ? '7의배수' : num}</button>);
const App = () => {
  return (
    // <div>
    //   <div>{[false, null, undefined, true]}</div> 
    //   <div>{false}</div> 
    //   <div>{null}</div> 
    //   <div>{undefined}</div> 
    //   <div>{true}</div> 
    // </div>
    <>
      {btn}
    </>
  );
};

export default App;