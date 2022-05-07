import { css } from "@emotion/react";
import { PropsWithChildren } from "react";

const Svg = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div
      css={css`
        padding: var(--spacing-6x);
        width: 100%;
        height: 100%;

        > svg {
          width: 100%;
          height: 100%;
        }
      `}
    >
      {children}
    </div>
  );
};

export default Svg;
