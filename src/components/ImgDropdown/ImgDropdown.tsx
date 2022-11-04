import { useState } from "react";
import { IToolData } from "../../types/ToolData.interface";
import ImgDropdownItem from "./ImgDropdownItem/ImgDropdownItem";

interface ImgDropdownProps {
    titleImg: string;
    toolData?: IToolData[];
    dropdownArrow?: boolean;
}

export default function ImgDropdown({ titleImg, toolData, dropdownArrow = true }: ImgDropdownProps) {
    const [activeTool, setActiveTool] = useState<number>(1);

    const handleClick = (id: number) => {
        setActiveTool(id);
    };

    return (
        <>
            <div className="dropdown">
                <div className={dropdownArrow ? 'dropdown__hover' : ''}>
                    <img src={titleImg} alt="titleImg" />
                </div>
                <ul>
                    {
                        toolData && toolData.map(({ id, imgPath, text }) =>
                            <ImgDropdownItem
                                imgPath={imgPath}
                                isActive={activeTool === id}
                                text={text}
                                key={id}
                                id={id}
                                handleClick={handleClick}
                            />)
                    }
                </ul>
            </div>
        </>
    );
};
