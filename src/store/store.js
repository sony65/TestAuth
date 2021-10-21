import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { reducer } from './loginSlice';

const rootReducer = combineReducers({
    login: reducer, 
});

export const store = configureStore({reducer: rootReducer});