import { Button } from "../components";

const Footer = () => {
  return (
    <footer id="footer" className="section__y">
      <div className="pb-4 sm:pb-5 w-full flex items-end justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-sm sm:text-base lg:text-lg">Fully Custom</p>
          <h3 className="capitalize text-[1.45rem] leading[1.75rem] sm:text-[2rem] sm:leading-[2.25rem] lg:text-[2.5rem] lg:leading-[2.75rem]">
            Design your own interiors
          </h3>
        </div>

        <div>
          <Button
            className="text-xs sm:text-sm font-medium text-white bg-black-1 border border-black rounded-full py-1 px-3 xs:py-[6px] xs:px-5 
              hover:bg-transparent hover:text-black-1 transitions-[background-color,colors] duration-300"
          >
            Let's Talk
          </Button>
        </div>
      </div>

      <div className="pt-4 sm:pt-5 w-full flex flex-wrap gap-5 sm:gap-0 justify-center sm:justify-between border-t border-black-2">
        <div className="text-center sm:text-start">
          <p className="capitalize text-sm md:text-base">
            2024 All rights reserved.
          </p>
          <p className="font-normal text-sm md:text-base">thekevinkun</p>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <Button
            className="text-xs md:text-sm font-medium border border-black rounded-full py-1 px-3 xs:py-[6px] xs:px-5 
              hover:bg-black-1 hover:text-white transitions-[background-color,colors] duration-300"
            href="https://www.facebook.com/"
          >
            Facebook
          </Button>

          <Button
            className="text-xs md:text-sm font-medium border border-black rounded-full py-1 px-3 xs:py-[6px] xs:px-5 
              hover:bg-black-1 hover:text-white transitions-[background-color,colors] duration-300"
            href="https://www.instagram.com/"
          >
            Instagram
          </Button>

          <Button
            className="text-xs md:text-sm font-medium border border-black rounded-full py-1 px-3 xs:py-[6px] xs:px-5 
              hover:bg-black-1 hover:text-white transitions-[background-color,colors] duration-300"
            href="https://www.twitter.com/"
          >
            Twitter
          </Button>

          <Button
            className="text-xs md:text-sm font-medium border border-black rounded-full py-1 px-3 xs:py-[6px] xs:px-5 
              hover:bg-black-1 hover:text-white transitions-[background-color] duration-300"
            href="https://www.linkedin.com/"
          >
            LinkedIn
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
