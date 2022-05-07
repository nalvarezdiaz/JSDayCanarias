import { css } from '@emotion/react';
import type { FC, PropsWithChildren } from 'react';
import { useEffect } from 'react';

const cssStyleSheet = () => css`
  width: 100%;
  height: 100%;
  overflow: auto;
  box-shadow: 0 0 8px #a0a0a0;
  border-radius: 8px;
  padding: var(--spacing-6x);
  background: var(--light-background);
`;

const SlideContainer: FC<PropsWithChildren<{ title: string }>> = ({
  children,
  title,
}) => {
  useEffect(() => {
    window.document.title = title;
  }, [title]);

  return <div css={cssStyleSheet()}>{children}</div>;
};

export default SlideContainer;
