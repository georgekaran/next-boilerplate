import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '@/styles/global'

function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Won Games - Boilerplate</title>
        <meta name="description" content="A simple boilerplate to work with Typescript, React, NextJs and Styled Components" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
