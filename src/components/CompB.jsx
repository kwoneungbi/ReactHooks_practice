import Box from "./Box";

const CompB = () => {
  console.log("CompB");

  return (
    <>
      <Box
        borderWidth="2px"
        borderColor="gray"
        borderStyle="solid"
        padding="4px"
        margin="2px"
      >
        <span>CompB</span>
      </Box>
    </>
  );
};

export default CompB;
