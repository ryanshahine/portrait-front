import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html className="antialiased">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="overflow-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
