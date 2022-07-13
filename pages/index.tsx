import type { NextPage } from "next";

import style from "styles/Home.page.module.css";

const Home: NextPage = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>
        Dökümantasyonda belirtilen case'ler 3 ayrı sayfada gösterilmektedir.
        Navbar'da bulunan linkler üzerinden ilgili sayfalara gidebilirsiniz.
      </h1>
    </div>
  );
};

export default Home;
