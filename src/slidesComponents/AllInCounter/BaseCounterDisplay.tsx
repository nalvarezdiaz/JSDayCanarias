import styles from "./AllInCounter.styles";

export type BaseCounterDisplayProps = {
  value: number;
};

const BaseCounterDisplay = ({ value }: BaseCounterDisplayProps) => {
  return <div css={styles.counterDisplay()}>{value}</div>;
};

export default BaseCounterDisplay;
