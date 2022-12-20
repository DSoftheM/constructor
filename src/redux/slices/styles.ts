import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IStyleState {
	data: NodeDTO | null;
}

const initialState: IStyleState = {
	data: null,
};

export const styleSlice = createSlice({
	initialState,
	name: "styleSlice",
	reducers: {
		addData(state: IStyleState, action: PayloadAction<NodeDTO>) {
			state.data = action.payload;
		},
	},
});

export function dataSelect(state: RootState) {
	return state.treeReducer.activeTreeItemId;
}

export type ElementNodeDTO = {
	tag: string;
	classList: string[];
	idList: string[];
	attributes: {
		[name: string]: string;
	};
};

type TextNodeDTO = {
	content: string;
};

export type NodeDTO = (TextNodeDTO | ElementNodeDTO) & { nodeID: string };

const node1: NodeDTO = {
	nodeID: "testUID1",
	tag: "div",
	classList: ["test1", "test2"],
	idList: ["testID1", "testID2"],
	attributes: {},
};

const node2: NodeDTO = {
	nodeID: "testUID2",
	tag: "a",
	classList: ["link1"],
	idList: [],
	attributes: {
		href: "google.com",
	},
};

const node3: NodeDTO = {
	nodeID: "testUID3",
	tag: "button",
	classList: ["colored-btn"],
	idList: ["send-button"],
	attributes: {},
};

const node5: NodeDTO = {
	nodeID: "testUID4",
	content: "Что-то на татарском",
};
