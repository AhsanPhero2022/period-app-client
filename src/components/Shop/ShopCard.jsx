import { useContext } from "react";

import { AuthContext } from "../../Provider/Provider";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";

const ShopCard = ({ product }) => {
  const {_id, name, quantity, price, rating, image } = product;
  
  

 

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-[300px]"
            src={image}
            alt="Coming Soon..."
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="flex">
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
            <p>Ratings: {rating}</p>
          </div>
          <div className="card-actions justify-between">
           <Link to={`/productDetails/${_id}`}>
           <button  className="btn btn-success">
              View Details
            </button></Link>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
