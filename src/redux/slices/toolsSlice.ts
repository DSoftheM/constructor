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
        setActiveTool(state: IToolsState, action: PayloadAction<number>) {
            state.activePage = action.payload;
        }
    }
});

export const toolsReducer = toolsSlice.reducer;
export const { setActiveTool } = toolsSlice.actions;