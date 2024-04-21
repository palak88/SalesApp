"use client";
import React, { useEffect, useState } from "react";

import style from "./index.module.css";
import { ProductCard } from "salesapp/components";
import { fetchDummyData } from "salesapp/api/api";

export const ContentBody: React.FC = () => {
  const [productData, setProductData] = useState<any>(null);

  const fetchData = async () => {
    try {
      const dummyData = await fetchDummyData();
      setProductData(dummyData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={style.contentBody}>
      {productData?.map((item: any) => (
        <ProductCard
          imageSrc={item?.imageSrc}
          key={item?.id}
          details={item?.details}
        />
      ))}
    </div>
  );
};
