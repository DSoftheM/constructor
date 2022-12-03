import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITreeState {
    activeTreeItemId: string;
}

const initialState: ITreeState = {
    activeTreeItemId: ''
};

export const treeSlice = createSlice({
    initialState,
    name: 'treeSlice',
    reducers: {
        setActiveTreeItemId(state: ITreeState, action: PayloadAction<string>) {
            state.activeTreeItemId = action.payload;
        }
    }
});