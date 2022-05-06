import "./product-card.styles.scss";

import Button from "../button/button.component";

import { DropdownContext } from "../../contexts/dropdown.context";
import { useContext } from "react";




const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(DropdownContext);
  
  const addCartItem = (productToAdd) => {
  console.log(productToAdd);
  addItemToCart(productToAdd);
  //{ item } = event.target
};
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={() => { addCartItem(product) }} buttonType="inverted">
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
