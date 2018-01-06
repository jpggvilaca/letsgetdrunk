import React from 'react';
import Main from './Main';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

const store = createStore(reducer);

const App = () => (
  <Provider store={store} >
    <Main />
  </Provider>
);

export default App;
