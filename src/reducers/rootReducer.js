import { combineReducers } from "redux";
import  studentSlice  from "./studentsReducer";
import  studentMarksSlice  from "./marks";

const rootReducer = combineReducers({
  studentData: studentSlice,
  marksData: studentMarksSlice,
});

export default rootReducer;