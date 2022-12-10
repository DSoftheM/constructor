import { rootNode } from "../../db/Tree";
import { settingApi, useLazyGetSettingsQuery } from "../../redux/api/settings.api";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { treeSlice } from "../../redux/slices/treeSlice";
import { INode } from "../../types/Node.interface";
import "./Tree.scss";

interface TreeProps {}

const renderUl = (props: JSX.Element[]) => <ul>{props}</ul>;

export default function Tree({}: TreeProps): JSX.Element {
	const dispatch = useAppDispatch();
	const activeTreeItemId: string = useAppSelector((state) => state.treeReducer.activeTreeItemId);

	const renderNode = (rootNode: INode) => {
		const isChild = rootNode.childs.length > 0;
		return (
			<li className="tree__item">
				<div
					className={`tree__text ${activeTreeItemId === rootNode.nodeID ? "active" : ""}`}
					onClick={() => openSettings(rootNode.nodeID)}
				>
					{rootNode.name}
				</div>
				{isChild && renderUl(rootNode.childs.map((child) => renderNode(child)))}
			</li>
		);
	};

	const openSettings = (nodeID: string) => {
		dispatch(treeSlice.actions.setActiveTreeItemId(nodeID));
	};

	// return <ul className="tree">{renderNode(rootNode)}</ul>;
}
