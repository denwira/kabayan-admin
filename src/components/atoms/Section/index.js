import { React } from "libraries";

const Section = ({ id, className, style, children }) => (
  <section id={id} className={className} style={style}>
    {children}
  </section>
);

export default Section;
