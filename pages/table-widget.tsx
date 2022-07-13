import React from "react";
import { NextPage } from "next";

import AddUserTable from "components/AddUserTable";
import UsersTable from "components/UsersTable";
import style from "styles/TableWidgetPage.module.css";

const TableWidget: NextPage = () => {
  return (
    <div className={style.tableWidgetPage}>
      <AddUserTable />
      <UsersTable />
    </div>
  );
};

export default TableWidget;
