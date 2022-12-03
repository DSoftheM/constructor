import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { toolsSlice } from "./slices/toolsSlice";
import { treeSlice } from "./slices/treeSlice";

const rootReducer = combineReducers({
    toolsReducer: toolsSlice.reducer,
    treeReducer: treeSlice.reducer
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;