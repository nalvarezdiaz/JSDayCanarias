import type { PropsWithChildren } from "react";

import { createContext } from "react";

export type ICounterContext = {
  value: number;
  onChange(value: number): void;
  min?: number;
  max?: number;
};

export const CounterContext = createContext<ICounterContext>(undefined!);

export type CounterProviderProps = ICounterContext & {};

const CounterProvider = ({
  children,
  value = 0,
  onChange,
  min,
  max,
}: PropsWithChildren<CounterProviderProps>) => {
  return (
    <CounterContext.Provider value={{ value, onChange, min, max }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
