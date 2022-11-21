import { ISettingsItem } from "../../../types/SettingsItem.interface";
import './AddInput.scss';

interface AddInputProps extends ISettingsItem { }

export default function AddInput({ title, count }: AddInputProps): JSX.Element {
    return (
        <section className={`settings-item add-input`}>
            <header className="add-input__header">
                <h3>{title}</h3>
            </header>
            <ul className="add-input__list">
                {Array(count).fill(null).map(item =>
                    <li className="add-input__li">
                        <input type="text" placeholder="ввод" />
                    </li>
                )}
            </ul>
        </section>
    );
}
