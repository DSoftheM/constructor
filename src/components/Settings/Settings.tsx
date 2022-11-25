import AddInput from "./AddInput/AddInput";
import Patterns from "./Patterns/Patterns";
import SettingsItem from "./SettingsItem/SettingsItem";
import Styles from "./Styles/Styles";

interface SettingsProps {

}

export default function Settings({ }: SettingsProps): JSX.Element {
    return (
        <>
            <SettingsItem columns count={4} title='Атрибуты' />
            <Styles title='Стили' />
            <AddInput columns count={3} title='Классы' />
            <AddInput columns count={1} title="ID's" />
            <Patterns columns count={1} title='Шаблоны' />
        </>
    );
}
