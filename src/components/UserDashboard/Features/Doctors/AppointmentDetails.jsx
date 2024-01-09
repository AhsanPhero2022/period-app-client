import { DotWave } from "@uiball/loaders";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../../Provider/Provider";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AppointmentDetails() {
  const data = useParams();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [hours, setHours] = useState(1);
  const { user } = useContext(AuthContext);

  const singleData = profile.find((d) => d._id == data._id);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleConfirm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const doctorImage = formData.get("image");
    const doctorName = formData.get("name");

    const patientEmail = user.email;
    const patientName = user.displayName;
    const consultantRequest = {
      doctorName,
      doctorImage,
      patientName,
      patientEmail,
      totalCharge,
      selectedDate,
    };

    fetch("http://localhost:5000/consultantRequest", {
      method: "POSt",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(consultantRequest),
    });

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Back to you soon",
      showConfirmButton: false,
      timer: 1500,
    });
  };

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
            <div className="m-8 space-y-4">
              <h2 className="text-3xl font-medium ">{singleData.name}</h2>
              <form onSubmit={handleConfirm}>
                <input type="text" name="name" value={singleData.name} hidden />
                <input
                  type="text"
                  name="image"
                  value={singleData.image}
                  hidden
                />

                <div className="flex items-center justify-between">
                <button className="btn btn-success ">Confirm Now</button>
                <div className="container mx-auto mt-8 p-4 bg-gray-100 rounded shadow">
                  <div className="mb-4">
                    <label className="block  text-sm font-medium text-gray-700">
                      Select Date and Time:
                    </label>
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      showTimeSelect
                      dateFormat="MM/dd/yyyy h:mm aa"
                      className="p-2 border rounded"
                    />
                  </div>
                </div>
                </div>
              </form>
            </div>
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
