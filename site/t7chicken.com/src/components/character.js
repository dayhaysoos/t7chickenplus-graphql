import React from 'react'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const cell = {
  flexGrow: 1,
  width: '100%',
  minWidth: '150px',
  border: '1px solid black',
  padding: '0.8em 1.2em',
  overflow: 'hidden',
  alignItems: 'center',
}

const Character = ({ pageContext }) => {
  return (
    <Layout>
      <h1>{pageContext.characterData.displayName}</h1>
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
          <section
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: '0',
            }}
            key={id}
          >
            <div style={cell}>
              <p>{notation}</p>
              {preview_url && <a href={preview_url}>View gif</a>}
            </div>
            <div style={cell}>{hit_level}</div>
            <div style={cell}>{damage}</div>
            <div style={cell}>{speed}</div>
            <div style={cell}>{on_block}</div>
            <div style={cell}>{on_hit}</div>
            <div style={cell}>{on_ch}</div>
          </section>
        )
      )}
    </Layout>
  )
}

export default Character
