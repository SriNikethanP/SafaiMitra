import React from "react";
import NotificationCard from "../../components/NotificationCard";

const NotificationPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold ml-2 mb-4">Notifications</h1>

      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
    </div>
  );
};

export default NotificationPage;
