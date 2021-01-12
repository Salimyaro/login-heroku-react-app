import { useState, useEffect } from 'react';
import Api from '../../services/api';
import SignInForm from '../../components/SignInForm';

function SignInPage({ tokenChange }) {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('Введите логин и пароль');

  useEffect(() => {
    if (!user) return;
    Api.signIn(user).then(res => {
      setMessage(res.message);
      if (res.status === 200) {
        tokenChange(res.data.token);
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  function handleSubmit(data) {
    setUser({
      email: data.email,
      pass: data.pass,
    });
  }

  return (
    <>
      <div>{message}</div>
      <SignInForm onSubmit={handleSubmit} />
    </>
  );
}
export default SignInPage;
