import {
  REGISTER_SET_SUCCESS,
  REGISTER_SET_VALIDATION_ERROR,
  REGISTER_SET_FAILURE,
} from './actions';

export const registerAccountSuccess = () => ({
  type: REGISTER_SET_SUCCESS,
});

export const registerAccountValidationError = error => ({
  type: REGISTER_SET_VALIDATION_ERROR,
  payload: error,
});

export const registerAccountFailure = error => ({
  type: REGISTER_SET_FAILURE,
  payload: {
    error,
  },
});
