import { css } from "@emotion/react";

const counterContainer = () => css`
  display: inline-flex;
  align-items: center;
  border-radius: var(--border-radius-sm);
  border: solid 1px var(--primary-main);
  background: var(--common-background);
  user-select: none;
`;

const counterButton = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 24px;
  min-height: 24px;
  padding: 0 var(--spacing-2x);
  cursor: pointer;
  transition: background 250ms ease-in-out;

  :hover {
    background: var(--primary-main-traslucent);
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const counterDisplay = () => css`
  font-family: "Source Code Pro", monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 24px;
  min-height: 24px;
  padding: 0 var(--spacing-2x);
  background: var(--primary-main-traslucent);

  :not(:first-child) {
    border-left: solid 1px var(--primary-main);
  }

  :not(:last-child) {
    border-right: solid 1px var(--primary-main);
  }
`;

const styles = {
  counterContainer,
  counterButton,
  counterDisplay,
};

export default styles;
