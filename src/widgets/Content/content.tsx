import React from "react";

import style from "./index.module.css";
import { ContentHeader } from "./header";

export const MainContent: React.FC = () => {
  return (
    <div className={style.content}>
      <ContentHeader />
    </div>
  );
};
