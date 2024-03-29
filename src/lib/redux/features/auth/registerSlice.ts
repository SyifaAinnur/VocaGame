import { UserRegister } from "@/types/schemma"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserRegister[] = []

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        addUserRegis: (state, action: PayloadAction<UserRegister>) => {
            state.push(action.payload)
        }
    }
})

export const { addUserRegis } = registerSlice.actions
export default registerSlice.reducer
