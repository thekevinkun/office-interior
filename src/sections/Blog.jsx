import { motion } from "motion/react";

import { Button, Tagline } from "../components";

import {
  fadeIn,
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../constants/motion";

import { blog1, blog2, blog3 } from "../assets";

const Blog = () => {
  return (
    <section id="blog" className="section__y overflow-hidden">
      <div className="flex flex-col gap-0 lg:grid lg:grid-cols-10 lg:gap-4">
        {/* FIRST BLOG */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromTop(-25, 0.75, 1)}
          className="hidden lg:flex flex-col gap-5 relative col-span-2"
        >
          <div className="w-full h-[220px]">
            <img
              src={blog1}
              alt="First blog"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Tagline className="w-fit">Crafting</Tagline>
            <h3 className="font-normal capitalize text-black-2">
              Top 10 interior design
              <br />
              companies in europe
            </h3>
          </div>
        </motion.div>

        {/* SECOND BLOG */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn(0.75, 1)}
          className="relative col-span-6 flex flex-col"
        >
          <img
            src={blog2}
            alt="Second blog"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="rounded-xl absolute bottom-0 left-0 z-20">
            <div className="content-3 relative w-fit bg-white pt-[2px] py-[2px] xs:pt-1 xs:py-1 pr-2 sm:pt-2 sm:py-2 sm:pr-3 lg:pt-4 md:py-3 md:pr-4 rounded-tr-2xl">
              <Tagline className="!text-[0.45rem] sm:!text-[0.625rem] md:!text-xs lg:!text-sm">
                We create your dream
              </Tagline>
            </div>

            <h2
              className="flex flex-col font-normal capitalize 
              text-[2rem] leading-[2rem] xs:text-[2.5rem] xs:leading-[2.75rem] sm:text-[3rem] sm:leading-[3.5rem] 
              md:text-[3.5rem] md:leading-[4rem]"
            >
              <span className="content-1 relative w-fit bg-white py-1 pr-4 rounded-tr-2xl">
                Crafting
              </span>
              <span className="content-2 relative w-fit bg-white py-1 pr-4 rounded-tr-2xl">
                Greatness
              </span>
            </h2>
          </div>
        </motion.div>

        {/* THIRD BLOG */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromBottom(25, 0.75, 1)}
          className="hidden relative mt-auto col-span-2 lg:flex flex-col gap-5"
        >
          <div className="flex flex-col gap-2">
            <Tagline className="w-fit">Fully consultation</Tagline>
            <h3 className="font-normal capitalize text-black-2">
              Get advice how
              <br />
              you want the office designed
            </h3>
          </div>

          <div className="w-full h-[220px]">
            <img
              src={blog3}
              alt="Third blog"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </motion.div>

        {/* BLOG MOBILE */}
        <div className="lg:hidden mt-10 flex gap-3 xs:gap-5">
          {/* FIRST BLOG MOBILE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromLeft(0.75, 1)}
            className="flex flex-col"
          >
            <div className="w-full h-full">
              <img
                src={blog1}
                alt="First blog"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="mt-3 flex flex-col gap-2">
              <Tagline className="w-fit">Crafting</Tagline>
              <h3 className="font-normal capitalize text-black-2 text-sm xs:text-base sm:text-lg">
                Top 10 interior design
                <br />
                companies in europe
              </h3>
            </div>
          </motion.div>

          {/* THIRD BLOG MOBILE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromRight(0.75, 1)}
            className="flex flex-col"
          >
            <div className="w-full h-full">
              <img
                src={blog3}
                alt="Third blog"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="mt-3 flex flex-col gap-2">
              <Tagline className="w-fit">Fully consultation</Tagline>
              <h3 className="font-normal capitalize text-black-2 text-sm xs:text-base sm:text-lg">
                Get advice how
                <br />
                you want the office designed
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
