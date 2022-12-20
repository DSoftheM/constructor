import { useAppSelector } from "../../redux/hooks/hooks";
import { ElementNodeDTO, NodeDTO } from "../../redux/slices/styles";
import AddInput from "./AddInput/AddInput";
import Columns from "./Columns/Columns";
import Patterns from "./Patterns/Patterns";
import SettingsItem from "./SettingsItem/SettingsItem";
import Styles from "./Styles/Styles";

interface SettingsProps {}

export default function Settings({}: SettingsProps): JSX.Element {
	let data = useAppSelector((state) => state.styleReducer.data) as any;
	if (data) data = data[0];
	console.log(data);

	return (
		<>
			<SettingsItem title="Атрибуты">
				{/* <Columns attrs={data?.attributes || { test: "string" }} /> */}
				<Columns attrs={{ test: "string" }} />
			</SettingsItem>
			<SettingsItem title="Стили">
				<Styles count={3} title={""} attrs={data?.attributes} />
			</SettingsItem>
			<SettingsItem title="Классы">
				<AddInput classes={data?.classList} title={""} />
			</SettingsItem>
			<SettingsItem title="ID's">
				<AddInput classes={data?.idList} title={""} />
			</SettingsItem>
			<SettingsItem title="Шаблоны">
				<Patterns count={1} title={""} />
			</SettingsItem>
			{/* <Styles title='Стили' />
            <AddInput columns count={3} title='Классы' />
            <AddInput columns count={1} title="ID's" />
            <Patterns columns count={1} title='Шаблоны' /> */}
		</>
	);
}
