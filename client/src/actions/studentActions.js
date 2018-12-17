import axios from "axios";
import {
  GET_STUDENTS,
  ADD_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT,
  STUDENTS_LOADING,
  CLEAR_USER_STUDENTS
} from "./types";

export const getSTUDENTs = user_id => dispatch => {
  dispatch(setSTUDENTsLoading());
  axios
    .get("/api/STUDENTs", {
      params: {
        user_id: user_id
      }
    })
    .then(res =>
      dispatch({
        type: GET_STUDENTS,
        payload: res.data
      })
    );
};

export const addSTUDENT = STUDENT => dispatch => {
  axios.post("/api/STUDENTs", STUDENT).then(res =>
    dispatch({
      type: ADD_STUDENT,
      payload: res.data
    })
  );
};

export const updateSTUDENT = STUDENT => dispatch => {
  axios.put(`/api/STUDENTs/${STUDENT._id}`, STUDENT).then(res =>
    dispatch({
      type: UPDATE_STUDENT,
      payload: res.data
    })
  );
};

export const deleteSTUDENT = id => dispatch => {
  axios.delete(`/api/STUDENTs/${id}`).then(res =>
    dispatch({
      type: DELETE_STUDENT,
      payload: id
    })
  );
};

export const setSTUDENTsLoading = () => {
  return {
    type: STUDENTS_LOADING
  };
};

export const clearSTUDENTs = () => {
  return {
    type: CLEAR_USER_STUDENTS
  };
};
