import './App.css';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { apiGetContacts } from './redux/contactsOps.js';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout.jsx';
import Loader from './components/Loader/Loader.jsx';

const WelcomePage = lazy(() => import('./pages/WelcomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage.jsx'));
const Register = lazy(() => import('./pages/RegisterPage.jsx'));
const Contacts = lazy(() => import('./pages/ContactsPage.jsx'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
