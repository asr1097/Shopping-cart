import React from "react";

import "../styles/Item.css";

const ShopItem = (props) => {

    let price;
    if (props.price.charAt(0) !== "$") {price = "$" + props.price}
    else {price = props.price}

    return (
        <div className="item">
            <img src={props.img} alt="Shoe"></img>
            <label className="nameLabShop">{props.name}</label>
            <label className="priceLabShop">{price}</label>
            <button id={props.id} onClick={props.handleAdd}>ADD TO CART</button>
        </div>
    );
};

export default ShopItem;