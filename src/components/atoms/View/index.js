import { React } from "libraries";

const View = ({ className, style, children, ...props }) => {
  return (
    <div className={className} style={style} {...props}>
      {children}
    </div>
  );
};

export default View;
