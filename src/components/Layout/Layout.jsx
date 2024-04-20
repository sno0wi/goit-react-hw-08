import css from './Layout.module.css';
import AppBar from '../AppBar/AppBar.jsx';

const Layout = ({ children }) => {
  return (
    <>
      <header className={css.header}>
        <AppBar />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
