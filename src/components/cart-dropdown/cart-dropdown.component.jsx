import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";

import CartItem from "../cart-item/cart-item.component";

import { DropdownContext } from "../../contexts/dropdown.context";

import { useContext } from "react";

const CartDropdown = () => {

  const { cartItems } = useContext(DropdownContext)
  console.log(cartItems)
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" >
        {cartItems.map((item) =>  <CartItem key={item.id} cartItem={item} /> )}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
