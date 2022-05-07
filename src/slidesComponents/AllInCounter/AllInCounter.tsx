import type { ReactNode } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

import BaseCounterButton from "./BaseCounterButton";
import BaseCounterDisplay from "./BaseCounterDisplay";
import styles from "./AllInCounter.styles";

export type BaseProps = {
  value: number;
  onChange(value: number): void;
  min?: number;
  max?: number;
  step?: number;
  decrementAdornment?: ReactNode;
  incrementAdornment?: ReactNode;
};

const AllInCounter = ({
  value,
  decrementAdornment,
  incrementAdornment,
  ...props
}: BaseProps) => {
  return (
    <div css={styles.counterContainer()}>
      <BaseCounterButton mode={"decrement"} value={value} {...props}>
        {decrementAdornment || <BiMinus />}
      </BaseCounterButton>
      <BaseCounterDisplay value={value} />
      <BaseCounterButton mode={"increment"} value={value} {...props}>
        {incrementAdornment || <BiPlus />}
      </BaseCounterButton>
    </div>
  );
};

export default AllInCounter;
