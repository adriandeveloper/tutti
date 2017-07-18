import firebase from 'firebase';

const messages = (state, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE': {
      return {
        id: action.id,
        text: action.text,
        time: action.time,
        author: action.author
      };
    }
    case 'SEND_MESSAGE': {
      const msg = {
        text: action.text,
        time: Date.now(),
        author: action.user.name,
      };
      const newMsgRef = firebase.database().ref('messages').push();
      msg.id = newMsgRef.key;
      newMsgRef.set(msg);
      return msg;
    }
    default:
    return state;
  }
};

export default messages;
