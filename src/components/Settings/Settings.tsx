import AddInput from "./AddInput/AddInput";
import Columns from "./Columns/Columns";
import Patterns from "./Patterns/Patterns";
import SettingsItem from "./SettingsItem/SettingsItem";
import Styles from "./Styles/Styles";

interface SettingsProps {

}

export default function Settings({ }: SettingsProps): JSX.Element {
    return (
        <>
            <SettingsItem title='Атрибуты'>
                <Columns count={4} />
            </SettingsItem>
            <SettingsItem title='Стили'>

            </SettingsItem>
            <SettingsItem title='Классы'>

            </SettingsItem>
            <SettingsItem title="ID's">

            </SettingsItem>
            <SettingsItem title="Шаблоны">

            </SettingsItem>
            {/* <Styles title='Стили' />
            <AddInput columns count={3} title='Классы' />
            <AddInput columns count={1} title="ID's" />
            <Patterns columns count={1} title='Шаблоны' /> */}
        </>
    );
}
