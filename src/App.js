import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {observer} from 'mobx-react';

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
      
      <ul>
          {this.props.store.iceCreams.map((iceCream,i)=><li key={i}>{iceCream.flavor}</li>)}
      </ul>
    </div>
    );
  }
}

export default App;
