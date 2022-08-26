import React from 'react';
import {connect} from 'react-redux';

function App (props) {
  return (
    <div>
      <div>{props.state[0].name}</div>
    </div>
  );
};

function 함수명(state){ //state를 props화시킴
  return {
    state : state
  }
}

export default connect(함수명)(App)

// export default App;