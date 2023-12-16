import { DotWave } from '@uiball/loaders';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function AppointmentDetails() {
    const data = useParams()
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

    const singleData = profile.find(d=> d._id == data._id)


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
             <img
             className='mx-auto'
             src={singleData.image} alt="" />
            </div>
            <h2 className='text-3xl font-medium m-8'>{singleData.name}</h2>
            <div>
                <h2>Charge: 500</h2>
                <h2>Duration: 1 hour</h2>
            </div>
          </div>
        </>
      ) : (
        <p>Data not found</p>
      )}
    </div>
  )
}

export default AppointmentDetails