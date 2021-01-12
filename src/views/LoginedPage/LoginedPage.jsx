import { useState, useEffect } from 'react';
import Api from '../../services/api';
import UserList from '../../components/UserList';
import s from './LoginedPage.module.css';

function LoginedPage({ token }) {
  const [userList, setUserList] = useState([]);
  const [message, setMessage] = useState('Авторизируйтесь');

  useEffect(() => {
    if (!token) return;
    Api.logined(token).then(res => {
      setMessage(res.message);
      if (res.status === 200) {
        setUserList(res.data);
      }
    });
  }, [token]);

  function deleteHandler(id) {
    Api.deleteUser(id).then(res => {
      setMessage(res.message);
      if (res.status === 200) {
        setUserList(res.data);
      }
    });
  }

  return (
    <>
      <div className={s.tittle}>{message}</div>
      {userList && <UserList data={userList} onDelete={deleteHandler} />}
    </>
  );
}
export default LoginedPage;
