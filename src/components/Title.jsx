import { memo } from "react";

const Title = memo(
  ({ title, children, color }) => {
    console.log("Title component rerendered");
    // const a = {};
    return (
      <>
        <h2 style={{ color }}>{title}</h2>
        <h3>{children}</h3>
      </>
    );
  },
  ({ children: preChildren }, { children: currChildren }) =>
    preChildren === currChildren
);

export default Title;
