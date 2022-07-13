import React from "react";
import Link from "next/link";

import style from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.listWrapper}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/find-duplicate">
            <a>Find Duplicate</a>
          </Link>
        </li>
        <li>
          <Link href="/table-widget">
            <a>Table Widget</a>
          </Link>
        </li>
        <li>
          <Link href="/list-widget">
            <a>List Widget</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
