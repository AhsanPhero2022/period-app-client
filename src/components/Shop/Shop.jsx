import { useEffect, useState } from "react";
import ShopCard from "./ShopCard";

const Shop = () => {
  const [data, setData] = useState([]);
  


  useEffect(() => {
    fetch("http://localhost:5000/allProducts")
      .then((res) => res.json())
      .then((data) => setData(data));
  
  }, []);

  // sorting function
  const sortingData = [
    // Add more items with different categories
  ];

  const [sortType, setSortType] = useState("name");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const sortedData = [...sortingData].sort((a, b) => {
    if (sortType === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortType === "category") {
      return a.category.localeCompare(b.category);
    } else if (sortType === "price") {
      return a.price - b.price;
    }
    return 0;
  });

  const filteredData =
    selectedCategory === "All"
      ? sortedData
      : sortedData.filter((item) => item.category === selectedCategory);

  const handleSortChange = (type) => {
    setSortType(type);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center py-8">
        Products Available
      </h2>
      {/* sorting design */}
      <div className="flex items-center justify-between container mx-auto mt-8 p-4 bg-gray-100 rounded shadow">
        <div className=" mb-4">
          <label className="mr-2">Sort By:</label>
          <select
            className="p-2 border rounded"
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="category">Category</option>
            {/* Add more sorting options as needed */}
          </select>
        </div>

        <div className="flex items-center mb-4">
          <label className="mr-2">Filter By Category:</label>
          <select
            className="p-2 border rounded"
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
            {/* Add more category options as needed */}
          </select>

          <ul>
            {filteredData.map((item, index) => (
              <li key={index} className="border p-2 mb-2">
                {item.name} - {item.category}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* sorting design end*/}
      <div className="lg:grid lg:grid-cols-3 gap-4">
        {data.map((product) => (
          <ShopCard key={product._id} product={product}></ShopCard>
        ))}
      </div>
    </div>
  );
};

export default Shop;
