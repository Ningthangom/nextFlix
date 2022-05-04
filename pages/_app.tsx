import '../styles/globals.css'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import {magic} from '../lib/magic-client'
import {useRouter} from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  
  const router = useRouter();
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

  return <Component {...pageProps} />
}

export default MyApp
