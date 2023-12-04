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
