import { useContext } from "react";
import { CounterContext } from "./CounterProvider";

const useCounter = () => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error(
      `Counter sub-components must be wrapped into "Counter" root component`
    );
  }

  return context;
};

export default useCounter;
