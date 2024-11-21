const Tagline = ({ className, children, white }) => {
  const classes = `text-xs sm:text-sm font-normal capitalize border border-black rounded-full py-[2px] px-2 xs:py-1 xs:px-3 
        ${white ? "border-white text-white-2" : "border-black text-black-2"} ${
    className || ""
  }`;

  return <span className={classes}>{children}</span>;
};

export default Tagline;
