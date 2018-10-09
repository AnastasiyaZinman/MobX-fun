import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './App.css';
import IcecreamForm from './js/store/IcecreamForm'
import { observable, action, computed } from '../node_modules/mobx';

@inject("store")
@observer class App extends Component {
  @action filterChange = (e) => {
    this.props.store.filterString = e.target.value;
  }
  render() {
    console.log(this.filterString);
    return (
      <div className="App">
      Add Ice Cream:<IcecreamForm />
        <input type="text" placeholder="Type filter text" onChange={this.filterChange} /><br/>
        {(this.props.store.filterString!==''? "Filter":"")} {this.props.store.filterString}<br/> Result: {this.props.store.iceCreamsFilteredCount}/{this.props.store.iceCreamsCount}<br/>
        <ul>
          {this.props.store.filterIceCreams.map((iceCream, i) => <li key={i}>{iceCream.flavor}</li>)}
        </ul>
        
      </div>
    );
  }
}
export default App;
