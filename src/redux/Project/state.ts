import { TProject } from '@lib/validators';

export type TInitialState = {
  project: TProject;
};

export const initialState: TInitialState = {
  project: {
    name: '',
    description: '',
  },
};
