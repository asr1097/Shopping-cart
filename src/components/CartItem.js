import React from "react";

import plusIcon from "../images/plus.png";
import minusIcon from "../images/minus.png";
import deleteIcon from "../images/delete.png";
import "../styles/CartItem.css";

const CartItem = (props) => {
    return (
        <div className="cartItem">
            <img src={props.img} alt="shoe"></img>
            <div className="nameAndPriceDiv">
                <label className="nameLab">{props.name}</label>
                <label className="priceLab">{props.price}</label>
            </div>
            <div className="btnsDiv">
                <div className="valueDiv">
                    <img src={minusIcon} alt="minus" className="minusBtn" id={props.id} onClick={props.decrease}></img>
                    <input id={props.id} type="number" min="1" value={props.value} onChange={props.handleChange}></input>
                    <img src={plusIcon} alt="plus" className="plusBtn" id={props.id} onClick={props.increase}></img>
                </div>
                <img className="deleteBtn" src={deleteIcon} alt="delete" id={props.id} onClick={props.handleRemove}></img>
            </div>
        </div>
    )
}

export default CartItem;