import Box from "./Box";

const CompC = () => {
  console.log("CompC");

  return (
    <>
      <Box
        borderWidth="2px"
        borderColor="pink"
        borderStyle="solid"
        padding="4px"
        margin="2px"
      >
        <span>CompC</span>
      </Box>
    </>
  );
};

export default CompC;
