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
			<div className="open-main-block">
				<div className="open-padding-block">
					<div className="open_text-block">Откройте файл проекта для загрузки с сервера</div>
					<input type="text" className="open-input" placeholder="Введите" />
				</div>
				<ul className="open-ul">
					<li className="open-li">Файл</li>
					<li className="open-li">Файл</li>
					<li className="open-li">Файл</li>
				</ul>
				<button className="open-button_ok">ОК</button>
				<button className="open-button_cancel">Отмена</button>
			</div>
		</div>
	);
}
