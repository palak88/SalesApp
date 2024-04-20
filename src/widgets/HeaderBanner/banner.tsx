import React from "react";

import style from "./index.module.scss";
import { BannerImage } from "salesapp/components";
import { bannerData } from "salesapp/utils";

export const Banner: React.FC = () => {
  return (
    <div className={style.banner}>
      {bannerData?.map((item: any) => (
        <BannerImage
          key={item.key}
          title={item.title}
          imageSrc={item.imageSrc}
        />
      ))}
    </div>
  );
};
