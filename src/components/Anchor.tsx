import { css } from "@emotion/react";
import { PropsWithChildren } from "react";
import { BiLinkExternal } from "react-icons/bi";

const cssStyleSheet = () => css`
  display: inline-flex;
  padding: var(--spacing-2x) 0;
  text-decoration: none;
  color: inherit;

  .link {
    margin-left: var(--spacing-2x);
    color: var(--primary-main);
    opacity: 0.5;
    transition: opacity 250ms ease-in-out;
  }

  transition: color 250ms ease-in-out;

  :hover {
    color: var(--primary-main);

    .link {
      opacity: 1;
    }
  }
`;

const Anchor = ({ children, href }: PropsWithChildren<{ href?: string }>) => {
  return (
    <a
      css={cssStyleSheet()}
      href={href}
      target={href?.startsWith("http") ? "_blank" : ""}
    >
      {children}
      {href?.startsWith("http") && (
        <div className={"link"}>
          <BiLinkExternal />
        </div>
      )}
    </a>
  );
};

export default Anchor;
