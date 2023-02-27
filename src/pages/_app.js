import { ProvideAuth } from "@arcana/auth-react";
import "../styles/globals.css";
import "../styles/accordion.css";
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'

const progress = new ProgressBar({
  size: 4,
  color: '#206fbf',
  className: 'z-50',
  delay: 100,
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

import { authArcana } from '../utils/authArcana'
//const provider = new AuthProvider(`34f13018df2e380560b5784d0eb0079401f0d02c`) // required

export default function App({ Component, pageProps }) {
  return (
    <ProvideAuth provider={authArcana}>
      <Component {...pageProps} />
    </ProvideAuth>
  )
}