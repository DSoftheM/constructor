import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IToolsState {
    activeTool: number;
}

const initialState: IToolsState = {
    activeTool: 1
};

export const toolsSlice = createSlice({
    initialState,
    name: 'toolsSlice',
    reducers: {
        setActiveTool(state: IToolsState, action: PayloadAction<number>) {
            state.activeTool = action.payload;
        }
    }
});