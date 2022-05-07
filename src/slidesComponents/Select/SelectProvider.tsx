import type { FC, PropsWithChildren, ReactNode } from "react";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export type IOption = {
  label: ReactNode;
  value: string | number;
  isDisabled: boolean;
};

export type ISelectContext = {
  isOpen: boolean;
  onOpenChange(isOpen: boolean | ((prevState: boolean) => boolean)): void;
  isReady: boolean;
  onReady(): void;
  selectedValue?: string | number;
  onSelectedValueChange(value: string | number): void;
  options: Record<string | number, IOption>;
  registerOption(option: IOption): void;
  labelPosition: "top" | "left";
  onLabelPositionChange(position: "top" | "left"): void;
};

export const SelectContext = createContext<ISelectContext>(undefined!);

export type SelectProviderProps = {
  selectedValue?: string | number;
  onSelectedValueChange(value?: string | number): void;
};

const SelectProvider: FC<PropsWithChildren<SelectProviderProps>> = ({
  children,
  selectedValue,
  onSelectedValueChange,
}) => {
  const [options, setOptions] = useState<Record<string | number, IOption>>({});
  const [isMounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [labelPosition, setLabelPosition] = useState<"top" | "left">("top");

  const registerOption = useCallback((option: IOption) => {
    setOptions(prevOptions => {
      return {
        ...prevOptions,
        [option.value]: option,
      };
    });
  }, []);

  const currentState: ISelectContext = useMemo(
    () => ({
      isOpen,
      onOpenChange: setIsOpen,
      selectedValue,
      onSelectedValueChange,
      isReady: isMounted,
      onReady() {
        setMounted(true);
      },
      labelPosition,
      onLabelPositionChange: setLabelPosition,
      options,
      registerOption,
    }),
    [
      isOpen,
      onSelectedValueChange,
      labelPosition,
      registerOption,
      options,
      selectedValue,
    ]
  );

  useEffect(() => {
    if (!selectedValue || !options[selectedValue]) {
      return;
    }

    if (options[selectedValue].isDisabled) {
      onSelectedValueChange(undefined);
    }
  }, [options, selectedValue]);

  return (
    <SelectContext.Provider value={currentState}>
      {children}
    </SelectContext.Provider>
  );
};

export default SelectProvider;
