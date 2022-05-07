import type { PropsWithChildren } from "react";

import { useEffect } from "react";
import useSelect from "./useSelect";
import styles from "./Select.styles";

export type SelectLabelProps = {
  position?: "top" | "left";
  className?: string;
};

const SelectLabel = ({
  children,
  position = "top",
  className,
}: PropsWithChildren<SelectLabelProps>) => {
  const { onLabelPositionChange } = useSelect();

  useEffect(() => {
    onLabelPositionChange(position);
  }, [position]);

  return (
    <div css={styles.selectLabel()} className={className}>
      {children}
    </div>
  );
};

export default SelectLabel;
