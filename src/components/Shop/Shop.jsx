import { useEffect, useState } from "react";
import ShopCard from "./ShopCard";


const Shop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("shop.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center py-8">
        Products Available
      </h2>
      <div className="lg:grid lg:grid-cols-3 gap-4">
        {data.map((product) => (
          <ShopCard key={product.id} product={product}></ShopCard>
     
        ))}
      </div>
    </div>
  );
};

export default Shop;
