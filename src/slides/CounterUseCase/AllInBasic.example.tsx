import React, { useState } from "react";
import AllInCounter from "../../slidesComponents/AllInCounter/AllInCounter";

const AllInBasicExample = () => {
  const [value, onChange] = useState(0);

  return (
    <AllInCounter
      value={value}
      onChange={onChange}
      min={0}
      max={10}
      decrementAdornment={"Remove"}
      incrementAdornment={"Add"}
    />
  );
};

export default AllInBasicExample;
