// src/components/PeriodTracker.js
import React from 'react';

const PeriodTracker = () => {
  const days = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Period Tracker</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {days.map((day, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-2">{day}</h2>
            {/* Add any specific activities or information for each day */}
            <p>Activity 1</p>
            <p>Activity 2</p>
            {/* Add more activities as needed */}
          </div>
        ))}
      </div>

      {/* Calendar section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Period Calendar</h2>
        {/* Include a calendar component or any relevant UI for tracking period days */}
        <div className="bg-white p-4 rounded-md shadow-md">
          {/* Calendar UI goes here */}
          <p>Calendar Content</p>
        </div>
      </div>
    </div>
  );
};

export default PeriodTracker;
