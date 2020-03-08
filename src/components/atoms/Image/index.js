import { React } from "libraries";

const Image = ({ source, title, className, style, width, height }) => {
  return (
    <img
      src={source}
      alt={title}
      className={className}
      style={style}
      width={width}
      height={height}
    />
  );
};

export default Image;
