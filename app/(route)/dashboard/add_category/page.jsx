"use client";
import { addData, deleteData, getData } from "@/app/(services)/services";
import DeleteCard from "@/app/components/admin-view/deleteCard/Card";
import { Trash } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";

const AddCategorypage = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [categoryloading, setCategoryLoading] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [deletedName, setDeletedName] = useState("");
  const [deleteLoading, setDeleteLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!category) {
        setError("please fill this field !");
        return;
      }
      setLoading(true);
      const res = await addData("category", category);

      if (res) {
        setLoading(false);
        extractCategory();
        setError("");
        setCategory("");
      }
      console.log(res, "ceheck respone ccategory");
    } catch (error) {
      console.log(error);
    }
  };

  const confirmDelete = async (id, name) => {
    setDeleteId(id);
    setDeletedName(name);
  };
  const extractCategory = async () => {
    try {
      setCategoryLoading(true);
      const data = await getData("category");
      if (data) {
        setCategoryLoading(false);
        setCategories(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    extractCategory();
  }, []);
  return (
    <div className="padding max-md:mt-16 flex flex-col gap-4 w-full">
      <div className=" flex flex-col gap-10 ">
        <div className="max-w-[500px] ">
          <div className="  flex items-end gap-2">
            <div className="">
              <label className="">New category name</label>
              <input
                type="text"
                placeholder="Next.js,React.js,Node.js etc"
                className="h-12"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></input>
            </div>
            <div className="">
              <button
                onClick={handleSubmit}
                className="bg-green-400 text-lg text-white border-none outline-none px-4 md:px-8 py-3 rounded-lg"
              >
                {loading ? <HashLoader color="#ffffff" size={25} /> : " Create"}
              </button>
            </div>
          </div>
          <div className=" w-full mt-4">
            {error && (
              <span className="bg-red-300 text-white rounded-md block text-center w-full">
                {error}
              </span>
            )}
          </div>
        </div>

        <div className=" max-w-[500px]">
          <label className="text-lg font-semibold">Existing Categories</label>

          {deletedName ? (
            <DeleteCard
              deleteId={deleteId}
              deletedName={deletedName}
              setDeletedName={setDeletedName}
              routeName="category"
              extractAllData={extractCategory}
              setDeleteLoading={setDeleteLoading}
              deleteLoading={deleteLoading}
              category="category"
            />
          ) : (
            ""
          )}

          {!categoryloading ? (
            categories?.length >= 1 ? (
              categories?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-between rounded-md bg-gray-100 max-w-[500px] py-4 px-4 mt-3"
                  >
                    <div>
                      <h4>{item.category}</h4>
                    </div>
                    <div>
                      <span
                        className="text-red-500 cursor-pointer"
                        onClick={() => confirmDelete(item._id, item.category)}
                      >
                        <Trash></Trash>
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="flex   pb-5   flex-col mt-8  ">
                <div className="flex justify-center flex-col items-center ">
                  <Image
                    src={"/assets/empty_icon.jpg"}
                    width={180}
                    height={180}
                    alt="empty"
                    className="object-contain  "
                  ></Image>
                  <span className="text-xl">Add category!</span>
                </div>
              </div>
            )
          ) : (
            [1, 2, 3, 4].map((index) => {
              return (
                <div
                  key={index}
                  className="flex justify-between rounded-md bg-gray-100 animate-pulse max-w-[500px] py-6 px-4 mt-3"
                >
                  <div>
                    <span className="w-12 h-12 rounded-full bg-white animate-pulse"></span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default AddCategorypage;
