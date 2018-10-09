import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './js/store/IcecreamStore';
import { Provider } from 'mobx-react';


window.store = store;
// window.store.addIceCream("Vanilla", "white","http://icons.iconarchive.com/icons/icons-land/3d-food/256/IceCream-Cone-icon.png");
// window.store.addIceCream("pistachio", "lightgreen","http://icons.iconarchive.com/icons/icons-land/3d-food/256/IceCream-Cone-icon.png");
ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<App store={store} />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
