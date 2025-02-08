import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { GoPerson } from 'react-icons/go';
import { CiPhone } from 'react-icons/ci';
import { AiOutlineUserAdd } from 'react-icons/ai';

import { addContact } from '../../redux/contacts/operations';
import { AddContactSchema } from '../../utils/schemas';

import s from './ContactForm.module.css';
import StyledBtn from '../StyledBtn/StyledBtn';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const INITIAL_VALUES = { name: '', number: '' };

  const dispatch = useDispatch();

  const onAddHandleSubmit = (values, actions) => {
    const newContact = {
      name: values.name.trim(),
      number: values.number.trim(),
    };

    dispatch(addContact(newContact));
    toast.success('Contact was added!');
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={onAddHandleSubmit}
      validationSchema={AddContactSchema}
    >
      <Form className={s.form}>
        <h3 className={s.form_title}>Enter new contact details</h3>

        <div className={s.wrapperInput}>
          <label className={s.label}>
            <GoPerson className={s.input_ico} />

            <div className={s.input_wrap}>
              <Field
                className={s.input}
                type="text"
                name="name"
                placeholder="Name"
              ></Field>
            </div>

            <div className={s.tooltip_gap}>
              <ErrorMessage
                className={s.message}
                name="name"
                component="span"
              />
            </div>
          </label>

          <label className={s.label}>
            <CiPhone className={s.input_ico} />

            <div className={s.input_wrap}>
              <Field
                className={s.input}
                type="text"
                name="number"
                placeholder="Phone number"
              ></Field>
            </div>

            <div className={s.tooltip_gap}>
              <ErrorMessage
                className={s.message}
                name="number"
                component="span"
              />
            </div>
          </label>
        </div>

        <StyledBtn type="submit" addClassName={s.add_btn}>
          Add contact
          <AiOutlineUserAdd className={s.add_ico} />
        </StyledBtn>
      </Form>
    </Formik>
  );
};

export default ContactForm;
