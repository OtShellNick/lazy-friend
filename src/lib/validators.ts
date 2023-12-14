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
    .oneOf(
      [
        'PM',
        'SA',
        'BA',
        'SD',
        'DM',
        'DevOps',
        'Product',
        'Marketing',
        'SMM',
        'Traffic',
        'MM',
        'QAM',
        'QAA',
        'QAL',
        'Backend',
        'Frontend',
        'Python',
        'Java',
        'Android',
        'IOS',
        'C++',
        'Go',
        'DS',
        'ComputerVision',
        'HR',
        'WEB',
        'Cloud',
        'DataEngineer',
        'other',
      ],
      'Invalid specialization',
    )
    .required('Specialization is required'),
});

const login = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .required('Password is required'),
});

const createProject = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Название должно быть не менее 3 символов')
    .required('Name is required'),
  description: yup
    .string()
    .min(3, 'Описание должно быть не менее 3 символов')
    .required('Description is required'),
});

export type TProject = yup.InferType<typeof createProject>;
export type TRegister = yup.InferType<typeof register>;

export const Schema = {
  register,
  login,
  createProject,
};
