import React, { useEffect, useState, useRef } from "react";

const SeeConsult = () => {
  const [data, setData] = useState([]);
  
  

  useEffect(() => {
    fetch("http://localhost:5000/consultantRequest")
      .then((res) => res.json())
      .then((newData) => setData(newData));
  }, []);

  return (
    <div className="overflow-x-auto">
          <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Image</th>
            <th>Description</th>
            <th>date</th>
            <th>Accept</th>
            <th>Accept</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {data.map((item, index) => (
            <tr key={index}>
                <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">
                      <h1>{item.patientName}</h1>
                    </div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <th>
                <button className="">Date: {item.selectedDate}</button>
              </th>
              <th>
                <button className="btn btn-success btn-xs">Accept</button>
              </th>
              <th>
                <button className="btn btn-success btn-xs">Deny</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SeeConsult;
