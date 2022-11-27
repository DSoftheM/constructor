import Layout from "./Layout/Layout";
import Text from "./Text/Text";
import Decoration from "./Decoration/Decoration";

interface StylesProps {
  title: string
  count: number
}

export default function Styles({ title, count }: StylesProps): JSX.Element {
    return (
        <>
            <Layout  count={1} title='Макет' />
            <Text  count={1} title='Текст'  />
            <Decoration  count={1} title='Оформление' />
        </>
    );
}
