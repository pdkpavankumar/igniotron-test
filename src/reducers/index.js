import { combineReducers } from 'redux';
import noodleReducer from "./noodleReducer";

export default combineReducers({ noodles: noodleReducer });