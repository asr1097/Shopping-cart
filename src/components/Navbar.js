import React from "react";
import { Link } from "react-router-dom";

import cartIcon from "../images/cart.png";
import "../styles/Navbar.css";

const Navbar = (props) => {
    return (
        <nav>
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/shop">
                <li>Shop</li>
            </Link>
            <Link to="/about">
                <li>About</li>
            </Link>
            <Link className="cart" to="/cart">
                <li className="cartDiv"><img src={cartIcon} alt="Cart"></img><span className="cartCount">({props.length})</span></li>
            </Link>
        </nav>
    );
};

export default Navbar;