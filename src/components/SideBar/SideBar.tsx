import cx from "classnames";

import type { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import useClassName from "../../utils/useClassName";
import defaultStyles from "./SideBar.styles";

export type SideBarProps = {
  groups: {
    id: string;
    title: string;

    items: {
      title: string;
      path: string;
    }[];
  }[];
};

const SideBar: FC<SideBarProps> = ({ groups }) => {
  const { baseName, pfx } = useClassName(SideBar.name);
  const location = useLocation();

  return (
    <div css={defaultStyles(baseName)} className={baseName}>
      {groups.map(group => (
        <div key={group.id} className={pfx("group")}>
          {group.title && (
            <div className={pfx("group-title")}>{group.title}</div>
          )}
          {group.items.map(item => (
            <Link key={item.path} to={item.path} className={pfx("link")}>
              <div
                className={cx(pfx("group-item"), {
                  [pfx("selected")]: item.path === location.pathname,
                })}
              >
                {item.title}
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
