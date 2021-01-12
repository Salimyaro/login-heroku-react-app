const BASE_URL = 'https://mighty-river-01450.herokuapp.com';

function signIn({ email, pass }) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      pass: pass,
    }),
  }).then(res => res.json());
}

function signUp({ login, email, pass }) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      login: login,
      email: email,
      pass: pass,
    }),
  }).then(res => res.json());
}
function deleteUser(id) {
  return fetch(`${BASE_URL}/logined`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: id,
    }),
  }).then(res => res.json());
}

function logined(token) {
  const myHeaders = new Headers({
    Authorization: `${token}`,
    'Content-Type': 'application/json',
  });
  return fetch(`${BASE_URL}/logined`, {
    headers: myHeaders,
    method: 'GET',
  }).then(res => res.json());
}

const api = {
  signUp,
  signIn,
  logined,
  deleteUser,
};

export default api;
