"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import { containerVariantsView } from "@/app/(services)/animation/animation";
const Card = ({ projects, loading, index }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  return (
    <>
      {projects ? (
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={containerVariantsView((index + 1) * 0.1)}
          className="border relative rounded-lg max-w-[340px] z-10  cursor-pointer p-0 group"
        >
          <div className="absolute top-0 rounded-lg hover:shadow-md group-hover:bg-[rgba(0,0,0,0.1)] z-10 flex justify-center items-center bottom-0 right-0 left-0 gap-x-3">
            <Link
              href={projects.link}
              className="bg-[rgba(0,0,0,0.3)] text-white scale-0 cursor-pointer z-20 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 hover:text-orange w-11 h-11 rounded-full flex justify-center items-center text-2xl"
            >
              <FaCode />
            </Link>
            <Link
              href={projects.github}
              className="bg-[rgba(0,0,0,0.3)] cursor-pointer scale-0 text-white opacity-0 z-20 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 hover:text-orange w-11 h-11 rounded-full flex justify-center items-center text-2xl"
            >
              <FaGithub />
            </Link>
          </div>
          <div className="relative bg-bg_card flex justify-center xl:bg-[110%] bg-offwhite items-end md:items-center w-full h-[250px] md:h-[270px] mb-4">
            <Image
              src={projects.image}
              width={250}
              height={230}
              alt={projects.name}
              className="shadow-2xl object-contain h-[215px] md:h-[230px] absolute bottom-0"
            />
          </div>
          <h1 className="font-bold px-4 text-lg text-black mb-1">
            {projects.name}
          </h1>
          <p className="px-4 mb-4 flex flex-wrap text-ellipsis">
            {showFullDescription
              ? projects.description
              : projects.description.slice(0, 65)}
            ..
          </p>

          <label className="bg-orange capitalize cursor-pointer rounded-3xl text-base text-white px-3 py-1 absolute top-1 left-1">
            {projects.category}
          </label>
        </motion.div>
      ) : (
        <div className="border relative  rounded-lg max-w-[390px] px-3 pt-3 bg-white p-0 ">
          <div className="absolute  top-0 z-10 flex justify-center items-center bottom-0 right-0 left-0 gap-x-3">
            <Link
              href={"/"}
              className="bg-slate-100 w-11 h-11 rounded-full animate-pulse "
            ></Link>
            <Link
              href={"/"}
              className="bg-slate-100 w-11 h-11 rounded-full animate-pulse"
            ></Link>
          </div>
          <div className="relative  flex justify-center xl:bg-[110%] bg-slate-100 rounded-md animate-pulse items-center w-full h-[200px] md:h-[268px] mb-4 "></div>
          <h1 className=" bg-slate-100 w-52 h-5 mb-3  animate-pulse"></h1>
          <p className="bg-slate-100  w-72 h-5 mb-3  animate-pulse"></p>
        </div>
      )}
    </>
  );
};

export default Card;
