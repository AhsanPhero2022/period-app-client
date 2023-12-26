import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/Provider";

const ShopCard = ({ product }) => {
  const { name, quantity, price, rating, image } = product;
  const { user } = useContext(AuthContext);
  

  const handleClink = () => {
    const userEmail = user.email;
    const cardDetails = {
      name,
      quantity,
      price,
      rating,
      image,
      userEmail,
    };

    fetch("http://localhost:5000/cardDetails", {
      method: "POSt",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(cardDetails),
    });

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Added to Card",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-[300px]"
            src={`https://picsum.photos/500/350?${Math.random()}`}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="flex">
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
            <p>Ratings: {rating}</p>
          </div>
          <div className="card-actions justify-end">
            <button onClick={handleClink} className="btn btn-success">
              Add to card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
