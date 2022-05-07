import { useContext } from "react";
import { SelectableListContext } from "./SelectableListProvider";

const useSelectableList = () => {
  const context = useContext(SelectableListContext);

  if (!context) {
    throw new Error(
      `Selectable List sub-components must be wrapped into "SelectableList" root component`
    );
  }

  return context;
};

export default useSelectableList;
