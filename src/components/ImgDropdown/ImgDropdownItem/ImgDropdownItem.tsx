interface ImgDropdownItemProps {
    imgPath: string;
    handleClick: (id: number) => void;
    text: string;
    id: number;
    isActive: boolean;
}

export default function ImgDropdownItem({ imgPath, text, isActive, handleClick, id }: ImgDropdownItemProps) {

    return (
        <>
            <li className={isActive ? "active" : ""} onClick={() => handleClick(id)}>
                <a href="#">
                    <div className="dropdown__img">
                        <img src={imgPath} alt="Tool" />
                    </div>
                    <p className="dropdown__text">{text}</p>
                </a>
            </li>
        </>
    );
};
