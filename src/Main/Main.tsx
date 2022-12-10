import Dropdown from "../components/Dropdown/Dropdown";
import Settings from "../components/Settings/Settings";
import { useAppSelector } from "../redux/hooks/hooks";
import Canvas from "./Canvas/Canvas";
import "./Main.scss";
import Tree from "./Tree/Tree";

export default function Main(): JSX.Element {
	const isOpen: boolean = useAppSelector((state) => state.treeReducer.activeTreeItemId !== "");
	return (
		<>
			<main className="main">
				<aside className="main__left aside-main">
					<header className="aside-main__header">
						<div className="aside-main__name">Слои</div>
						<Dropdown title="Страница" pagesCount={3} dropdownArrow />
					</header>
					<div className="aside-main__tree">
						<Tree />
					</div>
				</aside>
				<Canvas />
				<aside className={`main__right ${isOpen ? "enabled" : "disabled"}`}>
					<header className="aside-main__header">
						<div className="aside-main__name">Редактирование</div>
						<Dropdown title="Шаблон" pagesCount={3} />
					</header>
					<Settings />
				</aside>
			</main>
		</>
	);
}
