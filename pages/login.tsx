import Head from "next/head";
import Image from "next/image";
import {useRouter} from "next/router";
import styles from '../styles/Login.module.css';
import {useState} from 'react';


const Login = () => {
  const [emailNotEntered, setemailNotEntered] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const router = useRouter();



  const handleOnChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setemailNotEntered(false);
    const emailInput = e.currentTarget.value;
    setEmail(emailInput);
  };

  const handleLoginEmail = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (email) {
      setemailNotEntered(false);
      if (email === "ningthangom@gmail.com") {
        // take it to dash board
        router.push("/");
      } else {
        console.log("something went wrong");
      }
    } else {
      // ask for email
      setemailNotEntered(true);
    }
  };

  return (
    <div className={styles.container}>
      {" "}
      <Head>
        <title>NextFlix SignIn</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <div className={styles.logoWrapper}>
            <Image
              src="/static/netflix.svg"
              alt="Netflix log0"
              width="129px"
              height="50px"
            ></Image>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.signinHeader}> Sign In </h1>
          <input
            type="text"
            placeholder="email address"
            className={styles.emailInput}
            required
            onChange={handleOnChangeEmail}
          />
          {emailNotEntered ? (
            <p className={styles.userMsg}>please enter your email</p>
          ) : null}
          <button onClick={handleLoginEmail} className={styles.loginBtn}>
            {" "}
            sign in{" "}
          </button>
        </div>
      </main>
    </div>
  );
};;

export default Login;
