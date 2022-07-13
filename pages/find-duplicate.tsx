import { NextPage } from "next";
import React, { useState } from "react";

import style from "styles/FindDuplicate.page.module.css";

const FindDuplicate: NextPage = () => {
  const [inputValue, setInputValue] = useState<number[] | null>(null);

  const exampleArray = [1, 2, 3, 4, 5, 5, 3, 3, 4, 6];
  const exampleArray2 = [1, 2, 3, 4, 5];

  const findDuplicatedElement = (arr: Number[]): any => {
    if (arr.length === Array.from(new Set(arr)).length) {
      return -1;
    }

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (i !== j && arr[i] === arr[j]) {
          return arr[i];
        }
      }
    }
  };

  const changeToNumberArray = (val: string | number[]) => {
    let inputArray: number[] = [];
    if (typeof val === "string") {
      val.split(",").map((item: string) => {
        inputArray.push(+item);
      });
    } else {
      inputArray = val;
    }
    return inputArray;
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const inputArray = changeToNumberArray(inputValue);
    setInputValue(inputArray);
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Find duplicate</h1>
      <p className={style.content}>
        {`findDuplicatedElement adlı fonksiyona parametre olarak bir dizi
        verilmelidir. Fonksiyonun çıktısını aşağıda görebilirsiniz. İlgili
        fonksiyonu kod dosyasında görebilirsiniz. Site üzerinde denemek için ise
        aşağıda yer alan input'a aralarında virgül olacak şekilde bir sayı
        dizisi girebilirsiniz.`}
      </p>
      <p>Örnek olarak kullanılan dizi : [1, 2, 3, 4, 5, 5, 3, 3, 4, 6]</p>
      <input
        type="text"
        className={style.input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChangeHandler(e)
        }
      />
      Fonksiyon çıktısı :{" "}
      {inputValue
        ? findDuplicatedElement(inputValue)
        : findDuplicatedElement(exampleArray)}
    </div>
  );
};

export default FindDuplicate;
