import { combineReducers } from 'redux';
import messages from './Messages';

const initState = {
  isFetching: false,
  lastFetched: null,
  height: 0
};

// this builds our chatroom metadata
const meta = (state = initState, action) => {
  switch (action.type) {
    case 'START_FETCHING_MESSAGES':
      return Object.assign({}, state, {
        isFetching: true
      });
    case 'RECIEVED_MESSAGES':
      return Object.assign({}, state, {
        height: action.height
      });
      default:
      return state;
  }
};

const chatroom = combineReducers({
  messages,
  meta
});

export default chatroom;
