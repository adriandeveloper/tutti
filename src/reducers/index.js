import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SignupReducer from './SignUpReducer';

export default combineReducers({
  auth: AuthReducer,
  sign: SignupReducer
});
