import { useEffect } from "react";
import type { PropsWithChildren } from "react";

import cx from "classnames";
import styles from "./SelectableList.styles";
import useSelectableList from "./useSelectableList";

export type ListItem = {
  id: string;
};

const ListItem = ({children, id}: PropsWithChildren<ListItem>) => {
  const {selectedItems, onSelectionChange, registerItem} = useSelectableList();
  const isSelected = selectedItems.includes(id);

  useEffect(() => {
    registerItem(id);
  }, [ registerItem, id ]);

  return (<div
      css={ styles.listItem() }
      className={ cx({
        selected: isSelected, clickable: true,
      }) }
      onClick={ () => {
        if (isSelected) {
          const index = selectedItems.indexOf(id);
          const updatedSelectedItems = [ ...selectedItems ];
          updatedSelectedItems.splice(index, 1);
          return onSelectionChange(updatedSelectedItems);
        }

        onSelectionChange([ ...selectedItems, id ]);
      } }
    >
      { children }
    </div>);
};

export default ListItem;
