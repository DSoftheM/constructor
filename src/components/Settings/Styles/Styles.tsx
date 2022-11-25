import StylesItem from "./StylesItem/StylesItem";

interface SettingsStylesProps {

}

export default function Settings({ }: SettingsStylesProps): JSX.Element {
    return (
        <>
            <StylesItem columns count={4} title='Макет' />
            <StylesItem columns count={1} title='Текст'  />
            <StylesItem columns count={3} title='Оформление' />
        </>
    );
}
