// main tools
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import NextAuth from 'next-auth'

// services
import { AuthService } from 'services/auth'

export default NextAuth({
  pages: { error: '/' }, // custom error page with query string as ?error=
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),

    CredentialsProvider({
      id: 'credentials',
      name: 'credentials',
      credentials: { email: { type: 'string' }, password: { type: 'string' } },

      /**
       * verify if the email is found in 8base as josejmvasquez@gmail.com
       */
      async authorize(credentials) {
        const { mutation } = AuthService.login()
        const { user } = await mutation({
          email: process.env.USER_EMAIL_ACCOUNT!,
        })

        if (user)
          return {
            id: user.id,
            email: credentials?.email,
            name: credentials?.email.split('@')[0],
          }

        throw new Error('Usuario o contraseña incorrectos')
      },
    }),
  ],

  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.name = user.name
        token.email = user.email
        token.sub = user.id
      }

      return Promise.resolve(token)
    },

    session: async ({ session, token }) => {
      session.user = token

      return Promise.resolve({ ...session })
    },
  },
})
