import { DotWave } from "@uiball/loaders";
import { signInAnonymously } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom/dist/umd/react-router-dom.development";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/Provider";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState([]);
  const data = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/allProducts")
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  const singleData = profile.find((d) => d._id == data._id);

  let name, quantity, price, rating, image;
  if (loading) {
    return <DotWave size={47} speed={1} color="black" />;
  } else {
   singleData ? ({ name, quantity, price, rating, image } = singleData) : "Data Not Found"
  }
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
      {loading ? (
        <>
          <div className="flex">
            <p>Loading</p>

            <DotWave size={47} speed={1} color="black" />
          </div>
        </>
      ) : singleData ? (
        <>
          <div className="mt-12">
            <div className="flex gap-6">
              {/* profile section */}
              <div className="mt-12">
                <img src={singleData.image} alt="" />
                <h2 className="text-3xl font-bold ps-8 mt-12">Some Infos</h2>
                <p className=" px-4 mt-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quisquam, facere!
                </p>
                <p className=" px-4 mt-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quisquam, facere!
                </p>
              </div>
              {/* section end */}
              <div className="m-24 space-y-4">
                <h2 className="text-3xl font-medium text-blue-500">
                  Product Details
                </h2>
                <h2 className="text-2xl font-semibold">{singleData.name}</h2>
                <p>University: {singleData.description}</p>
                <p>achievement: {singleData.price}</p>
                <div className="my-4">
                  <h1>
                    <span className=" font-semibold">Ratings :</span>{" "}
                    {singleData.rating}
                  </h1>
                  <h1>
                    <span className=" font-semibold">Description :</span>{" "}
                    {singleData.description
                      ? singleData.description
                      : "coming soon..."}
                  </h1>
                  <h1>
                    <span className=" font-semibold">Size :</span> xl
                  </h1>
                  <div className="mt-6">
                    <button onClick={handleClink} className="btn btn-success">
                      Add to Card
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Data not found</p>
      )}
    </div>
  );
};

export default ProductDetails;
