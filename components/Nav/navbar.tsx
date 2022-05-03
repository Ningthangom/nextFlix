import React, {useState, useEffect} from 'react'
import styles from './navbar.module.css';
import Link from "next/link";
import {useRouter} from 'next/router';
import Image from 'next/image'
import {magic } from '../../lib/magic-client'

interface Props{ 
    username: string;
}

const Navbar: React.FC<Props> = () => {

 const [username, setUsername] = useState<string>("")

   useEffect(() => {
     async function getUsername() {
       try {
         const { email } = await magic.user.getMetadata();
         if (email) {
           const name = email.split('@')[0];
           console.log(email);
           setUsername(name);
         }
       } catch (error) {
         console.log("Error retrieving email:", error);
       }
     }
     getUsername();
   }, []);
    const router = useRouter();
    const [showDropdown, setShowdropdown] = useState<boolean>(false);

    const handleHomeClick = (e : React.SyntheticEvent<EventTarget>) => {
        e.preventDefault();
        router.push('/')
    }

    const handleMylistClick = (e: React.SyntheticEvent<EventTarget>) => {
      e.preventDefault();
      router.push("/mylist");
    };

    const handleShowDropdown = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault();
        setShowdropdown(!showDropdown)
        
    }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/">
          <a className={styles.logoLink}></a>
        </Link>

        <div className={styles.logoWrapper}>
          <Image
            src="/static/netflix.svg"
            alt="Netflix log0"
            width="129px"
            height="50px"
          ></Image>
        </div>

        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleHomeClick}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleMylistClick}>
            My List
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropdown}>
              <p className={styles.username}>{username}</p>
              <Image
                src="/static/expandmore.svg"
                alt="expand icon"
                width="30px"
                height="30px"
              />
            </button>
            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <Link href="/login">
                    <a className={styles.linkName}>Sign Out</a>
                  </Link>
                </div>

                <div className={styles.lineWrapper}> </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;