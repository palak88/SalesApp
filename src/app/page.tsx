import { Banner, Header, MainContent } from "../widgets";

import style from "./page.module.css";

export default function Home() {
  return (
    <div className={style.root}>
      <Header />
      <Banner />
      <MainContent />
    </div>
  );
}
