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
        color: ""
    };
    @action inputChange = (e) => {
        this.iceCream[e.target.name] = e.target.value;
    }
    submitForm = (e) => {
        e.preventDefault();
        this.props.addIceCream(this.iceCream["flavor"], this.iceCream["color"]);
        this.iceCream.flavor = "";
        this.iceCream.color = "";
    }

    render() {
        console.log(this.iceCreams);
        return (
            <div className="container">
            {/* -={this.props.filterTerm}=- */}
                <input type="text" name="flavor" onChange={this.inputChange} value={this.iceCream.flavor} /><br />
                <input type="text" name="color" onChange={this.inputChange} value={this.iceCream.color} />
                <input type="button" onClick={this.submitForm} value="submit" /> </div>);
    }
}
export default IcecreamForm;

