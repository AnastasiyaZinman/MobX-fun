import React, { Component } from 'react';
// import { observable, action } from "mobx";
import { observer, inject } from 'mobx-react';
@inject("store")
class IcecreamView extends Component {

    updateIceCreamInfo =()=>{
            this.props.store.currentId=this.props.iceCream.id;
            this.props.store.showComponent=true;
    }
        
    render(){
    return(
        <li key={this.props.iceCream.id} id={this.props.iceCream.id}>{this.props.iceCream.flavor}
          <span style={{ backgroundColor: this.props.iceCream.color }}><img src={this.props.iceCream.img} alt={this.props.iceCream.favor}/></span>
          <br/>
          <button id={this.props.iceCream.id} type="button" className="btn btn-primary" onClick={() => {this.updateIceCreamInfo()}}>Edit</button>
          <button id={this.props.iceCream.id} type="button" className="btn btn-danger" onClick={() => { this.props.store.deleteItem(this.props.iceCream.id)} }>Delete</button>
          </li>
    )}
}
export default IcecreamView;