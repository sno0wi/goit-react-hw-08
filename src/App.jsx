import './App.css';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { apiGetContacts } from './redux/contactsOps.js';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
