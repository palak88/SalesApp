import { Banner, Header } from "../widgets";

import style from "./page.module.css";

export default function Home() {
  return (
    <div className={style.root}>
      <Header />
      <Banner />
    </div>
  );
}
