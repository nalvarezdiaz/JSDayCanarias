import cx from "classnames";
import type { FC, PropsWithChildren, ReactNode } from "react";
import useClassName from "../../utils/useClassName";
import defaultStyles from "./Button.styles";

export type ButtonProps = {
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  onClick?(): void;
  outOfFocus?: boolean;
};

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  startAdornment,
  endAdornment,
  onClick,
  outOfFocus,
}) => {
  const { baseName, pfx } = useClassName(Button.name);

  return (
    <div
      css={defaultStyles(baseName)}
      className={cx(baseName, {
        [pfx("out-of-focus")]: !!outOfFocus,
      })}
      onClick={onClick}
    >
      {startAdornment && (
        <div className={pfx("start-adornment")}>{startAdornment}</div>
      )}
      {children && <div className={pfx("content")}>{children}</div>}
      {endAdornment && (
        <div className={pfx("end-adornment")}>{endAdornment}</div>
      )}
    </div>
  );
};

export default Button;
