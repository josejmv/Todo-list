// main tools
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

/**
 * configure apollo for
 * create a new apollo client
 */
export const createApolloClient = () =>
  new ApolloClient({
    ssrMode: typeof window === 'undefined',
    cache: new InMemoryCache({ addTypename: false }),
    link: new HttpLink({ uri: process.env.NEXT_PUBLIC_API_URL }),
  })
