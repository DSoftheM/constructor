import { ISettingsItem } from "../../../../types/SettingsItem.interface";
import "./Decoration.scss";

interface DecorationProps extends ISettingsItem {
	title: string;
	attrs: {
		[key: string]: string;
	};
}

export default function Decoration({ attrs, title }: DecorationProps): JSX.Element {
	if (!attrs) {
		attrs = {};
	}
	return (
		<>
			<div className="line-block"></div>
			<section className={`padding-none`}>
				<header className="add-input__header">
					<h3>{title}</h3>
				</header>
				<div className="seldiv-decoration">
					<ul className="ul-input">
						<input className="input-text-decoration" type="text" placeholder="Ввод" value={attrs["background"]} />
						<input className="input-text-decoration" type="text" placeholder="Ввод" value={attrs["backgroundColor"]} />
						<input className="input-text-decoration" type="text" placeholder="Ввод" value={attrs["color"]} />
						<input className="input-text-decoration" type="text" placeholder="Ввод" value={attrs["border"]} />
						<input className="input-text-decoration" type="text" placeholder="Ввод" value={attrs["outline"]} />
						<input className="input-text-decoration" type="text" placeholder="Ввод" value={attrs["borderRadius"]} />
						<input className="input-text-decoration" type="text" placeholder="Ввод" value={attrs["opacity"]} />
					</ul>
					<ul>
						<li className="name-input">background: </li>
						<li className="name-input">background&nbsp;-&nbsp;color: </li>
						<li className="name-input">color: </li>
						<li className="name-input">border: </li>
						<li className="name-input">outline: </li>
						<li className="name-input">border&nbsp;-&nbsp;radius: </li>
						<li className="name-input">opacity: </li>
					</ul>
				</div>
			</section>
		</>
	);
}
