import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

const cssStyleSheet = () => css`
  width: 100%;
  height: 1px;
  background: var(--primary-main);
`;

const BlockQuote = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div css={cssStyleSheet()}>
      <div className={'v-line'} />
      {children}
    </div>
  );
};

export default BlockQuote;
