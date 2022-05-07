import { css } from "@emotion/react";

const sliderContent = () => css`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;

  > .track {
    position: relative;
    width: 100%;
    height: 4px;
    background: var(--primary-light);
    border-radius: var(--border-radius-md);

    > .active-track {
      position: absolute;
      height: 4px;
      background: var(--primary-main);
      border-radius: var(--border-radius-md);
    }
  }

  > .thumbs {
    position: absolute;
  }
`;

const sliderThumb = () => css`
  position: absolute;
  display: inline-flex;
  align-items: center;
  width: 10px;
  height: 10px;
  background: red;
  transform: translateY(-50%);

  > .indicator {
    display: flex;
    align-items: center;
    height: 18px;
    width: 12px;
    background: var(--primary-contrastText);
    border-radius: var(--border-radius-md);
    box-shadow: 0 0 4px #22222220;
    color: var(--primary-dark);
    cursor: move;
  }
`;

const styles = {
  sliderContent,
  sliderThumb,
};

export default styles;
