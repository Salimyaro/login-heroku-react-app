import { lazy, Suspense, useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Container from './components/Container';
import AppBar from './components/AppBar';
import Loader from './components/Loader';
import useCookie from './services/useCookie';

const SignInPage = lazy(() =>
  import('./views/SignInPage' /* webpackChunkName: "SignInPage" */),
);
const SignUpPage = lazy(() =>
  import('./views/SignUpPage' /* webpackChunkName: "SignUpPage" */),
);
const LoginedPage = lazy(() =>
  import('./views/LoginedPage' /* webpackChunkName: "LoginedPage" */),
);

export default function App() {
  const [cookie, updateCookie] = useCookie('token', '');
  const [token, setToken] = useState(cookie || null);

  useEffect(() => {
    updateCookie(`${token}`, 3);
  }, [token, updateCookie]);

  function handleTokenChange(token) {
    setToken(token);
  }

  return (
    <Container>
      <AppBar />
      {token && <p>token:{token}</p>}
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/signin" exact>
            <SignInPage tokenChange={handleTokenChange} />
          </Route>
          <Route path="/signup" exact>
            <SignUpPage tokenChange={handleTokenChange} />
          </Route>
          <Route path="/logined" exact>
            <LoginedPage token={token} />
          </Route>
          <Redirect to="/signin" />
        </Switch>
      </Suspense>
    </Container>
  );
}
