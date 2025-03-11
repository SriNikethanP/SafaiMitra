import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="relative w-full max-w-xs ">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select a date"
        className="w-full px-4 py-2 bg-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
  );
};

export default CustomDatePicker;
