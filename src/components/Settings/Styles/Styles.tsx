import StylesItem from "./StylesItem/StylesItem";

interface StylesProps {
    title: string
}

export default function Styles({ title }: StylesProps): JSX.Element {
    return (
        <>
            {/* <StylesItem columns count={1} title='Макет' />
            <StylesItem columns count={1} title='Текст'  />
            <StylesItem columns count={1} title='Оформление' /> */}
        </>
    );
}
