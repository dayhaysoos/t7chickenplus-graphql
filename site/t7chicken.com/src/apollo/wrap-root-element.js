import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './client'
import { ThemeProvider } from 'theme-ui'
import { deep } from '@theme-ui/presets'
import { Provider } from '../context/identity-context'

const tokens = {
  ...deep,
  sizes: { container: 1024 },
}

export const wrapRootElement = ({ element }) => (
  <Provider>
    <ThemeProvider theme={tokens}>
      <ApolloProvider client={client}>{element}</ApolloProvider>
    </ThemeProvider>
  </Provider>
)
