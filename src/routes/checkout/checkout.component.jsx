import "./checkout.styles.scss";

import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { DropdownContext } from "../../contexts/dropdown.context";

const Checkout = () => {
  const { cartItems, priceTotal } = useContext(DropdownContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <span className="total">Total: ${priceTotal}</span>
    </div>
  );
};

export default Checkout;
