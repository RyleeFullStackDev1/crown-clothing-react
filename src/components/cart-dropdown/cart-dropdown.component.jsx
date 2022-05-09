import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";

import CartItem from "../cart-item/cart-item.component";

import { DropdownContext } from "../../contexts/dropdown.context";

import { useContext } from "react";
import { Link } from "react-router-dom";

const CartDropdown = () => {

  const { cartItems } = useContext(DropdownContext)
  console.log(cartItems)
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" >
        {cartItems.map((item) =>  <CartItem key={item.id} cartItem={item} /> )}
      </div>
      <Link to="/checkout"><Button >GO TO CHECKOUT</Button></Link>
    </div>
  );
};

export default CartDropdown;
