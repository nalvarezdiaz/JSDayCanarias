import { css } from "@emotion/react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsLight";
import { cloneElement, PropsWithChildren, useState } from "react";
import cx from "classnames";
import { BiReset, BiZoomIn, BiZoomOut } from "react-icons/bi";
import Button from "./Button/Button";

const highlightTemplate = (line: number, mode?: "add" | "remove") => css`
  > :nth-child(${line}) {
    :after {
      pointer-events: none;
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      color: #f0f0f0;
      background: ${mode === "add"
        ? "var(--success-main)"
        : mode === "remove"
        ? "var(--error-main)"
        : "var(--primary-main)"};
      opacity: 0.3;
      z-index: 0;
    }
  }
`;

const cssStyleSheet = (
  fontSize: number,
  highlightedLines: number[] = [],
  diffAddLines: number[] = [],
  diffRemoveLines: number[] = []
) => css`
  position: relative;

  pre {
    position: relative;
    font-family: "Source Code Pro", monospace;
    font-weight: var(--typography-medium);
    padding: 36px var(--spacing-4x) var(--spacing-4x);
    border: solid 1px var(--border);
    border-radius: var(--border-radius-md);
    margin: var(--spacing-2x) 0;
    overflow: auto;
    font-size: ${fontSize}px;

    counter-reset: token-line;

    .token-line {
      position: relative;
    }

    .token-line::before {
      text-align: right;
      display: inline-block;
      counter-increment: token-line;
      content: counter(token-line);
      user-select: none;
      padding-right: var(--spacing-2x);
      width: 24px;
      border-right: solid 1px var(--border);
      margin-right: var(--spacing-2x);
      opacity: 0.5;
    }

    ${highlightedLines.map(line => highlightTemplate(line))}
    ${diffAddLines.map(line => highlightTemplate(line, "add"))}
    ${diffRemoveLines.map(line => highlightTemplate(line, "remove"))}
  }

  .filename {
    z-index: 1;
    position: absolute;
    padding: var(--spacing-2x);
    background: var(--primary-main-traslucent);
    border-top-left-radius: var(--border-radius-md);
    border-bottom-right-radius: var(--border-radius-md);
    border: solid 1px var(--border);
  }

  .font-size-buttons {
    z-index: 1;
    display: flex;
    position: absolute;
    top: var(--spacing-2x);
    right: var(--spacing-2x);

    > * {
      margin-left: var(--spacing-1x);
    }
  }
`;

const DEFAULT_FONT_SIZE = 16;

export const Pre = ({ children, ...props }: any) => {
  return (
    <pre>
      <Code {...props} className={children.props.className}>
        {children.props.children}
      </Code>
    </pre>
  );
};

const Code = ({
  children,
  className,
  highlight,
  diffAddLines,
  diffRemoveLines,
  filename,
}: PropsWithChildren<{
  className?: string;
  highlight?: string;
  diffAddLines?: string;
  diffRemoveLines?: string;
  filename?: string;
}>) => {
  const language = className?.split("-")[1];
  const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE);
  const highlightArr = highlight ? JSON.parse(highlight) : [];
  const diffAddLinesArr = diffAddLines ? JSON.parse(diffAddLines) : [];
  const diffRemoveLinesArr = diffRemoveLines ? JSON.parse(diffRemoveLines) : [];

  return (
    <div
      css={cssStyleSheet(
        fontSize,
        highlightArr,
        diffAddLinesArr,
        diffRemoveLinesArr
      )}
    >
      {filename && <div className={"filename"}>{filename}</div>}
      <div className={"font-size-buttons"}>
        <Button onClick={() => setFontSize(size => size - 2)}>
          <BiZoomOut />
        </Button>
        <Button onClick={() => setFontSize(DEFAULT_FONT_SIZE)}>
          <BiReset />
        </Button>
        <Button onClick={() => setFontSize(size => size + 2)}>
          <BiZoomIn />
        </Button>
      </div>

      <Highlight
        {...defaultProps}
        theme={theme}
        code={
          (children as string)?.replace(/\n$/gi, "") || "Type your code here..."
        }
        language={language as Language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={cx(className, "line-numbers")} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default Pre;
