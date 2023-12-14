import { TRegister } from '@lib/validators';

export type TSimpleStringObj = Record<string, string>;

export type TSpecializationItem = {
  value: string;
  label: string;
};

export type TUserRegisterData = {
  name: string;
  nickname: string;
  email: string;
  password: string;
  specialization: string;
};

export type TUserResponse = {
  id: string;
  name: string;
  nickname: string;
  email: string;
  specialization: string;
  role: string;
};

export type TNavigationItem = {
  title: string;
  description?: string;
  href: string;
  children?: TNavigationItem[];
};

export type TSpecialization =
  | 'PM'
  | 'SA'
  | 'BA'
  | 'SD'
  | 'DM'
  | 'DevOps'
  | 'Product'
  | 'Marketing'
  | 'SMM'
  | 'Traffic'
  | 'MM'
  | 'QAM'
  | 'QAA'
  | 'QAL'
  | 'Backend'
  | 'Frontend'
  | 'Python'
  | 'Java'
  | 'Android'
  | 'IOS'
  | 'C++'
  | 'Go'
  | 'DS'
  | 'ComputerVision'
  | 'HR'
  | 'WEB'
  | 'Cloud'
  | 'DataEngineer'
  | 'other';

export type TDefaultValues = {
  REGISTRATION_FORM: TRegister;
};
