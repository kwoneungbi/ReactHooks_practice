import { useReducer } from "react";
import Box from "./Box";
import CompA from "./CompA";
import CompB from "./CompB";
import CompC from "./CompC";

const reducer = (state, action) => {
  switch (action) {
    case "toggleA":
      return { ...state, [action]: !state[action] };
    case "toggleB":
      return { ...state, [action]: !state[action] };
    case "toggleC":
      return { ...state, [action]: !state[action] };
  }
};

const CompBox = () => {
  const [state, dispatch] = useReducer(reducer, {
    toggleA: false,
    toggleB: false,
    toggleC: false,
  });

  const handleClick = (event) => {
    let target = event.target.innerText;
    dispatch(target);
  };

  return (
    <Box
      borderWidth="2px"
      borderColor="green"
      borderStyle="solid"
      padding="4px"
      margin="2px"
    >
      <button onClick={handleClick}>toggleA</button>
      <button onClick={handleClick}>toggleB</button>
      <button onClick={handleClick}>toggleC</button>
      {state["toggleA"] && <CompA />}
      {state["toggleB"] && <CompB />}
      {state["toggleC"] && <CompC />}
    </Box>
  );
};

export default CompBox;
