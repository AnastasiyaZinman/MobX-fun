import React, { Component } from 'react';
// import { observer, inject } from 'mobx-react';
import './clientInfo.css';
class UpdateIceCreamInfo extends Component {

render()
{
console.log("hererer");
return(
<div className="modal-body">
        <button type="button" className="close" onClick={this.closeBox}>
            <span aria-hidden="true">&times;</span>
        </button>
        <h5>Change Details</h5>
        <div className="container">
            <div className="row">
               <div className="col col-w">Name:</div>
                    <div className="col col-w">
                        <input type="text" name="fname"  />
                    </div>
                    <div className="w-100"></div>
                    <div className="col col-w">Surname:</div>
                    <div className="col col-w">
                        <input type="text" name="fname"  />
                    </div>
                    <div className="w-100"></div>
                    <div className="col col-w">Country:</div>
                    <div className="col col-w">
                        <input type="text" name="fname" />
                    </div>
            </div>
                <button type="button" className="btn btn-info btn-update" >Update</button>
                 {/* <input type="button" className="btn btn-info" value="Input Button" /> */}
        </div>
    </div>
)
}
}
export default UpdateIceCreamInfo;