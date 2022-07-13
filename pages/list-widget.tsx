import { NextPage } from "next";

import ListWidget from "components/ListWidget";
import style from "styles/ListWidget.page.module.css";

const ListWidgetPage: NextPage = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>List widget</h1>
      <p
        className={style.description}
      >{`Aşağıda verilen input'a bir index değeri girerek widget'ın ilgili index
        için gösterdiği aksiyonu görebilirsiniz. Listede 52 adet eleman
        listelenmektedir. Eleman sayısından fazla bir index değeri girerseniz
        liste en yukarı scroll olacaktır.`}</p>
      <ListWidget />
    </div>
  );
};

export default ListWidgetPage;
