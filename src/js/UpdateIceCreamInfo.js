import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action, computed } from "mobx";
import './clientInfo.css';
@inject("store")
@observer
class UpdateIceCreamInfo extends Component {
    @observable 
    newIceCreamInfo={
        flavor: this.props.store.iceCreams[this.props.store.currentId].flavor,
        color: this.props.store.iceCreams[this.props.store.currentId].color,
        img:this.props.store.iceCreams[this.props.store.currentId].imgPath
    }
    @action inputChange = (e) => {
        this.newIceCreamInfo[e.target.name] = e.target.value;
    }

    updateData = ()=>{
console.log('Clicked')
        this.props.store.updateIceCreamInfo(
            this.newIceCreamInfo.flavor,
            this.newIceCreamInfo.color,
            this.newIceCreamInfo.img
        )
        
    }

render()
{console.log("current ID", this.props.store.currentId)
return(
<div className="modal-body">
        <button type="button" className="close" onClick={this.props.store.closeUpdateModal}>
            <span aria-hidden="true">&times;</span>
        </button>
        <h5>Change Ice Cream Info</h5>
        <div className="container">
            <div className="row">
               <div className="col col-w">Flavor:</div>
                    <div className="col col-w">
                        <input type="text" name="flavor" onChange={this.inputChange} value={this.newIceCreamInfo.flavor}  />
                    </div>
                    <div className="w-100"></div>
                    <div className="col col-w">Color:</div>
                    <div className="col col-w">
                        <input type="text"name="color" onChange={this.inputChange} value={this.newIceCreamInfo.color} />
                    </div>
                    <div className="w-100"></div>
                    <div className="col col-w">Image:</div>
                    <div className="col col-w">
                        <input type="text" name="img" onChange={this.inputChange} value={this.newIceCreamInfo.img} />
                    </div>
            </div>
                <button type="button" className="btn btn-info btn-update" onClick={this.updateData}>Update</button>
                 {/* <input type="button" className="btn btn-info" value="Input Button" /> */}
        </div>
    </div>
)
}
}
export default UpdateIceCreamInfo;