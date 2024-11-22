import { Button } from "../components";
import { RiMenu3Line } from "react-icons/ri";

const Header = () => {
  return (
    <header>
      <div className="py-5 flex items-center justify-between">
        <a
          href="/"
          className="font-semibold text-[1.25rem] xs:text-[1.45rem] tracking-wider"
        >
          Office Interior
        </a>

        <div className="flex items-center gap-3 xs:gap-5">
          <Button
            className="text-xs sm:text-sm font-medium border border-black rounded-full py-1 px-3 xs:py-[6px] xs:px-5 
              hover:bg-black-1 hover:text-white-1 transitions-[background-color] duration-300"
          >
            Let's talk
          </Button>

          <RiMenu3Line className="text-[1.75rem] text-black hover:text-black/55 cursor-pointer transition-colors duration-300" />
        </div>
      </div>
    </header>
  );
};

export default Header;
