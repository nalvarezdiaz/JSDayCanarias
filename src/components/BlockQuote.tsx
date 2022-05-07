import { css } from "@emotion/react";
import { PropsWithChildren } from "react";

const cssStyleSheet = () => css`
  display: flex;

  .v-line {
    width: 8px;
    border-radius: var(--border-radius-md);
    background: var(--primary-main);
  }

  p {
    flex-grow: 1;
    font-weight: var(--typography-light);
    padding: var(--spacing-4x);
    margin: var(--spacing-2x) 0;
    background: var(--primary-main-traslucent);
    border-top-right-radius: var(--border-radius-md);
    border-bottom-right-radius: var(--border-radius-md);

    cite {
      display: block;
      margin-top: var(--spacing-4x);
      font-style: italic;
      opacity: 0.8;
    }
  }
`;

const BlockQuote = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div css={cssStyleSheet()}>
      <div className={"v-line"} />
      {children}
    </div>
  );
};

export default BlockQuote;
