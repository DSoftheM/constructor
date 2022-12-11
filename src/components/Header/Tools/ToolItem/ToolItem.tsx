interface ToolItemProps {
	children: React.ReactNode;
	isActive: boolean;
	handleClickOnSubmenu: (id: number) => void;
	id: number;
}

export default function ToolItem({ children, isActive, handleClickOnSubmenu, id }: ToolItemProps): JSX.Element {
	return (
		<>
			<li
				className={`tools__item dropdown ${isActive ? "active" : ""}`}
				onClick={() => handleClickOnSubmenu(id)}
			>
				{children}
			</li>
		</>
	);
}
