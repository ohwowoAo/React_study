import React, { useEffect, useRef, useState } from 'react';

const App = () => {
  // const [value, setValue] = useState(''); 
  // const ref = useRef(); 
  // useEffect(()=>{
  //   const handleClick = () => {
  //     console.log(ref.current.value);
  //   }
    
  //   document.addEventListener('click', handleClick);
  //   // return () => {
  //   //   document.removeEventListener('click', handleClick);
  //   // }
  // },[]);

  // return ( 
  //   <input 
  //     type='number' 
  //     value={value}
  //     ref={ref}
  //     onChange={(e) => { setValue(e.target.value); }} 
  //   /> 
  // );

  // const [value, setValue] = useState(''); 
  // const [write, setWrite] = useState(false); 

  // useEffect(()=>{
  //     const handleClick = () => {
  //       setWrite(true)
  //       // console.log(write)
  //     }
      
  //     document.addEventListener('click', handleClick);
  //     return () => {
  //       document.removeEventListener('click', handleClick);
  //     }
  // },[value]);

  // return ( 
  //   <div> 
  //     <input 
  //       value={value}
  //       type='number' 
  //       onChange={(e) => { setValue(e.target.value); }} 
  //     /> 
  //     {
  //       write? value : ''
  //     }
  //     {console.log(write)}
  //   </div> 
  // ); 

  // const [value, setValue] = useState(''); 
  // useEffect(()=>{
  //   setTimeout(() => {console.log({value})}, 3000);
  // },[value])
  // return ( 
  //   <input 
  //     type='number' 
  //     value={value}
  //     onChange={(e) => { setValue(e.target.value); }} 
  //   /> 
  // ); 


  // const [value, setValue] = useState('');
  // const [num, setNum] = useState(3);
  // useEffect(()=>{
  //   setInterval(() => console.log(setNum(0)) , 3000);
    
  // },[]);

  // return ( 
  //   <div> 
  //     <input 
  //       type='number' 
  //       value={value}
  //       onChange={(e) => { setValue(e.target.value); }} 
  //     /> 
  //     {console.log(num)} 
  //   </div> 
  // );

  const [value, setValue] = React.useState('');
  const [left, setLeft] = React.useState();
  const [result, setResult] = React.useState();

  useEffect(() => {
    
    setLeft(3);
    const intervalTimerId = setInterval(() => {
      setLeft(prev => prev - 1);
    }, 1000)
    
    const timeoutTimerId = setTimeout(() => {
      setResult (value)
      clearInterval(intervalTimerId);
    }, 3000)

    function cleanup(){
      clearInterval(intervalTimerId);
      clearTimeout(timeoutTimerId);
    };
    return cleanup;
  }, [value]);

  return (
    <>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <br />
      남은시간 {left}초
      값은 {result}
    </>
  );

};

export default App;