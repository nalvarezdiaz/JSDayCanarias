import styles from "./SelectableList.styles";
import useSelectableList from "./useSelectableList";

const ListSelection = () => {
  const { selectedItems, items, onSelectionChange } = useSelectableList();

  return (
    <div css={styles.listItem()}>
      <input
        type={"checkbox"}
        checked={items.length === selectedItems.length}
        onChange={() => {
          if (items.length === selectedItems.length) {
            return onSelectionChange([]);
          }

          return onSelectionChange(items);
        }}
      />
      Selected {selectedItems.length} of {items.length}
    </div>
  );
};

export default ListSelection;
