import { css } from "@emotion/react";

const defaultStyles = (name: string) => css`
  &.${name} {
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-2x);
    border-radius: 24px;
    color: var(--primary-main);
    cursor: pointer;
    transition: background 250ms ease-in-out, opacity 250ms ease-in-out;

    :hover {
      background: var(--primary-main-traslucent);
    }

    &.${name}-out-of-focus {
      opacity: 0.4;

      :hover {
        opacity: 1;
      }
    }

    .${name}-content {
      padding: 0 var(--spacing-2x);
      font-size: var(--typography-size-sm);
    }

    .${name}-start-adornment {
      display: flex;
      align-items: center;
    }

    .${name}-end-adornment {
      display: flex;
      align-items: center;
    }
  }
`;

export default defaultStyles;
