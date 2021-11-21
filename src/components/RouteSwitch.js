import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Shop from "./Shop";
import Home from "./Home";
import About from "./About";
import Cart from "./Cart";
import Checkout from "./Checkout";

const RouteSwitch = (props) => {
    return (
        <BrowserRouter>
            <Navbar length={props.cartItems.length}/>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/shop" element={<Shop addToCart={props.addToCart}/>}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/cart" element={<Cart 
                    cartItems={props.cartItems}
                    handleChange={props.handleValueChange}
                    handleRemove={props.handleRemove}
                    increase={props.increase}
                    decrease={props.decrease}
                    setCartItems={props.setCartItems}/>}>
                </Route>
                <Route path="/checkout" element={<Checkout />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;