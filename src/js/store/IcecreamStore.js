import { observable, action, computed } from "mobx";

class IceCreamStore {
	@observable iceCreams = [
	{flavor:'Chocolate',color:'black', id: 0, img:"http://icons.iconarchive.com/icons/icons-land/3d-food/256/IceCream-Cone-icon.png"}]; 
	@observable filterString = "";
	@observable showComponent: false;
	@observable currentId: 0;

	@computed get iceCreamsCount() {
		return this.iceCreams.length;
	}
	@computed get iceCreamsFilteredCount() {
		return this.filterIceCreams.length;
	}
	@action closeUpdateModal =()=>{
	this.showComponent = false;
	}
	@action addIceCream = (flavor, color, id,imgPath) => {
		console.log("imgPath",imgPath)
		if(flavor && color && imgPath)
		this.iceCreams.push({ flavor, color,id, imgPath })
		else alert("Type flavor and color!");
	}
	@action deleteItem =(id) =>{
		let filteredIceCreams = this.iceCreams.filter(iceCream => iceCream.id !== id);
		this.iceCreams.replace(filteredIceCreams);
	}


	@computed get filterIceCreams() {
		return this.iceCreams.filter(iceCream => {
			return iceCream["flavor"].toLowerCase().includes(this.filterString.toLowerCase());

		})

	}
}

const store = new IceCreamStore();
export default store;