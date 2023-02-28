import Head from 'next/head'

import { AboutMe, Activits, Introduction, Projects } from './components'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Henrique Cristioglu</title>
      </Head>
      <main>
        <Introduction />
        <Activits />
        <AboutMe />
        <Projects />
      </main>
    </>
  )
}
