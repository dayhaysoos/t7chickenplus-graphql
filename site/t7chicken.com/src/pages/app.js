/**@jsx jsx */
import { jsx } from 'theme-ui'
import { useContext } from 'react'
import { Router } from '@reach/router'
import { IdentityContext } from '../context/identity-context'
import Layout from '../components/layout'

const Dash = () => {
  const { user } = useContext(IdentityContext)

  return (
    <div sx={{ color: 'white' }}>
      User: {user && user.user_metadata.full_name}
    </div>
  )
}

export default props => {
  return (
    <Layout>
      <Router>
        <Dash path={'/app'} />
      </Router>
    </Layout>
  )
}
