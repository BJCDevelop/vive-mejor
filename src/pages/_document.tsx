import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title key="title">Vive Mejor</title>
      <meta name="description" content="Lorem ipsum" />
      <link rel="shortcut icon" href="/isologo.png" sizes="any" />
      <link rel="stylesheet" href="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.min.css" />
      <script async src="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.bundle.js" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
