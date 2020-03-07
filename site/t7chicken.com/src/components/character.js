/**@jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { useMemo } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Table from '../components/table'

const Character = ({ pageContext }) => {
  const moveData = useMemo(() => pageContext.characterData.movelist, [])

  const columns = React.useMemo(() => [
    {
      Header: pageContext.characterData.displayName,
      columns: [
        {
          Header: 'Notation',
          accessor: 'notation',
        },
        {
          Header: 'Hit Level',
          accessor: 'hit_level',
        },
        {
          Header: 'Damage',
          accessor: 'damage',
        },
        {
          Header: 'Speed',
          accessor: 'speed',
        },
        {
          Header: 'On Block',
          accessor: 'on_block',
        },
        {
          Header: 'On Hit',
          accessor: 'on_hit',
        },
        {
          Header: 'On Counter Hit',
          accessor: 'on_ch',
        },
      ],
    },
  ])

  return (
    <Layout>
      <SEO title={`${pageContext.characterData.displayName} frame data`} />
      <Table columns={columns} data={moveData} />
    </Layout>
  )
}

export default Character
