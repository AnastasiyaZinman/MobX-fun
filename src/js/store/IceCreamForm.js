import React, { Component } from 'react';
import { observable, action } from "mobx";
import { observer, inject } from 'mobx-react';
@inject(allStores => ({
    addIceCream: allStores.store.addIceCream,
    filterTerm: allStores.store.filterString
}))
@observer
class IcecreamForm extends Component {
    @observable iceCream = {
        flavor: "",
        color: "",
        id: 1,
        img:""
    };
    @action inputChange = (e) => {
        this.iceCream[e.target.name] = e.target.value;
    }
    submitForm = (e) => {
        e.preventDefault();
        console.log("this ImagePath",this.iceCream.img);
        this.props.addIceCream(this.iceCream["flavor"], this.iceCream["color"],this.iceCream["id"], this.iceCream["img"]);
        this.iceCream.flavor = "";
        this.iceCream.color = "";
        this.iceCream.id = this.iceCream.id + 1;
        this.iceCream.img ="";
    }

    render() {
        console.log(this.iceCreams);
        return (
            <div className="container text-center">
            {/* <div className="row"> */}
                <div className="col-sm-4">
                Flavor:<br/>
                <input type="text" name="flavor" onChange={this.inputChange} value={this.iceCream.flavor} />
                </div>
                
                <div className="col-sm-4 ">
                Color: <br/>
                <input type="text" name="color" onChange={this.inputChange} value={this.iceCream.color} />
                </div>
               
                <div className="col-sm-4">
                Image: <br/>
                <input type="text" name="img" onChange={this.inputChange} value={this.iceCream.img} />                
                <input className="text-center" type="button" onClick={this.submitForm} value="Add IceCream" />
               
                </div>
                {/* </div>  */}
            
            </div>
           );
    }
}
export default IcecreamForm;

