import React, { Component } from 'react';
class IcecreamForm extends Component {
    constructor(){
      super();
      this.iceCream = {flavor: "",
                    color: ""};
    }
    inputChange = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }
    submitForm = (e) => {
        console.log(this.state);
    }
    render() {
      return (
        <div className="container">
          <input type="text" name="flavor" onChange={this.inputChange} value={this.iceCream.flavor}/>
          <input type="text" name="color" onChange={this.inputChange} value={this.iceCream.color}/>
          <input type="button" onClick={this.submitForm} value="submit" /> </div> ); 
      } 
  }
  export default IcecreamForm;
//   const store = new IceCreamForm();
// export default store;