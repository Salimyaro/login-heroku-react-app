import { NavLink } from 'react-router-dom';
import s from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={s.header}>
      <NavLink exact to="/signin" className={s.link} activeClassName={s.activeLink}>
        Signin
      </NavLink>
      <NavLink exact to="/signup" className={s.link} activeClassName={s.activeLink}>
        Signup
      </NavLink>
      <NavLink exact to="/logined" className={s.link} activeClassName={s.activeLink}>
        Logined
      </NavLink>
    </header>
  );
}
