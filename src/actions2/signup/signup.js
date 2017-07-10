// import firebase from 'firebase';
// import { Actions } from 'react-native-router-flux';

import {
  EMAILCHANGEDSU,
  PASSWORDCHANGEDSU,
  // LOGIN_USER_SUCCESS,
  // LOGIN_USER_FAIL,
  USERCHANGEDSU
} from './types';

  export const emailChangedSU = (text1) => ({
    type: EMAILCHANGEDSU,
    payload: text1
  });

  export const passwordChangedSU = (text1) => ({
    type: PASSWORDCHANGEDSU,
    payload: text1
  });

  // this is the action creator
  export const userChangedSU = (text1) => ({
    type: USERCHANGEDSU,
    payload: text1
  });

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
