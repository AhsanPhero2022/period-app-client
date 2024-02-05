// src/components/AboutUs.js
import React from 'react';

const AboutUs = () => {
  const doctors = [
    { name: 'Mst. Fahmida Sultana Naznin', contact: 'nazninfahmidasultana@gmail.com' },
    { name: 'Farhan Sadik', contact: 'farhan71883@gmail.com' },
    

  ];

  return (
    <div className=" container mx-auto mt-8 ">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-6 text-xl">
      Hello and welcome to Shokhi, your go-to destination for seamless and personalized menstrual cycle tracking

      </p>

      {/* Social Links */}
      <div className=" tex flex space-x-4 mb-8">
        
        <a href="https://www.facebook.com/profile.php?id=100071772693953" className=" text-blue-500 hover:underline">
          Facebook
        </a>
        <a href="#" className=" text-blue-500 hover:underline">
          Twitter
        </a>
        <a href="#" className="text-blue-500 hover:underline">
          Instagram
        </a>
        {/* Add more social links as needed */}
      </div>

      {/* Doctors Information */}
      <h2 className="text-2xl font-bold mb-4">Contact us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {doctors.map((doctor, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-2">{doctor.name}</h3>
            <p>{doctor.specialty}</p>
            <p className="mt-2">
              Contact: <a href={`mailto:${doctor.contact}`}>{doctor.contact}</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
