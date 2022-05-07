import { css } from "@emotion/react";

const defaultStyles = (name: string) => css`
  &.${name} {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-grow: 1;
    padding: var(--spacing-4x);
    background: var(--light-background);

    .${name}-link {
      color: inherit;
      text-decoration: none;
    }

    .${name}-group {
      width: 100%;
      display: flex;
      flex-direction: column;

      :not(:first-of-type) {
        margin-top: var(--spacing-4x);
      }

      .${name}-group-title {
        text-transform: uppercase;
        font-weight: var(--typography-bold);
        font-size: var(--typography-size-xs);
        padding: var(--spacing-2x) 0;
      }

      .${name}-group-item {
        width: 100%;
        margin: 0;
        padding: var(--spacing-2x);
        border-radius: var(--border-radius-sm);
        cursor: pointer;
        transition: color 250ms ease-in-out, background 250ms ease-in-out;

        &.${name}-selected {
          color: var(--primary-main);
          background: var(--primary-main-traslucent);
        }

        :hover {
          color: var(--primary-main);
        }
      }

      &.${name}-group-item {
        margin: 0;
        padding: 0 var(--spacing-2x);

        :hover {
          color: inherit;
        }
      }
    }
  }
`;

export default defaultStyles;
