class IceCreamStore {
    iceCreams = [];
 
    addIceCream(flavor, color) {
    this.iceCreams.push({ flavor, color });
    // this.setState({store: this.store.iceCreams});
    }
    
}

const store = new IceCreamStore();
export default store;