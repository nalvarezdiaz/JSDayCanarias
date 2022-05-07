import { css } from "@emotion/react";

const defaultStyles = (name: string) => css`
  &.${name} {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > a {
      display: flex;
      align-items: center;
      color: inherit;
      text-decoration: none;
    }

    .${name}-anchor-icon {
      opacity: 0;
      margin-left: var(--spacing-2x);
      transition: opacity 250ms ease-in-out;
    }

    &:hover {
      .${name}-anchor-icon {
        opacity: 1;
      }
    }
  }
`;

export default defaultStyles;
