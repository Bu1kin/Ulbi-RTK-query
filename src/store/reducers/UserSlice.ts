import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionCreators";

interface UserState {
    users: IUser[]
    isLoading: boolean
    error: string | null
    count: number
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: null,
    count: 0
}

export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {
        userFetching(state) {
            state.isLoading = true
        },

        userFetchingSuccess(state, action: PayloadAction<IUser[]>) {
            state.isLoading = false
            state.error = null
            state.users = action.payload
        },

        userFetchingError(state, action) {
            state.isLoading = false
            state.error = action.payload
        },
    },
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false
            state.error = null
            state.users = action.payload
        },

        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true
        },

        [fetchUsers.rejected.type]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export default userSlice.reducer