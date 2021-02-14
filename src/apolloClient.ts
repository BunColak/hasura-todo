import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { GetTokenSilentlyOptions } from '@auth0/auth0-spa-js'

type GetTokenFunction = (
  options?: GetTokenSilentlyOptions
) => Promise<string>;

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URL
})

const authLink = (getToken: GetTokenFunction) => setContext(async (_, { headers }) => {
  const token = await getToken()

  console.log(token)

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const generateClient = (getToken: GetTokenFunction) => new ApolloClient({
  link: authLink(getToken).concat(httpLink),
  cache: new InMemoryCache()
})

export default generateClient
