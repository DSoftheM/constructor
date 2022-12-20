import { ISettingsItem } from "../../../types/SettingsItem.interface";
import "./AddInput.scss";

interface AddInputProps extends ISettingsItem {
	classes: string[];
}

export default function AddInput({ classes }: AddInputProps): JSX.Element {
	if (!classes) {
		classes = [];
	}
	return (
		<ul className="add-input__list">
			{classes.map((item) => (
				<li className="add-input__li">
					<img src="img/icon-left.svg" alt="" />
					<input type="text" placeholder="new class" value={item} />
					<img src="img/Minus.svg" alt="" />
				</li>
			))}
		</ul>
	);
}
