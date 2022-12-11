import "./style.css";

interface NewProps {}

export default function New({}: NewProps): JSX.Element {
	return (
		<>
			<div>
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
					<ul className="new-ul-projects">
						<h3 className="new-projects">Ваши проекты:</h3>
						<li className="new-name-project">
							<div className="new-div-point">P1</div>
							<div className="new-div-project">Project1</div>
						</li>
						<li className="new-name-project">
							<div className="new-div-point">P2</div>
							<div className="new-div-project">Project2</div>
						</li>
						<li className="new-name-project">
							<div className="new-div-point">P3</div>
							<div className="new-div-project">Project3</div>
						</li>
					</ul>
				</div>
				<div className="new-new-button">
					<div className="new-button-block">
						<button className="new-button">Создать новый проект</button>
					</div>
				</div>
			</div>
		</>
	);
}
