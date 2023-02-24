import Head from 'next/head'

import { Activits, Introduction } from './components'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Henrique Cristioglu</title>
      </Head>
      <main>
        <Introduction />
        <Activits />
      </main>
    </>
  )
}
