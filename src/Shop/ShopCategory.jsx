import Data from "../products.json";
const ShopCategory = ({
  filterItem,
  setItems,
  menuItems,
  selectedCategory,
}) => {
  return (
    <>
      <div className="widget-header"></div>
      <div>
        <button
          className={`m-2 ${selectedCategory === "All" ? "bg-warning" : ""}`}
          onClick={() => setItems(Data)}
        >
          All
        </button>
        {menuItems.map((val, id) => {
          return (
            <button
              key={id}
              onClick={() => filterItem(val)}
              className={`m-2 ${selectedCategory === val ? "bg-warning" : ""}`}
            >
              {val}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ShopCategory;
