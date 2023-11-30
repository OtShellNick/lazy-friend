export type TInitialState = {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
};

export const initialState: TInitialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
};
