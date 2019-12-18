import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

export const client = new ApolloClient({
  uri: 'https://t7chickenplus.netlify.com/.netlify/functions/graphql',
  // uri: 'http://localhost:8000/.netlify/functions/graphql', dev
  fetch,
})
