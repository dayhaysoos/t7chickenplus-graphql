/**@jsx jsx */
import { jsx, Box, Button, Flex, NavLink } from 'theme-ui'
import { useContext } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { IdentityContext } from '../context/identity-context'

const Header = ({ siteTitle }) => {
  const { user, identity: netlifyIdentity } = useContext(IdentityContext)
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
        <Flex sx={{ alignItems: 'center' }} as="nav">
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
              <span sx={{ p: 2 }}>{user.user_metadata.full_name}</span>
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
