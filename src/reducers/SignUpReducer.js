import {
  EMAIL_CHANGED_SU,
  PASSWORD_CHANGED_SU,
  USER_CHANGED_SU,
  CREATE_USER_SU,
  LOGIN_USER_SUCCESS_SU,
  LOGIN_USER_FAIL_SU
} from '../actions/signup/types.js';

const INITIAL_STATE = {
  //  email_su: '',
  //  user_su: '',
  //  password_su: '',
  //  user: null,
   error: ''
 };

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  // console.log(action2);
  switch (action.type) {
    //below is an example of "messages"
    case USER_CHANGED_SU:
      return { ...state, user_su: action.payload };
    case EMAIL_CHANGED_SU:
      return { ...state, email_su: action.payload };
    case PASSWORD_CHANGED_SU:
      return { ...state, password_su: action.payload };
    case CREATE_USER_SU:
      return { ...state, username_su: action.payload };
    case LOGIN_USER_SUCCESS_SU:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL_SU:
      return { ...state, error: 'Cannnot Create Account' };
    default:
      return state;
  }
};
