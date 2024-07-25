import Navbar from "@/app/components/admin-view/AdminNavbar/Navbar";
import CategoryList from "@/app/components/admin-view/categoryList/CategoryList";
import ProfileImg from "@/app/components/admin-view/profileImg/ProfileImg";
import React from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
const layout = ({ children }) => {
  return (
    // <>
    //   <nav className="flex justify-between px-8 md:px-12 py-2 items-center bg-offwhite">
    //     <span className=" text-black md:hidden">
    //       <IoReorderThreeOutline size={40} />
    //     </span>{" "}
    //     <h2 className="text-orange font-bold text-2xl max-sm:hidden">
    //       Msworld
    //     </h2>
    //     <div>
    //       <ProfileImg />
    //     </div>
    //   </nav>

    //   <div className=" grid md:grid-cols-6 ">
    //     <div className="border-r ">
    //       <CategoryList />
    //     </div>
    //     <div className="grid  md:col-span-5  pt-7 mx-auto ">{children}</div>
    //   </div>
    // </>
    <>
      <div>
        <Navbar />
        <div className="flex max-container  min-h-screen   md:padding-l ">
          {children}{" "}
        </div>
      </div>
    </>
  );
};

export default layout;
