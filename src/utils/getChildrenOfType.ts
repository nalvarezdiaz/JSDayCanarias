import type { FC, ReactNode } from "react";
import { Children, isValidElement } from "react";

const getChildrenOfType = (children: ReactNode, types: string[]) => {
  return (
    Children.toArray(children).filter(child => {
      if (!child || !isValidElement(child)) {
        return false;
      }

      const childType =
        (child as { type: FC }).type.displayName ||
        (child as { type: FC }).type.name;

      return types.includes(childType);
    }) || null
  );
};

export default getChildrenOfType;
