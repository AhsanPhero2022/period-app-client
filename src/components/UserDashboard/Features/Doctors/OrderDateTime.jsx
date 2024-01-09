import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'tailwindcss/tailwind.css';

const OrderForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your order submission logic here with the selectedDate
    console.log('Order submitted for:', selectedDate);
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100 rounded shadow">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Select Date and Time:</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            showTimeSelect
            dateFormat="MM/dd/yyyy h:mm aa"
            className="p-2 border rounded"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
