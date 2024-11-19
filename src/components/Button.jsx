const Button = ({ className, onClick, children }) => {
  const classes = `button relative inline-flex items-center justify-center
    ${className || ""}`;
  const spanClasses = "relative z-10";

  return (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  );
};

export default Button;
