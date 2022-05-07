import type { FC, PropsWithChildren } from "react";

import classNames from "classnames";
import { useEffect } from "react";
import { useLayer } from "react-laag";
import getChildrenOfType from "../../utils/getChildrenOfType";

import SelectButton from "./SelectButton";
import SelectLabel from "./SelectLabel";
import SelectOption from "./SelectOption";
import useSelect from "./useSelect";
import styles from "./Select.styles";

const SelectContent: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { isOpen, onOpenChange, isReady, onReady, labelPosition } = useSelect();
  const { triggerProps, layerProps, renderLayer } = useLayer({
    isOpen,
    placement: "bottom-start",
    possiblePlacements: ["bottom-start", "top-start"],
    auto: true,
    triggerOffset: 4,
    onDisappear: () => onOpenChange(false),
    onOutsideClick: () => onOpenChange(false),
    onParentClose: () => onOpenChange(false),
  });

  // This hook is executed after all children are mounted
  useEffect(() => {
    onReady();
  }, []);

  const selectButton = getChildrenOfType(children, [SelectButton.name]);
  const selectLabel = getChildrenOfType(children, [SelectLabel.name]);
  const options = getChildrenOfType(children, [SelectOption.name]);

  if (process.env.NODE_ENV !== "production" && selectButton.length !== 1) {
    console.warn("Select component requires a single SelectButton");
  }

  if (process.env.NODE_ENV !== "production" && selectLabel.length > 1) {
    console.warn("Select component only supports one SelectLabel");
  }

  return (
    <div css={styles.selectContent({ labelPosition })}>
      {selectLabel}
      <div {...triggerProps} style={{ display: "inline-block" }}>
        {selectButton[0]}
      </div>
      {(!isReady || isOpen) &&
        renderLayer(
          <div
            css={styles.selectPopoverContainer()}
            className={classNames({
              unmounted: !isReady,
            })}
            {...layerProps}
          >
            {options}
          </div>
        )}
    </div>
  );
};

export default SelectContent;
