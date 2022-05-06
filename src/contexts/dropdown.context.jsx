import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const product = cartItems.find((item) => item.id === productToAdd.id);
    if (product) {
        return cartItems.map((item) =>
            item.id === product.id ?
                { ...item, quantity: item.quantity + 1 }
                : item
        );
    }
    else {
    return [...cartItems, {...productToAdd, quantity: 1 }];
    }
     
}



export const DropdownContext = createContext({
  dropdownOpen: false,
  setDropdownOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartTotalQuantity: 0
});

export const DropdownProvider = ({ children }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
    const addItemToCart = (productToAdd) => {
        const itemsBack = addCartItem(cartItems, productToAdd);
        setCartItems(itemsBack)


    }

    useEffect(() => {
    const newcartCount = cartItems.reduce(
      (total, current) => total + current.quantity,
      0
    );
        setCartTotalQuantity(newcartCount);
    }, [cartItems])

    
    const value = {
      dropdownOpen,
      setDropdownOpen,
      cartItems,
      addItemToCart,
      cartTotalQuantity,
    };

  return<DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>;
};
