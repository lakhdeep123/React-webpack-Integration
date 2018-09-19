
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
//import Routes from './Routes';

import TestComponent from './components/TestComponent';

class App extends Component {
  render() {
    return (
      
      
      <Provider store={store}>
          <TestComponent/>
      </Provider>

     
    
    
    );
  }
}

export default App;
