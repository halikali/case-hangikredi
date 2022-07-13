import React, { useLayoutEffect, useRef, useState } from "react";

import style from "./ListWidget.module.css";

const ListWidget:React.FC = () => {
  const [totalCount, setTotalCount] = useState<number>(52);
  const [activeItem, setActiveItem] = useState<number>(0);

  const listRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    if (activeItem > 2 && activeItem < totalCount - 2) {
      listRef.current!.scroll({ top: (activeItem - 4) * 32 });
    }

    if (activeItem > totalCount - 5) {
      listRef.current!.scroll({ top: (totalCount - 3) * 32 });
    }

    if (activeItem < 3 || activeItem >= totalCount || activeItem < 0) {
      listRef.current!.scrollTop = 0;
    }
  }, [activeItem]);

  const changeActiveItem = (index: number) => {
    setActiveItem(index);
  };

  
  return (
    <div>
      <input
        type="text"
        className={style.input}
        ref={inputRef}
        placeholder="index değeri giriniz"
        onKeyUp={() => changeActiveItem(+inputRef.current!.value)}
      />
      <div className={style.widgetWrapper}>
        <h3 className={style.widgetTitle}>Haftalar</h3>
        <ul className={style.listWrapper} ref={listRef}>
          {Array.from({ length: totalCount }, (_, index) => (
            <li
              key={index}
              className={[
                style.listItem,
                activeItem === index && style.listItemActive,
              ].join(" ")}
            >
              <span
                className={[
                  style.listItemCounter,
                  activeItem === index && style.active,
                  activeItem < index && style.next,
                ].join(" ")}
              >
                {index + 1}
              </span>
              {index + 1}. Hafta 2020
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListWidget;
