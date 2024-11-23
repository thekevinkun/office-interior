import { motion } from "motion/react";

import { Button, Tagline } from "../components";

import { MdOutlineArrowOutward } from "react-icons/md";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromBottom,
  slideInFromTop,
  rotateY,
} from "../constants/motion";

import { hero1, hero2 } from "../assets";

const Hero = () => {
  return (
    <section
      id="hero"
      className="py-3 h-[calc(100svh-86px)] sm:h-full lg:h-[calc(100svh-86px)]"
    >
      {/* HERO CONTAINER */}
      <div className="h-full grid gird-cols-2 lg:grid-cols-7 max-[480px]:grid-rows-[1fr,180px] gap-7">
        {/* FIRST HERO IMAGE */}
        <div className="relative lg:col-span-5 z-10">
          <motion.img
            initial="hidden"
            animate="visible"
            variants={slideInFromBottom(100, 0.75, 0.75)}
            src={hero1}
            alt="Hero"
            className="relative w-full h-full object-cover rounded-2xl"
          ></motion.img>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromBottom(100, 0.75, 0.75)}
            className="w-full h-full absolute top-0 left-0 z-[5] bg-[linear-gradient(195deg,rgba(222,222,222,0)70%,rgba(255,255,255,1)89%)]"
          ></motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromTop(-15, 0.75, 1)}
            className="padding-content absolute top-0 left-0 z-20"
          >
            <Tagline>Interior Design</Tagline>

            <h3 className="mt-3 md:mt-5 font-normal capitalize text-black-2 text-[0.875rem] xs:text-[1rem] md:text-lg lg:text-xl">
              Make your dream
              <br />
              office come true today!
            </h3>
          </motion.div>

          <div className="rounded-xl absolute bottom-0 left-0 z-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInFromLeft(1, 1)}
              className="content-3 relative hidden xs:block bg-white w-fit py-1 pr-2 sm:py-2 sm:pr-3 md:py-4 md:pr-4 rounded-tr-2xl"
            >
              <Tagline className="!text-[0.45rem] sm:!text-[0.625rem] md:!text-xs lg:!text-sm">
                We create your dream office
              </Tagline>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={slideInFromLeft(0.75, 0.75)}
              className="h1 capitalize flex flex-col"
            >
              <span className="content-1 relative bg-white w-fit py-1 xs:py-0 pr-4 rounded-tr-2xl">
                Modern
              </span>
              <span className="content-2 relative bg-white w-fit py-1 pr-4 rounded-tr-2xl">
                Office Interior
              </span>
            </motion.h1>
          </div>
        </div>

        <div className="h-full lg:col-span-2 flex flex-row-reverse lg:flex-col gap-3">
          {/* SECOND HERO CONTENT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromRight(0.75, 1)}
            className="relative overflow-hidden w-full h-full bg-[linear-gradient(145deg,rgba(222,222,222,1)30%,rgba(240,240,240,1)70%)] rounded-2xl"
          >
            <div className="h-full padding-content absolute top-0 left-0 flex flex-col justify-between">
              <div>
                <Tagline>Client</Tagline>

                <h3 className="mt-3 md:mt-5 font-normal capitalize text-black-2 text-xs sm:text-sm md:text-[1rem] md:leading-[1.25rem] lg:text-lg lg:leading-[1.5rem]">
                  Become a
                  <br />
                  customer now and win prizes
                </h3>
              </div>

              <h2 className="font-medium capitalize text-xs sm:text-[1rem] sm:leading-[1.5rem] md:text-[1.5rem] md:leading-[2rem] lg:text-[1.85rem] lg:leading-[2.25rem]">
                Join the interior
                <br />
                Design world
              </h2>
            </div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={rotateY(0.75, 1)}
              className="button-1 bg-white pt-2 pl-2 absolute bottom-0 right-0 rounded-tl-2xl z-20"
            >
              <Button
                className="p-3 bg-black text-[1.3rem] sm:text-[1.75rem] text-white rounded-2xl
                  hover:bg-black/85 hover:scale-110 transition-[background-color,transform] duration-300"
              >
                <MdOutlineArrowOutward />
              </Button>
            </motion.div>
          </motion.div>

          {/* THIRD HERO CONTENT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromRight(0.75, 1)}
            className="w-full h-full relative z-10 overflow-hidden"
          >
            <img
              src={hero2}
              alt="Hero"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="h-full padding-content absolute top-0 left-0 flex flex-col justify-between">
              <div>
                <Tagline white={true}>Materials</Tagline>

                <h3 className="mt-3 md:mt-5 font-normal capitalize text-white-2 text-xs sm:text-sm md:text-[1rem] md:leading-[1.25rem] lg:text-lg lg:leading-[1.5rem]">
                  We use the best
                  <br />
                  materials on the market
                </h3>
              </div>

              <h2 className="font-medium capitalize text-white-2 text-xs sm:text-[1rem] sm:leading-[1.5rem] md:text-[1.5rem] md:leading-[2rem] lg:text-[1.85rem] lg:leading-[2.25rem]">
                High Quality
                <br />
                Materials
              </h2>
            </div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={rotateY(0.75, 1)}
              className="button-2 bg-white pt-2 pl-2 absolute bottom-0 right-0 rounded-tl-2xl z-20"
            >
              <Button
                className="p-3 bg-black text-[1.3rem] sm:text-[1.75rem] text-white rounded-2xl
                 hover:bg-black/85 hover:scale-110 transition-[background-color,transform] duration-300"
              >
                <MdOutlineArrowOutward />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
