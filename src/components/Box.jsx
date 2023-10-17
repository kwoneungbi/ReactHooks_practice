const Box = (props) => {
  return (
    <>
      <div style={props}>{props.children}</div>
    </>
  );
};

// const tt = {
//   borderWidth: "2px",
//   borderColor: "blue",
//   borderStyle: "solid",
//   padding: "4px",
//   margin: "2px",
// };

// const { margin } = tt;

// const { style } = tt;

export default Box;
