import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import IcecreamForm from './js/store/IcecreamForm'
import { observable, action, computed } from '../node_modules/mobx';
import IcecreamView from './js/IcecreamView';

@inject("store")
@observer class App extends Component {
  @action filterChange = (e) => {
    this.props.store.filterString = e.target.value;
  }
  render() {
    console.log(this.filterString);
    return (
      <div className="App">
     <h2>Add Ice Cream:</h2>
       <div className="row text-left ml-4">
      <IcecreamForm />
        <span className="ml-2">Search: <input type="text" placeholder="Type filter text" onChange={this.filterChange} /></span><br/> 
        </div>
        {(this.props.store.filterString!==''? "Filter":"")} {this.props.store.filterString}<br/> Result: {this.props.store.iceCreamsFilteredCount}/{this.props.store.iceCreamsCount}<br/>
        <ul>
          {this.props.store.filterIceCreams.map((iceCream, i) => 
         <IcecreamView 
         key={iceCream.id}
         iceCream={iceCream}/>
         )}
        </ul>
       
      </div>
    );
  }
}
export default App;
