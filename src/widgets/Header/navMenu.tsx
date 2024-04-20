import React from "react";

import style from "./index.module.css";
import Link from "next/link";
import { navMenuItems } from "salesapp/utils";

export const NavMenu: React.FC = () => {
  return (
    <div className={style.navMenu}>
      <div className={style.navMenuItems}>
        {navMenuItems.map((item: any) => (
          <Link href={item.link} key={item.key}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
