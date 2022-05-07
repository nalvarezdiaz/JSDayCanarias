import React, { useState } from "react";
import Select from "../../slidesComponents/Select/Select";
import SelectButton from "../../slidesComponents/Select/SelectButton";
import SelectLabel from "../../slidesComponents/Select/SelectLabel";
import SelectOption from "../../slidesComponents/Select/SelectOption";

const Select1Example = () => {
  const [labelPosition, setLabelPosition] = useState<"top" | "left">("top");
  const [selectedValue, setSelectedValue] = useState<
    string | number | undefined
  >("javascript");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
      }}
    >
      <Select
        selectedValue={selectedValue}
        onSelectedValueChange={setSelectedValue}
      >
        <SelectLabel position={labelPosition}>Choose a language:</SelectLabel>
        <SelectButton />

        <SelectOption value={"javascript"}>
          <img src={"/JSDayCanarias/js-logo.svg"} />
          <span>Javascript</span>
        </SelectOption>
        <SelectOption value={"python"}>
          <img src={"/JSDayCanarias/python-logo.svg"} />
          <span>Python</span>
        </SelectOption>
        <SelectOption value={"c/c++"} isDisabled={true}>
          <img src={"/JSDayCanarias/cplusplus-logo.svg"} />
          <span>C/C++</span>
        </SelectOption>
        <SelectOption value={"rust"}>
          <img src={"/JSDayCanarias/rust-logo.svg"} />
          <span>Rust</span>
        </SelectOption>
      </Select>

      <div>
        <fieldset>
          <legend>Label position</legend>
          <label htmlFor={"radio-top"}>Top</label>
          <input
            type={"radio"}
            id={"radio-top"}
            name={"labelPosition"}
            defaultChecked={labelPosition === "top"}
            onChange={() => {
              setLabelPosition("top");
            }}
          />
          <label htmlFor={"radio-left"}>Left</label>
          <input
            type={"radio"}
            id={"radio-left"}
            name={"labelPosition"}
            defaultChecked={labelPosition === "left"}
            onChange={() => {
              setLabelPosition("left");
            }}
          />
        </fieldset>
      </div>
    </div>
  );
};

export default Select1Example;
