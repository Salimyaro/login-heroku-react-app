import { useState, useEffect } from 'react';
import Api from '../../services/api';
import SignUpForm from '../../components/SignUpForm';

function SignUpPage({ tokenChange }) {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(
    'Enter your login, email and password please',
  );

  useEffect(() => {
    if (!user) return;
    Api.signUp(user).then(res => {
      setMessage(res.message);
      if (res.status === 200) {
        tokenChange(res.data.token);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  function handleSubmit(data) {
    setUser({
      login: data.name,
      email: data.email,
      pass: data.pass,
    });
  }

  return (
    <>
      <div>{message}</div>
      <SignUpForm onSubmit={handleSubmit} />
    </>
  );
}
export default SignUpPage;
