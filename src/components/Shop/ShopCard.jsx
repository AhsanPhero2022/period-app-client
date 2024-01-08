import { useContext } from "react";
// import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/Provider";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";

const ShopCard = ({ product }) => {
  const {_id, name, quantity, price, rating, image } = product;
  // const { user } = useContext(AuthContext);
  

  // const handleClink = () => {
  //   const userEmail = user.email;
  //   const cardDetails = {
  //     name,
  //     quantity,
  //     price,
  //     rating,
  //     image,
  //     userEmail,
  //   };

  //   fetch("http://localhost:5000/cardDetails", {
  //     method: "POSt",
  //     headers: {
  //       "content-Type": "application/json",
  //     },
  //     body: JSON.stringify(cardDetails),
  //   });

  //   Swal.fire({
  //     position: "top-end",
  //     icon: "success",
  //     title: "Added to Card",
  //     showConfirmButton: false,
  //     timer: 1500,
  //   });
  // };

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
            <button  className="btn btn-warning ">
              Add to card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
