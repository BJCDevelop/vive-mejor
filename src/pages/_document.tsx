import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title key="title">Vive Mejor</title>
      <meta name="description" content="Lorem ipsum" />
      <link rel="shortcut icon" href="/isologo.png" sizes="any" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
