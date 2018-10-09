import { observable, action, computed } from "mobx";

class IceCreamStore {
	@observable iceCreams = [{flavor:'Chocolate',color:'black'}]; 
	@observable filterString = "";

	@computed get iceCreamsCount() {
		return this.iceCreams.length;
	}
	@computed get iceCreamsFilteredCount() {
		return this.filterIceCreams.length;
	}
	@action addIceCream = (flavor, color) => {
		this.iceCreams.push({ flavor, color });
	}


	@computed get filterIceCreams() {
		return this.iceCreams.filter(iceCream => {
			return iceCream["flavor"].toLowerCase().includes(this.filterString.toLowerCase());

		})

	}
}

const store = new IceCreamStore();
export default store;