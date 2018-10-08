import React, { Component } from 'react';
import { action } from "mobx";
import {observer} from 'mobx-react';
import { observable } from "mobx";
@observer
class IcecreamForm extends Component {
    
    @observable iceCream = {flavor: "",
                    color: ""};
    iceCreams = [];

    @action inputChange = (e) => {
        this.iceCream[e.target.name] = e.target.value;
    }
    submitForm = (e) => {
        this.addIceCream(this.iceCream["flavor"],this.iceCream["color"]);
        console.log(this.state);
    }
    addIceCream(flavor,color) {
        console.log(this.iceCreams);
        console.log("flavor",flavor,"color",color)
		this.iceCreams.push({flavor, color });
    }
    render() {
        console.log(this.iceCreams);
      return (
        <div className="container">
          <input type="text" name="flavor" onChange={this.inputChange} value={this.iceCream.flavor}/>
          <input type="text" name="color" onChange={this.inputChange} value={this.iceCream.color}/>
          <input type="button" onClick={this.submitForm} value="submit" /> </div> ); 
      } 
  }
  export default IcecreamForm;
//   const store = new IcecreamForm();
// export default store;