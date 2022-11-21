import { ISettingsItem } from "../../../types/SettingsItem.interface";
import './SettingsItem.scss';

interface SettingsItemProps extends ISettingsItem { }

export default function SettingsItem({ columns, count, title }: SettingsItemProps): JSX.Element {
    return (
        <section className={`settings-item ${columns ? 'columns' : ''}`}>
            <header className="settings-item__header">
                <h3>{title}</h3>
                <img src="img/arrow.svg" alt="Open" />
            </header>
            <ul className="settings-item__list">
                {Array(count).fill(null).map(item =>
                    <li className="settings-item__li">
                        <input type="text" placeholder="ввод" />
                        <span>:</span>
                        <input type="text" placeholder="ввод" />
                    </li>
                )}
            </ul>
        </section>
    );
}
