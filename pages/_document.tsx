import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" as="style" crossOrigin="" href="/global.css" />
        <link rel="stylesheet" as="style" href="/jetbrains-mono.css" />
        <link rel="stylesheet" as="style" href="/prism.css" />
        <link rel="stylesheet" as="style" href="/prism-darcula-theme.css" />
      </Head>
      <body>
        <Main />
        <script src="/prism.js" />
        <NextScript />
      </body>
    </Html>
  );
}
