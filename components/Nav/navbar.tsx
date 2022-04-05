import React from 'react'
import styles from './navbar.module.css';
import Link from "next/link";

interface Props{ 
    username: string;
}

const Navbar: React.FC<Props> = ({username}: Props) => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/">
          <a className={styles.logoLink}> Logo </a>
        </Link>

        <ul className={styles.navItems}>
          <li className={styles.navItem}>Home</li>
          <li className={styles.navItem2}>My List</li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn}>
              <p className={styles.username}>{username}</p>
            </button>
            {/* expand more icons */}
            <div className={styles.navDropdown}>
              <a>Sign Out</a>
              <div className={styles.lineWrapper}> </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;