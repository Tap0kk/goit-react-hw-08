import { useSelector } from 'react-redux';

import Contact from '../Contact/Contact';

import { selectFilteredContacts } from '../../redux/filters/selectors';

import s from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      {filteredContacts.length === 0 && (
        <h3 className={s.no_matches}>There is on matches</h3>
      )}

      <ul className={s.contact_list}>
        {Array.isArray(filteredContacts) &&
          filteredContacts.map(user => {
            return (
              <li className={s.contact_card} key={user.id}>
                <Contact user={user} />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ContactList;
