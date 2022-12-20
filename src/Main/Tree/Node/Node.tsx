import { INode } from "../../../types/Node.interface";

interface NodeProps {
	isActive: boolean;
	openSettings: () => void;
	rootNode: INode;
	isChild: boolean;
}

export default function Node({ isActive, openSettings, rootNode, isChild }: NodeProps): JSX.Element {
	return (
		<li className="tree__item">
			<div className={`tree__text ${isActive ? "active" : ""}`} onClick={openSettings}>
				{rootNode.name}
			</div>
			{/* {isChild && renderUl(rootNode.childs.map((child) => renderNode(child)))} */}
		</li>
	);
}
