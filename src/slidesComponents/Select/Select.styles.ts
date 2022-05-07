import { css } from "@emotion/react";

const selectContent = ({
  labelPosition,
}: {
  labelPosition: "top" | "left";
}) => css`
  display: inline-flex;
  flex-direction: ${labelPosition === "top" ? "column" : "row"};
  align-items: ${labelPosition === "top" ? "flex-start" : "center"};
`;

const selectLabel = () => css`
  display: inline-flex;
  flex-direction: column;
  padding: var(--spacing-2x);
  font-size: var(--typography-size-sm);
`;

const selectButtonContainer = () => css`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  min-width: 150px;
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
  border-radius: 5px;
  cursor: pointer;

  transition: all 250ms ease-in-out;

  :hover {
    border: solid 1px #1ea7fd;

    .caret {
      color: #1ea7fd;
    }
  }

  > :first-of-type {
    margin-right: 4px;
  }

  .caret {
    padding: 8px;
    display: inline-flex;
    align-items: center;
    color: #a0a0a0;

    transition: all 250ms ease-in-out;
  }

  .placeholder {
    padding: 8px;
    color: #a0a0a0;
  }

  .option {
    border-radius: 5px;

    :hover {
      background: inherit;
    }
  }
`;

const selectPopoverContainer = () => css`
  min-width: 150px;
  border: solid 1px #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: #ffffff;
  overflow: hidden;
  z-index: 100;

  &.unmounted {
    visibility: hidden;
  }
`;

const option = () => css`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;

  transition: all 250ms ease-in-out;

  :hover {
    background: rgba(0, 0, 0, 0.05);
  }

  &.selected {
    background: rgba(30, 167, 253, 0.25);

    :hover {
      background: rgba(0, 0, 0, 0.05);
    }
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  > * {
    margin-right: 4px;
  }
`;

const styles = {
  selectContent,
  selectLabel,
  selectButtonContainer,
  selectPopoverContainer,
  option,
};

export default styles;
