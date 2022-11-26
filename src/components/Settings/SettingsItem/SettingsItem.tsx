import { ReactNode, useState } from "react";
import { ISettingsItem } from "../../../types/SettingsItem.interface";
import './SettingsItem.scss';

interface SettingsItemProps extends ISettingsItem {
    children: ReactNode
}

export default function SettingsItem({ title, children }: SettingsItemProps): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <section className={`settings-item`}>
            <header className="settings-item__header">
                <h3>{title}</h3>
                <img className={isOpen ? "rotated" : ""} src="img/Upward.svg" alt="Open" onClick={handleClick} />
            </header>
            {isOpen && children}
        </section>
    );
}
