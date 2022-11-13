import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import "./Carts.css"
import { useNavigate } from "react-router-dom";
// import { useStateContext } from '../Context/CartContext';

const Carts = () => {
    
    const [data, setdata] = useState([]);
    const [fetchData, setFetchData] = useState([]);
    // let fetchData = []

    let store = []
    data.map((el)=> (
        store.push(el.productId)
        // <div>check</div>
        
    ))

    // useEffect(()=> {
    //     const cartgetData = JSON.parse(localStorage.getItem("cartItems"))
    //     // console.log("dede", cartgetData);
    //     setdata(cartgetData)
    // },[])
    // const cartgetData = JSON.parse(localStorage.getItem("cartItems"))
    // console.log("data dede", data)

    console.log(store,"store")
    useEffect(()=> {
        axios.get("https://blossombackend.onrender.com/carts")
        .then((res)=> {
            setdata(res.data)
        })
        
    }, [])

    useEffect(()=>{
        store.map((el)=> (
            axios.get(`https://blossombackend.onrender.com/products/Sale/${el}/spec`)
            .then(res=>{
                // console.log(res.data, "1111111111111111111")
                let d = res.data;
                // if(d){
                //     fetchData.push(d)
                // }
                if(d){
                    setFetchData(d)
                }
            })
        ))
    },[data])
    console.log(fetchData, "setFetchData")
    const navigate = useNavigate();

    // const deleteItem = (id)=> {
    //     axios.delete(``)
    // }

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
                    fetchData.map((el)=> (
                        <div>
                            <img src={el.image} width="200px"/>
                            <h2>Title: {el.title}</h2>
                            {el.price}

                        </div>
                    ))
                }
                
            </div>
        </div>
    )
};


export default Carts
