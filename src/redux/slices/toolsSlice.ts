import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IToolsState {
    activePage: number;
}

const initialState: IToolsState = {
    activePage: 1
};

const toolsSlice = createSlice({
    initialState,
    name: 'toolsSlice',
    reducers: {
        setActivePage(state: IToolsState, action: PayloadAction<number>) {
            return;
        }
    }
});

export const toolsReducer = toolsSlice.reducer;