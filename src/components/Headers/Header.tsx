import type { ElementType, PropsWithChildren } from "react";
import useClassName from "../../utils/useClassName";
import Button from "../Button/Button";
import defaultStyles from "./Header.styles";
import { HashLink as Link } from "react-router-hash-link";
import { BiLink } from "react-icons/bi";

function getAnchor(text: string) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/[ ]/g, "-");
}

export type HeaderProps = {
  as: ElementType;
};

const Header = ({ children, as = "h2" }: PropsWithChildren<HeaderProps>) => {
  const { baseName, pfx } = useClassName(Header.name);
  const anchor = getAnchor(children as string);
  const link = `#${anchor}`;
  const H = as;
  return (
    <div css={defaultStyles(baseName)} className={baseName}>
      <Link to={link} smooth={true}>
        <H id={anchor}>{children}</H>
        <div className={pfx("anchor-icon")}>
          <Button startAdornment={<BiLink />} />
        </div>
      </Link>
    </div>
  );
};

export const H1 = ({
  children,
}: Omit<PropsWithChildren<HeaderProps>, "as">) => (
  <Header as={"h1"}>{children}</Header>
);
export const H2 = ({
  children,
}: Omit<PropsWithChildren<HeaderProps>, "as">) => (
  <Header as={"h2"}>{children}</Header>
);
export const H3 = ({
  children,
}: Omit<PropsWithChildren<HeaderProps>, "as">) => (
  <Header as={"h3"}>{children}</Header>
);
export const H4 = ({
  children,
}: Omit<PropsWithChildren<HeaderProps>, "as">) => (
  <Header as={"h4"}>{children}</Header>
);
export const H5 = ({
  children,
}: Omit<PropsWithChildren<HeaderProps>, "as">) => (
  <Header as={"h5"}>{children}</Header>
);
export const H6 = ({
  children,
}: Omit<PropsWithChildren<HeaderProps>, "as">) => (
  <Header as={"h6"}>{children}</Header>
);
