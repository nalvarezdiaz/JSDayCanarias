import type { PropsWithChildren } from "react";

import { createContext, useCallback, useState } from "react";

export type ISelectableListContext = {
  items: string[];
  registerItem(itemId: string): void;
  selectedItems: string[];
  onSelectionChange(selectedItems: string[]): void;
};

export const SelectableListContext = createContext<ISelectableListContext>(
  undefined!
);

export type SelectableListProviderProps = {
  selectedItems: string[];
  onSelectionChange(selectedItems: string[]): void;
};

const SelectableListProvider = ({
  children,
  selectedItems,
  onSelectionChange,
}: PropsWithChildren<SelectableListProviderProps>) => {
  const [itemsIds, setItemsIds] = useState<Record<string, boolean>>({});

  const registerItem = useCallback(
    (itemId: string) => {
      setItemsIds(prevState => ({ ...prevState, [itemId]: true }));
    },
    [itemsIds]
  );

  return (
    <SelectableListContext.Provider
      value={{
        items: Object.keys(itemsIds),
        registerItem,
        selectedItems,
        onSelectionChange,
      }}
    >
      {children}
    </SelectableListContext.Provider>
  );
};

export default SelectableListProvider;
