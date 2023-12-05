import { Link } from "react-router-dom";

const DrProfileCard = ({ doctor }) => {
  const { _id, name, image, specialist, rating, status } = doctor;
  const backgroundColorClass =
    status === "online" ? "bg-green-500" : "bg-red-500";
  return (
    <div className="my-5">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-[300px]" src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <div className="relative inline-block ">
            <div
              className={`flex items-center flex-row-reverse w-3 h-3 ${backgroundColorClass} rounded-full absolute top-0 right-0 border-2 `}
            >
              <span className="text-gray-700 me-5 text-xs">
                {status === "offline" ? "Offline" : "online"}
              </span>
            </div>
          </div>
          <h2 className="card-title">Name: {name}</h2>
          <p>Specialist: {specialist}</p>
          <p>Ratings: {rating}</p>
          <div className="card-actions justify-end">
            <Link to={`/dashboard/seeDetails/${_id}`}>
              <button className="btn btn-success">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrProfileCard;