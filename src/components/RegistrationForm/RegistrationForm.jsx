import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { GoPerson } from 'react-icons/go';
import { IoMailOutline } from 'react-icons/io5';
import { SlLock } from 'react-icons/sl';

import StyledBtn from '../StyledBtn/StyledBtn';

import { register } from '../../redux/auth/operations';
import { RegisterUserSchema } from '../../utils/schemas';

import s from './RegistrationForm.module.css';
import toast from 'react-hot-toast';
import Error from '../Error/Error';

const RegistrationForm = () => {
  const INITIAL_VALUES = { name: '', email: '', password: '' };

  const dispatch = useDispatch();

  const onRegisterHandleSubmit = (values, actions) => {
    const formData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    dispatch(register(formData))
      .unwrap()
      .catch(errMsg => {
        if (errMsg === 'Request failed with status code 400')
          toast.custom(
            <Error error={'User with this email already registered!'} />
          );
        else toast.custom(<Error error={errMsg} />);
      });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={onRegisterHandleSubmit}
      validationSchema={RegisterUserSchema}
    >
      <Form className={s.form}>
        <h3 className={s.form_title}>
          Please fill form fields to create an account.
        </h3>

        <label className={s.label}>
          <GoPerson className={s.input_ico} />

          <div className={s.input_wrap}>
            <Field
              className={s.input}
              type="text"
              name="name"
              placeholder="Enter your name"
            ></Field>
          </div>

          <div className={s.tooltip_gap}>
            <ErrorMessage className={s.message} name="name" component="span" />
          </div>
        </label>

        <label className={s.label}>
          <IoMailOutline className={s.input_ico} />

          <div className={s.input_wrap}>
            <Field
              className={s.input}
              type="text"
              name="email"
              placeholder="Enter your email"
            ></Field>
          </div>

          <div className={s.tooltip_gap}>
            <ErrorMessage className={s.message} name="email" component="span" />
          </div>
        </label>

        <label className={s.label}>
          <SlLock className={s.input_ico} />

          <div className={s.input_wrap}>
            <Field
              className={s.input}
              type="password"
              name="password"
              placeholder="Enter your password"
            ></Field>
          </div>

          <div className={s.tooltip_gap}>
            <ErrorMessage
              className={`${s.message} ${s.pwd_message}`}
              name="password"
              component="span"
            />
          </div>
        </label>

        <StyledBtn className={s.registerBtn} type="submit">
          Sign up
        </StyledBtn>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
