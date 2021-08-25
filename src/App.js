import React, { Component } from 'react';
import { Films } from './films'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Films favNumber={9} fname={"Shavonne"} />
      </div>
    )
  }
}

export default App;
