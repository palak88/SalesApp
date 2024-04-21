import React from "react";

import style from "./index.module.css";
import { ContentHeader } from "./header";
import { ContentBody } from "./body";

export const MainContent: React.FC = () => {
  return (
    <div className={style.content}>
      <ContentHeader />
      <ContentBody />
    </div>
  );
};
