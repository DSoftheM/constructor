interface ToolItemProps {
    imgPath: string;
}

export default function OnceToolItem({ imgPath }: ToolItemProps): JSX.Element {
    return (
        <>
            <li className="tools__item once">
                <img src={imgPath} alt="Tool" />
            </li>
        </>
    );
}
