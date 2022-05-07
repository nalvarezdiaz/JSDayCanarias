import type { HTMLAttributes, PropsWithChildren } from "react";

import cx from "classnames";
import styles from "./List.styles";

export type ListItem = HTMLAttributes<HTMLDivElement> & {
  isSelected?: boolean;
};

const ListItem = ({
  children,
  isSelected,
  ...props
}: PropsWithChildren<ListItem>) => {
  return (
    <div
      css={styles.listItem()}
      {...props}
      className={cx(
        {
          selected: !!isSelected,
          clickable: !!props.onClick,
        },
        props.className
      )}
    >
      {children}
    </div>
  );
};

export default ListItem;
