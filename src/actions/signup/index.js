import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EMAIL_CHANGED_SU,
  PASSWORD_CHANGED_SU,
  USER_CHANGED_SU,
  CREATE_USER_SU,
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

  export const signUpUserSU = ({ email_su, password_su }) => (dispatch) => {
      firebase.auth().createUserWithEmailAndPassword(email_su, password_su)
      .then(user => {
        console.log(user);
        dispatch({ type: CREATE_USER_SU, payload: user });
        Actions.chatScreen();
      });
    };

    // export const loginUserSU = ({ email_su, password_su }) => (dispatch) => {
    //     firebase.auth().signInWithEmailAndPassword(email_su, password_su)
    //       .then(user => loginUserSuccessSU(dispatch, user))
    //       //this catch statment is if failed
    //       .catch(() => loginUserFailSU(dispatch));
    //   };
    //
    // const loginUserSuccessSU = (dispatch, user) => {
    //   dispatch({
    //     type: LOGIN_USER_SUCCESS_SU,
    //     payload: user
    //   });
    //   Actions.chatScreen();
    // };
    //
    // const loginUserFailSU = (dispatch) => {
    //   dispatch({ type: LOGIN_USER_FAIL_SU });
    // };
