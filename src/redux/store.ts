import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { stylesApi } from "./api/styles.api";
import { styleSlice } from "./slices/styles";
import { toolsSlice } from "./slices/toolsSlice";
import { treeSlice } from "./slices/treeSlice";

const rootReducer = combineReducers({
	toolsReducer: toolsSlice.reducer,
	treeReducer: treeSlice.reducer,
	styleReducer: styleSlice.reducer,
	[stylesApi.reducerPath]: stylesApi.reducer,
});

const middlewares = [stylesApi.middleware];

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middlewares),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
