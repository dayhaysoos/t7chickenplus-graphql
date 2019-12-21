/**@jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { useState, useMemo, Fragment } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Table from '../components/table'

const Modal = props => (
  <div
    sx={{
      display: props.ishovering === 'true' ? 'block' : 'none',
      position: 'fixed',
      zIndex: 2,
      left: 0,
      top: 0,
      width: '100%',
      overflow: 'auto',
      backgroundColor: 'rgba(0,0,0,0.4)',
    }}
    {...props}
  />
)

const ModalContent = props => (
  <div
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '15% auto',
      width: '100%',
      height: '100%',
      transition: 'all 1s',
      animation: 'fade-in 1s',
    }}
    {...props}
  />
)

const Span = props => (
  <span
    {...props}
    sx={{
      display: 'block',
    }}
  />
)

const Character = ({ pageContext }) => {
  const [hoverState, setHoverState] = useState({
    isHovering: false,
    preview_url: '',
  })

  const moveData = useMemo(() => pageContext.characterData.movelist, [])

  const columns = React.useMemo(() => [
    {
      Header: pageContext.characterData.displayName,
      columns: [
        {
          Header: 'Notation',
          Cell: ({ cell: { value } }) => (
            <Fragment>
              <Span>{value.notation}</Span>
              <Span>{value.move_name}</Span>
              {value.preview_url && (
                <a
                  href={''}
                  sx={{ zIndex: 1 }}
                  onClick={e => {
                    e.preventDefault()
                    setHoverState({
                      isHovering: true,
                      preview_url: value.preview_url,
                    })
                  }}
                >
                  View Gif!
                </a>
              )}
            </Fragment>
          ),
          accessor: notation => notation,
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
      <h1>{pageContext.characterData.displayName}</h1>
      <Modal
        ishovering={hoverState.isHovering.toString()}
        onClick={() => setHoverState({ isHovering: false })}
      >
        <ModalContent>
          <img sx={{ height: '50%' }} src={hoverState.preview_url} />
        </ModalContent>
      </Modal>
      <Table columns={columns} data={moveData} />
    </Layout>
  )
}

export default Character
