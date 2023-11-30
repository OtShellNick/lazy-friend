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
