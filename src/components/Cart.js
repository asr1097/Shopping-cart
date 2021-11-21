import React from "react";
import {useNavigate} from "react-router-dom";

import CartItem from "./CartItem";
import uniqid from "uniqid";

import "../styles/Cart.css";

const Cart = (props) => {

    const navigate = useNavigate();

    const checkoutRedirect = () => {
        props.setCartItems([]);
        navigate("/checkout");
    }

    return (
        <div className="cartDiv">
            <div className="cartItems">
                {props.cartItems.length !== 0 ? props.cartItems.map(item => {
                        return <CartItem
                            key={uniqid()}
                            img={item.image}
                            name={item.name}
                            price={item.price}
                            value={item.value}
                            id={item.id}
                            handleChange={props.handleChange}
                            handleRemove={props.handleRemove}
                            increase={props.increase}
                            decrease={props.decrease}
                        />})
                        :   <div className="emptyCart">
                                <h1>Cart is empty</h1>
                                <button onClick={() => navigate("/shop")} className="shopBtn">GO TO SHOP</button>
                            </div>}
                     {props.cartItems.length !== 0 ?
                        <div className="cashout">
                            <p className="total">
                                Total: ${props.cartItems.reduce((prev, cur) => {
                                    return prev + (parseInt(cur.price.slice(1, cur.price.length)) * parseInt(cur.value))
                                }, 0)}
                            </p>
                            <button className="buyBtn" onClick={checkoutRedirect}>BUY</button>
                        </div>
                        :
                        null}
            </div>
        </div>
    );
};

export default Cart;