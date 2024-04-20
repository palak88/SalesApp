import React from "react";
import Image from "next/image";
import style from "./index.module.css";

export const ContentHeader: React.FC = () => {
  return (
    <div className={style.contentHeader}>
      <span className={style.category}>
        Bags
        <Image src="/images/ellipse.svg" alt="ellipse" width={5} height={5} />
        Backpacks
      </span>

      <span>13 products <Image src="/images/products-add.svg" alt="upload" width={16} height={20} /></span>
    </div>
  );
};
