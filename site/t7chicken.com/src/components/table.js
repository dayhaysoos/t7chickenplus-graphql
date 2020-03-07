/**@jsx jsx */
import { useState } from 'react'
import { jsx, Grid, Box, Flex } from 'theme-ui'
import ReactTable from 'react-table'

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

const Cell = props => (
  <Box
    {...props}
    sx={{
      border: '1px solid black',
      textAlign: 'center',
      padding: 2,
    }}
  />
)

const Header = props => (
  <Box
    {...props}
    sx={{
      border: '1px solid black',
      textAlign: 'center',
      fontSize: '18px',
      fontWeight: 'bold',
    }}
  />
)

const CharacterTable = ({ columns, data }) => {
  const [hoverState, setHoverState] = useState({
    isHovering: false,
    preview_url: '',
  })

  return (
    <div>
      <h1 sx={{ textAlign: 'center' }}>{columns[0].Header}</h1>
      <Modal
        ishovering={hoverState.isHovering.toString()}
        onClick={() => setHoverState({ isHovering: false })}
      >
        <ModalContent>
          <img sx={{ height: '50%' }} src={hoverState.preview_url} />
        </ModalContent>
      </Modal>
      <Grid gap={0} columns={columns[0].columns.length}>
        {columns[0].columns.map(cell => (
          <Header key={cell.accessor}>{cell.Header}</Header>
        ))}
      </Grid>
      <Box>
        {data.map(
          (
            {
              notation,
              hit_level,
              damage,
              speed,
              on_block,
              on_hit,
              on_ch,
              preview_url,
            },
            i
          ) => (
            <Grid
              sx={{ backgroundColor: i % 2 === 0 ? 'white' : 'lightgray' }}
              gap={0}
              key={notation}
              columns={columns[0].columns.length}
            >
              <Cell>
                {notation}
                {preview_url && (
                  <a
                    href={''}
                    sx={{ display: 'block', zIndex: 1 }}
                    onClick={e => {
                      e.preventDefault()
                      setHoverState({
                        isHovering: true,
                        preview_url: preview_url,
                      })
                    }}
                  >
                    View Gif!
                  </a>
                )}
              </Cell>
              <Cell>{hit_level}</Cell>
              <Cell>{damage}</Cell>
              <Cell>{speed}</Cell>
              <Cell>{on_block}</Cell>
              <Cell>{on_hit}</Cell>
              <Cell>{on_ch}</Cell>
            </Grid>
          )
        )}
      </Box>
    </div>
  )
}

export default CharacterTable
