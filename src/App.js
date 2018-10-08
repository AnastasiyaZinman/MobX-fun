import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import './App.css';
import IcecreamForm from './js/store/IcecreamForm' 
@inject("store")
@observer class App extends Component {
  render() {
    return (
      <div className="App"> 
        <ul>
          {this.props.store.iceCreams.map((iceCream,i)=><li key={i}>{iceCream.flavor}</li>)}
        </ul>
        <IcecreamForm />
      </div>
    );
  }
}
export default App;
