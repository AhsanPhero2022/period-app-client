import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DotWave } from "@uiball/loaders";

const SeeDetails = () => {
  const data = useParams();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch("https://y-ahsanphero2022.vercel.app/user")
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
          <div>
            <h2 className="text-3xl font-bold text-center my-12">
              Doctor Profile Details
            </h2>
            <div className="flex gap-4">
              <img className="w-96" src={singleData.image} alt="" />

              <div>
                <h2 className="text-2xl font-semibold">
                  Name: {singleData.name}
                </h2>
                <p>University: {singleData.university}</p>
                <p>achievement: {singleData.achievement}</p>
              </div>
              <div>
              
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

export default SeeDetails;