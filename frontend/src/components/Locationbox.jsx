import { useUser } from "@clerk/clerk-react";

const LocationBox = ({ upload }) => {
  const { user } = useUser();
  return (
    <div className="p-4 mt-2">
      <h1 className="text-white text-4xl font-bold pl-4">
        {upload ? "Choose location on map" : `Welcome, ${user.firstName}!`}
      </h1>
      <div className="p-4 rounded-2xl">
        {" "}
        <img
          src="https://www.resortsinhyderabad.co.in/puri_large.JPG"
          alt="img"
          srcset=""
        />
      </div>
    </div>
  );
};

export default LocationBox;
