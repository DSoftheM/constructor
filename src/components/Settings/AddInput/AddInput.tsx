import { ISettingsItem } from "../../../types/SettingsItem.interface";
import './AddInput.scss';

interface AddInputProps extends ISettingsItem {
    count: number
}


export default function AddInput({ count }: AddInputProps): JSX.Element {
    return (
            <ul className="add-input__list">
                {Array(count).fill(null).map(item =>
                    <li className="add-input__li">
                        <img src="img/icon-left.svg" alt="" />
                        <input type="text" placeholder="new class" />
                        <img src="img/Minus.svg" alt="" />
                    </li>
                )}
            </ul>
    );
}
