import React from "react";
import Image from "next/image";
const ProfilePage = () => {
  return (
    <section className=" w-full gap-y-9  flex-wrap  max-container flex flex-col items-center justify-center">
      <Image
        src={"/assets/login/person.png"}
        width={150}
        height={150}
        alt="profile"
      />

      <form className=" w-[450px] max-md:w-full  ">
        <div className="mainInput">
          <label className="text-gray-400">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Insert your Email Address"
          ></input>
        </div>
        <div className="mainInput">
          <label className="text-gray-400">Passward</label>
          <input
            type="text"
            name="email"
            placeholder="Insert your Passward"
          ></input>
        </div>

        <div className="flex justify-center mt-14  ">
          <button className="outline-none flex items-center justify-center text-white bg-orange rounded-lg shadow-md px-6 py-2">
            Update
          </button>
        </div>
      </form>
    </section>
  );
};

export default ProfilePage;
