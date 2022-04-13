import { registerAccount } from './service';
import mockAxios from 'axios';

beforeEach(() => {
  jest.resetAllMocks();
});

describe("Account Registration Tests", () => {
  it("POSTs registration data to the API server", async () => {
    const testData = {
      forname: 'Alex',
      surname: 'Wright',
      email: 'alex@xeen.uk',
      password: '1234567890',
    };

    // Setup a mock that will test that the data is sent as JSON
    mockAxios.post.mockImplementationOnce((uri, dataIn) => {
      ['forename', 'surname', 'email', 'password']
        .forEach(key => expect(dataIn).toHaveProperty(key));
      return Promise.resolve({ status: 200, data: null });
    });

    await registerAccount(testData);
  });

  it("Fails to register with an email that's already used", async () => {
    const testData = {
      firstName: 'Alex',
      lastName: 'Wright',
      email: 'alreadyregistered@vibitno.com',
      password: '1234567890',
    };

    const validationErrors = {
      error: 'validation',
      errors: {
        email: [
          "The email has already been taken.",
        ],
      },
    };
    const existingEmailResponder = (uri, dataIn) => {
      return Promise.reject({
        response: {
          status: 401,
          data: validationErrors,
        },
      });
    };
    mockAxios.post.mockImplementationOnce(existingEmailResponder);

    const mockDispatch = ({ type, payload }) => {
      expect(type).toBe('REGISTER_SET_VALIDATION_ERROR');
      expect(payload).toBe(validationErrors);
      return {
        type,
        payload,
      };
    };
    const actionCreator = registerAccount(testData);
    const response = await actionCreator(mockDispatch);
    const expectedAction = {
      type: 'REGISTER_SET_VALIDATION_ERROR',
      payload: validationErrors,
    };
    expect(response).toEqual(expectedAction);
    expect(mockAxios.post).toHaveBeenCalled();
  });

  it("Succeeds when all data is valid", async () => {
    const testData = {
      firstName: 'Test',
      lastName: 'User',
      email: 'newuser@vibitno.com',
      password: '$uperPa55word',
    };

    // Mock setup
    const successResponse = {
      success: true,
    };
    const successResponder = (uri, dataIn) => {
      return Promise.resolve({
        status: 200,
        data: successResponse,
      });
    };
    const mockDispatch = action => {
      expect(action.type).toBe('REGISTER_SET_SUCCESS');
      expect(action.payload).toBeUndefined();
      return action;
    };
    mockAxios.post.mockImplementationOnce(successResponder);

    // Test and expectations
    const actionCreator = registerAccount(testData);
    const response = await actionCreator(mockDispatch);
    const expectedAction = {
      type: 'REGISTER_SET_SUCCESS',
    };
    expect(response).toEqual(expectedAction);
    expect(mockAxios.post).toHaveBeenCalled();
  });

  it("Handles error responses with a 200 status code", async () => {
    const testData = {
      firstName: 'Test',
      lastName: 'User',
      email: 'errorcausinguser@vibitno.com',
      password: '$uperPa55word',
    };

    // Mock setup
    const errorResponse = {
      error: '42P01',
      message: 'SQLSTATE[42P01]: Undefined table: 7 ERROR:  relation "contacts" does not exist...',
    };
    const errorResponder = (uri, dataIn) => {
      return Promise.resolve({
        status: 200,
        data: errorResponse,
      });
    };
    const mockDispatch = action => {
      expect(action.type).toBe('REGISTER_SET_FAILURE');
      expect(action.payload.error).toEqual(errorResponse.message);
      return action;
    };
    mockAxios.post.mockImplementationOnce(errorResponder);

    // Test and expectations
    const actionCreator = registerAccount(testData);
    const response = await actionCreator(mockDispatch);
    expect(response.type).toEqual('REGISTER_SET_FAILURE');
  });
});
