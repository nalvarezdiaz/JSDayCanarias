import type { PropsWithChildren } from "react";

import { useCallback, useMemo } from "react";
import cx from "classnames";
import { BaseProps } from "./AllInCounter";
import styles from "./AllInCounter.styles";

export type CounterButtonProps = PropsWithChildren<
  {
    mode: "increment" | "decrement";
    step?: number;
  } & BaseProps
>;

const BaseCounterButton = ({
  children,
  mode,
  step = 1,
  value,
  onChange,
  min,
  max,
}: CounterButtonProps) => {
  const handleChange = useCallback(() => {
    if (mode === "increment") {
      return onChange(value + step);
    }

    return onChange(value - step);
  }, [mode, step, value, onChange]);

  const canChange = useMemo(() => {
    if (mode === "increment") {
      return max === undefined || value + step <= max;
    }

    return min === undefined || value - step >= min;
  }, [mode, min, value, step]);

  return (
    <div
      css={styles.counterButton()}
      className={cx({
        disabled: !canChange,
      })}
      onClick={handleChange}
    >
      {children}
    </div>
  );
};

export default BaseCounterButton;
