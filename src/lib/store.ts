import { configureStore } from "@reduxjs/toolkit"
import registeReducer from "./redux/features/auth/registerSlice"
import loginReducer from "./redux/features/auth/loginSlice"

export const makeStore = () => {
    return configureStore({
        reducer: {
            register: registeReducer,
            login: loginReducer
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootStater = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
