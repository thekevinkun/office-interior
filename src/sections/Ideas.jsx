import { Tagline } from "../components";

import { livingRoom } from "../assets";

const Ideas = () => {
  return (
    <section id="ideas" className="section__y">
      <div className="relative w-full h-[500px]">
        <img
          src={livingRoom}
          alt="Ideas"
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute top-0 right-0 z-20">
          <h2
            className="flex flex-col items-end font-normal text-black-2 text-[1.45rem] leading-[1.5rem] xs:text-[1.85rem] xs:leading-[2rem] 
              md:text-[2.25rem] md:leading-[2.25rem] lg:text-[2.75rem] lg:leading-[2.85rem]"
          >
            <span className="content-1 relative w-fit py-1 pl-3 xs:pl-4 md:pl-5 bg-white">
              Build your office
            </span>
            <span className="content-2 relative w-fit py-2 pl-4 xs:pl-5 bg-white rounded-l-2xl">
              Exactly as your wish
            </span>
          </h2>
        </div>

        <div className="padding-content absolute top-0 left-0">
          <Tagline>Interior Design</Tagline>

          <h3 className="mt-3 md:mt-5 font-normal text-[0.875rem] xs:text-[1rem] md:text-lg lg:text-xl text-black-2">
            Make your dream
            <br />
            office come true today!
          </h3>
        </div>

        <div className="absolute bottom-0 left-[20%] z-20">
          <div className="content-3 relative bg-white w-fit pt-2 px-3 xs:pt-3 xs:px-4 md:pt-4 md:px-5 rounded-t-2xl">
            <Tagline className="!text-[0.65rem] xs:!text-xs lg:!text-sm">
              Model code: XXA201280SS
            </Tagline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ideas;
