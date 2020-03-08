import { React } from "libraries";

const Container = ({ className, style, children, ...props }) => {
  return (
    <div className={`container ${className || ""}`} style={style} {...props}>
      {children}
    </div>
  );
};

export default Container;
