import type { FC, PropsWithChildren } from "react";

import { useEffect, useMemo } from "react";
import classNames from "classnames";
import useSelect from "./useSelect";
import styles from "./Select.styles";

export type SelectOptionProps = {
  value: string | number;
  isDisabled?: boolean;
};

const SelectOption: FC<PropsWithChildren<SelectOptionProps>> = ({
  children,
  value,
  isDisabled = false,
}) => {
  const { selectedValue, onOpenChange, onSelectedValueChange, registerOption } =
    useSelect();

  const option = useMemo(
    () => ({
      value,
      label: children,
    }),
    [children, value]
  );

  useEffect(() => {
    registerOption({ ...option, isDisabled });
  }, [registerOption, option]);
  return (
    <div
      css={styles.option()}
      className={classNames({
        selected: selectedValue === value,
        disabled: isDisabled,
      })}
      onClick={() => {
        onSelectedValueChange(value);
        onOpenChange(false);
      }}
    >
      {children}
    </div>
  );
};

export default SelectOption;
