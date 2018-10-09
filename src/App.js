import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import './App.css';
import IcecreamForm from './js/store/IcecreamForm' 
import { observable, action } from '../node_modules/mobx';
@inject("store")
@observer class App extends Component {
@observable  filterString="";
@action filterChange = (e) => {
    this.filterString = e.target.value;
}

  render() {
    console.log(this.filterString);
    return (
      <div className="App"> 
      <input type="text" placeholder="Type filter text" onChange={this.filterChange}/>
        <ul>
          {this.props.store.iceCreams.map((iceCream,i)=><li key={i}>{iceCream.flavor}</li>)}
        </ul>
        <IcecreamForm />
      </div>
    );
  }
}
export default App;
