import React from "react";
import LocationBox from "../../components/Locationbox";
import Button from "../../components/Button";
import ImageUploader from "../../components/ImageUploader";
import LocationSearch from "../../components/LocationSearch";

const UploadPage = () => {
  return (
    <div className="flex">
      <div className="flex-1 justify-center items-center p-6">
        <h1 className="font-bold text-6xl p-4 mb-6">
          Be a part in cleaning the society
        </h1>
        <div className="flex flex-col items-center gap-4 w-full">
          <ImageUploader />
          <LocationSearch/>
          <Button button={"Upload"} />
        </div>
      </div>
      <div className=" flex-1 bg-green-700">
        <LocationBox upload={true} />
      </div>
    </div>
  );
};

export default UploadPage;
