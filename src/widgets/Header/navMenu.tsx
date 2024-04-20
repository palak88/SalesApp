import React from "react";

import style from "./index.module.css";
import Link from "next/link";

export const NavMenu: React.FC = () => {
  return (
    <div className={style.navMenu}>
      <div className={style.navMenuItems}>
        <Link href={"#"}>Bags</Link>
        <Link href={"#"}>Travel</Link>
        <Link href={"#"}>Accessories</Link>
        <Link href={"#"}>Gifting</Link>
        <Link href={"#"}>Jewelery</Link>
      </div>
    </div>
  );
};
