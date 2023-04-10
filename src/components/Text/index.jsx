import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-5xl md:text-5xl text-[65px]",
  h2: "sm:text-[35px] md:text-[41px] text-[45px]",
  h3: "font-bold sm:text-4xl md:text-[38px] text-[40px]",
  h4: "text-3xl sm:text-[26px] md:text-[28px]",
  h5: "font-semibold sm:text-[21px] md:text-[23px] text-[25px]",
  h6: "font-semibold text-2xl md:text-[22px] sm:text-xl",
  body1: "font-semibold text-[22px] sm:text-lg md:text-xl",
  body2: "text-xl",
  body3: "text-lg",
  body4: "text-base",
  body5: "font-medium text-sm",
  body6: "font-medium text-[12.61px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
