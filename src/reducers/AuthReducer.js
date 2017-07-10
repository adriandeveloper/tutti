import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
} from '../actions/login/types';

const INITIAL_STATE = {
  //  email: '',
  //  password: '',
  //  user: null,
  //  error: ''
 };

export default (state = INITIAL_STATE, action) => {
  // console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
      //the error:'' clears out the error message upon successful login
    case LOGIN_USER_SUCCESS:
    //using the INITIAL_STATE allows us to call it from above and clear out
      return { ...state, ...INITIAL_STATE, user: action.payload };
      //message for failure on login below. password: "" means clears password field
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Email and Password do not match', password: '' };
    default:
      return state;
  }
};
