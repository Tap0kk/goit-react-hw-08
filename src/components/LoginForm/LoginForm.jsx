import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { IoMailOutline } from 'react-icons/io5';
import { SlLock } from 'react-icons/sl';

import { login } from '../../redux/auth/operations';
import { LoginUserSchema } from '../../utils/schemas';

import s from './LoginForm.module.css';
import StyledBtn from '../StyledBtn/StyledBtn';
import toast from 'react-hot-toast';
import Error from '../Error/Error';

const LoginForm = () => {
  const INITIAL_VALUES = { email: '', password: '' };

  const dispatch = useDispatch();

  const onLoginHandleSubmit = (values, actions) => {
    const userData = {
      email: values.email,
      password: values.password,
    };

    dispatch(login(userData))
      .unwrap()
      .catch(errMsg => {
        if (errMsg === 'Request failed with status code 400')
          toast.custom(
            <Error
              error={
                'The email or password is incorrect. Or this user has not been registered yet.'
              }
              login
            />
          );
        else toast.custom(<Error error={errMsg} />);
      });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={onLoginHandleSubmit}
      validationSchema={LoginUserSchema}
    >
      <Form className={s.form}>
        <h3 className={s.form_title}>
          Please enter your details to log in to your account.
        </h3>

        <label className={s.label}>
          <IoMailOutline className={s.input_ico} />

          <div className={s.input_wrap}>
            <Field
              className={s.input}
              type="text"
              name="email"
              placeholder="Email"
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
              placeholder="Password"
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

        <StyledBtn className={s.loginBtn} type="submit">
          Sign in
        </StyledBtn>
      </Form>
    </Formik>
  );
};

export default LoginForm;
