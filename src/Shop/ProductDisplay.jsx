import { useState } from "react";
import { Link } from "react-router-dom";
const ProductDisplay = ({ item }) => {
  const { name, id, price, seller, ratingsCount, quantity, img } = item;
  const [quantit, setquantit] = useState(quantity);
  const [coupon, setcoupon] = useState("");
  const [size, setsize] = useState("Select Size");
  const [color, setcolor] = useState("Select color");
  const handleSize = (e) => {
    setsize(e.target.value);
  };
  const handleColor = (e) => {
    setcolor(e.target.value);
  };
  const handleDecrease = () => {
    if (quantit > 1) {
      setquantit(quantit - 1);
    }
  };
  const handleIncrease = () => {
    setquantit(quantit + 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: id,
      img: img,
      name: name,
      price: price,
      quantity: quantit,
      size: size,
      color: color,
      coupon: coupon,
    };
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(product);
    //update local storage
    localStorage.setItem("cart", JSON.stringify(existingCart));
    //reset field
    setquantit(1);
    setsize("Select Size");
    setcoupon("");
  };
  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span>{ratingsCount} Review</span>
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          quaerat natus quis tempora alias deleniti fugit veritatis nam
          doloribus aliquid.
        </p>
      </div>
      {/* cart component */}
      <div>
        <form onSubmit={handleSubmit}>
          {/* size */}
          <div className="select-product size">
            <select value={size} onChange={handleSize}>
              <option>Select Size</option>
              <option>sm</option>
              <option>md</option>
              <option>lg</option>
              <option>xl</option>
              <option>xxl</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>
          {/* color */}
          <div className="select-product color">
            <select value={color} onChange={handleColor}>
              <option>Select Color</option>
              <option>Pink</option>
              <option>Ash</option>
              <option>Red</option>
              <option>White</option>
              <option>Black</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>
          {/* increment & decrement */}
          <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={handleDecrease}>
              -
            </div>
            <input
              className="cart-plus-minus-box"
              type="text"
              name="qtybutton"
              id="qtybutton"
              value={quantit}
              onChange={(e) => setquantit(e.target.value)}
            />
            <div className="inc qtybutton" onClick={handleIncrease}>
              +
            </div>
          </div>
          {/* coupon field */}
          <div className="discount-code mb-2">
            <input
              type="text"
              placeholder="Enter Discount Code"
              onChange={(e) => setcoupon(e.target.value)}
            />
          </div>
          {/* btn section */}
          <button type="submit" className="lab-btn">
            <span>Add To Cart</span>
          </button>
          <Link to="/cart-page" className="lab-btn bg-primary">
            <span>Check Out</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
