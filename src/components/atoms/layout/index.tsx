// main tools
import Head from 'next/head'

// components
import { Footer } from '@atoms/footer'

// types
import { FC } from 'react'

type LayoutProps = {
  children: JSX.Element | JSX.Element[]
  meta?: { title: string }
}

export const Layout: FC<LayoutProps> = ({ meta, children }) => {
  return (
    <>
      <Head>
        <title>Todo list{meta ? ` | ${meta.title}` : null}</title>
      </Head>

      <main>{children}</main>
      <Footer />
    </>
  )
}
