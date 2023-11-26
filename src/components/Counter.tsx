import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState<number>(0);

  const handleIncValue = () => {
    if (value < 20) {
      setValue((prev) => prev + 1);
    }
    return value;
  };

  const handleDecValue = () => {
    if (value > 0) {
      setValue((prev) => prev - 1);
    }
    return value;
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="p-5 rounded-lg flex flex-col items-center">
        <h1 className="text-3xl font-semibold">
          Counter : <span>{value}</span>
        </h1>
        <div className="flex items-center gap-2 mt-5">
          <button
            className="px-5 text-black bg-white py-2 rounded-md"
            onClick={handleIncValue}
          >
            Increment
          </button>
          <button
            className="px-5 text-black bg-white py-2 rounded-md"
            onClick={handleDecValue}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
