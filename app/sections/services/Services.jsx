"use client";
import {
  tagVariants,
  tittleVariants,
} from "@/app/(services)/animation/animation";
import ServiceCard from "@/app/components/serviceCard/Card";
import { motion } from "framer-motion";
const Services = ({ servicesData }) => {
  return (
    <section id="services" className=" padding max-container h-100vh">
      <div className="flex flex-col justify-center items-center  relative">
        <motion.h1
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="section-title"
        >
          Services
        </motion.h1>
        <motion.h5
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tittleVariants}
          className="font-palanquin  font-bold   text-orange ms-8"
        >
          what i offer
        </motion.h5>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-y-6 gap-x-6 mt-14">
        <ServiceCard services={servicesData}></ServiceCard>
      </div>
    </section>
  );
};

export default Services;
