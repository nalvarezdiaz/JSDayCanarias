import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import { MdOutlineExposurePlus2, MdOutlineExposureNeg2 } from "react-icons/md";

import Counter from "../../slidesComponents/Counter/Counter";
import CounterButton from "../../slidesComponents/Counter/CounterButton";
import CounterDisplay from "../../slidesComponents/Counter/CounterDisplay";

const Counter3Example = () => {
  const [value, onChange] = useState(0);

  return (
    <div style={{ margin: "1em" }}>
      <Counter value={value} onChange={onChange} min={0} max={10}>
        <CounterButton mode={"decrement"} step={2}>
          <MdOutlineExposureNeg2 />
        </CounterButton>
        <CounterDisplay />
        <CounterButton mode={"decrement"}>
          <BiMinus />
        </CounterButton>
        <CounterButton mode={"increment"}>
          <BiPlus />
        </CounterButton>
        <CounterButton mode={"increment"} step={2}>
          <MdOutlineExposurePlus2 />
        </CounterButton>
      </Counter>
    </div>
  );
};

export default Counter3Example;
