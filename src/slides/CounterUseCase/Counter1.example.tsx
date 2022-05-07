import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

import Counter from "../../slidesComponents/Counter/Counter";
import CounterButton from "../../slidesComponents/Counter/CounterButton";
import CounterDisplay from "../../slidesComponents/Counter/CounterDisplay";

const Counter1Example = () => {
  const [value, onChange] = useState(0);

  return (
    <div style={{ margin: "1em" }}>
      <Counter value={value} onChange={onChange} min={0} max={10}>
        <CounterDisplay />
        <CounterButton mode={"decrement"}>
          <BiMinus />
        </CounterButton>
        <CounterButton mode={"increment"}>
          <BiPlus />
        </CounterButton>
      </Counter>
    </div>
  );
};

export default Counter1Example;
