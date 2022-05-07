import React, { useState } from "react";
import Select from "../../slidesComponents/Select/Select";
import SelectButton from "../../slidesComponents/Select/SelectButton";
import SelectLabel from "../../slidesComponents/Select/SelectLabel";
import SelectOption from "../../slidesComponents/Select/SelectOption";

const CompoundComponentsExample = () => {
  const [selectedValue, setSelectedValue] = useState<
    string | number | undefined
  >("javascript");

  return (
    <div>
      <Select
        selectedValue={selectedValue}
        onSelectedValueChange={setSelectedValue}
      >
        <SelectLabel position={"top"}>Choose a language:</SelectLabel>
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
    </div>
  );
};

export default CompoundComponentsExample;
