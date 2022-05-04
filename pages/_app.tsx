import '../styles/globals.css'
import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import {magic} from '../lib/magic-client'
import {useRouter} from 'next/router';
import Loading from '../components/loading/loading'

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function AuthCheck ()  {
      
      const isLoggedIn = await magic.user.isLoggedIn();
      if (isLoggedIn) {
        // route to "/"
        router.push("/")
      }else{
        // route to "/login"
         
        router.push("/login")
      }
    }
    AuthCheck();
    
  },[])

  // this useEffect will solve homepage flickering issue
  useEffect(() => {
    // this will make sure that "sign in" is not re-rendered after
    // geting didtoken
    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return loading ? <Loading />: <Component {...pageProps} />
}

export default MyApp
