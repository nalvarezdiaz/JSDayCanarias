import type { PropsWithChildren } from "react";

import styles from "./SelectableList.styles";
import SelectableListProvider, {
  SelectableListProviderProps,
} from "./SelectableListProvider";

const SelectableList = ({
  children,
  ...props
}: PropsWithChildren<SelectableListProviderProps>) => {
  return (
    <SelectableListProvider {...props}>
      <div css={styles.listContainer()}>{children}</div>
    </SelectableListProvider>
  );
};

export default SelectableList;
