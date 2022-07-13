import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "store/slices/userSlice";
import { IAppState, IUser } from "Types/userType";

import style from "./AddUserTable.module.css";

const AddUserTable: React.FC = () => {
  const dispatch = useDispatch();
  const nameRef = useRef<HTMLInputElement>(null);
  const surnameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const { userWillBeUpdated } = useSelector((state: IAppState) => state.user);

  const clearInputs = () => {
    nameRef.current!.value = "";
    surnameRef.current!.value = "";
    phoneRef.current!.value = "";
  };

  useEffect(() => {
    if (userWillBeUpdated) {
      nameRef.current!.value = userWillBeUpdated!.name;
      surnameRef.current!.value = userWillBeUpdated!.surname;
      phoneRef.current!.value = userWillBeUpdated!.phone;
    }
  }, [userWillBeUpdated]);

  const setID = (): string => {
    return Math.random().toString(36).slice(2);
  };

  const sendUser = (e: React.MouseEvent) => {
    e.preventDefault();
    if (
      nameRef.current!.value.trimStart() === "" ||
      surnameRef.current!.value.trimStart() === "" ||
      phoneRef.current!.value.trimStart() === ""
    ) {
      alert("Lütfen boş alan bırakmayınız!");
      return;
    }

    const newUser: IUser = {
      id: setID(),
      name: nameRef.current!.value,
      surname: surnameRef.current!.value,
      phone: phoneRef.current!.value,
    };
    dispatch(addUser(newUser));
    clearInputs();
  };

  const changeUserInfo = (e: React.MouseEvent) => {
    e.preventDefault();
    if (
      nameRef.current!.value.trimStart() === "" ||
      surnameRef.current!.value.trimStart() === "" ||
      phoneRef.current!.value.trimStart() === ""
    ) {
      alert("Lütfen boş alan bırakmayınız!");
      return;
    }

    const newUser: IUser = {
      id: userWillBeUpdated!.id,
      name: nameRef.current!.value,
      surname: surnameRef.current!.value,
      phone: phoneRef.current!.value,
    };
    dispatch(updateUser(newUser));
    clearInputs();
  };

  return (
    <form className={style.form}>
      <label htmlFor="name">Ad:</label>
      <input type="text" id="name" className={style.input} ref={nameRef} />
      <label htmlFor="surname">Soyad:</label>
      <input
        type="text"
        id="surname"
        className={style.input}
        ref={surnameRef}
      />
      <label htmlFor="phone">Telefon:</label>
      <input type="text" id="phone" className={style.input} ref={phoneRef} />
      <div className={style.buttonWrapper}>
        <button
          className={style.button}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => sendUser(e)}
        >
          Ekle
        </button>
        <button
          className={`${style.button} ${
            userWillBeUpdated!.id === "" ? "invisible" : "block"
          }`}
          onClick={(e) => changeUserInfo(e)}
        >
          Güncelle
        </button>
      </div>
    </form>
  );
};

export default AddUserTable;
