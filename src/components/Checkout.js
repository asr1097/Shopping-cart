import React from "react";
import {useNavigate} from "react-router-dom";

import "../styles/Checkout.css";

const Checkout = () => {

    const navigate = useNavigate();

    return (
        <div className="checkoutDiv">
            <h1>Thanks for coming!</h1>
            <button onClick={() => navigate("/")}>GO BACK</button>
        </div>
    )
}

export default Checkout;