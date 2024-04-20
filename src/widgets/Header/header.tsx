import React from "react";

import style from "./index.module.css";
import { NavBarIcons } from "./navbarIcons";
import { NavMenu } from "./navMenu";

export const Header: React.FC = () => {
  return (
    <div className={style.header}>
      <div className={style.topNav}>
        <span className={style.name}>TANN TRIM</span>

        <NavBarIcons />
      </div>

      <NavMenu />
    </div>
  );
};
