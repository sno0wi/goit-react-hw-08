import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Layout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectUserData,
  selectUserIsSignedIn,
} from '../../redux/auth/selectors.js';
import { apiLogoutUser } from '../../redux/auth/operations.js';

const getNavLinkClassNames = ({ isActive }) =>
  clsx(css.headerLink, {
    [css.active]: isActive,
  });

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(selectUserIsSignedIn);
  const userData = useSelector(selectUserData);
  const onLogOut = () => {
    dispatch(apiLogoutUser());
  };

  return (
    <div>
      <header className={css.headerLink}>
        {isSignedIn ? (
          <>
            <NavLink className={getNavLinkClassNames} to="/">
              Home
            </NavLink>
            <NavLink className={getNavLinkClassNames} to="/contacts">
              Contacts
            </NavLink>
            <span>Hi, {userData.name}</span>
            <button type="button" onClick={onLogOut}>
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink className={getNavLinkClassNames} to="/register">
              Register
            </NavLink>
            <NavLink className={getNavLinkClassNames} to="/login">
              Log In
            </NavLink>
          </>
        )}
      </header>
      <main>{children}</main>s
    </div>
  );
};

export default Layout;
