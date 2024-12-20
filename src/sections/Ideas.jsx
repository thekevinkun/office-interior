import { motion } from "motion/react";

import { Tagline } from "../components";

import { slideInFromBottom, slideInFromRight } from "../constants/motion";

import { livingRoom } from "../assets";

const Ideas = () => {
  return (
    <section
      id="ideas"
      className="!pt-16 sm:!pt-20 lg:!pt-28 section__y overflow-hidden"
    >
      <div className="relative w-full h-[345px] sm:h-[380px] md:h-[450px] lg:h-[520px]">
        <img
          src={livingRoom}
          alt="Ideas"
          className="w-full h-full object-cover rounded-2xl"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromRight(0.75, 1)}
          className="absolute top-0 right-0 z-20"
        >
          <h2
            className="flex flex-col items-end font-normal capitalize 
              text-[1.45rem] leading-[1.5rem] xs:text-[1.85rem] xs:leading-[2rem] 
              md:text-[2.25rem] md:leading-[2.25rem] lg:text-[2.75rem] lg:leading-[2.85rem]"
          >
            <span className="content-1 relative w-fit py-1 pl-3 xs:pl-4 md:pl-5 bg-white">
              Build your office
            </span>
            <span className="content-2 relative w-fit py-2 pl-4 xs:pl-5 bg-white rounded-l-2xl">
              Exactly as your wish
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromBottom(15, 0.75, 1)}
          className="padding-content absolute top-0 left-0"
        >
          <Tagline>Interior Design</Tagline>

          <h3
            className="mt-3 md:mt-5 font-normal capitalize text-black-2
            text-[0.875rem] xs:text-[1rem] md:text-lg lg:text-xl"
          >
            Make your dream
            <br />
            office come true today!
          </h3>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromBottom(15, 0.5, 1)}
          className="absolute bottom-0 left-[20%] z-20"
        >
          <div className="content-3 relative bg-white w-fit pt-2 px-3 xs:pt-3 xs:px-4 md:pt-4 md:px-5 rounded-t-2xl">
            <Tagline className="!text-[0.65rem] xs:!text-xs lg:!text-sm">
              Model code: XXA201280SS
            </Tagline>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ideas;
