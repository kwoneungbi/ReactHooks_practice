import { memo } from "react";

const Counter = memo(({ handleClick }) => {
  console.log("Counter component rerendered");
  return (
    <>
      <button onClick={handleClick}>+</button>
      <button onClick={handleClick}>-</button>
    </>
  );
});

export default Counter;
