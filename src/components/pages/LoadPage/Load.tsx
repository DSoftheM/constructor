import "./style.css";

interface LoadProps {}

export default function Load({}: LoadProps): JSX.Element {
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
			<div className="load-main-block">
				<div className="load-name_block">
					<div className="load-name-project-block">
						Имя проекта:
						<input className="load-input" type="text" placeholder="Введите" />
					</div>
					<div className="load-uploading-project">Загрузите файлы прошлого проекта:</div>
					<div className="load-Uploading-block">
						<form action="/upload.php">
							<img className="load-img-block" src="./img/down.svg" />
							<div className="load-Uploading-text" id="dropZone">
								Перетащите сюда файлы
							</div>
						</form>
					</div>
					<div className="load-server-block">
						<div className="load-server-text">Загрузить с сервера</div>
					</div>
					<div className="load-create-block">
						<div className="load-create-text">Создать</div>
					</div>
				</div>
			</div>
		</div>
	);
}
