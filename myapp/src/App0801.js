import React, { useState } from 'react';

// const arr = Array.from(Array(100), (_, i) => i+1);
// 1부터 100까지 들어있는 arr
const App = () => {
  const [result, setResult] = useState('');
  // const [first, setFirst] = useState('');
  // const [second, setSecond] = useState('');
  // const onChange = (e) => {
  //   setFirst(e.target.value)
  // }
  // const onChange1 = (e) => {
  //   setSecond(e.target.value)
  // }
  const on = (e) => {
    setResult(e.target.value)
  }

  const input = React.useRef(null); 
  const handleClick = () => { 
    if (input.current) { 
      input.current.value = '';
    } 
  }
  return (
    // <div>
    //   {arr
    //     .map((item) => (
    //       <button key={item} onClick={()=>{ alert(item)}}>
    //         {item}
    //       </button>
    //     ))
    //   }
    // </div>


    // <> 
    //   <input onChange={onChange} type='number' /> 
    //   + 
    //   <input onChange={onChange1} className='second' type='number' /> 
    //   = 
    //   <input type='number' disabled value={result} /> 
    //   <button type='button' onClick={()=>{(setResult(Number(first)+Number(second)))}}>계산</button> 
    // </> 

    <div> 
      <div>현재 value는 {result}입니다.</div>
     <input type="text" ref={input} onChange={on}/> 
      <button type="button" onClick={handleClick}>Click to Reset</button> 
    </div> 


  )
};
export default App;