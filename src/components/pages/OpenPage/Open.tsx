import "./style.css";

interface OpenProps {}

export default function Open({}: OpenProps): JSX.Element {
	return (
		<div className="wrapper">
			<div className="bar">
				<div className="bar__logo">App logo</div>
				<div className="dropdown">
					<div className="dropdown__img">Welcome to AppName</div>
				</div>
				<div className="bar__icons">
					<div className="bar__icon">-</div>
					<div className="bar__icon">=</div>
					<div className="bar__icon">x</div>
				</div>
			</div>
			<div className="main-block">
				<div className="padding-block">
					<div className="open_text-block">Откройте файл проекта для загрузки с сервера</div>
					<input type="text" className="open-input" placeholder="Введите" />
				</div>
				<ul>
					<li>Файл</li>
					<li>Файл</li>
					<li>Файл</li>
				</ul>
				<button className="button_ok">ОК</button>
				<button className="button_cancel">Отмена</button>
			</div>
		</div>
	);
}
