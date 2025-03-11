import Card from "./Category-selector";
import CustomDatePicker from "./Custom-datepicker";
import Dropdown from "./Dropdown";
import Input from "./Input";

const PickupBox = () => {
  return (
    <div className="flex flex-col items-center justify-center p-12 mt-6 space-y-6 bg-gray-50 rounded-lg shadow-lg max-w-md mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800">Make Your Home Clean</h1>

      {/* Input, Card, and Date Picker Section */}
      <div className="flex flex-col items-start gap-4 w-full">
        <Input />
        <Card />
        {/* <Dropdown /> */}
        <CustomDatePicker />
      </div>
    </div>
  );
};

export default PickupBox;
