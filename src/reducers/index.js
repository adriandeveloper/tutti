import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SignupReducer from './SignUpReducer';
import ChatRoom from './ChatRoom';
import Messages from './Messages';

export default combineReducers({
  auth: AuthReducer,
  sign: SignupReducer,
  chatroom: ChatRoom,
  messages: Messages,
});
