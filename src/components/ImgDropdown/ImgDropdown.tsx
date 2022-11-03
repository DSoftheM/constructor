import { useState } from "react";
import { ITool } from "../../data/tools/tools";
import { textToolData } from "../../data/tools/toolsData/textTool";
import { Icons } from "../../enums/Icons";
import { IToolData } from "../../types/ToolData.interface";
import ImgDropdownItem from "./ImgDropdownItem/ImgDropdownItem";

interface ImgDropdownProps {
    titleImg: string;
    toolData?: IToolData[];
}

export default function ImgDropdown({ titleImg, toolData }: ImgDropdownProps) {
    const [activeTool, setActiveTool] = useState<number>(1);

    const handleClick = (id: number) => {
        setActiveTool(id);
    };

    return (
        <>
            <div className="dropdown">
                <div className="dropdown__hover">
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
