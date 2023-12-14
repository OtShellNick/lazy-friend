export type TInitialState = {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string | null;
};

export const initialState: TInitialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  errorMessage: null,
};
