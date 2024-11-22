import { useState } from "react";

import { Button } from "../components";

import { crafts } from "../constants";

import { MdShoppingCart } from "react-icons/md";

const Crafts = () => {
  const [activeCraft, setActiveCraft] = useState("spaces");

  const handleActiveCraft = (e) => {
    setActiveCraft(e.target.id);
  };

  return (
    <section id="crafts" className="section__y">
      <div className="w-full flex flex-col md:flex-row md:items-end md:justify-between gap-7 md:gap-0">
        <h2
          className="font-normal capitalize text-[1.5rem] leading-[2.45rem] xs:text-[1.75rem] xs:leading-[2.65rem] 
              lg:text-[2.25rem] lg:leading-[3.5rem]"
        >
          designed and crafted with
          <br />
          high quality materials
        </h2>

        <div className="flex items-center gap-3">
          {crafts.map((craft) => (
            <Button
              key={craft.id}
              id={craft.id}
              className={`${
                activeCraft === craft.id &&
                "bg-black-1 text-white-2 pointer-events-none"
              }
                text-xs lg:text-sm capitalize font-normal border border-black rounded-full py-1 px-3 xs:py-[6px] xs:px-5 
                hover:bg-black-1 hover:text-white-2 transitions-[background-color] duration-300`}
              childClass="pointer-events-none"
              onClick={(e) => handleActiveCraft(e)}
            >
              {craft.category}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-10">
        {crafts
          .find((item) => item.id === activeCraft)
          .items.map((product) => (
            <div key={product.title} className="flex flex-col">
              <div className="relative w-full h-[275px] xs:h-[300px] xl:h-[350px]">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-2xl"
                />

                <div className="cart bg-white pt-2 pl-2 absolute bottom-0 right-0 rounded-tl-2xl z-20">
                  <Button
                    className="p-4 bg-black text-[1.25rem] sm:text-[1.5rem] text-white rounded-2xl
                 hover:bg-black/85 hover:scale-110 transition-[background-color,transform] duration-300"
                  >
                    <MdShoppingCart />
                  </Button>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-normal text-lg sm:text-xl capitalize">
                  {product.title}
                </h3>
                <p className="mt-1">{product.price}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Crafts;
