import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios, {AxiosError} from 'axios'
import AuthService from '../../services/auth-service'

import * as SecureStore from 'expo-secure-store'

import {IUser, IAuth} from '../../types/user'

export interface AuthState {
    isAuth: boolean
    isLoading: boolean
    user?: IAuth['user']
    token?: IAuth['token']
    error: string
}

const initialState: AuthState = {
    isAuth: false,
    isLoading: false,
    error: ''
}

export const signIn = createAsyncThunk<IAuth, {
    email: IUser['email'],
    password: string
}>(
    'user/login',
    async ({email, password}, thunkAPI) => {
        try {
            const response = await AuthService.login(email, password)
            const data = response.data
            await SecureStore.setItemAsync('auth', JSON.stringify(data))
            return data
        } catch (err: any | AxiosError) {
            if (axios.isAxiosError(err)) {
                return thunkAPI.rejectWithValue(err.response?.data.message)
            }
            return thunkAPI.rejectWithValue('Unexpected error!')
        }
    }
)

export const refresh = createAsyncThunk<IAuth, string>(
    'user/refresh',
    async (token, thunkAPI) => {
        try {
            const response = await AuthService.refresh(token)
            const data = response.data
            await SecureStore.setItemAsync('auth', JSON.stringify(data))
            return data
        } catch (err: any | AxiosError) {
            if (axios.isAxiosError(err)) {
                return thunkAPI.rejectWithValue(err.response?.data.message)
            }
            return thunkAPI.rejectWithValue('Unexpected error!')
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        //Sign in
        builder.addCase(signIn.fulfilled, (state, action) => {
            state.isAuth = true
            state.isLoading = false
            state.user = action.payload.user
            state.token = action.payload.token
            state.error = ''
        }),
        builder.addCase(signIn.pending, (state, action) => {
            state.isLoading = true
        }),
        builder.addCase(signIn.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload as string
        }),
        //Refresh
        builder.addCase(refresh.fulfilled, (state, action) => {
            state.isAuth = true
            state.isLoading = false
            state.user = action.payload.user
            state.token = action.payload.token
            state.error = ''
        }),
        builder.addCase(refresh.pending, (state, action) => {
            state.isLoading = true
        }),
        builder.addCase(refresh.rejected, (state, action) => {
            state.isLoading = false
            state.error = 'Ваша сессия истекла'
        })
    }

})

export default userSlice.reducer