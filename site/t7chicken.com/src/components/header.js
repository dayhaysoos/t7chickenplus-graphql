/**@jsx jsx */
import { jsx, Box, Button, Flex } from 'theme-ui'
import { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import netlifyIdentity from 'netlify-identity-widget'

const Header = ({ siteTitle }) => {
  const [user, setUser] = useState()
  useEffect(() => {
    netlifyIdentity.init({})
  })

  netlifyIdentity.on('login', user => {
    netlifyIdentity.close()
    setUser(user)
  })

  netlifyIdentity.on('logout', () => setUser())

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
        <Flex as="nav">
          <NavLink as={Link} to={'/'} p={2}>
            Home
          </NavLink>
          <NavLink as={Link} to={'/app'} p={2}>
            Dashboard
          </NavLink>
          {!user ? (
            <Button
              sx={{ backgroundColor: 'transparent', color: 'white' }}
              onClick={() => netlifyIdentity.open()}
            >
              Log in
            </Button>
          ) : (
            <Flex>
              <Button
                sx={{ backgroundColor: 'transparent', color: 'white' }}
                onClick={() => netlifyIdentity.logout()}
              >
                Log out
              </Button>
              <p sx={{ p: 2 }}>{user.user_metadata.full_name}</p>
            </Flex>
          )}
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
