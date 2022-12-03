import { NodeType } from "../db/Tree";

export interface INode {
    type: NodeType,
    nodeID: string,
    childs: INode[],
    name: string
}