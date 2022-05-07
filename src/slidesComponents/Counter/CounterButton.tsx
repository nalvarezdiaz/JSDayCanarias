import type { PropsWithChildren } from "react";

import BaseCounterButton from "../AllInCounter/BaseCounterButton";
import useCounter from "./useCounter";

export type CounterButtonProps = {
  mode: "increment" | "decrement";
  step?: number;
};

const CounterButton = ({
  children,
  ...props
}: PropsWithChildren<CounterButtonProps>) => {
  const contextProps = useCounter();

  return (
    <BaseCounterButton {...props} {...contextProps}>
      {children}
    </BaseCounterButton>
  );
};

export default CounterButton;
