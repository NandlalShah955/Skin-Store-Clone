import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import "./Carts.css"
import { useNavigate } from "react-router-dom";
// import { useStateContext } from '../Context/CartContext';

const Carts = () => {
    const [data, setdata] = useState([]);
    const [fetchData, setFetchData] = useState([]);

    const showData = (id)=> {
        console.log(id, "productData");
    }

    useEffect(()=> {
        axios.get("https://blossombackend.onrender.com/carts")
        .then((res)=> {
            setdata(res.data)
            // console.log(res.data)
        })
    }, [])
    console.log(data, "cartData")
    const navigate = useNavigate();

    // const {
    //     decQty,
    //     incQty,
    //     qty,
    //     onRemove,
    //     cartItems,
    //     totalPrice,
    //     totalQuantities,
    //     toggleCartItemQuantity,
    // } = useStateContext();

// console.log(el,qty)
    return (
        <div>
            <div>
                {
                    data.map((el)=> (
                        <h1>{el.productId}</h1>
                    ))
                }
            </div>
        </div>
    )
};


export default Carts
