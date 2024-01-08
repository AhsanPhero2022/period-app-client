import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DotWave } from "@uiball/loaders";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/Provider";

const SeeDetails = () => {
  const {user} = useContext(AuthContext)
  const data = useParams();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/doctors")
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
          <div className="mt-12">
            <div className="flex gap-6">
              {/* profile section */}
              <div>
                <img src={singleData.image} alt="" />
                <h2 className="text-3xl font-bold ps-8 ">Biography</h2>
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
              <div>
                <h2 className="text-3xl font-medium text-blue-500">Profile</h2>
                <h2 className="text-2xl font-semibold">{singleData.name}</h2>
                <p>University: {singleData.university}</p>
                <p>achievement: {singleData.achievement}</p>
                <div className="my-4">
                  <h1>
                    <span className=" font-semibold">Experience :</span> 5 years
                  </h1>
                  <h1>
                    <span className=" font-semibold">Language :</span> English,
                    Bangla
                  </h1>
                  <h1>
                    <span className=" font-semibold">Type of :</span> Full time
                  </h1>
                </div>
                <Link
                  to={`/userDashboard/appointmentDetails/${singleData._id}`}
                >
                  <button className="btn btn-success">Appointment Now</button>
                </Link>
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
