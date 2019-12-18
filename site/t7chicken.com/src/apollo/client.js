import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

export const client = new ApolloClient({
  uri: 'https://t7chickenplus.netlify.com/.netlify/functions/graphql',
  fetch,
})
