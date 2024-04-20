import React from "react";

import Image from "next/image";

import style from "./index.module.css";
import { iconList } from "salesapp/utils";

export const NavBarIcons: React.FC = () => {
  return (
    <div className={style.navBarIcons}>
      {iconList.map((item: any) => (
        <Image
          src={item.src}
          alt={item.altText}
          width={24}
          height={24}
          key={item.key}
        />
      ))}
    </div>
  );
};
