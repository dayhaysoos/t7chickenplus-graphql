import React from 'react'
import { Link } from 'gatsby'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const allCharacters = gql`
  {
    hello
  }
`

const IndexPage = () => {
  const { data, error, loading } = useQuery(allCharacters)

  console.log('data', data)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
