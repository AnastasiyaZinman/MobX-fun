import { observable,action, computed } from "mobx";

class IceCreamStore {
	@observable iceCreams = [];
	@computed get iceCreamsCount(){
		return this.iceCreams.length;
	}
	@action addIceCream =(flavor ,color)=> {
		this.iceCreams.push({ flavor, color });
	}
}

const store = new IceCreamStore();
export default store;