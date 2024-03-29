import { UserLogin } from "@/types/schemma";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: UserLogin[] = []

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        addUserLogin: (state, action: PayloadAction<UserLogin>) => {
            state.push(action.payload)
        }
    }
})

export const { addUserLogin } = loginSlice.actions
export default loginSlice.reducer