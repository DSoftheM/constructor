import AddInput from "./AddInput/AddInput";
import Patterns from "./Patterns/Patterns";
import SettingsItem from "./SettingsItem/SettingsItem";

interface SettingsProps {

}

export default function Settings({ }: SettingsProps): JSX.Element {
    return (
        <>
            <SettingsItem columns count={4} title='Атрибуты' />
            <SettingsItem count={0} title='Стили' columns />
            <AddInput columns count={3} title='Классы' />
            <AddInput columns count={1} title="ID's" />
            <Patterns columns count={1} title='Шаблоны' />
        </>
    );
}
