import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Select from "../../slidesComponents/Select/Select";
import SelectButton from "../../slidesComponents/Select/SelectButton";
import SelectLabel from "../../slidesComponents/Select/SelectLabel";
import SelectOption from "../../slidesComponents/Select/SelectOption";

const options = [
  "last",
  "waste",
  "hover",
  "irritate",
  "greet",
  "fence",
  "dislike",
  "like",
  "bore",
  "unlock",
  "race",
  "amuse",
  "rot",
  "hope",
  "pray",
];

const Select2Example = () => {
  const [selectedValue, setSelectedValue] = useState<
    string | number | undefined
  >();

  const [currentOptions, setCurrentOptions] = useState<string[]>(
    options.slice(0, 4)
  );

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
        <SelectLabel position={"top"}>Choose an option:</SelectLabel>
        <SelectButton />

        {currentOptions.map(option => (
          <SelectOption key={option} value={option}>
            {option.toUpperCase()}
          </SelectOption>
        ))}
      </Select>

      <div>
        <Button
          onClick={() => {
            setCurrentOptions(cOptions => {
              return options.slice(0, cOptions.length + 1);
            });
          }}
        >
          Add another option
        </Button>
        <Button
          onClick={() => {
            setCurrentOptions(cOptions => {
              return options.slice(0, cOptions.length - 1);
            });
          }}
        >
          Remove last option
        </Button>
      </div>
    </div>
  );
};

export default Select2Example;
