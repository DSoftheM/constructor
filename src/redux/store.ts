import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { toolsReducer } from "./slices/toolsSlice";

const rootReducer = combineReducers({
    toolsReducer
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;