// src/redux/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { auth, signOut } from '../../firebase';

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.loading = false;
            state.error = null;
        },
        clearUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.loading = false;
            state.error = null;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { setUser, clearUser, setLoading, setError } = authSlice.actions;

// Thunk for logout
export const logoutUser = () => async (dispatch) => {
    try {
        await signOut(auth);
        dispatch(clearUser());
    } catch (error) {
        dispatch(setError(error.message));
        console.error('Logout error:', error);
    }
};

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;