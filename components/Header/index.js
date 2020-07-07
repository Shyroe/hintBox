import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

function Header() {
  return (
    <div className="">
      <Link href="/">
        <img
          className="mx-auto"
          width="350"
          height="350"
          src={"./brand.jpg"}
          alt="brand"
        />
      </Link>
      {/* <nav className="bg-gray-400 py-3 flex justify-center items-center"> */}
      <nav className={` ${styles.text} ${styles.navigation}`}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/About">
              <a className={styles.link}>Sobre</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/Contact">
              <a className={styles.link}>Contato</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/Search">
              <a className={styles.link}>Pesquisa</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
