import { useState } from "react";
import PageHeader from "../components/PageHeader";
import Data from "../products.json";
import ProductCards from "./ProductCards";
import Pagination from "./Pagination";
import Search from "./Search";
import ShopCategory from "./ShopCategory";
import PopularPost from "./PopularPost";
import Tags from "./Tags";
const showResult = "Showing 01 - 12 of 139 Results";
const Shop = () => {
  const [gridList, setgridLest] = useState(true);
  const [products, setproducts] = useState(Data);
  //pagination
  const [currentPage, setcurrentPage] = useState(1);
  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstPage = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstPage, indexOfLastProduct);
  //function to change the current page
  const paginate = (pageNumber) => {
    setcurrentPage(pageNumber);
  };
  //filter product based on category
  const [selectedCategory, setselectedCategory] = useState("All");
  const menuItems = [...new Set(Data.map((val) => val.category))];
  const filterItem = (current) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === current;
    });
    setselectedCategory(current);
    setproducts(newItem);
  };
  console.log(currentPage);
  return (
    <div>
      <PageHeader title="Our Shop Page" currPage="shop" />
      {/* shop page */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              {/* layout and title */}
              <article>
                <div className="shop-title d-flex flex-wrap justify-content-between ">
                  <p>{showResult}</p>
                  <div
                    className={`product-view-mode ${
                      gridList ? "gridActive" : "listActive"
                    }`}
                  >
                    <a className="grid " onClick={() => setgridLest(!gridList)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list " onClick={() => setgridLest(!gridList)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>
                {/*product cards  */}
                <div>
                  <ProductCards
                    gridlist={gridList}
                    products={currentProducts}
                  />
                </div>
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} gridList={gridList} />
                <ShopCategory
                  filterItem={filterItem}
                  setItems={setproducts}
                  menuItems={menuItems}
                  selectedCategory={selectedCategory}
                />
                <PopularPost />
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
