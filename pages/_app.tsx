// gql
import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'lib/apollo'

// styles
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'styles/globals.scss'

// types
import { NormalizedCacheObject } from '@apollo/client'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'
import { AppProps } from 'next/app'
import { NextPage } from 'next'

type MyAppProps = {
  session: Session
  initialApolloState: NormalizedCacheObject
}

const MyApp: NextPage<AppProps<MyAppProps>> = ({ Component, pageProps }) => {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ApolloProvider>
  )
}

export default MyApp
