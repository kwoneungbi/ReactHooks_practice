import { useCounter } from "../contexts/count";
import Box from "./Box";

const CompA = () => {
  const { count } = useCounter();
  console.log("CompA");
  console.log("count>>", { count });
  return (
    <>
      <Box
        borderWidth="2px"
        borderColor="orange"
        borderStyle="solid"
        padding="4px"
        margin="2px"
      >
        <span>CompA ({count})</span>
      </Box>
    </>
  );
};

export default CompA;
