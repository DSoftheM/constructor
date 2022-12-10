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
					<ul className="ul-projects">
						<h3 className="projects">Ваши проекты:</h3>
						<li className="name-project">
							<div className="div-point">P1</div>
							<div className="div-project">Project1</div>
						</li>
						<li className="name-project">
							<div className="div-point">P2</div>
							<div className="div-project">Project2</div>
						</li>
						<li className="name-project">
							<div className="div-point">P3</div>
							<div className="div-project">Project3</div>
						</li>
					</ul>
				</div>
				<div className="new-button">
					<div className="button-block">
						<button className="button">Создать новый проект</button>
					</div>
				</div>
			</div>
		</>
	);
}
