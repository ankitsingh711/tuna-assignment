import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false
};

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
        },

        logout: (state) => {
            state.isAuthenticated = false;
        }
    }
});

export const { login, logout } = authenticationSlice.actions;
export const selectIsAuthenticated = (state) => state.authentication.isAuthenticated;
export default authenticationSlice.reducer;