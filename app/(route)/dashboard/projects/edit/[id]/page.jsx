// "use client";
// import { getSingleData, updateData } from "@/app/(services)/services";
// import Button from "@/app/components/admin-view/button/Button";
// import FormControls from "@/app/components/admin-view/form-controls";
// import { useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { HashLoader } from "react-spinners";

// const projectFormData = {
//   name: "",
//   image: "",
//   category: "",
//   description: "",
//   link: "",
//   github: "",
// };

// const controls = [
//   {
//     lable: "Name",
//     type: "text",
//     placeholder: "Insert your Project Name",
//     name: "name",
//   },
//   {
//     lable: "Description",
//     type: "text",
//     placeholder: "Insert your Description",
//     name: "description",
//   },
//   {
//     lable: "  Category",
//     type: "text",
//     placeholder: " your Project Category",
//     name: "category",
//   },
//   {
//     lable: "Link",
//     type: "text",
//     placeholder: "Insert your Project Link",
//     name: "link",
//   },
//   {
//     lable: "Github",
//     type: "text",
//     placeholder: "Insert your Github Link",
//     name: "github",
//   },
//   {
//     lable: "Image",
//     type: "file",
//     placeholder: "Insert your Name",
//     name: "image",
//   },
// ];

// const EditPage = ({ params }) => {
//   const id = params.id;

//   const [loading, setLoading] = useState(false);
//   const [update, setUpdate] = useState(false);
//   const [pageloading, setPageLoading] = useState(false);
//   const [editprojectViewFormData, setEditProjectViewFormData] =
//     useState(projectFormData);
//   const router = useRouter();

//   const extractData = async () => {
//     try {
//       setPageLoading(true);
//       const { data } = await getSingleData("projects", id);
//       if (data) {
//         setEditProjectViewFormData(data);
//         setUpdate(true);
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setPageLoading(false);
//     }
//   };

//   const saveData = async () => {
//     setLoading(true);

//     try {
//       const response = await updateData("projects", editprojectViewFormData);
//       setLoading(false);

//       if (response && response?.success) {
//         // setShow(false);
//         router.push("/dashboard/projects");
//       } else {
//         console.error("Failed to update project:", response);
//       }
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     extractData();
//   }, []);
//   return (
//     <div className="padding max-md:mt-16  w-full">
//       {pageloading ? (
//         <div className="w-full h-full flex justify-center items-center">
//           {" "}
//           <HashLoader color="#FF715F" />
//         </div>
//       ) : (
//         <>
//           <FormControls
//             controls={controls}
//             formDataa={editprojectViewFormData}
//             setFormData={setEditProjectViewFormData}
//           />
//           <div>
//             <Button saveData={saveData} loading={loading} update={update} />
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default EditPage;

"use client";
import { getSingleData, updateData } from "@/app/(services)/services";
import Button from "@/app/components/admin-view/button/Button";
import FormControls from "@/app/components/admin-view/form-controls";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useCallback } from "react";
import toast from "react-hot-toast";
import { HashLoader } from "react-spinners";

const projectFormData = {
  name: "",
  image: "",
  category: "",
  description: "",
  link: "",
  github: "",
};

const controls = [
  {
    label: "Name",
    type: "text",
    placeholder: "Insert your Project Name",
    name: "name",
  },
  {
    label: "Description",
    type: "text",
    placeholder: "Insert your Description",
    name: "description",
  },
  {
    label: "  Category",
    type: "text",
    placeholder: " your Project Category",
    name: "category",
  },
  {
    label: "Link",
    type: "text",
    placeholder: "Insert your Project Link",
    name: "link",
  },
  {
    label: "Github",
    type: "text",
    placeholder: "Insert your Github Link",
    name: "github",
  },
  {
    label: "Image",
    type: "file",
    placeholder: "Insert your Name",
    name: "image",
  },
];

const EditPage = ({ params }) => {
  const id = params.id;

  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [pageloading, setPageLoading] = useState(false);
  const [editprojectViewFormData, setEditProjectViewFormData] =
    useState(projectFormData);
  const router = useRouter();

  // Memoizing extractData using useCallback to avoid re-creating the function on every render
  const extractData = useCallback(async () => {
    try {
      setPageLoading(true);
      const { data } = await getSingleData("projects", id);
      if (data) {
        setEditProjectViewFormData(data);
        setUpdate(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setPageLoading(false);
    }
  }, [id]);

  const saveData = async () => {
    setLoading(true);

    try {
      const response = await updateData("projects", editprojectViewFormData);
      setLoading(false);

      if (response && response?.success) {
        router.push("/dashboard/projects");
      } else {
        console.error("Failed to update project:", response);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    extractData();
  }, [extractData]); // Including extractData in the dependency array

  return (
    <div className="padding max-md:mt-16 w-full">
      {pageloading ? (
        <div className="w-full h-full flex justify-center items-center">
          <HashLoader color="#FF715F" />
        </div>
      ) : (
        <>
          <FormControls
            controls={controls}
            formDataa={editprojectViewFormData}
            setFormData={setEditProjectViewFormData}
          />
          <div>
            <Button saveData={saveData} loading={loading} update={update} />
          </div>
        </>
      )}
    </div>
  );
};

export default EditPage;
