interface ToolItemProps {
    imgPath: string;
    id: number;
    isActive: boolean;
    handleClickOnSubmenu: (id: number) => void;
}

export default function OnceToolItem({ imgPath, isActive, handleClickOnSubmenu, id }: ToolItemProps): JSX.Element {
    return (
        <>
            <li className={`tools__item once ${isActive ? 'active' : ''}`} onClick={() => handleClickOnSubmenu(id)} >
                <img src={imgPath} alt="Tool" />
            </li>
        </>
    );
}
