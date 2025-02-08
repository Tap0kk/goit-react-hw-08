import { useDispatch } from 'react-redux';
import { BiSolidUser } from 'react-icons/bi';
import { MdOutlinePhoneIphone } from 'react-icons/md';

import { deleteContact } from '../../redux/contacts/operations';

import s from './Contact.module.css';

import toast from 'react-hot-toast';

const Contact = ({ user }) => {
  const { name, number, id } = user;

  const dispatch = useDispatch();

  const nameFormater = fullName => {
    if (fullName.length <= 20) return fullName;
    else return fullName.slice(0, 20).padEnd(23, '.');
  };

  const onDeleteHandleClick = () => {
    dispatch(deleteContact(id)).unwrap(
      toast.success(`Contact "${name}" was deleted!`)
    );
  };

  return (
    <>
      <div className={s.details}>
        <p className={`${s.text} ${s.name}`}>
          <BiSolidUser className={s.ico} />
          {nameFormater(name)}
        </p>

        <p className={`${s.text} ${s.number}`}>
          <MdOutlinePhoneIphone className={s.ico} />
          {number}
        </p>
      </div>

      <div className={s.btn_wrap}>
        <button onClick={onDeleteHandleClick} className={s.btn} type="button">
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
