import React from 'react'
import "./Carts.css"
import { useNavigate } from "react-router-dom";
import { useStateContext } from '../../Context/CartContext';

const Carts = () => {

    const navigate = useNavigate();

    const {
        decQty,
        incQty,
        qty,
        onRemove,
        cartItems,
        totalPrice,
        totalQuantities,
        toggleCartItemQuantity,
    } = useStateContext();


    return (
        <div>

            <div class="Cart_mainTitleCon">
                {cartItems.length >= 1 && (
                    <div class="Cart_AlertDiv">
                        <alert status="success">
                            You have qualified for: Select a gift for you or someone you
                            love when you spend $130 or more Don't forget to make your
                            selection below
                        </alert>
                    </div>
                )}
            </div>

            <div class="Cart_emptyCartCon">
                {cartItems.length < 1 && (
                    <div>
                        <p>There are currently no items in your cart.</p>
                        <button
                            backgroundColor="#2E3337"
                            color="white"
                            borderRadius={0}
                            _hover={{ bg: "teal.600" }}
                            onClick={() => navigate("/")}
                        >
                            CONTINUE SHOPPING
                        </button>
                    </div>
                )}
            </div>

            <h1 style={{color:"white"}}>Your Cart</h1>
            {cartItems.length >= 1 && (

                <div class="shopping-cart">

                    <div class="column-labels">
                        <label class="product-image">Items</label>
                        <label class="product-details">Product</label>
                        <label class="product-price">Price</label>
                        <label class="product-quantity">Removr</label>
                        <label class="product-removal">Quantity</label>
                        <label class="product-line-price">Total</label>
                    </div>
                    {cartItems.map((el) => (
                        <div class="product">


                            <div key={el.productBlock_productName} >
                                <div class="product-image">
                                    <img src={el.imageURL} alt={el.imageURL} />
                                </div>

                                <div class="product-details">
                                    <div class="product-title">{el.productBlock_productName}</div>
                                </div>
                                <div class="product-price">{el.productBlock_priceValue}</div>

                                {/* <div class="content">
                                    <span class="qt-minus"
                                        onClick={() =>
                                            toggleCartItemQuantity(
                                                el.productBlock_productName,
                                                "dec"
                                            )
                                        }>-</span>
                                    <span class="qt">{el.quantity}</span>
                                    <span class="qt-plus"
                                        onClick={() =>
                                            toggleCartItemQuantity(
                                                el.productBlock_productName,
                                                "inc"
                                            )
                                        }>+</span>
                                </div> */}
{/* 
                                <div class="product-quantity">
                                    <input type="number" value={el.quantity} min="1" />
                                    {el.quantity}
                                </div> */}
                                <div class="counter">
                                    <div class="btn"
                                        onClick={() =>
                                            toggleCartItemQuantity(
                                                el.productBlock_productName,
                                                "dec"
                                            )
                                        }
                                    >-</div>
                                    <div class="qt">{el.quantity}</div>
                                    <div class="btn"
                                        onClick={() =>
                                            toggleCartItemQuantity(
                                                el.productBlock_productName,
                                                "inc"
                                            )
                                        }
                                    >+</div>
                                </div>

                                <div class="product-line-price">{`${el.productBlock_priceValue * el.quantity
                                    }`}
                                </div>

                                <div class="product-removal">
                                    <button class="remove-product"
                                        onClick={() => onRemove(el)}>
                                        Remove
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}


                    <div class="totals">
                        <div class="totals-item totals-item-total">
                            <label>Card SubTotal:</label>
                            <div class="totals-value" id="cart-total">{`${totalPrice}`}</div>
                        </div>
                    </div>
                </div>
            )}


            {cartItems.length >= 1 && (
                <div class="Cart_CheckOutBtnDiv">
                    <button
                        class="checkout"
                        onClick={() => navigate("/")}>
                        CONTINUE SHOPPING
                    </button>


                    <button class="checkout"
                        onClick={() => navigate("/")}>
                        Checkout
                    </button>

                </div>
            )}









            {/* <div class="CartContainer">
                <div class="Header">
                    <h3 class="Heading">Shopping Cart</h3>
                    <h5 class="Action">Remove all</h5>
                </div>
                {cartItems.map((el) => (
                    <div class="Cart-Items">
                    
                        <div  class="image-box"
                        key={el.productBlock_productName}>
                            <img src={el.imageURL} alt={el.imageURL} style={{ height: "120px" }} />
                        </div>
                
                        <div class="about">
                            <h1 class="title">{el.productBlock_productName}</h1>
                        </div>
                        <div class="counter">
                            <div class="btn"
                              onClick={() =>
                                toggleCartItemQuantity(
                                    el.productBlock_productName,
                                    "dec"
                                )
                            }
                            >-</div>
                            <div class="count">{el.quantity}</div>
                            <div class="btn"
                              onClick={() =>
                                toggleCartItemQuantity(
                                    el.productBlock_productName,
                                    "inc"
                                )
                            }
                            >+</div>
                        </div>
                        <div class="prices">
                            <div class="amount">{`$ ${el.productBlock_priceValue}`}</div>
                            <div class="remove"
                            // onClick={() => onRemove(el)}
                            >
                                <u>Remove</u></div>
                        </div>
                    </div>
                    ))}

                


                <div class="checkout">
                    <div class="total">
                        <div>
                            <div class="Subtotal">Sub-Total:</div>
                        </div>
                        <div class="total-amount">{`$ ${totalPrice}`}</div>
                    </div>
                    <button class="button">Checkout</button></div>
            </div>
 */}


        </div>
    )
};


export default Carts
