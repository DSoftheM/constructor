interface ColumnsProps {
	attrs: {
		[key: string]: string;
	};
}

export default function Columns({ attrs }: ColumnsProps): JSX.Element {
	return (
		<ul className="settings-item__list">
			{Object.keys(attrs).map((key, index) => (
				<li className="settings-item__li" key={index}>
					<input type="text" placeholder="ввод" value={key} />
					<span>:</span>
					<input type="text" placeholder="ввод" value={attrs[key]} />
				</li>
			))}
		</ul>
	);
}
