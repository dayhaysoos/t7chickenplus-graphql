/**@jsx jsx */
import { jsx } from 'theme-ui'
import { useState } from 'react'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

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

const Table = props => (
  <table
    sx={{
      display: 'block',
    }}
    {...props}
  />
)

const Character = ({ pageContext }) => {
  const [hoverState, setHoverState] = useState({
    isHovering: false,
    preview_url: '',
  })

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
      <Table>
        <caption>{pageContext.characterData.displayName} Frame Data</caption>
        <thead sx={{ position: 'sticky', backgroundColor: 'white' }}>
          <tr>
            <th scope="col">Notation</th>
            <th scope="col">Hit Level</th>
            <th scope="col">Damage</th>
            <th scope="col">Speed</th>
            <th scope="col">On Block</th>
            <th scope="col">On Hit</th>
            <th scope="col">On CH</th>
          </tr>
        </thead>
        <tbody>
          {pageContext.characterData.movelist.map(
            ({
              notation,
              preview_url,
              move_name,
              hit_level,
              damage,
              speed,
              on_block,
              on_hit,
              on_ch,
              id,
            }) => (
              <tr key={id}>
                <th scope="row">
                  <div>{move_name && <p>{move_name}</p>}</div>
                  <p>{notation}</p>
                  <div>
                    {preview_url && (
                      <a
                        href={''}
                        sx={{ zIndex: 1 }}
                        onClick={e => {
                          e.preventDefault()
                          setHoverState({ isHovering: true, preview_url })
                        }}
                      >
                        View gif
                      </a>
                    )}
                  </div>
                </th>
                <td>{hit_level}</td>
                <td>{damage}</td>
                <td>{speed}</td>
                <td>{on_block}</td>
                <td>{on_hit}</td>
                <td>{on_ch}</td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </Layout>
  )
}

export default Character
