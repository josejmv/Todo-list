// main tools
import { createApolloClient } from './apolloClient'
import { useMemo } from 'react'

// types
import { NormalizedCacheObject } from '@apollo/client'
import { ApolloClientDataType } from 'types'

let apolloClient: ApolloClientDataType

/**
 * initialize apollo client
 * this function can be used in server side functions
 * like getServerSideProps
 *
 * @param initialState
 */
export const initializeApolloClient = (
  initialState: NormalizedCacheObject = {}
) => {
  const _apolloClient: ApolloClientDataType =
    apolloClient ?? createApolloClient()

  if (initialState) {
    const existingCache = _apolloClient.extract()
    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }

  if (typeof window === 'undefined') return _apolloClient
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

/**
 * custom hook for use apollo client
 * in client side
 *
 * @param initialState
 */
export const useApollo = (initialState: NormalizedCacheObject) =>
  useMemo(() => initializeApolloClient(initialState), [initialState])
