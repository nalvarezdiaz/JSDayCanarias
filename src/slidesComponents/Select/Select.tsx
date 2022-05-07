import type { FC, PropsWithChildren } from "react";
import type { SelectProviderProps } from "./SelectProvider";

import SelectProvider from "./SelectProvider";
import SelectContent from "./SelectContent";

export type SelectProps = SelectProviderProps;

export const Select: FC<PropsWithChildren<SelectProps>> = ({
  children,
  ...props
}) => {
  return (
    <SelectProvider {...props}>
      <SelectContent>{children}</SelectContent>
    </SelectProvider>
  );
};

export default Select;
