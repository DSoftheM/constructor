import { INode } from "../types/Node.interface";

export enum NodeType {
    Test
}

const node1: INode = {
    childs: [],
    nodeID: '1',
    type: NodeType.Test,
    name: 'node 1'
};

const node2: INode = {
    childs: [],
    nodeID: '2',
    type: NodeType.Test,
    name: 'node 2'
};

const node3: INode = {
    childs: [],
    nodeID: '3',
    type: NodeType.Test,
    name: 'node 3'
};

export const rootNode: INode = {
    childs: [node1, node2, node3],
    nodeID: '0',
    type: NodeType.Test,
    name: 'root node'
};
