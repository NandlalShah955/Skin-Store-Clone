
import React, { createContext, useContext, useState, useEffect } from 'react';
// import { toast } from 'react-hot-toast';

const CartContext = createContext();

export const CartStateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;


//   console.log(cartItems)

//--------------Logic Part----------------
  const onAdd = (product, quantity) => {

    const checkProductInCart = cartItems.find((item) => item.productBlock_productName === product.productBlock_productName);
    
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.productBlock_priceValue * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    
    if(checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if(cartProduct.productBlock_productName === product.productBlock_productName) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity
        }
        return cartProduct;
      })

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      
      setCartItems([...cartItems, { ...product }]);
    }

    // toast.success(`${qty} ${product.name} added to the cart.`);
  } 



  // ----------------Remove-----------------------
  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item.productBlock_productName === product.productBlock_productName);
    const newCartItems = cartItems.filter((item) => item.productBlock_productName !== product.productBlock_productName);

    setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.productBlock_priceValue * foundProduct.quantity);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
  }


  //-------------------Total Quantity-------------------

  const toggleCartItemQuantity = (productBlock_productName, value) => {
    foundProduct = cartItems.find((item) => item.productBlock_productName === productBlock_productName)
    index = cartItems.findIndex((product) => product.productBlock_productName === productBlock_productName);

    if(value === 'inc') {
      setCartItems(cartItems.map((item) => item.productBlock_productName ===productBlock_productName? { ...foundProduct, quantity: foundProduct.quantity + 1 } : item));
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.productBlock_priceValue)
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
    } else if(value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems(cartItems.map((item) => item.productBlock_productName === productBlock_productName ? { ...foundProduct, quantity: foundProduct.quantity - 1 } : item));
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.productBlock_priceValue)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
      }
    }
  }


  //---------Increment Count----------------
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  }

    //---------Decrement Count----------------

  const decQty = () => {
    setQty((prevQty) => {
      if(prevQty - 1 < 1) return 1;
     
      return prevQty - 1;
    });
  }

  return (
    <CartContext.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities 
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useStateContext = () => useContext(CartContext);