import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'

import jwk_decode from 'jwk-decode'

const LOGIN_REDIRECT = '/login'

const withAuth = (WrappedComponent) => {
  const AuthComponent = props => {
    const newProps = {}
    const [cookies] = useCookies(['authorization'])
    
    if (cookies['authorization']) {
      newProps.user = jwk_decode(cookies['authorization'])
      newProps.authorization = cookies['authorization']
    }

    if (process.browser && !newProps.user) {
      const router = useRouter()
      router.push(LOGIN_REDIRECT)
    }
    return  (
      <WrappedComponent {...props} {...newProps} />
    )
  }
  return AuthComponent
}

export default withAuth