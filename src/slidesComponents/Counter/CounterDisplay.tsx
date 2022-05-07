import BaseCounterDisplay from "../AllInCounter/BaseCounterDisplay";
import useCounter from "./useCounter";

const CounterDisplay = () => {
  const { value } = useCounter();

  return <BaseCounterDisplay value={value} />;
};

export default CounterDisplay;
