import RouteSwitch from './components/RouteSwitch';
import { useState } from "react";

import './styles/App.css';

function App() {

  const [cartItems, setCartItems] = useState([]);
 
  const addToCart = (item) => {
    let obj = cartItems.find(el => el.id === item.id)
    if(obj) {increaseValue(null, obj)}
    else {
      let price;
      if (item.price.charAt(0) !== "$") {price = "$" + item.price}
      else {price = item.price}
      let obj = {
        ...item,
        value: 1,
        price: price
      };
      setCartItems([...cartItems, obj])
    }
  }

  const increaseValue = (ev = null, item) => {
    if(ev) {
      let id = ev.target.id;
      id = parseInt(id);
      let index = cartItems.findIndex(el => el.id === id)
      let obj = cartItems[index]
      obj = {
        ...obj,
        value: obj.value + 1
      }
      let newItems = cartItems;
      newItems.splice(index, 1, obj)
      setCartItems([...newItems])
    }
    else {
      let obj = {
        ...item,
        value: item.value + 1
      }
      let index = cartItems.findIndex(el => el.id === obj.id)
      let newItems = cartItems;
      newItems.splice(index, 1, obj);
      setCartItems([...newItems])
    };
  };

  const decreaseValue = (ev) => {
    let id = ev.target.id;
    id = parseInt(id);
    let index = cartItems.findIndex(el => el.id === id)
    let obj = cartItems[index]
    if(obj.value === 1) {return}
    obj = {
      ...obj,
      value: obj.value - 1
    }
    let newItems = cartItems;
    newItems.splice(index, 1, obj)
    setCartItems([...newItems])
    
  }

  const handleValueChange = (ev) => {
    let id = parseInt(ev.target.id);
    let newValue = parseInt(ev.target.value);
    let index = cartItems.findIndex(item => item.id === id)
    let obj = cartItems[index];
    obj.value = newValue;
    let newItems = cartItems;
    newItems.splice(index, 1, obj)
    setCartItems([...newItems])
  }

  const handleRemove = (ev) => {
    let id = parseInt(ev.target.id);
    let index = cartItems.findIndex(item => item.id === id);
    let newItems = cartItems;
    newItems.splice(index, 1);
    setCartItems([...newItems]);
  }

  return (
    <div className="App">
      <RouteSwitch 
        addToCart={addToCart} 
        cartItems={cartItems}
        handleValueChange={handleValueChange}
        handleRemove={handleRemove}
        increase={increaseValue}
        decrease={decreaseValue}
        setCartItems={setCartItems}
      />
    </div>
  );
}

export default App;
