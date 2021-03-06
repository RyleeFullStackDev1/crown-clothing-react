import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const product = cartItems.find((item) => item.id === productToAdd.id);
  if (product) {
    return cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

export const DropdownContext = createContext({
  dropdownOpen: false,
  setDropdownOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  increaseProductQuantity: () => {},
  cartTotalQuantity: 0,
  priceTotal: 0
});

export const DropdownProvider = ({ children }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
  const [priceTotal, setPriceTotal] = useState(0);
  const addItemToCart = (productToAdd) => {
    const itemsBack = addCartItem(cartItems, productToAdd);
    setCartItems(itemsBack);
  };

  const decreaseProductQuantity = (prodToDecrease) => {
    const product = cartItems.find((item) => item.id === prodToDecrease.id);

    if (prodToDecrease.quantity === 1) {
      if (product) {
        removeItemFromCart(product);
      }
    } else {
      if (product) {
        const newCart = cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        setCartItems(newCart);
      }
    }
  };

  const removeItemFromCart = (prodToRemove) => {
        const product = cartItems.find((item) => item.id === prodToRemove.id);
   if (product) {
     const newCart = cartItems.filter((item) => item.id !== product.id);
     setCartItems(newCart);
   }
  }

  useEffect(() => {
    const newcartCount = cartItems.reduce(
      (total, current) => total + current.quantity,
      0
    );
  
    setCartTotalQuantity(newcartCount);
  }, [cartItems]);

  useEffect(() => {
      const newPriceTotal = cartItems.reduce(
        (total, current) => total + current.price * current.quantity,
        0
      );
      setPriceTotal(newPriceTotal);
  }, [cartItems])

  const value = {
    dropdownOpen,
    setDropdownOpen,
    cartItems,
    addItemToCart,
    cartTotalQuantity,
    decreaseProductQuantity,
    removeItemFromCart,
    priceTotal
  };

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};
