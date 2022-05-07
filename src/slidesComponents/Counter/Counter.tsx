import type { PropsWithChildren } from "react";
import type { CounterProviderProps } from "./CounterProvider";

import CounterProvider from "./CounterProvider";
import styles from "../AllInCounter/AllInCounter.styles";

const Counter = ({
  children,
  ...props
}: PropsWithChildren<CounterProviderProps>) => {
  return (
    <CounterProvider {...props}>
      <div css={styles.counterContainer()}>{children}</div>
    </CounterProvider>
  );
};

export default Counter;
