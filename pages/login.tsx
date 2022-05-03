import Head from "next/head";
import Image from "next/image";
import {useRouter} from "next/router";
import styles from '../styles/Login.module.css';
import {useState, useEffect} from 'react';
import { magic } from "../lib/magic-client";


const Login = () => {
  const [emailNotEntered, setemailNotEntered] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("ningthangom@gmail.com");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {

    // this will make sure that "sign in" is not re-rendered after 
    // geting didtoken
    const handleComplete = () => {
      setIsLoading(false);
    }

    router.events.on('routeChangeComplete', handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
       router.events.off("routeChangeComplete", handleComplete);
        router.events.off("routeChangeError", handleComplete);
    }
  },[router])



  const handleOnChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setemailNotEntered(false);
    const emailInput = e.currentTarget.value;
    setEmail(emailInput);
  };

  const handleLoginEmail = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  
    if (email) {
      setemailNotEntered(false);
            if (email === "ningthangom@gmail.com") {
              // take it to dash board
              // log in a user by their email
                  try {
                  setIsLoading(true);
                  const DIDToken = await magic.auth.loginWithMagicLink({
                    email: email,
                  });
                  console.log(" this is DIDToken: ", DIDToken);
                  if(DIDToken){
                  
                      router.push("/");
                    
                  }
                  } catch {
                    // Handle errors if required!
                  }
                 
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
            value={email}
            required
            onChange={handleOnChangeEmail}
            
          />
          {emailNotEntered ? (
            <p className={styles.userMsg}>please enter your email</p>
          ) : null}

          <button onClick={handleLoginEmail} className={styles.loginBtn}>
            {" "}
            {isLoading ? <p>Loading.......</p> : <p>sign in </p>}
          </button>
        </div>
      </main>
    </div>
  );
}

export default Login
