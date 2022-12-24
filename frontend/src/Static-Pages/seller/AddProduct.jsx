import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import styles from "./AddProduct.module.css";
// import facebook from "./logo/Facebook_F_icon.svg.png";
// import google from "./logo/Google__G__Logo.svg.png";

const AddProduct = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("")
    const [description, setDepcription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const id  = "637ba8fd62bd5e6a227e2813"
    const postDetails = (imageUrl) => {

        if (imageUrl === undefined) {
          alert("Please seclect an Image!")
          return;
        }
    
        if (imageUrl.type === "image/jpeg" || imageUrl.type === "image/png" || imageUrl.type === "image/jpg") {
          const data = new FormData();
          data.append("file", imageUrl);
          data.append("upload_preset", "data-storage");
          data.append("cloud_name", "dztva4gbe");
          fetch("https://api.cloudinary.com/v1_1/dztva4gbe/image/upload", {
            method: "post",
            body: data,
          })
            .then((res) => res.json())
            .then((data) => {
              setImageUrl(data.url.toString());
              // console.log(data);
              console.log(data.url.toString())
              return {
                data:data.url.toString()
    
              }
            })
            .catch((er) => {
              console.log(er);
            });
        } else {
            alert("Please seclect an Image!")
            return;
        }
      };

      const handleSubmit = (e)=> {
        e.preventDefault();
        // console.log({brand: brand, description: description, imgUrl: imageUrl ,name: name, price: price});
        // setBrand("");
        // setDescription("")
        // setImageUrl("")
        if(!localStorage.getItem("token")){
          alert("login please")
        }
        console.log({title: title,price: price, description:description, image:imageUrl, rating: rating, category: category, quantity: quantity, userId: id});
        axios
          .post("https://blossombackend.onrender.com/products", {title: title,price: price, description:description, image:imageUrl, rating: rating, category: category, quantity: quantity, userId: id}, {
            headers: {
              authorization: id,
            },
          })
          .then((res) => {
            alert("Product added successfully...")
          })
          .catch((e)=> {
            console.log("role err",e)
            alert("Product added successfully")
          })
      }
    
  
  return (
    <div className={styles.main_login}>
      <div className={styles.new_existing}>
        <div className={styles.existing_user}>
          <form
            className={styles.existing_content}
            onSubmit={handleSubmit}
          >
            <h2 style={{fontFamily: "cursive", color: "red", marginBottom: "10px"}}>Add New Product</h2>

            <label htmlFor="">*Title of the product</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e)=> setTitle(e.target.value)}
              required
            />
            <label htmlFor="">*Price of the product</label>
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e)=> setPrice(e.target.value)}
              required
            />

            <label htmlFor="">*Rating of the product</label>
            
            <input
              type="number"
              name="rating"
              value={rating}
              onChange={(e)=> setRating(e.target.value)}
              required
            />
            <label htmlFor="">*Category of the product</label>
            
            <input
              type="text"
              name="category"
              value={category}
              onChange={(e)=> setCategory(e.target.value)}
              required
            />
            <label htmlFor="">*Quantity of the product</label>
            
            <input
              type="number"
              name="quantity"
              value={quantity}
              onChange={(e)=> setQuantity(e.target.value)}
              required
            />
            <label htmlFor="">*Description of the product</label>
            
            <input
              type="text"
              name="depcription"
              value={description}
              onChange={(e)=> setDepcription(e.target.value)}
              required
            />

            <label htmlFor="">*Image of the product</label>
            
            <input
              type="file"
              name="avatar"
              onChange={(e)=>postDetails(e.target.files[0])}
            />
            
            <button className={styles.sing_in_button}>Add Product</button>
           
            
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default AddProduct;
