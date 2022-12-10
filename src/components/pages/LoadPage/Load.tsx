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
			<div className="main-block">
				<div className="name_block">
					<div className="name-project-block">
						Имя проекта:
						<input className="input" type="text" placeholder="Введите" />
					</div>
					<div className="uploading-project">Загрузите файлы прошлого проекта:</div>
					<div className="Uploading-block">
						<form action="/upload.php">
							<img className="img-block" src="./img/down.svg" />
							<div className="Uploading-text" id="dropZone">
								Перетащите сюда файлы
							</div>
						</form>
					</div>
					<div className="server-block">
						<div className="server-text">Загрузить с сервера</div>
					</div>
					<div className="create-block">
						<div className="create-text">Создать</div>
					</div>
				</div>
			</div>
		</div>
	);
}
