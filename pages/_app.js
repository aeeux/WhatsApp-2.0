import '../styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth';

function MyApp({ Component, pageProps }) {

  return <Component {...pageProps} />
}

export default MyApp
