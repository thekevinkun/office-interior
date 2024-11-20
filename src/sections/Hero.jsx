import { Button, Tagline } from "../components";

import { MdOutlineArrowOutward } from "react-icons/md";

import { hero1, hero2 } from "../assets";

const Hero = () => {
  return (
    <section className="py-3">
      {/* HERO CONTAINER */}
      <div className="xs:h-full lg:h-[545px] grid gird-cols-2 lg:grid-cols-7 max-[480px]:grid-rows-[1fr,180px] gap-7">
        {/* FIRST HERO IMAGE */}
        <div className="card-1 relative lg:col-span-5 z-10">
          <img
            src={hero1}
            alt="Hero"
            className="hero-img-1 relative w-full h-full object-cover rounded-2xl"
          />

          <div className="padding-content absolute top-0 left-0">
            <Tagline>Interior Design</Tagline>

            <h3 className="mt-3 md:mt-5 font-normal text-[1rem] xs:text-lg md:text-2xl text-black-2">
              Make your dream
              <br />
              office come true today!
            </h3>
          </div>

          <div className="card-item-1 rounded-xl absolute bottom-0 left-0 z-20">
            <div className="hidden sm:block bg-white w-fit py-3 pr-3 md:py-4 md:pr-4 rounded-tr-2xl">
              <Tagline className="text-[0.625rem] md:!text-xs lg:!text-sm">
                We create your dream office
              </Tagline>
            </div>

            <h1 className="h1 flex flex-col">
              <span className="bg-white w-fit pr-4 rounded-tr-2xl">Modern</span>
              <span className="bg-white w-fit py-1 pr-4 rounded-tr-2xl">
                Office Interior
              </span>
            </h1>
          </div>
        </div>

        {/* SECOND & THIRD HERO IMAGE */}
        <div className="lg:col-span-2 flex flex-row-reverse lg:flex-col gap-3">
          <div className="card-2 relative w-full h-full bg-[linear-gradient(145deg,rgba(222,222,222,1)30%,rgba(240,240,240,1)70%)] rounded-2xl">
            <div className="h-full padding-content absolute top-0 left-0 flex flex-col justify-between">
              <div>
                <Tagline>Client</Tagline>

                <h3 className="mt-3 md:mt-5 font-normal text-xs sm:text-sm md:text-[1rem] md:leading-[1.25rem] lg:text-lg lg:leading-[1.5rem] text-black-2">
                  Become a
                  <br />
                  customer now and win prizes
                </h3>
              </div>

              <h2 className="font-medium text-xs sm:text-[1rem] sm:leading-[1.5rem] md:text-[1.5rem] md:leading-[2rem] lg:text-[1.85rem] lg:leading-[2.25rem] text-black-2">
                Join the interior
                <br />
                Design world
              </h2>
            </div>

            <div className="bg-white pt-[7px] pl-[7px] absolute bottom-0 right-0 rounded-tl-2xl z-20">
              <Button
                className="p-3 bg-black text-[1.3rem] sm:text-[1.75rem] text-white-1 rounded-2xl
                  hover:bg-black/85 hover:scale-110 transition-[background-color,transform] duration-300"
              >
                <MdOutlineArrowOutward />
              </Button>
            </div>
          </div>

          <div className="card-3 w-full h-full relative z-10">
            <img
              src={hero2}
              alt="Hero"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="h-full padding-content absolute top-0 left-0 flex flex-col justify-between">
              <div>
                <Tagline white={true}>Materials</Tagline>

                <h3 className="mt-3 md:mt-5 font-normal text-xs sm:text-sm md:text-[1rem] md:leading-[1.25rem] lg:text-lg lg:leading-[1.5rem] text-white-2">
                  We use the best
                  <br />
                  materials on the market
                </h3>
              </div>

              <h2 className="font-medium text-xs sm:text-[1rem] sm:leading-[1.5rem] md:text-[1.5rem] md:leading-[2rem] lg:text-[1.85rem] lg:leading-[2.25rem] text-white-2">
                High Quality
                <br />
                Materials
              </h2>
            </div>

            <div className="bg-white pt-[7px] pl-[7px] absolute bottom-0 right-0 rounded-tl-2xl z-20">
              <Button
                className="p-3 bg-black text-[1.3rem] sm:text-[1.75rem] text-white-1 rounded-2xl
                 hover:bg-black/85 hover:scale-110 transition-[background-color,transform] duration-300"
              >
                <MdOutlineArrowOutward />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
