import firebase from 'firebase';
// import { Actions } from 'react-native-router-flux';

import {
  EMAIL_CHANGED_SU,
  PASSWORD_CHANGED_SU,
  USER_CHANGED_SU,
  CREATE_USER_SU
  // CREATE_USER_SU,
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

//this is redux-thunk
  // export const loginUser = ({ email, password }) => (dispatch) => {
  //     firebase.auth().signInWithEmailAndPassword(email, password)
  //       .then(user => loginUserSuccess(dispatch, user))
  //       //this catch statment is if failed
  //       .catch(() => loginUserFail(dispatch));
  //   };


//helper function below
// const loginUserFail = (dispatch) => {
//   dispatch({ type: LOGIN_USER_FAIL });
// };
//

// const loginUserSuccess = (dispatch, user) => {
//   dispatch({
//     type: LOGIN_USER_SUCCESS,
//     payload: user
//   });
//   Actions.homeScreen();
// };
