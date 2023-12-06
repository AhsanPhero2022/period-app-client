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
              {/* section */}
              <div class="flex items-center p-3 w-80 h-auto bg-white rounded-md shadow-lg">
                <section class="  ">
                
                   <img className="  btn-circle " src={singleData.image} alt="Loading" />
                </section>

                <section class="block border-l border-gray-300 m-3">
                  <div class="pl-3">
                    <h3 class="text-gray-600 font-semibold text-sm">
                      Jesus Echeverria
                    </h3>
                    <h3 class="bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] to-[#27272A] text-lg font-bold">
                      Heald Expertise
                    </h3>
                  </div>
                  <div class="flex gap-3 pt-2 pl-3">
                    <svg
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      class="w-4 hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    <svg
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      class="w-4 hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2"
                    >
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                    <svg
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      class="w-4 hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                    <svg
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      class="w-4 hover:scale-125 duration-200 hover:cursor-pointer fill-white stroke-2"
                    >
                      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
                    </svg>
                  </div>
                </section>
              </div>
              {/* section end */}
              <div>
                <h2 className="text-2xl font-semibold">
                  Name: {singleData.name}
                </h2>
                <p>University: {singleData.university}</p>
                <p>achievement: {singleData.achievement}</p>
              </div>
              <div></div>
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
