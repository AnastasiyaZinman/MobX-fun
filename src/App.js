import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import store from './js/store/IcecreamStore';
// import {IceCreamStore} from './js/store/IcecreamStore';
class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Mobx</h1>
      </header>
      <ul>
        {this.props.store.iceCreams.map((iceCream,i)=><li key={i}>{iceCream.flavor}</li>)}
      </ul>
    </div>
    );
  }
}

export default App;
