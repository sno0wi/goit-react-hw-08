import css from './Layout.module.css';
import AppBar from '../AppBar/AppBar.jsx';

const Layout = ({ children }) => {
  return (
    <div>
      <header className={css.headerLink}>
        <AppBar />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
