import axios from "axios";
import {
  registerAccountSuccess,
  registerAccountValidationError,
  registerAccountFailure,
} from './actionCreators';

const registrationApiEndpoint = `${process.env.REACT_APP_BASE_API_URL}users`;
class ApiError extends Error {
}

export const registerAccount = (registrationData) =>
  dispatch => axios.post(registrationApiEndpoint, registrationData)
    .then((response) => {
      if (!response || !response.data) {
        return dispatch(registerAccountFailure('Invalid API response'));
      } else if (response.data.error) {
        return dispatch(registerAccountFailure(response.data.message || response.data.error));
      } else {
        return dispatch(registerAccountSuccess());
      }
    })
    .catch(({ response }) => {
      if (response && response.data && response.data.error === 'validation') {
        return dispatch(registerAccountValidationError(response.data));
      } else {
        return dispatch(registerAccountFailure());
      }
    });
