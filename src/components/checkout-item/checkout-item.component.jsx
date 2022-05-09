import "./checkout-item.styles.scss";
import Button from "../button/button.component";

import { DropdownContext } from "../../contexts/dropdown.context";
import { useContext } from "react";


const CheckoutItem = ({ item }) => {
    const { decreaseProductQuantity, addItemToCart, removeItemFromCart } =
      useContext(DropdownContext);

    const decreaseProductHandler = () => {
        decreaseProductQuantity(item);
    }

    const addItemHandler = () => addItemToCart(item);

    const removeItemHandler = () => removeItemFromCart(item);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={item.imageUrl} alt={`${item.name}`} />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">
        <div onClick={decreaseProductHandler} className="arrow">
          &#10094;
        </div>
        <span className="value">{item.quantity} </span>
        <div onClick={addItemHandler} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{item.price}</span>
      <span onClick={removeItemHandler} className="remove-button">
        <div>&#10005;</div>
      </span>
    </div>
  );
};

export default CheckoutItem;
