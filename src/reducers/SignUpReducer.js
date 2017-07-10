import {
  EMAILCHANGEDSU,
  PASSWORDCHANGEDSU,
  // LOGIN_USER_SUCCESS,
  // LOGIN_USER_FAIL,
  USERCHANGEDSU
} from '../actions2/signup/types.js';

const INITIAL_STATE2 = {
  //  email: '',
  //  usernameSU: '',
  //  password: '',
  //  user: null,
  //  error: ''
 };

export default (state2 = INITIAL_STATE2, action2) => {
  console.log('Signup Page');
  // console.log(action2);
  switch (action2.type) {
    case USERCHANGEDSU:
      return { ...state2, foo: action2.payload };
    case EMAILCHANGEDSU:
      return { ...state2, foo2: action2.payload };
    case PASSWORDCHANGEDSU:
      return { ...state2, foo3: action2.payload };

      // the error:'' clears out the error message upon successful login
    // case LOGIN_USER_SUCCESS:
    // // using the INITIAL_STATE allows us to call it from above and clear out
    //   return { ...state, ...INITIAL_STATE, user: action.payload };
    //   //message for failure on login below. password: "" means clears password field
    // case LOGIN_USER_FAIL:
    //   return { ...state, error: 'Email and Password do not match', password: '' };
    default:
      return state2;
  }
};
