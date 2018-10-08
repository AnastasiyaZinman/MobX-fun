import { observable } from "mobx";

class IceCreamStore {
	@observable iceCreams = [];
 
        addIceCream(flavor ,color) {
		this.iceCreams.push({ flavor, color });
	}
}

const store = new IceCreamStore();
export default store;