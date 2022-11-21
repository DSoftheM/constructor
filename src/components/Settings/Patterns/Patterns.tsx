import { ISettingsItem } from "../../../types/SettingsItem.interface";
import './Patterns.scss';

interface PatternsProps extends ISettingsItem { }


export default function Patterns({ title }: PatternsProps): JSX.Element {
    return (
        <>
            <section className='settings-item'>
                <header className="settings-item__header">
                    <h3>{title}</h3>
                    <img src="img/arrow.svg" alt="Open" />
                </header>
                <button>Добавить шаблон</button>
            </section>
        </>
    );
}
