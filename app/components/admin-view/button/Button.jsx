import React from "react";
import { HashLoader } from "react-spinners";

const Button = ({ saveData, loading, update }) => {
  const uploadData = () => {
    saveData();
  };

  return (
    <div className=" mt-5 flex justify-center items-center ">
      <button
        onClick={uploadData}
        className="bg-orange text-white rounded-md shadow-md py-2 px-12 text-lg   flex justify-center items-center"
      >
        {loading ? (
          <HashLoader color="#ffffff" size={25} />
        ) : update ? (
          "Update "
        ) : (
          "Submit"
        )}
      </button>
    </div>
  );
};

export default Button;
