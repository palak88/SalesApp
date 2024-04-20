import React from "react";

import Image from "next/image";

import style from "./index.module.css";

interface IBannerImage {
  title: string;
  imageSrc: string;
}

export const BannerImage: React.FC<IBannerImage> = ({ title, imageSrc }) => {
  return (
    <div className={style.bannerImage}>
      <Image src={imageSrc} alt={title} width={90} height={90} />
      <span>{title}</span>
    </div>
  );
};
