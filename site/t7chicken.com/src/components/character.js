/**@jsx jsx */
import { jsx } from 'theme-ui'
import { useState } from 'react'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const Character = ({ pageContext }) => {
  const [hoverState, setHoverState] = useState({
    isHovering: false,
    preview_url: '',
  })

  console.log(hoverState.isHovering ? 'block' : 'none')

  return (
    <Layout>
      <SEO title={`${pageContext.characterData.displayName} frame data`} />
      <h1>{pageContext.characterData.displayName}</h1>
      <div
        sx={{
          display: `${hoverState.isHovering ? 'block' : 'none'}`,
          position: 'fixed',
          zIndex: 2,
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          overflow: 'auto',
          backgroundColor: 'rgba(0,0,0,0.4)',
        }}
      >
        <div
          onClick={() => setHoverState({ isHovering: false })}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '15% auto',
            width: '80%',
            transition: 'all 1s',
            animation: 'fade-in 1s',
          }}
        >
          <img src={hoverState.preview_url} />
        </div>
      </div>
      <table
        sx={{
          overflowY: 'scroll',
          height: '400px',
          display: 'block',
        }}
      >
        <caption>{pageContext.characterData.displayName} Frame Data</caption>
        <thead>
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
            <tbody key={id}>
              <tr>
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
            </tbody>
          )
        )}
      </table>
    </Layout>
  )
}

export default Character
