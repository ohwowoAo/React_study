import React from 'react';
import Board from './components/Board';
import Clock from './components/Clock';
import First from './components/First';
import Loading from './components/Loading';
import Loading2 from './components/Loading2';
import Login from './components/Login';
import Timer from './components/Timer';


const App = () => {
  return (
    <div>
      {/* <First name="나은정" number={5}/> */}
      {/* 숫자는 {중괄호} 써써 받아와야함 */}
      <hr />

      {/* <Clock /> */}
      <hr />

      {/* <Board category="영화"/> */}
      <hr />
      
      {/* <Loading /> */}
      <hr />

      {/* <Loading2 /> */}
      <hr />

      <Timer s={60}/>
      {/* <Timer s={40}/> */}
      
      {/* <Login /> */}
    </div>
  );
};

export default App;