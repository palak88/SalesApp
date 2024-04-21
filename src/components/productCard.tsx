import React from "react";

import Image from "next/image";

import style from "./index.module.css";

interface IProductCard {
  imageSrc: string;
  details: any;
}

export const ProductCard: React.FC<IProductCard> = ({ imageSrc, details }) => {
  return (
    <div className={style.card}>
      <div>
        <Image
          src={imageSrc}
          alt="card"
          className={style.productImage}
          width={2731}
          height={4096}
        />

        <Image
          src="/images/content/Bookmark.svg"
          alt="bookmark"
          className={style.bookmark}
          height={34}
          width={26}
        />
      </div>

      <div className={style.description}>
        <span className={style.title}>{details?.title}</span>

        <div className={style.priceDetails}>
          <div>
            <Image
              src="/images/content/rupee-sign.svg"
              alt="rupee-sign"
              height={19}
              width={12}
            />
            <span className={style.price}>{details?.price}</span>
            <span className={style.originalPrice}>
              {details?.originalPrice}
            </span>
            <span className={style.discount}>{details?.discount}</span>
          </div>

          <Image
            src="/images/content/add-to-bag.svg"
            alt="add-to-bag"
            height={35.87}
            width={43.45}
          />
        </div>
      </div>
    </div>
  );
};
