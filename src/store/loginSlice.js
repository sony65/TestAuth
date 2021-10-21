import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        signIn(_, action) {
            return action.payload.login;
        },
    }
});

export const { signIn } = loginSlice.actions;
export const { reducer } = loginSlice;