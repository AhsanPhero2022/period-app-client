import Swal from "sweetalert2";


const ShopCard = ({ product }) => {
  const { name, image, quantity, price, rating } = product;
 
  const handleClink = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your T-Shirt has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-[300px]" src={image} alt="Shoes" />
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
