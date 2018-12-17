import {
  GET_STUDENTS,
  ADD_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT,
  STUDENTS_LOADING,
  CLEAR_USER_STUDENTS
} from "../actions/types";

const initialState = {
  STUDENTs: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STUDENTS:
      return {
        ...state,
        STUDENTs: action.payload,
        loading: false
      };
    case ADD_STUDENT:
      return {
        ...state,
        STUDENTs: [action.payload, ...state.STUDENTs]
      };
    case UPDATE_STUDENT:
      const updatedSTUDENTs = state.STUDENTs.map(STUDENT => {
        if (STUDENT._id === undefined) {
          if (STUDENT.id === action.payload.id) {
            return { ...STUDENT, ...action.payload };
          }
        } else {
          if (STUDENT._id === action.payload._id) {
            return { ...STUDENT, ...action.payload };
          }
        }
        return STUDENT;
      });
      return {
        STUDENTs: updatedSTUDENTs
      };
    case DELETE_STUDENT:
      return {
        ...state,
        STUDENTs: state.STUDENTs.filter(
          STUDENT =>
            STUDENT._id !== action.payload && STUDENT.id !== action.payload
        )
      };
    case STUDENTS_LOADING:
      return {
        ...state,
        loading: true
      };
    case CLEAR_USER_STUDENTS:
      return {
        ...state,
        STUDENTs: [],
        loading: false
      };
    default:
      return state;
  }
}
