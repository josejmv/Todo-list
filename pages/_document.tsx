// main tools
import Document, { Html, Head, Main, NextScript } from 'next/document'

// types
import { DocumentContext, DocumentInitialProps } from 'next/document'

export default class MyDocument extends Document {
  static getInitialProps = async (
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> => {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <meta name='author' content='JoseJMV' />
          <meta name='copyright' content='JoseJMV' />
          <link rel='shortcut icon' href='/favicon.ico' />
          <meta
            name='keywords'
            content='Todo, tasks, test, cypress, nextjs, react'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
