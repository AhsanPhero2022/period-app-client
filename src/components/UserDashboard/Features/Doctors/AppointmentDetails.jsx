import { DotWave } from "@uiball/loaders";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AppointmentDetails() {
  const data = useParams();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState([]);
  const [hours, setHours] = useState(1);

  const incrementHour = () => {
    setHours((prevHours) => prevHours + 1);
  };

  const decrementHour = () => {
    if (hours > 1) {
      setHours((prevHours) => prevHours - 1);
    }
  };

  const totalCharge = hours * 500;

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
          <div className="my-12">
            <div className="">
              <img className="mx-auto" src={singleData.image} alt="" />
            </div>
            <h2 className="text-3xl font-medium m-8">{singleData.name}</h2>
            <div className="flex justify-between items-center mx-8">
              <div>
                <h2>Charge: {totalCharge}</h2>
              </div>
              <div className="flex items-center gap-2">
                <h2>Duration:</h2>
                <button
                  className="bg-blue-500 text-white px-2  rounded-l"
                  onClick={decrementHour}
                >
                  -
                </button>

                <input
                  type="text"
                  value={hours}
                  readOnly
                  className="text-center w-6 bg-white "
                />
                <h2>Hours</h2>

                <button
                  className="bg-blue-500 px-2 text-white  rounded-r"
                  onClick={incrementHour}
                >
                  +
                </button>
              </div>
            </div>
            {/* payment option */}
            <div className="container mx-8 mt-8">
              <h2 className="text-2xl font-bold mb-4">Payment Options</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              
                <div className="bg-white p-4 rounded-md shadow-md flex flex-col items-center">
                  <img
                    src="card-icon.png"
                    alt="Card Icon"
                    className="h-12 mb-2"
                  />
                  <p className="text-sm">Card Payment</p>
                </div>

                
                <div className="bg-white p-4 rounded-md shadow-md flex flex-col items-center">
                  <img
                    src="https://www.logo.wine/a/logo/BKash/BKash-Icon-Logo.wine.svg"
                    alt="bKash Icon"
                    className="h-12 mb-2"
                  />
                  <p className="text-sm">bKash Payment</p>
                </div>
              </div>
              <button className="btn btn-outline mt-5">Pay</button>
            </div>
            {/* payment option end */}
          </div>
        </>
      ) : (
        <p>Data not found</p>
      )}
    </div>
  );
}

export default AppointmentDetails;
