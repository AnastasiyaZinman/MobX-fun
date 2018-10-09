import { observable, action, computed } from "mobx";

class IceCreamStore {
	@observable iceCreams = [
		{ flavor: 'Chocolate', color: 'black', id: 0, imgPath: "http://icons.iconarchive.com/icons/icons-land/3d-food/256/IceCream-Cone-icon.png" }];
	@observable filterString = "";
	@observable showComponent: false;
	@observable currentId: -1;

	@computed get iceCreamsCount() {
		return this.iceCreams.length;
	}
	@computed get iceCreamsFilteredCount() {
		return this.filterIceCreams.length;
	}
	@action closeUpdateModal = () => {
		this.showComponent = false;
	}
	@action addIceCream = (flavor, color, id, imgPath) => {
		console.log("imgPath", imgPath)
		if (flavor && color && imgPath)
			this.iceCreams.push({ flavor, color, id, imgPath })
		else alert("Type flavor and color!");
	}
	@action deleteItem = (id) => {
		let filteredIceCreams = this.iceCreams.filter(iceCream => iceCream.id !== id);
		this.iceCreams.replace(filteredIceCreams);
	}
	findIceCreamIndexById = (id) => {
		let index;
		 this.iceCreams.forEach((iceCream, i) => {
			if (iceCream.id === id)
			return index=i
		 })
		return index
	}
	@action updateIceCreamInfo = (newData) => {
		let index = this.findIceCreamIndexById(this.currentId);
		console.log("newdata",newData);
		this.changeIceCreamProperties(index,newData);
		console.log("UPDATED",this.iceCreams[index])
	}
	@action changeIceCreamProperties = (index,newData) => {
		for (let key in newData) {
		// console.log(key,"  ",this.iceCreams[index][key])
		this.iceCreams[index][key] = newData[key]; //[] for variable, . just for key-text
		}
	}


	@computed get filterIceCreams() {
		return this.iceCreams.filter(iceCream => {
			return iceCream["flavor"].toLowerCase().includes(this.filterString.toLowerCase());

		})

	}
}

const store = new IceCreamStore();
window.store = store;
export default store;