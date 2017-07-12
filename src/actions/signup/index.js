import firebase from 'firebase';
// import { Actions } from 'react-native-router-flux';

import {
  EMAIL_CHANGED_SU,
  PASSWORD_CHANGED_SU,
  USER_CHANGED_SU,
  CREATE_USER_SU,
  LOGIN_USER_SUCCESS_SU
} from './types';

  export const emailChangedSU = (text) => ({
    type: EMAIL_CHANGED_SU,
    payload: text
  });

  export const passwordChangedSU = (text) => ({
    type: PASSWORD_CHANGED_SU,
    payload: text
  });

  // this is the action creator
  export const userChangedSU = (text) => ({
    type: USER_CHANGED_SU,
    payload: text
  });

  export const signUpUser = ({ email_su, password_su }) => (dispatch) => {
      firebase.auth().createUserWithEmailAndPassword(email_su, password_su)
      .then(user => {
        dispatch({ type: CREATE_USER_SU, payload: user });
      });
    };


    const loginUserFailSU = (dispatch) => {
      dispatch({ type: LOGIN_USER_SUCCESS_SU });
    };
