import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

import { DropdownContext } from "../../contexts/dropdown.context";
import { useContext } from "react";



const CartIcon = ({ ...otherProps }) => {

 const {cartTotalQuantity} = useContext(DropdownContext)
  return (
    <div {...otherProps} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartTotalQuantity}</span>
    </div>
  );
};

export default CartIcon;
