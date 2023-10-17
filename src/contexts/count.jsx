import { createContext, useContext, useState } from "react";

const CounterContext = createContext({
  // initialize
  count: 0,
  setCount: () => {},
});

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const setCountFn = (param) => {
    setCount((count) => (param === "+" ? (count += 1) : (count -= 1)));
  };
  return (
    <CounterContext.Provider value={{ count, setCountFn }}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = () => useContext(CounterContext);

// eslint-disable-next-line react-refresh/only-export-components
export { CounterProvider, useCounter };
