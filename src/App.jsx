import { useCallback, useEffect, useRef, useState } from "react";
import Box from "./components/Box";
import CompBox from "./components/CompBox";
import Counter from "./components/Counter";
import Title from "./components/Title";
import { useCounter } from "./contexts/count";

const App = () => {
  const { count, setCountFn } = useCounter();

  const handleClick = useCallback((event) => {
    setCountFn(event.target.innerText);
  }, []);

  useEffect(() => console.log("handleClick rerendered"), [handleClick]);

  const [subtitle, setSubtitle] = useState("");
  const inputRef = useRef(null);
  const handleClickInput = () => {
    setSubtitle(() => inputRef.current.value);
  };

  return (
    <>
      <Box
        borderWidth="2px"
        borderColor="blue"
        borderStyle="solid"
        padding="4px"
        margin="2px"
      >
        <Title title="React Tutorial" color="red">
          sub title: {subtitle}
        </Title>
        <h1>Count: {count}</h1>
        <Counter handleClick={handleClick} />
        <input type="text" ref={inputRef} />
        <button onClick={handleClickInput}>입력</button>
      </Box>
      <CompBox />
    </>
  );
};

export default App;
