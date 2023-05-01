import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import hoistNonReactStatics from 'hoist-non-react-statics';
import jwt_decode from 'jwt-decode';

const LOGIN_REDIRECT = '/login';

const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const newProps = {};
    const [cookies] = useCookies(['authorization']);
    const router = useRouter();

    if (cookies['authorization']) {
      newProps.user = jwt_decode(cookies['authorization']);
      newProps.authorization = cookies['authorization'];
    }

    if (typeof window !== 'undefined' && !newProps.user) {
      router.push(LOGIN_REDIRECT);
    }

    return <WrappedComponent {...props} {...newProps} />;
  };

  hoistNonReactStatics(AuthComponent, WrappedComponent)

  return AuthComponent;
};

export default withAuth;
