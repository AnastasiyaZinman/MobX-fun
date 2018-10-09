import { observable, action, computed } from "mobx";

class IceCreamStore {
	@observable iceCreams = [{flavor:'Chocolate',color:'black', img:"http://icons.iconarchive.com/icons/icons-land/3d-food/256/IceCream-Cone-icon.png"}]; 
	@observable filterString = "";

	@computed get iceCreamsCount() {
		return this.iceCreams.length;
	}
	@computed get iceCreamsFilteredCount() {
		return this.filterIceCreams.length;
	}
	@action addIceCream = (flavor, color,imgPath) => {
		if(flavor && color && imgPath)
		this.iceCreams.push({ flavor, color, imgPath })
		else alert("Type flavor and color!");
	}


	@computed get filterIceCreams() {
		return this.iceCreams.filter(iceCream => {
			return iceCream["flavor"].toLowerCase().includes(this.filterString.toLowerCase());

		})

	}
}

const store = new IceCreamStore();
export default store;