import React from 'react';
import { Provider } from 'react-redux';
import CounterContainer from './containers/CounterContainer';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  );
};

export default App;