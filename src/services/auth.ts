// gql
import { createApolloClient } from 'lib/apolloClient'
import LOGIN from 'lib/queries/auth/login.gql'

export class AuthService {
  static login = () => {
    const apolloClient = createApolloClient()

    const mutation = (credentials: { email: string }) =>
      apolloClient
        .mutate({ mutation: LOGIN, variables: { email: credentials.email } })
        .then((res) => res.data)

    return { mutation }
  }
}
