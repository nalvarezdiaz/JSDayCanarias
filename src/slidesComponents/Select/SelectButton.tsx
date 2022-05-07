import { BiCaretDown } from "react-icons/bi";
import useSelect from "./useSelect";
import styles from "./Select.styles";

const SelectButton = () => {
  const { selectedValue, options, onOpenChange } = useSelect();

  return (
    <div
      css={styles.selectButtonContainer()}
      onClick={() => onOpenChange(isOpen => !isOpen)}
    >
      {(!selectedValue || !options[selectedValue]) && (
        <div className={"placeholder"}>Select an option...</div>
      )}
      {selectedValue && options[selectedValue] && (
        <div css={styles.option()} className={"option"}>
          {options[selectedValue].label}
        </div>
      )}
      <div className={"caret"}>
        <BiCaretDown />
      </div>
    </div>
  );
};

export default SelectButton;
