import React from "react";

import Image from "next/image";

import style from "./index.module.css";

export const NavBarIcons: React.FC = () => {
  return (
    <div className={style.navBarIcons}>
      <Image
        src="/images/search.svg"
        alt="search"
        width={24}
        height={24}
      />
      <Image
        src="/images/user-alt.svg"
        alt="user-alt"
        width={24}
        height={24}
      />
      <Image
        src="/images/bookmark.svg"
        alt="bookmark"
        width={24}
        height={24}
      />
      <Image
        src="/images/shoppingBag.svg"
        alt="shopping-bag"
        width={24}
        height={24}
      />
    </div>
  );
};
