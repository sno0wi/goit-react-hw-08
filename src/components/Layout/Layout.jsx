import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Layout.module.css';

const getNavLinkClassNames = ({ isActive }) =>
  clsx(css.headerLink, {
    [css.active]: isActive,
  });

const Layout = ({ children }) => {
  return (
    <div>
      <header className={css.headerLink}>
        <NavLink className={getNavLinkClassNames} to="/">
          Home
        </NavLink>
        <NavLink className={getNavLinkClassNames} to="/contacts">
          Contacts
        </NavLink>
        <NavLink className={getNavLinkClassNames} to="/register">
          Register
        </NavLink>
        <NavLink className={getNavLinkClassNames} to="/login">
          Log In
        </NavLink>
      </header>
      <main>{children}</main>s
    </div>
  );
};

export default Layout;
