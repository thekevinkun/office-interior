const Button = ({ id, className, childClass, href, onClick, children }) => {
  const classes = `button relative inline-flex items-center justify-center
    ${className || ""}`;
  const spanClasses = `relative z-10 ${childClass || ""}`;

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  );

  const renderLink = () => (
    <a href={href} target="_blank" className={classes}>
      <span className={spanClasses}>{children}</span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
