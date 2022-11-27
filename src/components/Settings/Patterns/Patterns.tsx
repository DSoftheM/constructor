import { ISettingsItem } from "../../../types/SettingsItem.interface";
import './Patterns.scss';

interface PatternsProps extends ISettingsItem {
  count: number
}


export default function Patterns({ count }: PatternsProps): JSX.Element {
    return (
        <>
                <button>Добавить шаблон</button>
        </>
    );
}
