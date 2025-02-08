import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';

import {
  selectContacts,
  selectIsError,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import { getContacts } from '../../redux/contacts/operations';

import s from './ContactsPage.module.css';
import Container from '../../components/Container/Container';
// import StyledBtn from '../../components/StyledBtn/StyledBtn';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Container className={s.contacts_container}>
      <h2 className={s.title}>Contacts</h2>

      <div className={s.acc_wrap}>
        <div className={s.acc_item}>
          <ContactForm />
        </div>

        <div className={s.acc_item}>
          <SearchBox />
        </div>
      </div>

      <div className={s.list_wrap}>
        {Array.isArray(contacts) && contacts.length === 0 && (
          <h3 className={s.no_contacts}>Your contact list is empty</h3>
        )}

        {Array.isArray(contacts) && contacts.length > 0 && <ContactList />}
      </div>

      {isLoading && <Loader />}
      {isError && <Error error={isError} />}
    </Container>
  );
};

export default ContactsPage;
