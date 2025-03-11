import React from "react";

const NotificationCard = () => {
  return (
    <div className="bg-green-800 flex w-2/3 justify-between items-center p-4 rounded-lg text-white m-2">
      <p>OrderId:123124124</p>
      <p>Order Status:successfull</p>
      <p>Order Date:10/02/2025</p>
      <p>Rewarded:5 points </p>
    </div>
  );
};

export default NotificationCard;
