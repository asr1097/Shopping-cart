import React, { useState, useEffect } from "react";
import ShopItem from "./ShopItem";
import Loader from "./Loader";

import "../styles/Shop.css";

const Shop = (props) => {

    const [data, setData] = useState([])

    const handleAdd = (ev) => {
        let id = ev.target.id;
        id = parseInt(id)
        let obj = data.find(item => item.id === id)
        props.addToCart(obj)
    }

    const fetchItems = async() => {
        const data = await fetch("https://shoes-collections.p.rapidapi.com/shoes", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "shoes-collections.p.rapidapi.com",
                "x-rapidapi-key": "1144e66123msha04579d5096ccbdp1a6417jsn9749c1a59fe0"
            }
        });

        const dataJSON = await data.json();

        setData(dataJSON)
        let storageData = JSON.stringify(dataJSON)
        localStorage.setItem('data', storageData)
    }

    useEffect(() => {
        if(localStorage.length > 0) {
            let data = localStorage.getItem('data')
            data = JSON.parse(data)
            setData(data)
            return;
        }
        fetchItems();
    }, []);

    return (
        <div className="shopMain">
        <div className="shopDiv">
            {data.length === 0 ? <Loader /> :
            <div className="itemsDiv">
                {data.map(item => {
                    return <ShopItem 
                        key={item.id}
                        id={item.id}
                        img={item.image}
                        name={item.name}
                        price={item.price}
                        handleAdd={handleAdd}
                    />
                })}
            </div>}
        </div>
        </div>
    );
};

export default Shop;