/**@jsx jsx */
import { jsx, Box, Button, Flex } from 'theme-ui'
import { useEffect } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import netlifyIdentity from 'netlify-identity-widget'

const Header = ({ siteTitle }) => {
  useEffect(() => {
    netlifyIdentity.init({})
  })

  console.log(netlifyIdentity.currentUser())
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Flex>
          <Button
            sx={{ backgroundColor: 'transparent', color: 'white' }}
            onClick={() => netlifyIdentity.open()}
          >
            Log in
          </Button>
        </Flex>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
