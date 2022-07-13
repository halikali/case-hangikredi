import React from "react";
import Navbar from "components/Navbar";

import style from "./Layout.module.css";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={style.main}> {children} </main>
    </>
  );
};

export default Layout;
