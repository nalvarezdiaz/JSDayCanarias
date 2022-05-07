import { css } from "@emotion/react";
import { useEffect, useRef } from "react";
import type { FC, PropsWithChildren } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import useKeyboardPress from "../../utils/useKeyboardPress";
import Button from "../Button/Button";
import SideBar, { SideBarProps } from "../SideBar/SideBar";

const cssStyleSheet = () => css`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: var(--common-background);

  .sidebar-container {
    display: flex;
    min-width: min(16%, 320px);
    max-width: min(16%, 320px);
    height: 100%;
    overflow: auto;
    background: var(--light-background);
  }

  @media (max-width: 768px) {
    .sidebar-container {
      display: none;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
    overflow: auto;

    > .mdx {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: var(--spacing-6x);
      flex-grow: 1;
      width: min(100%, 1000px);
      margin: 0 auto;
    }
  }

  .navigation {
    padding: var(--spacing-2x) var(--spacing-6x);
    display: flex;
    justify-content: space-between;
    background: var(--common-background);
    border-top: solid 1px var(--border);
    z-index: 100;
  }

  a {
    text-decoration: none;
  }
`;

type LayoutProps = {
  sidebarGroups: SideBarProps["groups"];
  prevItem?: SideBarProps["groups"][number]["items"][number];
  nextItem?: SideBarProps["groups"][number]["items"][number];
};

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  children,
  sidebarGroups,
  prevItem,
  nextItem,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    contentRef.current?.scrollTo(0, 0);
  }, [location.pathname]);

  useKeyboardPress(
    "ArrowLeft",
    () => {
      if (!prevItem) {
        return;
      }

      navigate(prevItem.path);
    },
    { shift: true }
  );

  useKeyboardPress(
    "ArrowRight",
    () => {
      if (!nextItem) {
        return;
      }

      navigate(nextItem.path);
    },
    { shift: true }
  );

  return (
    <div css={cssStyleSheet()}>
      <div className={"sidebar-container"}>
        <SideBar groups={sidebarGroups} />
      </div>
      <div ref={contentRef} className={"content"}>
        <div className={"mdx"}>{children}</div>
        <div className={"navigation"}>
          {prevItem ? (
            <Link to={prevItem.path}>
              <Button startAdornment={<BiChevronLeft />}>
                {prevItem.title}
              </Button>
            </Link>
          ) : (
            <div />
          )}
          {nextItem ? (
            <Link to={nextItem.path}>
              <Button endAdornment={<BiChevronRight />}>
                {nextItem.title}
              </Button>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
