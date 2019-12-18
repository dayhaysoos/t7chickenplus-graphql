import React from 'react'
import { Link } from 'gatsby'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const allCharacters = gql`
  {
    allCharacter {
      displayName
    }
  }
`

const IndexPage = () => {
  const { data = [], error, loading } = useQuery(allCharacters)
  return (
    <Layout>
      <SEO title="Home" />
      <ul>
        {loading && <p>Loading characters ... </p>}
        {data &&
          data.allCharacter &&
          data.allCharacter.map(({ displayName }) => (
            <li key={displayName}>{displayName}</li>
          ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
