import * as Yup from 'yup';

const NumberRegex = /^\s*\d{3}-\d{2}-\d{2}\s*$/gm;

const EmailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;

export const AddContactSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be up to 50 characters'),

  number: Yup.string()
    .required('Number is required')
    .matches(NumberRegex, 'Required format: XXX-XX-XX'),
});

export const RegisterUserSchema = Yup.object({
  name: Yup.string()
    .trim()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be up to 50 characters'),

  email: Yup.string()
    .trim()
    .required('Email is required')
    .matches(EmailRegex, 'Required format: example@gmail.com'),

  password: Yup.string()
    .trim()
    .required('Password is required')
    .min(7, 'Password must be at least 7 symbols')
    .max(16, 'Password must be up to 16 symbols'),
});

export const LoginUserSchema = Yup.object({
  email: Yup.string()
    .trim()
    .required('Email is required')
    .matches(EmailRegex, 'Required format: example@gmail.com'),

  password: Yup.string()
    .trim()
    .required('Password is required')
    .min(7, 'Password must be at least 7 symbols')
    .max(16, 'Password must be up to 16 symbols'),
});
