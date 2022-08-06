import React, { useEffect, useRef, useState } from 'react';

const App = () => { 
  // const [value, setValue] = React.useState(''); 
  // const inputFocus = useRef(null);

  // const handleClick = () => { 
  // setValue('');
  // if(inputFocus.current){
  //   inputFocus.current.focus();
  // }
  // } 


  // return ( 
  //   <div> 
  //     <input type="text" ref={inputFocus} value={value} onChange={(e) => setValue(e.target.value)} /> 
  //     <button type="button" onClick={handleClick}>Click to Reset and Focus!</button> 
  //   </div> 
  // ); 




  // 회원가입 페이지 만들기

//   const [ idvalue, setIdvalue ] = useState('');
//   const [ psvalue, setPsvalue ] = useState('');
//   // const [ joinfalse, setJoinfalse ] = useState(true);
//   const inputFocus = useRef(null);
//   const passFocus = useRef(null);
//   const handleClick = () => { 
//     alert('회원가입 성공!'); 
//   }; 
//   const joinfalse = () => { 
//     alert('회원가입 실패!'); 
//     // setIdvalue('');
//     if(psvalue.length >= 12 && psvalue.length >= 12){
//       setIdvalue('');
//       inputFocus.current.focus();
//     }
//     if(idvalue.length >= 6 && idvalue.length <= 20){
//       setPsvalue('');
//       passFocus.current.focus();
//     }
//   }; 

//   return ( 
//     <div> 
//       <InputData inputFocus={inputFocus} idvalue={idvalue} setIdvalue={setIdvalue} psvalue={psvalue}/>
//       <button type="button" 
//       onClick= {idvalue.length >= 6 && idvalue.length <= 20 && psvalue.length >= 12 && psvalue.length ? handleClick : joinfalse } 
//       disabled={idvalue.length === 0 || psvalue.length === 0 }>
//         회원가입</button> 
//     </div> 
//   );  
// }

// function InputData(props){
//   return(
//     <>
//       <div> 
//           <input 
//             type="text" 
//             name='id' 
//             ref={props.inputFocus}
//             value={props.idvalue}
//             onChange={(e) => props.setIdvalue(e.target.value)}
//             placeholder='6글자 이상 20글자 이하' 
//           /> 
//           { 
//             props.idvalue.length >= 6 && props.idvalue.length <= 20 ? null : '유효하지않는 아이디입니다'
//           }
//       </div> 
//       <div> 
//         <input 
//           type="text" 
//           name='password' 
//           ref={props.passFocus}
//           value={props.psvalue}
//           onChange={(e) => props.setPsvalue(e.target.value)}
//           placeholder='12글자 이상 20글자 이하' 
//         /> 
//         { 
//           props.psvalue.length >= 12 && props.psvalue.length <= 20 ? null : '유효하지않는 비밀번호입니다'
//         }
//       </div> 
//     </>
//   )

// }


//실습1-0

const [value, setValue] = React.useState(''); 
useEffect(()=> {
  setTimeout(()=>{ console.log(value); }, 3000);
  
},[value])

  return ( 
    <input 
      type='number' 
      onChange={(e) => { setValue(e.target.value); }} 
    /> 
  ); 
} 
  

export default App;