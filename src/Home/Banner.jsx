import { useState } from "react";
import productData from "../products.json";
import { Link } from "react-router-dom";
import SelectedCategory from "../components/SelectedCategory";
import Background from "../../public/images/bg-img/06.jpg";
const title = (
  <h2>
    Search Your One From <span>Thousend</span> of Products
  </h2>
);
const desc = "We have The Largest Collection Of Products";
const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];
const Banner = () => {
  const [searchInput, setsearchInput] = useState("");
  const [filteredProducts, setfilteredProducts] = useState(productData);
  //   console.log(productData);

  //filtering finction
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setsearchInput(searchTerm);

    // filtering products based on search
    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setfilteredProducts(filtered);
  };
  return (
    <div
      className="banner-section style-4"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <SelectedCategory select={"all"} />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="search your product"
              value={searchInput}
              onChange={handleSearch}
              className="z-1"
            />
            <button type="submit" style={{ zIndex: "5" }}>
              <i className="icofont-search"></i>
            </button>
          </form>
          <p>{desc}</p>
          <ul className="lab-ul">
            {searchInput &&
              filteredProducts.map((product, i) => {
                return (
                  <li key={i}>
                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
