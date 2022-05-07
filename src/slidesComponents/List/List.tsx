import type { PropsWithChildren } from "react";

import styles from "./List.styles";

const List = ({ children }: PropsWithChildren<{}>) => {
  return <div css={styles.listContainer()}>{children}</div>;
};

export default List;
