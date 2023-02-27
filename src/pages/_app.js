import '../styles/globals.css'
import { AuthProvider,CHAIN  } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";

import { authArcana } from '../utils/authArcana'
//const provider = new AuthProvider(`34f13018df2e380560b5784d0eb0079401f0d02c`) // required

export default function App({ Component, pageProps }) {
  return (
    <ProvideAuth provider={authArcana}>
      <Component {...pageProps} />
    </ProvideAuth>
  )
}