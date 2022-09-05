import React, { useEffect, useState } from 'react';

const App = () => {
  const [num, setNum] = useState(0);
  const [alert, setAlert] = useState(true);

  useEffect(()=> {
    setTimeout (() => {setAlert(false)}, 2000)
  },[])
  
  return (
    <div>
      <div>{num}</div>
      <button onClick={()=> setNum(prev => prev +1)}>+</button>
      <button onClick={()=> setNum(prev => prev -1)}>-</button>
      {
        alert ?<div className='alert'>2초 지나면 사라짐</div> : null
      }
      
    </div>
  );
};

export default App;