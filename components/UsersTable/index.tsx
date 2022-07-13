import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { EditIcon, RemoveIcon } from "components/Icons";
import { removeUser, setUserWillBeUpdated } from "store/slices/userSlice";
import { IAppState, IUser } from "Types/userType";
import style from "./UsersTable.module.css";

const UsersTable: React.FC = () => {
  const dispatch = useDispatch();
  const [filterName, setFilterName] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");

  const users = useSelector((state: IAppState) => state.user.userList);

  const onChangeHandler = (e: any) => {
    setSearchText(e.target.value);
  };

  const sortedUsers = (filter: string): IUser[] => {
    let sorted: IUser[] = [];
    if (filter === "ascending") {
      sorted = [...users].sort((a: IUser, b: IUser) =>
        a.name.localeCompare(b.name)
      );
    }
    if (filter === "descending") {
      sorted = [...users].sort((a: IUser, b: IUser) =>
        b.name.localeCompare(a.name)
      );
    }
    return sorted;
  };

  let filteredUsers = (): IUser[] => {
    let filtered: IUser[] = [];
    if (filterName === "") {
      filtered = users?.filter(
        (user: IUser) =>
          user.name.toLowerCase().includes(searchText.toLowerCase()) ||
          user.surname.toLowerCase().includes(searchText.toLowerCase())
      );
    } else {
      filtered = sortedUsers(filterName).filter(
        (user: IUser) =>
          user.name.toLowerCase().includes(searchText.toLowerCase()) ||
          user.surname.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    return filtered;
  };

  const editUser = (e: React.MouseEvent, item: IUser) => {
    e.preventDefault();
    dispatch(setUserWillBeUpdated(item));
  };

  const deleteUser = (e: React.MouseEvent, item: IUser) => {
    e.preventDefault();
    dispatch(removeUser(item));
  };

  return (
    <div className={style.tableWrapper}>
      <div className={style.inputWrapper}>
        <input
          type="text"
          placeholder="Arama"
          onChange={(e) => onChangeHandler(e)}
          className={style.input}
          value={searchText}
        />

        <div className="group relative">
          <button className={style.orderButton}>Sıralama</button>
          <ul className={`group-hover:block ${style.dropdown}`}>
            <li
              className={style.dropdownItem}
              onClick={(e) => setFilterName("ascending")}
            >
              {`A'dan Z'ye`}
            </li>
            <li
              className={style.dropdownItem}
              onClick={(e) => setFilterName("descending")}
            >
              {`Z'den A'ya`}
            </li>
          </ul>
        </div>
      </div>

      <table className={style.table}>
        <thead>
          <tr>
            <th>Ad</th>
            <th>Soyad</th>
            <th>Telefon</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers()?.map((item: IUser, index: number) => (
            <tr className={style.tableRow} key={index}>
              <td className={style.tableData}> {item.name} </td>
              <td className={style.tableData}> {item.surname} </td>
              <td className={style.tableData}> {item.phone} </td>
              <td className={style.tableData}>
                <EditIcon
                  onClick={(e: React.MouseEvent): void => editUser(e, item)}
                />
                <RemoveIcon
                  onClick={(e: React.MouseEvent): void => deleteUser(e, item)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
