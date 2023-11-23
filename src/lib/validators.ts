import * as yup from 'yup';

const register = yup.object().shape({
  name: yup.string().required('Name is required'),
  nickname: yup.string().required('Nickname is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .required('Password is required'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Repeat password is required'),
  specialization: yup
    .string()
    .oneOf(['frontend', 'backend', 'designer'], 'Invalid specialization')
    .required('Specialization is required'),
});

const login = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .required('Password is required'),
});

export const Schema = {
  register,
  login,
};