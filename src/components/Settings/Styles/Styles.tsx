import Layout from "./Layout/Layout";
import Text from "./Text/Text";
import Decoration from "./Decoration/Decoration";

interface StylesProps {
	title: string;
	count: number;
	attrs: {
		[key: string]: string;
	};
}

export default function Styles({ title, count, attrs }: StylesProps): JSX.Element {
	return (
		<>
			<Layout count={1} title="Макет" />
			<Text count={1} title="Текст" attrs={attrs} />
			<Decoration title="Оформление" attrs={attrs} />
		</>
	);
}
