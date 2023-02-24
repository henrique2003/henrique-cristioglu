import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(): JSX.Element {
  return (
    <Html lang="pt-br">
      <Head>
        {/* SEO */}
        <meta
          name="keywords"
          content="Henrique, Henrique cristioglu, henrique cristioglu, henrique de melo, de melo, henrique de melo cristioglu, programador fullstak, php, programador php, programador front-end"
        />
        <meta name="robots" content="index,follow" />
        <meta name="description" content="Site pessoal, desenvolvedor fullstack" />
        <meta name="author" content="Henrique de melo cristioglu" />
        {/* Cofigs */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossOrigin="anonymous"
        />
        {/* Bootstrap CDN */}
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
