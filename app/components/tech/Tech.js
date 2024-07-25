import React from "react";
import Ball from "../canvas/Ball";
// const technologies = [
//   {
//     name: "HTML 5",
//     icon: "/tech/html.png",
//   },
//   {
//     name: "CSS 3",
//     icon: "/tech/css.png",
//   },
//   {
//     name: "JavaScript",
//     icon: "/tech/javascript.png",
//   },
//   // {
//   //   name: "TypeScript",
//   //   icon: "/tech/typescript.png",
//   // },
//   // {
//   //   name: "React JS",
//   //   icon: "/tech/reactjs.png",
//   // },
//   // {
//   //   name: "Redux Toolkit",
//   //   icon: "/tech/redux.png",
//   // },
//   // {
//   //   name: "Tailwind CSS",
//   //   icon: "/tech/tailwind.png",
//   // },
//   // {
//   //   name: "Node JS",
//   //   icon: "/tech/nodejs.png",
//   // },
//   // {
//   //   name: "MongoDB",
//   //   icon: "/tech/mongodb.png",
//   // },

//   // {
//   //   name: "git",
//   //   icon: "/tech/git.png",
//   // },
//   // {
//   //   name: "figma",
//   //   icon: "/tech/figma.png",
//   // },
//   // {
//   //   name: "docker",
//   //   icon: "/tech/docker.png",
//   // },
// ];

const Tech = ({ techData }) => {
  return (
    <div className="flex justify-center ">
      <div className="grid md:grid-cols-5 h-full gap-x-10  mx-auto grid-cols-2 ">
        {techData?.map((technology) => (
          <div
            className={` flex justify-center  items-center w-[100px] h-[100px] md:w-[130px] md:h-[130px]`}
            key={technology._id}
          >
            <Ball icon={technology.url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
