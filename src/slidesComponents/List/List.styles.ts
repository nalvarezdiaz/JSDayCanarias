import { css } from "@emotion/react";

const listContainer = () => css`
  display: inline-flex;
  flex-direction: column;
  border-radius: var(--border-radius-sm);
  border: solid 1px var(--primary-main);
  background: var(--light-background);
`;

const listItem = () => css`
  display: flex;
  align-items: center;
  padding: var(--spacing-2x);
  min-width: 150px;

  > * {
    margin-right: var(--spacing-2x);
  }

  &.selected {
    background: var(--primary-main-traslucent);
  }

  &.clickable {
    cursor: pointer;
  }
`;

const styles = {
  listContainer,
  listItem,
};

export default styles;
