import Contact from '../Contact/Contact.jsx';
import { useSelector } from 'react-redux';
import { selectError, selectLoading } from '../../redux/contactsReducer.js';
import Loader from '../Loader/Loader.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import { selectFilteredContacts } from '../../redux/contactsReducer.js';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </>
  );
};

export default ContactList;
